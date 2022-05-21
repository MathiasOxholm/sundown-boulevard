/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ["www.themealdb.com", "images.punkapi.com"],
  },
};

module.exports = nextConfig;
