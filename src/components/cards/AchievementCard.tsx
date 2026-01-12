// src/components/cards/AchievementCard.tsx

import Image from "next/image";
import { ArrowUpRight, Calendar, Building2 } from "lucide-react";
import { Achievement } from "@/types";
import { cn } from "@/lib/utils";

export default function AchievementCard({
  title,
  organization,
  image,
  link,
  date,
}: Achievement) {
  return (
    <div className="h-full transform-none opacity-100 will-change-auto">
      <div className="h-full w-full rounded-xl border-[1.5px] border-zinc-300 p-1 shadow-sm transition-all duration-300 hover:border-zinc-400 dark:border-[#333333] dark:hover:border-zinc-600">
        {/* Card Container */}
        <div className="group relative flex h-full flex-col overflow-hidden rounded-lg bg-white transition-all duration-300 hover:bg-zinc-50 dark:bg-[#1e1e1e] dark:hover:bg-[#242424]">
          {/* Image Section */}
          {/* ปรับ background ให้รูปภาพหน่อยเวลารูปโหลดไม่ติดหรือเป็น png พื้นใสจะได้ไม่จม */}
          <div className="relative h-48 w-full shrink-0 overflow-hidden border-b border-zinc-200 bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900">
            <Image
              src={image || "/images/project-placeholder.svg"}
              alt={`${title} from ${organization}`}
              fill
              // ✅ เปลี่ยนจาก object-cover เป็น object-contain
              // เพื่อให้เห็นใบ Certificate เต็มใบไม่โดนตัด (หรือใช้ object-cover ถ้าอยากให้เต็มกรอบจริงๆ)
              // เพิ่ม p-4 เพื่อให้รูปไม่ชิดขอบเกินไปเหมือนในรูปตัวอย่าง
              className="object-contain p-4 transition-transform duration-500 group-hover:scale-105"
            />

            {/* Link Overlay */}
            {link && (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 flex items-center justify-center gap-2 bg-black/60 text-sm font-medium text-white opacity-0 backdrop-blur-[2px] transition-opacity duration-300 group-hover:opacity-100"
                aria-label={`View credentials for ${title}`}
              >
                <span>Show Credentials</span>
                <ArrowUpRight className="h-4 w-4" />
              </a>
            )}
          </div>

          {/* Content Section */}
          <div className="flex flex-1 flex-col p-4">
            {" "}
            {/* ลด padding เหลือ p-4 ให้ดูกระชับ */}
            {/* Header Group */}
            {/* ✅ ใช้ flex-col gap-1 แทน space-y-4 เพื่อให้ชื่อกับองค์กรอยู่ใกล้กันมากขึ้น */}
            <div className="flex flex-col gap-1.5">
              <h3
                className="line-clamp-2 text-base font-bold text-zinc-900 transition-colors group-hover:text-teal-600 dark:text-zinc-100 dark:group-hover:text-teal-400"
                title={title}
              >
                {title}
              </h3>

              <div className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                <Building2 className="h-3.5 w-3.5 shrink-0" />
                <span className="truncate">{organization}</span>
              </div>
            </div>
            {/* Date Footer */}
            {/* ใช้ mt-auto ดันวันที่ลงล่างสุด + เพิ่มเส้นขีดคั่นจางๆ */}
            {date && (
              <div className="mt-auto pt-4">
                <div className="flex items-center gap-2 border-t border-zinc-200 pt-3 text-xs text-zinc-500 dark:border-zinc-800 dark:text-zinc-500">
                  <Calendar className="h-3.5 w-3.5" />
                  <span>Issued on {date}</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
