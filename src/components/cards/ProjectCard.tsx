// src/components/cards/ProjectCard.tsx

import Image from "next/image";
// import Link from "next/link";

import { TbPinnedFilled } from "react-icons/tb";
import { LuArrowRightToLine } from "react-icons/lu";
import { Project } from "@/types";

export default function ProjectCard({
  title,
  description,
  technologies,
}: //   link,
//   featured,
Project) {
  return (
    <div className="transform-none opacity-100 will-change-auto">
      <div className="w-full rounded-xl border-[1.5px] border-neutral-300 p-1 shadow-sm dark:border-[#333333]">
        <div className="group relative cursor-pointer rounded-lg bg-gradient-to-b from-neutral-200 to-neutral-100 transition-all duration-300 hover:to-[#ffffff] dark:from-[#242424] dark:to-neutral-900 dark:hover:to-neutral-950">
          <div className="absolute top-0 right-0 z-10 flex items-center gap-x-1 rounded-tr-lg rounded-bl-lg bg-cyan-500 px-2 py-1 text-sm font-medium text-neutral-900">
            <TbPinnedFilled />
            <span>Featured</span>
          </div>

          <div className="relative">
            <Image
              src="/vercel.svg"
              alt="sophonwit.site"
              width={400}
              height={200}
              className="h-48 w-full rounded-t-lg object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute top-0 left-0 flex h-full w-full items-center justify-center gap-1 rounded-t-xl bg-black text-sm font-medium text-neutral-50 opacity-0 transition-opacity duration-300 group-hover:opacity-80">
              <span>View Project</span>
              <LuArrowRightToLine />
            </div>
          </div>

          <div className="space-y-2 p-5">
            <h3 className="cursor-pointer text-lg text-neutral-700 transition-all duration-300 group-hover:text-teal-500 dark:text-neutral-300 dark:group-hover:text-teal-400">
              {title}
            </h3>
            <p className="text-sm leading-relaxed text-neutral-700 dark:text-neutral-400">
              {description}
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-2">
              {technologies.map((tech, index) => (
                <div
                  key={index}
                  className="inline-flex items-center justify-center rounded bg-neutral-200 p-1 dark:bg-neutral-700"
                >
                  <Image
                    src={tech}
                    alt={`Tech ${index}`}
                    width={20}
                    height={20}
                    className="h-5 w-5 object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
