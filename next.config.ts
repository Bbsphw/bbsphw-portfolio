import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

// ถ้าไฟล์ request.ts อยู่ที่ src/i18n/request.ts ใส่ path แบบนี้ถูกต้องแล้วครับ
const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const nextConfig: NextConfig = {
  images: {
    // ✅ 1. อนุญาตให้โหลด SVG (ถูกต้อง)
    dangerouslyAllowSVG: true,

    // ✅ 2. Security Headers สำหรับ SVG (ถูกต้องและดีมากครับ เป็น Best Practice)
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",

    // ✅ 3. Remote Patterns
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co", // สำหรับรูป Placeholder
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com", // สำหรับรูปจาก Cloudinary
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com", // แนะนำเผื่อไว้ ถ้าใช้รูปจาก Unsplash
      },
    ],
  },
};

// ❌ ของเดิม (ผิด): next-intl จะไม่ทำงาน
// export default nextConfig;

// ✅ ของใหม่ (ที่ถูก): ต้องครอบด้วย withNextIntl
export default withNextIntl(nextConfig);
