/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "cdn.thenewstack.io",
      "www.java.com",
      "upload.wikimedia.org",
      "www.w3.org",
      "cdn1.iconfinder.com",
      "cdn4.iconfinder.com",
      "www.mysql.com",
      "codetru.com"
    ],
  },
};

module.exports = nextConfig;
