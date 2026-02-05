import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { name, email, phone, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { message: "Missing fields" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: "nimish.shrimankar@riseit.in",
      subject: "New Contact Form Submission",
      text: `
Name: ${name}
Email: ${email}
Phone: ${phone}
Message: ${message}
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("MAIL ERROR:", err);
    return NextResponse.json(
      { error: "Mail failed", details: err.message },
      { status: 500 }
    );
  }
}
