// src/components/language-switch.tsx

"use client";

import { usePathname, useRouter } from "@/i18n/routing";
import { useLocale } from "next-intl";
import { m, AnimatePresence } from "framer-motion";
import { useEffect, useState, useTransition } from "react";
import { Globe } from "lucide-react";
import { cn } from "@/lib/utils";

// ✅ ปรับปรุงธง US ให้สวยงามและถูกต้องมากขึ้น (Circle Clip)
const USFlag = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 64 64"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-label="English"
  >
    <circle cx="32" cy="32" r="32" fill="#fff" />
    <g clipPath="url(#usCircleClip)">
      <path fill="#bf0a30" d="M0 0h64v64H0z" />
      <path
        fill="#fff"
        d="M0 5.5h64v5.5H0zM0 16.5h64v5.5H0zM0 27.5h64v5.5H0zM0 38.5h64v5.5H0zM0 49.5h64v5.5H0zM0 60.5h64v3.5H0z"
      />
      <path fill="#002868" d="M0 0h32v35H0z" />
      {/* Simplified stars pattern for small size readability */}
      <g fill="#fff">
        <circle cx="5" cy="5" r="1.8" />
        <circle cx="16" cy="5" r="1.8" />
        <circle cx="27" cy="5" r="1.8" />
        <circle cx="10.5" cy="10" r="1.8" />
        <circle cx="21.5" cy="10" r="1.8" />
        <circle cx="5" cy="15" r="1.8" />
        <circle cx="16" cy="15" r="1.8" />
        <circle cx="27" cy="15" r="1.8" />
        <circle cx="10.5" cy="20" r="1.8" />
        <circle cx="21.5" cy="20" r="1.8" />
        <circle cx="5" cy="25" r="1.8" />
        <circle cx="16" cy="25" r="1.8" />
        <circle cx="27" cy="25" r="1.8" />
        <circle cx="10.5" cy="30" r="1.8" />
        <circle cx="21.5" cy="30" r="1.8" />
      </g>
    </g>
    <defs>
      <clipPath id="usCircleClip">
        <circle cx="32" cy="32" r="32" />
      </clipPath>
    </defs>
  </svg>
);

const ThaiFlag = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 64 64"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-label="Thai"
  >
    <circle cx="32" cy="32" r="32" fill="#f4f5f8" />
    <g clipPath="url(#thCircleClip)">
      <path fill="#ed1c24" d="M-10 0h84v64h-84z" />
      <path fill="#f4f5f8" d="M-10 10.6h84v42.8h-84z" />
      <path fill="#241d4f" d="M-10 21.3h84v21.4h-84z" />
    </g>
    <defs>
      <clipPath id="thCircleClip">
        <circle cx="32" cy="32" r="32" />
      </clipPath>
    </defs>
  </svg>
);

export function LanguageSwitch() {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();
  const [isPending, startTransition] = useTransition();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isThai = locale === "th";

  const toggleLanguage = () => {
    const nextLocale = isThai ? "en" : "th";
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
    });
  };

  if (!mounted) {
    return (
      // ✅ แก้ไข width เป็น w-16
      <div className="flex h-8 w-16 items-center rounded-full bg-zinc-200 p-1 opacity-50 dark:bg-zinc-800">
        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-white shadow-sm dark:bg-zinc-950">
          <Globe className="h-3.5 w-3.5 text-zinc-400" />
        </div>
      </div>
    );
  }

  return (
    <button
      onClick={toggleLanguage}
      disabled={isPending}
      className={cn(
        // ✅ แก้ไข width เป็น w-16 เพื่อให้เท่ากับ ThemeSwitch
        "relative flex h-8 w-16 cursor-pointer items-center rounded-full p-1 transition-colors duration-300",
        "bg-zinc-200 hover:bg-zinc-300 dark:bg-zinc-800 dark:hover:bg-zinc-700",
        "focus-visible:ring-2 focus-visible:ring-zinc-400 focus-visible:ring-offset-2 focus-visible:outline-none dark:focus-visible:ring-zinc-600",
        isPending && "cursor-wait opacity-70",
      )}
      type="button"
      role="switch"
      aria-checked={isThai}
      aria-label={isThai ? "Switch to English" : "เปลี่ยนเป็นภาษาไทย"}
    >
      <m.div
        className="flex h-6 w-6 items-center justify-center rounded-full bg-white shadow-md dark:bg-zinc-950"
        layout
        transition={{ type: "spring", stiffness: 700, damping: 30 }}
        style={{
          marginLeft: isThai ? "auto" : "0", // สลับตำแหน่งซ้าย-ขวา
        }}
      >
        <AnimatePresence mode="wait" initial={false}>
          <m.div
            key={locale}
            initial={{ y: -10, opacity: 0, scale: 0.5 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 10, opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.2 }}
            className="flex items-center justify-center"
          >
            {isThai ? (
              <ThaiFlag className="h-4 w-4" />
            ) : (
              <USFlag className="h-4 w-4" />
            )}
          </m.div>
        </AnimatePresence>
      </m.div>
    </button>
  );
}
