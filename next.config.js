/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/service/:slug",
        destination: "/service-details/:slug",
      },
    ];
  },
};

module.exports = nextConfig;
