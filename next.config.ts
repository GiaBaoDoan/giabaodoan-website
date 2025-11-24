/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https", // or 'https'
        hostname: "*", // This wildcard allows all hostnames
      },
    ],
  },
};

module.exports = nextConfig;
