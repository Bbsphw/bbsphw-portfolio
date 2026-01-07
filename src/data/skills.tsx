// src/data/skills.tsx

import { Skill } from "@/types";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNodedotjs,
  SiNextdotjs,
  SiTailwindcss,
} from "react-icons/si";

export const skills: Skill[] = [
  {
    name: "JavaScript",
    icon: <SiJavascript className="text-yellow-400" />,
  },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
  { name: "React", icon: <SiReact className="text-cyan-400" /> },
  { name: "Node.js", icon: <SiNodedotjs className="text-green-500" /> },
  {
    name: "Next.js",
    icon: <SiNextdotjs className="text-black dark:text-white" />,
  },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" /> },
];
