/** @type {import('next').NextConfig} */
const path = require("path");
const runtimeCaching = require("next-pwa/cache");

const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
  runtimeCaching,
});

const nextConfig = withPWA({
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  swcMinify: true,
  images: {
    unoptimized: true,
  },
});

module.exports = nextConfig;
