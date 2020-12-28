require("dotenv").config();

module.exports = {
  env: {
    PUBLISHABLE_KEY: process.env.STRIPE_PUBLISHABLE_KEY
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config;
  }
};
