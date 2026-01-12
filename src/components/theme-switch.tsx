// src/components/theme-switch.tsx

"use client";

import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeSwitch() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <div className="flex h-8 w-16 items-center rounded-full bg-zinc-200 p-1 dark:bg-zinc-800 justify-start dark:justify-end">
        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-white shadow-sm dark:bg-zinc-950">
          {/* Sun: ซ่อนเมื่อ Dark Mode */}
          <Sun className="h-3.5 w-3.5 fill-orange-500 text-orange-500 dark:hidden" />
          {/* Moon: แสดงเฉพาะ Dark Mode */}
          <Moon className="h-3.5 w-3.5 fill-zinc-300 text-zinc-300 hidden dark:block" />
        </div>
      </div>
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <div
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative flex h-8 w-16 cursor-pointer items-center rounded-full bg-zinc-200 p-1 transition-colors duration-300 dark:bg-zinc-800"
      role="switch"
      aria-checked={isDark}
      aria-label="Toggle Theme"
    >
      <motion.div
        layout
        transition={{ type: "spring", stiffness: 700, damping: 30 }}
        className="flex h-6 w-6 items-center justify-center rounded-full bg-white shadow-sm dark:bg-zinc-950"
        style={{
          marginLeft: isDark ? "auto" : "0",
        }}
      >
        <motion.div
          key={isDark ? "moon" : "sun"}
          initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
          animate={{ rotate: 0, opacity: 1, scale: 1 }}
          exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.2 }}
        >
          {isDark ? (
            <Moon className="h-3.5 w-3.5 fill-zinc-300 text-zinc-300" /> // ✅ ใส่ fill ให้ดูทึบสวยขึ้น
          ) : (
            <Sun className="h-3.5 w-3.5 fill-orange-500 text-orange-500" /> // ✅ ใส่ fill
          )}
        </motion.div>
      </motion.div>
    </div>
  );
}
