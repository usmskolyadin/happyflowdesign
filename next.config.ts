import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', 
  
  images: {
    unoptimized: true // если не используете Image Optimization
  }
};

export default nextConfig;
