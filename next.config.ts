import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/ru",
        destination: "/",
        permanent: true,
      },
      {
        source: "/ru/:path*",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
