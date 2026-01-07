// src/components/theme-toggle.tsx
"use client";

import { useTheme } from "next-themes";
import { Button } from "./ui/button";
import Image from "next/image";

export default function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();

  const toggleTheme = () => {
    // ใช้ resolvedTheme เพื่อให้แน่ใจว่าสลับจาก theme ปัจจุบันจริงๆ (รวมถึงกรณี system)
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleTheme}
      className="hover:bg-accent relative overflow-hidden rounded-md"
      aria-label="Toggle theme"
    >
      {/* รูปพระอาทิตย์ (แสดงตอน Light, ซ่อนตอน Dark) */}
      <div className="absolute scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90 dark:opacity-0">
        <Image
          src="/icon/clouds-sun.png"
          alt="Sun"
          width={20}
          height={20}
          className="object-contain"
          priority
        />
      </div>

      {/* รูปพระจันทร์ (ซ่อนตอน Light, แสดงตอน Dark) */}
      <div className="absolute scale-0 rotate-90 opacity-0 transition-all dark:scale-100 dark:rotate-0 dark:opacity-100">
        <Image
          src="/icon/clouds-moon.png"
          alt="Moon"
          width={20}
          height={20}
          className="object-contain"
          priority
        />
      </div>

      {/* Invisible placeholder เพื่อรักษาขนาดปุ่ม (ถ้าจำเป็น) */}
      <span className="h-[20px] w-[20px] opacity-0" />
    </Button>
  );
}
