// src/components/nav-main.tsx

"use client";

import { Link, usePathname } from "@/i18n/routing";
import { LucideIcon, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export interface NavItem {
  titleKey: string;
  url: string;
  icon?: LucideIcon;
}

export default function NavMain({ items }: { items: NavItem[] }) {
  // pathname นี้จะไม่มี /en หรือ /th ติดมา (เช่น เป็น "/about" ตลอด)
  const pathname = usePathname();
  const t = useTranslations("Nav");

  return (
    <nav className="grid gap-2">
      {items.map(({ titleKey, url, icon: Icon }) => {
        // ถ้า url เป็น "/" ต้องเช็คว่า pathname คือ "/" เท่านั้น
        // ถ้า url อื่นๆ ให้เช็คว่า pathname เริ่มต้นด้วย url นั้น (เผื่อมี sub-route) หรือจะเช็ค === ก็ได้ถ้าไม่มี sub-menu
        const isActive = pathname === url;

        return (
          <Link
            key={url}
            href={url}
            prefetch={false}
            className={cn(
              "group relative flex w-full items-center justify-between rounded-xl px-4 py-3 transition-all duration-200",
              isActive
                ? "bg-zinc-800 text-white"
                : "text-zinc-400 hover:bg-zinc-800/50 hover:text-zinc-100",
            )}
          >
            {isActive && (
              <motion.span
                layoutId="sidebar-active"
                className="absolute inset-0 rounded-xl bg-zinc-800"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
              />
            )}

            <div className="relative z-10 flex items-center gap-3">
              {Icon && (
                <Icon
                  className={cn(
                    "h-5 w-5",
                    isActive
                      ? "text-white"
                      : "text-zinc-500 group-hover:text-zinc-300",
                  )}
                />
              )}
              <span className="font-medium">{t(titleKey)}</span>
            </div>

            <div className="relative z-10">
              <ChevronRight
                className={cn(
                  "h-4 w-4 transition-transform group-hover:translate-x-1",
                  isActive
                    ? "text-zinc-400"
                    : "text-zinc-600 group-hover:text-zinc-400",
                )}
              />
            </div>
          </Link>
        );
      })}
    </nav>
  );
}
