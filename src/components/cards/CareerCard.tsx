// src/components/cards/CareerCard.tsx

"use client";

import { useState } from "react";
import Image from "next/image";
import {
  ChevronDown,
  MapPin,
  Building2,
  CalendarClock,
  Briefcase,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Career } from "@/types";

interface CareerCardProps {
  career: Career;
}

export default function CareerCard({ career }: CareerCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="transform-none opacity-100 will-change-auto">
      <div
        className={cn(
          "w-full rounded-xl border-[1.5px] border-zinc-300 p-1 shadow-sm transition-all duration-300 dark:border-[#333333]",
          isOpen &&
            "border-zinc-400 ring-1 ring-zinc-400 dark:border-zinc-600 dark:ring-zinc-600",
        )}
      >
        <div
          className={cn(
            "group relative flex flex-col overflow-hidden rounded-lg bg-gradient-to-b from-zinc-200 to-zinc-100 transition-all duration-300 hover:to-[#ffffff] dark:from-[#242424] dark:to-zinc-900 dark:hover:to-zinc-950",
            isOpen && "to-[#ffffff] dark:to-zinc-950",
          )}
        >
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex w-full items-start gap-4 p-5 text-left outline-none sm:items-center"
          >
            {/* Logo */}
            <div className="relative flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-zinc-200 bg-white p-1 dark:border-zinc-800 dark:bg-zinc-900">
              {career.logo ? (
                <Image
                  src={career.logo}
                  alt={career.company}
                  fill
                  className="object-contain p-1"
                />
              ) : (
                <Building2 className="text-zinc-400" />
              )}
            </div>

            <div className="flex-1 space-y-1">
              {/* Row 1: Role */}
              <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
                {/* ✅ แก้ไข: เอาสี Teal ออก เปลี่ยนเป็น Zinc เข้มเมื่อ Hover */}
                <h3 className="text-lg font-bold text-zinc-800 transition-colors group-hover:text-zinc-950 dark:text-zinc-200 dark:group-hover:text-zinc-50">
                  {career.role}
                </h3>
                {career.current && (
                  <span className="inline-flex w-fit items-center rounded-full border border-green-200 bg-green-50 px-2 py-0.5 text-xs font-medium text-green-700 dark:border-green-900/30 dark:bg-green-900/20 dark:text-green-400">
                    Current
                  </span>
                )}
              </div>

              {/* Row 2: Company • Location */}
              <div className="flex flex-wrap items-center gap-2 text-sm font-medium text-zinc-700 dark:text-zinc-400">
                <span>{career.company}</span>
                <span className="text-zinc-300 dark:text-zinc-600">•</span>
                <div className="flex items-center gap-1 text-zinc-500 dark:text-zinc-500">
                  <MapPin className="h-3.5 w-3.5" />
                  <span>{career.location}</span>
                </div>
              </div>

              {/* Row 3: Date • Duration • Type • Mode */}
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-zinc-500 dark:text-zinc-500">
                {/* Date & Duration */}
                <div className="flex items-center gap-1">
                  <CalendarClock className="h-3.5 w-3.5" />
                  <span>
                    {career.start} - {career.end}
                  </span>
                  {career.duration && (
                    <span className="ml-1 rounded bg-zinc-200 px-1.5 py-0.5 text-[10px] font-semibold text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400">
                      {career.duration}
                    </span>
                  )}
                </div>

                <span className="hidden text-zinc-300 sm:inline dark:text-zinc-600">
                  |
                </span>

                {/* Type */}
                <div className="flex items-center gap-1">
                  <Briefcase className="h-3.5 w-3.5" />
                  <span>{career.type}</span>
                </div>

                {/* Mode */}
                <div className="rounded border border-zinc-200 px-1.5 py-0.5 text-[10px] font-medium text-zinc-500 dark:border-zinc-800 dark:text-zinc-400">
                  {career.mode}
                </div>
              </div>
            </div>

            <div className="ml-2 flex shrink-0 items-center self-center">
              <ChevronDown
                className={cn(
                  "h-5 w-5 text-zinc-400 transition-transform duration-300 group-hover:text-zinc-600 dark:text-zinc-500 dark:group-hover:text-zinc-300",
                  isOpen && "rotate-180 text-zinc-900 dark:text-zinc-50",
                )}
              />
            </div>
          </button>

          {/* Description */}
          <div
            className={cn(
              "grid transition-all duration-300 ease-in-out",
              isOpen
                ? "grid-rows-[1fr] opacity-100"
                : "grid-rows-[0fr] opacity-0",
            )}
          >
            <div className="overflow-hidden">
              <div className="border-t border-zinc-200/60 bg-zinc-50/50 p-5 pt-4 text-sm leading-relaxed text-zinc-600 dark:border-zinc-800/60 dark:bg-black/20 dark:text-zinc-400">
                <p className="mb-2 font-semibold text-zinc-900 dark:text-zinc-200">
                  Key Responsibilities:
                </p>
                <ul className="list-outside list-disc space-y-1 pl-4 marker:text-zinc-400">
                  {career.description.map((desc, index) => (
                    <li key={index}>{desc}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
