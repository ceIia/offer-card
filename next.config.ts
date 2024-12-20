import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "d11o8pt3cttu38.cloudfront.net",
      },
    ],
  },
};

export default nextConfig;
