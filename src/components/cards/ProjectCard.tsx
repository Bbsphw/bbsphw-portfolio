// src/components/cards/ProjectCard.tsx

import Image from "next/image";
import Link from "next/link";
import { Pin, ArrowUpRight } from "lucide-react";
import { Project } from "@/types";
import { cn } from "@/lib/utils";

export default function ProjectCard({
  title,
  description,
  technologies,
  featured,
  link,
  image,
}: Project) {
  return (
    <div className="transform-none opacity-100 will-change-auto">
      <div className="w-full rounded-xl border-[1.5px] border-zinc-300 p-1 shadow-sm transition-all duration-300 hover:border-zinc-400 dark:border-[#333333] dark:hover:border-zinc-600">
        <Link
          href={link || "#"}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "group relative block h-full cursor-pointer overflow-hidden rounded-lg",
            "bg-gradient-to-b from-zinc-200 to-zinc-100",
            "transition-all duration-300 hover:to-[#ffffff]",
            "dark:from-[#242424] dark:to-zinc-900 dark:hover:to-zinc-950",
          )}
        >
          {/* Featured Badge */}
          {featured && (
            <div
              className={cn(
                "absolute top-0 right-0 z-20 flex items-center gap-x-1",
                "rounded-tr-lg rounded-bl-lg",
                "bg-cyan-500 px-2 py-1 shadow-md",
                "text-sm font-medium text-zinc-900",
              )}
            >
              <Pin className={cn("h-4 w-4 fill-white")} />
              <span>Featured</span>
            </div>
          )}

          {/* Project Image */}
          <div className="relative h-48 w-full overflow-hidden border-b border-zinc-200 dark:border-zinc-800">
            <Image
              src={image || "/images/project-placeholder.svg"}
              alt={title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {/* Overlay View Project */}
            <div
              className={cn(
                "absolute inset-0 flex items-center justify-center gap-2",
                "bg-black/60 text-sm font-medium text-zinc-50",
                "opacity-0 backdrop-blur-[2px] transition-opacity duration-300 group-hover:opacity-100",
              )}
            >
              <span>View Project</span>
              <ArrowUpRight className="h-4 w-4" />
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col space-y-3 p-5">
            <h3 className="text-lg font-bold text-zinc-800 transition-colors duration-300 group-hover:text-teal-600 dark:text-zinc-200 dark:group-hover:text-teal-400">
              {title}
            </h3>

            <p className="line-clamp-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              {description}
            </p>

            {/* Tech Stack Icons */}
            <div className="mt-auto flex flex-wrap items-center gap-2 pt-2">
              {technologies.map((tech, index) => (
                <div
                  key={index}
                  className={cn(
                    "inline-flex h-8 w-8 items-center justify-center rounded-md bg-white p-1.5 shadow-sm",
                    "ring-1 ring-zinc-200 dark:bg-zinc-800 dark:ring-zinc-700",
                  )}
                  title={`Tech ${index + 1}`}
                >
                  <Image
                    src={tech}
                    alt="Tech Icon"
                    width={20}
                    height={20}
                    className="h-full w-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
