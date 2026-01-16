import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

// ถ้าไฟล์ request.ts อยู่ที่ src/i18n/request.ts ใส่ path แบบนี้ถูกต้องแล้วครับ
const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const nextConfig: NextConfig = {
  // ✅ 1. เปิดใช้ React Compiler (Experimental)
  experimental: {
    reactCompiler: true,
  },

  images: {
    // ✅ [เพิ่ม] เปิดใช้งาน Image Formats ล่าสุด (Performance)
    // Next.js จะเลือกไฟล์ที่เล็กที่สุดให้ Browser อัตโนมัติ (AVIF > WebP > Original)
    formats: ["image/avif", "image/webp"],

    // ✅ อนุญาตให้โหลด SVG (ถูกต้อง)
    dangerouslyAllowSVG: true,

    // ✅ Security Headers สำหรับ SVG (ถูกต้องและดีมากครับ เป็น Best Practice)
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",

    // ✅ Remote Patterns
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

  // ✅ [เพิ่ม] Security Headers (Security)
  // ช่วยป้องกันการโจมตีพื้นฐาน เช่น Clickjacking หรือ MIME Sniffing
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "DENY", // ป้องกันเว็บเราไปโผล่ใน iframe เว็บอื่น (Clickjacking)
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
        ],
      },
    ];
  },
};

// ✅ ต้องครอบด้วย withNextIntl
export default withNextIntl(nextConfig);
