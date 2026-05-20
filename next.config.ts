import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

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
const withNextIntl = createNextIntlPlugin("./i18n/request.ts");

export default withNextIntl(nextConfig);
