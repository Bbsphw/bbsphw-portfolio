// src/components/language-switch.tsx

"use client";

import { usePathname, useRouter } from "@/i18n/routing"; // ✅ Import จาก config routing ของเรา
import { useLocale } from "next-intl"; // ✅ ดึงภาษาปัจจุบัน
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useTransition } from "react";
import { Globe } from "lucide-react";
import { cn } from "@/lib/utils";

const USFlag = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 64 64"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-label="English"
  >
    <circle cx="32" cy="32" r="32" fill="#d02f44" />
    <path
      fill="#fff"
      d="M0 5h64v5H0zM0 15h64v5H0zM0 25h64v5H0zM0 35h64v5H0zM0 45h64v5H0zM0 55h64v5H0z"
    />
    <path fill="#46467f" d="M0 0h32v30H0z" />
    <path
      fill="#fff"
      d="M9 11l2 6h-6l2-6 2 6h-6zM23 11l2 6h-6l2-6 2 6h-6zM9 20l2 6h-6l2-6 2 6h-6zM23 20l2 6h-6l2-6 2 6h-6z"
    />
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

export function LanguageSwitch() {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();
  const [isPending, startTransition] = useTransition(); // ใช้ transition เพื่อ UX ที่ดีตอนเปลี่ยนภาษา
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
      <div className="flex h-8 w-14 items-center rounded-full bg-zinc-200 p-1 opacity-50 dark:bg-zinc-800">
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
        "relative flex h-8 w-14 cursor-pointer items-center rounded-full p-1 transition-colors duration-300",
        "bg-zinc-200 hover:bg-zinc-300 dark:bg-zinc-800 dark:hover:bg-zinc-700",
        "focus-visible:ring-2 focus-visible:ring-zinc-400 focus-visible:ring-offset-2 focus-visible:outline-none dark:focus-visible:ring-zinc-600",
        isPending && "cursor-wait opacity-70",
      )}
      type="button"
      role="switch"
      aria-checked={isThai}
      aria-label={isThai ? "Switch to English" : "เปลี่ยนเป็นภาษาไทย"}
    >
      <motion.div
        className="flex h-6 w-6 items-center justify-center rounded-full bg-white shadow-md dark:bg-zinc-950"
        layout
        transition={{ type: "spring", stiffness: 700, damping: 30 }}
        style={{
          marginLeft: isThai ? "auto" : "0",
        }}
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
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
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </button>
  );
}
