// src/components/language-switch.tsx

"use client";

import { useLanguage } from "@/providers/language-provider";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Globe } from "lucide-react"; // ✅ อย่าลืม Import Globe

// --- SVG Flag Components (Inline เพื่อ Performance) ---

const USFlag = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 64 64"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="32" cy="32" r="32" fill="#d02f44" />
    <path
      fill="#fff"
      d="M0 5h64v5H0zM0 15h64v5H0zM0 25h64v5H0zM0 35h64v5H0zM0 45h64v5H0zM0 55h64v5H0z"
    />
    <path fill="#46467f" d="M0 0h32v30H0z" />
    {/* Stars simplified */}
    <path
      fill="#fff"
      d="M6 6l1 3h3l-2 2 1 3-3-2-2 2 1-3-2-2h3zM16 6l1 3h3l-2 2 1 3-3-2-2 2 1-3-2-2h3zM26 6l1 3h3l-2 2 1 3-3-2-2 2 1-3-2-2h3zM11 15l1 3h3l-2 2 1 3-3-2-2 2 1-3-2-2h3zM21 15l1 3h3l-2 2 1 3-3-2-2 2 1-3-2-2h3zM6 24l1 3h3l-2 2 1 3-3-2-2 2 1-3-2-2h3zM16 24l1 3h3l-2 2 1 3-3-2-2 2 1-3-2-2h3zM26 24l1 3h3l-2 2 1 3-3-2-2 2 1-3-2-2h3z"
    />
  </svg>
);

const ThaiFlag = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 64 64"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="32" cy="32" r="32" fill="#f4f5f8" />
    <g clipPath="url(#circleClip)">
      <path fill="#ed1c24" d="M-10 0h84v64h-84z" />
      <path fill="#f4f5f8" d="M-10 10.6h84v42.8h-84z" />
      <path fill="#241d4f" d="M-10 21.3h84v21.4h-84z" />
    </g>
    <defs>
      <clipPath id="circleClip">
        <circle cx="32" cy="32" r="32" />
      </clipPath>
    </defs>
  </svg>
);

export default function LanguageSwitch() {
  const { language, toggleLanguage } = useLanguage();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <div className="flex h-8 w-16 items-center rounded-full bg-zinc-200 p-1 dark:bg-zinc-800">
        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-white shadow-sm dark:bg-zinc-950">
          <Globe className="h-3.5 w-3.5 text-zinc-400" />
        </div>
      </div>
    );
  }

  const isThai = language === "th";

  return (
    <div
      onClick={toggleLanguage}
      className="relative flex h-8 w-16 cursor-pointer items-center rounded-full bg-zinc-200 p-1 transition-colors duration-300 dark:bg-zinc-800"
      role="switch"
      aria-checked={isThai}
      aria-label="Toggle Language"
    >
      <motion.div
        layout
        transition={{ type: "spring", stiffness: 700, damping: 30 }}
        className="flex h-6 w-6 items-center justify-center rounded-full bg-white shadow-sm dark:bg-zinc-950"
        style={{
          marginLeft: isThai ? "auto" : "0",
        }}
      >
        <motion.div
          key={language}
          initial={{ rotate: 180, opacity: 0, scale: 0.5 }}
          animate={{ rotate: 0, opacity: 1, scale: 1 }}
          exit={{ rotate: -180, opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.2 }}
          className="flex items-center justify-center"
        >
          {isThai ? (
            <ThaiFlag className="h-4 w-4" />
          ) : (
            <USFlag className="h-4 w-4" />
          )}
        </motion.div>
      </motion.div>
    </div>
  );
}
