// src/components/nav-main.tsx

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils"; // ใช้ cn utility ช่วยจัดการ class

export interface NavItem {
  title: string;
  url: string;
  icon?: LucideIcon;
}

export default function NavMain({ items }: { items: NavItem[] }) {
  const pathname = usePathname();

  return (
    <section className="grid gap-4">
      <ul className="grid gap-1">
        {items.map(({ title, url, icon: Icon }) => {
          // Logic การเช็ค Active State ที่ฉลาดขึ้น
          const isActive =
            pathname === url || (pathname.startsWith(url) && url !== "/");

          return (
            <li key={url}>
              <Link
                href={url}
                className={cn(
                  "flex items-center gap-2 rounded-md px-3 py-2 transition-all duration-200",
                  isActive
                    ? "bg-zinc-200 font-medium text-zinc-900 shadow-sm dark:bg-zinc-700 dark:text-white"
                    : "text-zinc-700 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-200",
                )}
              >
                {Icon && (
                  <Icon
                    className={cn(
                      "h-4 w-4 transition-colors",
                      isActive
                        ? "text-zinc-900 dark:text-white"
                        : "text-zinc-500 group-hover:text-zinc-700 dark:text-zinc-500",
                    )}
                  />
                )}
                <span className="text-sm">{title}</span>

                {/* (Optional) Active Indicator จุดเล็กๆ ด้านขวา */}
                {isActive && (
                  <span className="animate-in fade-in zoom-in ml-auto h-1.5 w-1.5 rounded-full bg-zinc-900 dark:bg-white" />
                )}
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
