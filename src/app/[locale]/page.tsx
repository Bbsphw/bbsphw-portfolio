// src/app/[locale]/page.tsx

import HeroSection from "@/components/sections/HeroSection";
import { setRequestLocale } from "next-intl/server";

interface Props {
  params: Promise<{ locale: string }>;
}

export default async function HomePage({ params }: Props) {
  const { locale } = await params;

  // ✅ เปิดใช้งาน Static Rendering สำหรับหน้านี้
  setRequestLocale(locale);

  return (
    <div className="w-full">
      <HeroSection />
    </div>
  );
}
