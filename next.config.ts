import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // basePath will be automatically injected by GitHub Actions workflow
  // For local development, basePath should remain undefined
};

export default nextConfig;
