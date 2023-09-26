/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "images.asos-media.com",
      "content.asos-media.com",
      "cdn.pixabay.com",
      "ipdata.co",
      "firebasestorage.googleapis.com",
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
