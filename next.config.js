/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["images.asos-media.com", "content.asos-media.com"],
  },
};

module.exports = nextConfig;
