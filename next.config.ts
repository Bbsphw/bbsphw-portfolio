//next.config.ts

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // ✅ 1. อนุญาตให้โหลด SVG
    dangerouslyAllowSVG: true,

    // ✅ 2. ตั้งค่าความปลอดภัยเพิ่มเติมสำหรับ SVG (Best Practice)
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",

    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
      },
    ],
  },
};

export default nextConfig;
