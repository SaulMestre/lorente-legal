import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  trailingSlash: true,
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
