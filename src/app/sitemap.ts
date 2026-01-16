// src/app/sitemap.ts

import { MetadataRoute } from "next";
import { projectsData } from "@/data/projects"; // ✅ ใช้ projectsData ที่แยกภาษาแล้ว
import { routing } from "@/i18n/routing"; // ✅ ดึง config ภาษา

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

  // หน้า Static ทั้งหมด
  const staticRoutes = ["", "/about", "/achievements", "/projects", "/contact"];

  const entries: MetadataRoute.Sitemap = [];

  // วนลูปสร้าง Sitemap สำหรับทุกภาษา (en, th)
  for (const locale of routing.locales) {
    // 1. Static Pages
    for (const route of staticRoutes) {
      entries.push({
        url: `${baseUrl}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: route === "" ? 1 : 0.8,
      });
    }

    // 2. Dynamic Project Pages
    // ดึงข้อมูลตามภาษานั้นๆ มาสร้าง URL
    const projects = projectsData[locale]; // cast type ถ้าจำเป็น: as keyof typeof projectsData

    for (const project of projects) {
      entries.push({
        url: `${baseUrl}/${locale}/projects/${project.slug}`,
        lastModified: new Date(), // หรือใช้วันที่อัปเดตจริง
        changeFrequency: "weekly",
        priority: 0.7,
      });
    }
  }

  return entries;
}
