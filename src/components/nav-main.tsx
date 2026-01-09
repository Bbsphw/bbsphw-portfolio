// src/components/nav-main.tsx

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

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
          const isActive =
            pathname === url || (pathname.startsWith(url) && url !== "/");

          return (
            <li key={url} className="relative">
              <Link
                href={url}
                className={cn(
                  "group relative flex items-center gap-2 rounded-md px-3 py-2 transition-all duration-200",
                  isActive
                    ? "font-medium text-zinc-900 dark:text-white"
                    : "text-zinc-700 hover:bg-zinc-100/50 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800/50 dark:hover:text-zinc-200",
                )}
              >
                {/* 1. Background Animation (พื้นหลังเลื่อน) */}
                {isActive && (
                  <motion.span
                    layoutId="sidebar-active-item"
                    className="absolute inset-0 rounded-md bg-zinc-200 shadow-sm dark:bg-zinc-700"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}

                <div className="relative z-10 flex items-center gap-2">
                  {/* ✅ 2. Icon Animation (ส่วนที่เพิ่ม) */}
                  {Icon && (
                    <motion.div
                      initial={false}
                      animate={{
                        // ถ้า Active ให้ขยาย 1.1 เท่า, ถ้าไม่ ให้ขนาดปกติ
                        scale: isActive ? 1.1 : 1,
                        // ถ้า Active ให้สีเข้ม, ถ้าไม่ ให้สีจาง (Framer Motion คุมสีได้สมูทกว่า CSS)
                        color: isActive
                          ? "var(--zinc-900)" // trick: ใช้ css variable หรือใส่ hex code
                          : "var(--zinc-500)",
                      }}
                      // Effect ตอนเอาเมาส์ชี้: ขยายเพิ่ม + หมุนนิดหน่อย
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 17,
                      }}
                      className="flex items-center justify-center"
                    >
                      <Icon
                        className={cn(
                          "h-4 w-4 transition-colors",
                          // เราใช้ Framer Motion คุมสีแล้ว แต่ใส่ class ไว้เป็น fallback
                          isActive
                            ? "text-zinc-900 dark:text-white"
                            : "text-zinc-500 dark:text-zinc-500",
                        )}
                      />
                    </motion.div>
                  )}

                  <span className="text-sm">{title}</span>
                </div>

                {/* 3. Active Indicator Dot (จุดขวามือ) */}
                {isActive && (
                  <motion.span
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.1, duration: 0.2 }}
                    className="relative z-10 ml-auto h-1.5 w-1.5 rounded-full bg-zinc-900 dark:bg-white"
                  />
                )}
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
