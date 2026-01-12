// src/data/projects.tsx  <-- นามสกุลต้องเป็น .tsx

import { Project } from "@/types";
// Import Icon จาก react-icons
import {
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiReact,
  SiPrisma,
  SiPostgresql,
} from "react-icons/si";

export const projects: Project[] = [
  {
    title: "sophonwit.site",
    category: "Web App",
    description: "Personal website & portfolio, built from scratch",
    technologies: [
      <SiNextdotjs key="next" className="text-black dark:text-white" />,
      <SiReact key="react" className="text-cyan-400" />,
      <SiTypescript key="ts" className="text-blue-600" />,
      <SiTailwindcss key="tailwind" className="text-cyan-500" />,
    ],
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    link: "https://satriabahari.site",
    featured: true,
  },
  {
    title: "Berbagi.link",
    category: "Web App",
    description: "A mini-website platform for online presence",
    technologies: [
      <SiNextdotjs key="next" className="text-black dark:text-white" />,
      <SiTailwindcss key="tailwind" className="text-cyan-500" />,
      <SiPrisma key="prisma" className="text-teal-900 dark:text-white" />,
      <SiPostgresql key="pg" className="text-blue-400" />,
    ],
    tags: ["Next.js", "Full Stack", "Prisma", "PostgreSQL"],
    link: "https://berbagi.link",
  },
];
