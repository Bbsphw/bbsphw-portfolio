// export default function SkillsSection() {
//   return (
//     <section
//       id="skills"
//       aria-labelledby="skills-heading"
//       // className="mt-20 p-6"
//     >
//       {/* Header */}
//       <header>
//         <h1 id="skills-heading" className="text-2xl font-medium">
//           Professional Skills & Expertise
//         </h1>
//         <p className="mb-6 pb-6 pt-2 text-neutral-600 dark:text-neutral-400">
//           A comprehensive overview of my professional competencies, blending
//           specialized technical proficiencies with essential interpersonal
//           skills for effective collaboration and impactful results.
//         </p>
//       </header>

//       {/* Separator */}
//       <hr className="my-6 border-zinc-200 dark:border-zinc-700" />

//       {/* Skills List */}
//       <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
//         {/* Example skill items */}
//         {[
//           "JavaScript",
//           "TypeScript",
//           "React",
//           "Node.js",
//           "Next.js",
//           "Tailwind CSS",
//         ].map((skill) => (
//           <div
//             key={skill}
//             className="p-4 bg-white dark:bg-zinc-800 rounded-lg shadow"
//           >
//             <h2 className="text-lg font-semibold">{skill}</h2>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// src/components/sections/SkillsSection.tsx
"use client";

import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNodedotjs,
  SiNextdotjs,
  SiTailwindcss,
} from "react-icons/si";
import SkillsMarquee from "../SkillsMarquee";
import { skills } from "@/data/skills"; // เรียกใช้ data จาก data/skills.ts

export default function SkillsSection() {
  return (
    <section id="skills" aria-labelledby="skills-heading" className="mt-20 p-6">
      {/* Header */}
      <header>
        <h1 id="skills-heading" className="text-2xl font-medium">
          Professional Skills & Expertise
        </h1>
        <p className="mb-6 pt-2 pb-6 text-neutral-600 dark:text-neutral-400">
          A comprehensive overview of my professional competencies, blending
          specialized technical proficiencies with essential interpersonal
          skills for effective collaboration and impactful results.
        </p>
      </header>

      {/* Separator */}
      <hr className="my-6 border-zinc-200 dark:border-zinc-700" />

      {/* Marquee Left */}
      <SkillsMarquee skills={skills} direction="left" speed={25} />

      {/* Marquee Right */}

      <SkillsMarquee
        skills={skills}
        direction="right"
        speed={25}
        //className="mt-10"
      />
    </section>
  );
}
