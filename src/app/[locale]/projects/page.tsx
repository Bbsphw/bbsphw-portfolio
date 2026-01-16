// src/app/[locale]/projects/page.tsx

import ProjectsSection from "@/components/sections/ProjectsSection";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";

interface Props {
  params: Promise<{ locale: string }>;
}

// 1. Generate Metadata (SEO)
export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Nav" });

  return {
    title: `${t("projects")} | Sophonwit Thapseng`,
    description: "Showcase of my featured web development projects.",
  };
}

// 2. Generate Static Params (SSG) - สร้างหน้า Static ล่วงหน้า
export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

// 3. Page Component
export default async function ProjectsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <ProjectsSection />
    </div>
  );
}
