import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Robots-Tag",
            value: "noindex",
          },
        ],
        has: [
          {
            type: "host",
            value: "auditloi25.vercel.app",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
