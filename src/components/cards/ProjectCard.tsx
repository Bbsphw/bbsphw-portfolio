// src/components/cards/ProjectCard.tsx

"use client";

import Link from "next/link";
import { Pin, ArrowUpRight } from "lucide-react";
import { Project } from "@/types";
import { cn } from "@/lib/utils";
import { UniversalImage } from "../universal-image";
import { TechIcon } from "../icons/TechIcons";

export default function ProjectCard({
  slug,
  title,
  description,
  technologies,
  featured,
  image,
}: Project) {
  return (
    <div className="h-full transform-none opacity-100 will-change-auto">
      <div className="h-full w-full rounded-xl border-[1.5px] border-zinc-300 p-1 shadow-sm transition-all duration-300 hover:border-zinc-400 dark:border-[#333333] dark:hover:border-zinc-600">
        <Link
          href={`/projects/${slug}`}
          className={cn(
            "group relative flex h-full cursor-pointer flex-col overflow-hidden rounded-lg",
            "bg-gradient-to-b from-zinc-200 to-zinc-100",
            "transition-all duration-300 hover:to-[#ffffff]",
            "dark:from-[#242424] dark:to-zinc-900 dark:hover:to-zinc-950",
          )}
        >
          {featured && (
            <div className="absolute top-0 right-0 z-20 flex items-center gap-x-1 rounded-tr-lg rounded-bl-lg bg-cyan-500 px-2 py-1 text-sm font-medium text-zinc-900 shadow-md">
              <Pin className="h-4 w-4 fill-white" />
              <span>Featured</span>
            </div>
          )}

          <div className="relative h-48 w-full shrink-0 overflow-hidden border-b border-zinc-200 dark:border-zinc-800">
            <UniversalImage
              src={image}
              alt={title}
              fill
              // ✅ แก้ไข: ปรับ sizes ให้เหมาะกับ Grid (มือถือ 100vw, จอใหญ่ 50vw/33vw)
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              cldProps={{ crop: "fill", gravity: "auto" }}
            />

            <div className="absolute inset-0 flex items-center justify-center gap-2 bg-black/60 text-sm font-medium text-zinc-50 opacity-0 backdrop-blur-[2px] transition-opacity duration-300 group-hover:opacity-100">
              <span>View Details</span>
              <ArrowUpRight className="h-4 w-4" />
            </div>
          </div>

          <div className="flex flex-1 flex-col space-y-3 p-5">
            <h3 className="line-clamp-1 text-lg font-bold text-zinc-800 transition-colors duration-300 group-hover:text-teal-600 dark:text-zinc-200 dark:group-hover:text-teal-400">
              {title}
            </h3>
            <p className="line-clamp-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              {description}
            </p>
            <div className="mt-auto flex flex-wrap items-center gap-2 pt-4">
              {technologies.map((techName, index) => (
                <div
                  key={index}
                  className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-white p-1.5 shadow-sm ring-1 ring-zinc-200 dark:bg-zinc-800 dark:ring-zinc-700"
                  title={techName}
                >
                  <div className="text-zinc-600 dark:text-zinc-400">
                    <TechIcon name={techName} className="h-full w-full" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
