// src/components/SkillsMarquee.tsx

"use client";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

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
  speed = 30, // Default ให้ช้าลงนิดนึงเพื่อให้อ่านทัน
  className,
}: MarqueeProps) {
  const marqueeClass =
    direction === "left" ? "animate-marquee-left" : "animate-marquee-right";
  const marquee2Class =
    direction === "left" ? "animate-marquee2-left" : "animate-marquee2-right";

  return (
    <div
      className={cn(
        "relative flex w-full overflow-hidden py-2",
        "mask-image-linear-gradient [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]",
        className,
      )}
    >
      {/* Wrapper 1 */}
      <div
        className={cn(
          "flex w-max shrink-0 items-center gap-4 px-2",
          marqueeClass,
        )}
        style={{ animationDuration: `${speed}s` }}
      >
        {skills.map((skill, index) => (
          <SkillBadge key={`m1-${index}`} skill={skill} />
        ))}
      </div>

      {/* Wrapper 2 (Duplicate for Infinite Loop) */}
      <div
        className={cn(
          "absolute top-0 flex w-max shrink-0 items-center gap-4 px-2 py-2",
          marquee2Class,
        )}
        style={{ animationDuration: `${speed}s` }}
      >
        {skills.map((skill, index) => (
          <SkillBadge key={`m2-${index}`} skill={skill} />
        ))}
      </div>
    </div>
  );
}

function SkillBadge({ skill }: { skill: Skill }) {
  return (
    <Badge
      variant="secondary"
      className="flex items-center gap-2 rounded-lg border border-zinc-200 bg-white/80 px-4 py-2 text-sm font-medium text-zinc-700 shadow-sm transition-all hover:scale-105 hover:border-zinc-300 hover:bg-white dark:border-zinc-800 dark:bg-zinc-900/80 dark:text-zinc-300 dark:hover:border-zinc-700 dark:hover:bg-zinc-900"
    >
      <span className="text-lg">{skill.icon}</span>
      <span>{skill.name}</span>
    </Badge>
  );
}
