// src/components/nav-main.tsx

"use client";

import { usePathname } from "next/navigation";
import { Link } from "@/i18n/routing";
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
  const pathname = usePathname();
  const t = useTranslations("Nav");

  return (
    <nav className="grid gap-2">
      {items.map(({ titleKey, url, icon: Icon }) => {
        // ตรวจสอบ Active State:
        // pathname อาจจะเป็น "/en/about", url คือ "/about"
        // เราต้องเช็คว่า pathname ลงท้ายด้วย url หรือไม่ (หรือใช้วิธีอื่นที่เหมาะสมกับ structure)
        // วิธีง่ายๆ คือเช็คว่า pathname มี url อยู่ไหม (แต่อาจจะไม่เป๊ะ 100% ถ้า url ซ้ำซ้อน)
        // วิธีที่ดีกว่าคือใช้ useSelectedLayoutSegment หรือเทียบ path หลังตัด locale

        // ตัวอย่างการเช็คแบบง่าย (ปรับปรุงได้ตามต้องการ)
        const isActive =
          pathname.endsWith(url) || (url === "/" && pathname.length <= 3); // pathname อาจเป็น "/" หรือ "/en" หรือ "/th"

        return (
          <Link
            key={url}
            href={url} // ไม่ต้องใส่ /en หรือ /th เอง Link ของ next-intl จะจัดการให้
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
