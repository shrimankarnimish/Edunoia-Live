// app/api/contact/route.js
import nodemailer from "nodemailer";

export const runtime = "nodejs";

export async function POST(req) {
  try {
    const { name, email, phone, message } = await req.json();

    // Basic validation
    if (!name || !email || !message) {
      return Response.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    // Environment variable check (important for Netlify)
    if (!process.env.GMAIL_USER || !process.env.GMAIL_PASS) {
      console.error("Missing Gmail environment variables");
      return Response.json(
        { message: "Email service not configured" },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS, // Gmail App Password
      },
    });

    // Verify SMTP connection
    await transporter.verify();

    await transporter.sendMail({
      from: `"Edunoia Enquiry" <${process.env.GMAIL_USER}>`,
      to: [
        "nimish.shrimankar@riseit.in",
        "info@test.com",
      ],
      subject: `Contact form enquiry from ${email}`,
      text: `
Name: ${name}
Email: ${email}
Phone: ${phone || "Not provided"}
Message:
${message}
      `,
      html: `
        <h3>New Contact Form Enquiry</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    });

    return Response.json(
      { message: "Message sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Email sending failed:", error);

    return Response.json(
      { message: "Message not sent. Please try again later." },
      { status: 500 }
    );
  }
}

// Handle CORS / preflight (good practice for Netlify)
export async function OPTIONS() {
  return new Response(null, {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}
