// src/components/SkillsMarquee.tsx
"use client";

import { Badge } from "@/components/ui/badge";
import clsx from "clsx";

export type Skill = {
  name: string;
  icon: React.ReactNode;
};

type MarqueeProps = {
  skills: Skill[];
  direction?: "left" | "right";
  speed?: number; // ความเร็ว (วินาที)
  className?: string;
};

export default function SkillsMarquee({
  skills,
  direction = "left",
  speed = 25,
  className,
}: MarqueeProps) {
  const marqueeClass =
    direction === "left" ? "animate-marquee-left" : "animate-marquee-right";
  const marquee2Class =
    direction === "left" ? "animate-marquee2-left" : "animate-marquee2-right";

  return (
    <div
      className={clsx(
        "relative flex overflow-x-hidden", //border-y border-gray-300 dark:border-gray-700
        className,
      )}
    >
      {/* Layer 1 */}
      <div
        className={clsx(
          "flex items-center py-2 whitespace-nowrap",
          marqueeClass,
        )}
        style={{ animationDuration: `${speed}s` }}
      >
        {skills.map((skill, index) => (
          <Badge
            key={`marquee1-${index}`}
            className="text-foreground mx-2 flex items-center gap-2 rounded-full border border-gray-300 bg-white px-4 py-2 text-base shadow transition-transform duration-300 hover:scale-105 dark:border-gray-600 dark:bg-zinc-800"
          >
            {skill.icon}
            {skill.name}
          </Badge>
        ))}
      </div>

      {/* Layer 2 */}
      <div
        className={clsx(
          "absolute top-0 flex items-center py-2 whitespace-nowrap",
          marquee2Class,
        )}
        style={{ animationDuration: `${speed}s` }}
      >
        {skills.map((skill, index) => (
          <Badge
            key={`marquee2-${index}`}
            className="text-foreground mx-2 flex items-center gap-2 rounded-full border border-gray-300 bg-white px-4 py-2 text-base shadow transition-transform duration-300 hover:scale-105 dark:border-gray-600 dark:bg-zinc-800"
          >
            {skill.icon}
            {skill.name}
          </Badge>
        ))}
      </div>
    </div>
  );
}
