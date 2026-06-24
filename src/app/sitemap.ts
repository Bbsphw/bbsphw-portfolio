import { MetadataRoute } from "next";
import { routing } from "@/i18n/routing"; // ✅ ดึง config ภาษา
import { getAllProjectSlugs } from "@/lib/mdx";
import { siteConfig } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;

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
    const slugs = getAllProjectSlugs(locale);

    for (const slug of slugs) {
      entries.push({
        url: `${baseUrl}/${locale}/projects/${slug}`,
        lastModified: new Date(), // หรือใช้วันที่อัปเดตจริง
        changeFrequency: "weekly",
        priority: 0.7,
      });
    }
  }

  return entries;
}

