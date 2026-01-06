// src/components/theme-toggle.tsx
"use client";

import { useTheme } from "next-themes";
import { Button } from "./ui/button";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button variant="outline" size="icon" className="rounded-md" disabled>
        <div className="bg-muted-foreground/20 h-5 w-5 animate-pulse rounded" />
      </Button>
    );
  }

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleTheme}
      className="hover:bg-accent rounded-md"
      aria-label="Toggle theme"
    >
      <Image
        src={
          theme === "dark" ? "/icon/clouds-moon.png" : "/icon/clouds-sun.png"
        }
        alt={theme === "dark" ? "Moon" : "Sun"}
        width={20}
        height={20}
        className="object-contain transition-all hover:scale-110"
        priority
      />
    </Button>
  );
}
