// src/components/cards/EducationCard.tsx

import Image from "next/image";
import { MapPin, CalendarDays, Building2 } from "lucide-react";
import { Education } from "@/types";

interface EducationCardProps {
  education: Education;
}

export default function EducationCard({ education }: EducationCardProps) {
  return (
    <div className="transform-none opacity-100 will-change-auto">
      {/* 1. กรอบนอก */}
      <div className="w-full rounded-xl border-[1.5px] border-zinc-300 p-1 shadow-sm transition-all duration-300 hover:border-zinc-400 dark:border-[#333333] dark:hover:border-zinc-600">
        {/* 2. กรอบใน */}
        <div className="relative flex flex-col gap-4 overflow-hidden rounded-lg bg-gradient-to-b from-zinc-200 to-zinc-100 p-5 transition-all duration-300 hover:to-[#ffffff] sm:flex-row sm:items-start dark:from-[#242424] dark:to-zinc-900 dark:hover:to-zinc-950">
          {/* --- Logo Section --- */}
          <div className="relative flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-zinc-200 bg-white p-1 dark:border-zinc-800 dark:bg-zinc-900">
            {education.logo ? (
              <Image
                src={education.logo}
                alt={education.school}
                fill
                className="object-contain p-1"
              />
            ) : (
              <Building2 className="text-zinc-400" />
            )}
          </div>

          {/* --- Content Section --- */}
          <div className="flex-1 space-y-2">
            {/* Header: School & Degree */}
            <div>
              <h3 className="text-lg font-bold text-zinc-800 dark:text-zinc-200">
                {education.school}
              </h3>
              {/* ✅ แก้ไข: เปลี่ยน text-teal-600 เป็น text-zinc-600 */}
              <p className="font-medium text-zinc-600 dark:text-zinc-400">
                {education.degree}
              </p>
            </div>

            {/* Meta: Year | Location */}
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-zinc-500 dark:text-zinc-500">
              <div className="flex items-center gap-1">
                <CalendarDays className="h-3.5 w-3.5" />
                <span>{education.year}</span>
              </div>

              {education.location && (
                <>
                  <span className="text-zinc-300 dark:text-zinc-600">|</span>
                  <div className="flex items-center gap-1">
                    <MapPin className="h-3.5 w-3.5" />
                    <span>{education.location}</span>
                  </div>
                </>
              )}
            </div>

            {/* Description */}
            <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              {education.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
