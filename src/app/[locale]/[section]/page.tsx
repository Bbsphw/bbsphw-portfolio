// src/app/[locale]/[section]/page.tsx

import { notFound } from "next/navigation";
import { Metadata } from "next";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";

// Import Components
import AboutSection from "@/components/sections/AboutSection";
import AchievementsSection from "@/components/sections/AchievementsSection";
import ContactSection from "@/components/sections/ContactSection";

const SECTIONS = {
  about: AboutSection,
  achievements: AchievementsSection,
  contact: ContactSection,
};

type SectionKey = keyof typeof SECTIONS;

// ✅ เพิ่ม Type Guard Function
function isValidSection(section: string): section is SectionKey {
  return Object.keys(SECTIONS).includes(section);
}

interface SectionPageProps {
  params: Promise<{
    locale: string;
    section: string;
  }>;
}

// 2. Generate Static Params (SSG)
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

  // ✅ ใช้ Type Guard แทนการเช็ค includes ธรรมดา
  if (!isValidSection(section)) {
    return {};
  }

  const t = await getTranslations({ locale, namespace: "Nav" });

  // ตอนนี้ TypeScript รู้แล้วว่า section คือ SectionKey แน่นอน ไม่ต้อง as string/any
  return {
    title: `${t(section)} | Sophonwit Thapseng`,
    description: `View my ${section} page.`,
  };
}

// 4. Main Component
export default async function SectionPage({ params }: SectionPageProps) {
  const { locale, section } = await params;

  setRequestLocale(locale);

  // ✅ ใช้ Type Guard
  if (!isValidSection(section)) {
    notFound();
  }

  // TypeScript รู้ทันทีว่า section เป็น key ที่ถูกต้อง Access ได้เลย
  const Component = SECTIONS[section];

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <Component />
    </div>
  );
}
