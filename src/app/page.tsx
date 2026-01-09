"use client";

import HeroSection from "@/components/sections/HeroSection";

export default function Home() {
  return (
    // อาจจะใส่ <main> ครอบเพื่อให้ Semantic ถูกต้อง (แม้ Layout จะมี main แล้วก็ตาม)
    <div className="flex flex-col gap-10">
      <HeroSection />
      {/* ถ้าอนาคตอยากเอา Featured Projects มาโชว์หน้าแรกด้วย ก็ใส่ตรงนี้ได้ */}
    </div>
  );
}
