// src/app/robots.ts

// บอก Bot ของ Google ว่าอนุญาตให้เก็บข้อมูลได้ที่หน้าไหนบ้าง

import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  // ✅ ดึง Domain จาก .env (ถ้าไม่มีให้ใช้ localhost เป็นค่า Default)
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/private/", "/admin/"], // ❌ ตัวอย่าง: ห้าม Bot เข้าหน้า Admin
    },
    // ✅ Sitemap URL จะเปลี่ยนตาม Domain อัตโนมัติ
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
