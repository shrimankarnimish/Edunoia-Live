const redirects = require("./redirects");

module.exports = {
  async redirects() {
    return redirects.map(({ source, destination }) => ({
      source,
      destination,
      permanent: true,
    }));
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "edunoia.com",
        pathname: "**",
      },

    ],
  },
};
