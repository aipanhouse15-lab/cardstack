/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'assurefintech.com' }],
        destination: 'https://www.assurefintech.com/:path*',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
