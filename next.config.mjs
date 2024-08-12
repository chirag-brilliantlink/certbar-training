/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/defensive",
        destination: "/",
        permanent: true,
      },
      {
        source: "/offensive",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
