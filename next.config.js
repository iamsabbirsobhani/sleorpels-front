/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  ignoreBuildErrors: true,
  swcMinify: true,
  images: {
    domains: ["images.asos-media.com"],
  },
};

module.exports = nextConfig;
