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

// ✅ Type Guard Function
function isValidSection(section: string): section is SectionKey {
  return Object.keys(SECTIONS).includes(section);
}

interface SectionPageProps {
  params: Promise<{
    locale: string;
    section: string;
  }>;
}

export async function generateStaticParams() {
  const params: { locale: string; section: string }[] = [];
  for (const locale of routing.locales) {
    for (const section of Object.keys(SECTIONS)) {
      params.push({ locale, section });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: SectionPageProps): Promise<Metadata> {
  const { locale, section } = await params;

  if (!isValidSection(section)) {
    return {};
  }

  const t = await getTranslations({ locale, namespace: "Nav" });
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

  return {
    title: `${t(section)} | Sophonwit Thapseng`,
    description: `View my ${section} page.`,
    // ✅ SEO: บอก Google ว่าเนื้อหานี้มีหลายภาษา
    alternates: {
      canonical: `${baseUrl}/en/${section}`,
      languages: {
        en: `${baseUrl}/en/${section}`,
        th: `${baseUrl}/th/${section}`,
      },
    },
  };
}

export default async function SectionPage({ params }: SectionPageProps) {
  const { locale, section } = await params;

  setRequestLocale(locale);

  if (!isValidSection(section)) {
    notFound();
  }

  const Component = SECTIONS[section];

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <Component />
    </div>
  );
}
