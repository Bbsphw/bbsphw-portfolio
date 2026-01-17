// src/components/nav-main.tsx

"use client";

import { Link, usePathname } from "@/i18n/routing"; // ✅ ใช้ next-intl
import { LucideIcon, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { m } from "framer-motion"; // ✅ เปลี่ยน motion เป็น m
import { useTranslations } from "next-intl";

export interface NavItem {
  titleKey: string;
  url: string;
  icon?: LucideIcon;
}

export default function NavMain({ items }: { items: NavItem[] }) {
  const pathname = usePathname(); // ค่าที่ได้จะไม่มี locale (เช่น /about)
  const t = useTranslations("Nav");

  return (
    <nav className="grid gap-2">
      {items.map(({ titleKey, url, icon: Icon }) => {
        // 👇 จุดที่แก้ไข: Logic ใหม่ให้รองรับ Nested Routes
        // ถ้า url คือ "/" ให้เช็คตรงๆ
        // ถ้า url อื่นๆ ให้เช็คว่า pathname เริ่มต้นด้วย url นั้นหรือไม่ (เช่น /projects/...)
        const isActive =
          url === "/"
            ? pathname === "/"
            : pathname === url || pathname.startsWith(`${url}/`);

        return (
          <Link
            key={url}
            href={url}
            prefetch={false}
            // ✅ Accessibility: บอก Screen Reader ว่านี่คือหน้าปัจจุบัน
            aria-current={isActive ? "page" : undefined}
            className={cn(
              "group relative flex w-full items-center justify-between rounded-xl px-4 py-3 transition-all duration-200",
              isActive
                ? "bg-zinc-800 text-white"
                : "text-zinc-400 hover:bg-zinc-800/50 hover:text-zinc-100",
            )}
          >
            {isActive && (
              // ✅ ใช้ m.span
              <m.span
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
