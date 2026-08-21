import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
    unoptimized: true, // This allows serving images from public folder without optimization
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },

};

export default nextConfig;
