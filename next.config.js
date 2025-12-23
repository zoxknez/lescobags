/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lescobags.com',
        pathname: '/images/**',
      },
    ],
  },
};

module.exports = nextConfig;
