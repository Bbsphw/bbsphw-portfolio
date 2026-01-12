"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LucideIcon, ChevronRight } from "lucide-react"; // ✅ ใช้ ChevronRight ให้เหมือนต้นแบบ
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
    <nav className="grid gap-2">
      {" "}
      {/* เพิ่ม gap ระหว่างปุ่ม */}
      {items.map(({ title, url, icon: Icon }) => {
        // Logic เช็ค Active
        const isActive =
          url === "/" ? pathname === "/" : pathname.startsWith(url);

        return (
          <Link
            key={url}
            href={url}
            prefetch={false} // ป้องกัน Router Cache ค้าง
            className={cn(
              "group relative flex w-full items-center justify-between rounded-xl px-4 py-3 transition-all duration-200", // ✅ เพิ่ม py-3 ให้ปุ่มสูงขึ้น และ justify-between เพื่อดันลูกศรไปขวาสุด
              isActive
                ? "bg-zinc-800 text-white" // Active: พื้นหลังเข้มเหมือนต้นแบบ
                : "text-zinc-400 hover:bg-zinc-800/50 hover:text-zinc-100", // Inactive: สีจางๆ
            )}
          >
            {/* Active Background Animation (Optional: ถ้าอยากได้ effect เลื่อนสวยๆ เก็บไว้ได้ หรือจะลบออกถ้าอยากได้แบบนิ่งๆ) */}
            {isActive && (
              <motion.span
                layoutId="sidebar-active"
                className="absolute inset-0 rounded-xl bg-zinc-800" // สีพื้นหลังตอน Active
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
              />
            )}

            {/* Left Side: Icon + Text */}
            <div className="relative z-10 flex items-center gap-3">
              {Icon && (
                <Icon
                  className={cn(
                    "h-5 w-5", // ขนาดไอคอน
                    isActive
                      ? "text-white"
                      : "text-zinc-500 group-hover:text-zinc-300",
                  )}
                />
              )}
              <span className="font-medium">{title}</span>
            </div>

            {/* Right Side: Arrow Icon */}
            <div className="relative z-10">
              {/* แสดงลูกศรเสมอ หรือแสดงเฉพาะตอน Hover/Active ก็ได้ (ในต้นแบบแสดงตลอดแต่จางๆ) */}
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
