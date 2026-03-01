import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // If you are deploying to username.github.io/portfolio, uncomment the basePath below:
  // basePath: "/portfolio", 
};

export default nextConfig;
