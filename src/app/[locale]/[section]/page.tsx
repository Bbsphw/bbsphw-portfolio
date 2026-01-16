// src/app/[locale]/[section]/page.tsx

import { notFound } from "next/navigation";
import { Metadata } from "next";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";

// Import Components
import AboutSection from "@/components/sections/AboutSection";
import AchievementsSection from "@/components/sections/AchievementsSection";
import ContactSection from "@/components/sections/ContactSection";

// 1. กำหนด Section ที่อนุญาต (Whitelist)
// ⚠️ สำคัญ: ห้ามใส่ 'projects' ในนี้ เพราะเราแยกโฟลเดอร์ projects ไปแล้ว
const SECTIONS = {
  about: AboutSection,
  achievements: AchievementsSection,
  contact: ContactSection,
};

type SectionKey = keyof typeof SECTIONS;

interface SectionPageProps {
  params: Promise<{
    locale: string;
    section: string;
  }>;
}

// 2. Generate Static Params (SSG)
// สร้าง path: /en/about, /th/contact, ...
export async function generateStaticParams() {
  const params: { locale: string; section: string }[] = [];

  for (const locale of routing.locales) {
    for (const section of Object.keys(SECTIONS)) {
      params.push({ locale, section });
    }
  }

  return params;
}

// 3. Generate Metadata (Dynamic SEO)
export async function generateMetadata({
  params,
}: SectionPageProps): Promise<Metadata> {
  const { locale, section } = await params;

  // ตรวจสอบว่า section มีอยู่จริงไหม
  if (!Object.keys(SECTIONS).includes(section)) {
    return {};
  }

  // ดึงคำแปล Title จากไฟล์ JSON (Nav namespace)
  const t = await getTranslations({ locale, namespace: "Nav" });

  // แปลง slug เป็น key ใน json (เช่น achievements -> achievements)
  // ถ้า key ใน json ไม่ตรงกับ url slug ให้ทำ map ตรงนี้เพิ่ม
  const titleKey = section as any;

  return {
    title: `${t(titleKey)} | Sophonwit Thapseng`,
    description: `View my ${section} page.`, // ปรับคำบรรยายตามต้องการ
  };
}

// 4. Main Component
export default async function SectionPage({ params }: SectionPageProps) {
  const { locale, section } = await params;

  // Enable Static Rendering
  setRequestLocale(locale);

  // Validate Section
  if (!Object.keys(SECTIONS).includes(section)) {
    notFound();
  }

  // เลือก Component มาแสดงตาม section url
  const Component = SECTIONS[section as SectionKey];

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <Component />
    </div>
  );
}
