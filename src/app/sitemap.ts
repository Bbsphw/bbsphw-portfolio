// src/app/sitemap.ts
// เพื่อให้ Google รู้ว่าเว็บคุณมีหน้าไหนบ้าง (สำคัญมากสำหรับ Portfolio)

import { MetadataRoute } from "next";
import { projects } from "@/data/projects"; // ✅ ดึงข้อมูลโปรเจกต์จริง

export default function sitemap(): MetadataRoute.Sitemap {
  // ✅ ดึง Domain จาก .env
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

  // 1. หน้าหลัก (Static Routes)
  const routes = [
    "",
    "/projects",
    "/about", // (ถ้ามี)
    "/contact", // (ถ้ามี)
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 1,
  }));

  // 2. หน้าโปรเจกต์ทั้งหมด (Dynamic Routes from Data)
  const projectRoutes = projects.map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    lastModified: new Date(), // หรือใช้วันที่ update จริงของ project ถ้ามีเก็บไว้
    changeFrequency: "weekly" as const,
    priority: 0.8, // ให้ความสำคัญรองลงมาจากหน้าหลัก
  }));

  return [...routes, ...projectRoutes];
}
