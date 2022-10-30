/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = {
  images: {
    domains: [
      "cdn3.iconfinder.com",
      "cdn4.iconfinder.com",
      "cdn1.iconfinder.com",
      "cdn0.iconfinder.com",
      "cdn.iconscout.com",
      "cdn2.iconfinder.com",
      "sudoaugustin.gallerycdn.vsassets.io",
    ],
  },
};
