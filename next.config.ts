import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // no 'output: export'!
  reactStrictMode: true,
  images: {
    domains: [], // optional, only if you use external image URLs
  },
};

export default nextConfig;
