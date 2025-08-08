import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
    images: {
      domains: ['utfs.io'],
      unoptimized: true,
    },

  /* config options here */
};

export default nextConfig;
