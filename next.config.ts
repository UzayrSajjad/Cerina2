import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false,

  eslint: {
    // 🚨 This disables ESLint during production build
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
