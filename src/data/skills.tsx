// src/data/skills.tsx

import { Skill } from "@/types";
import {
  // Languages
  SiJavascript,
  SiTypescript,
  SiPython,
  SiCplusplus,
  SiHtml5,
  SiCss3,
  // Frontend
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiFramer,
  SiFigma,
  // Backend & DB
  SiNodedotjs,
  SiExpress,
  SiNestjs,
  SiPrisma,
  SiSupabase,
  SiPostgresql,
  SiMongodb,
  SiFirebase,
  SiMysql,
  // Tools & DevOps
  SiGit,
  SiGithub,
  SiDocker,
  SiAmazonwebservices,
  SiVercel,
  SiGnubash,
  // Embedded / IoT / Electronics
  SiArduino,
  SiMqtt,
  SiNodered,
  SiEspressif,
  SiRaspberrypi,
  SiEasyeda,
} from "react-icons/si";

import { FaJava } from "react-icons/fa";

// แถวที่ 1: เน้น Frontend & Languages
export const skillsRow1: Skill[] = [
  { name: "HTML5", icon: <SiHtml5 className="text-orange-500" /> },
  { name: "CSS3", icon: <SiCss3 className="text-blue-500" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
  { name: "Java", icon: <FaJava className="text-red-500" /> },
  { name: "React", icon: <SiReact className="text-cyan-400" /> },
  {
    name: "Next.js",
    icon: <SiNextdotjs className="text-black dark:text-white" />,
  },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-500" /> },
  {
    name: "Framer Motion",
    icon: <SiFramer className="text-black dark:text-white" />,
  },
  { name: "Figma", icon: <SiFigma className="text-pink-500" /> },
  { name: "C++", icon: <SiCplusplus className="text-blue-700" /> },
  { name: "Python", icon: <SiPython className="text-yellow-500" /> },
  { name: "GitHub", icon: <SiGithub className="text-black dark:text-white" /> },
];

// แถวที่ 2: เน้น Backend, Database, Tools & IoT
export const skillsRow2: Skill[] = [
  { name: "Node.js", icon: <SiNodedotjs className="text-green-500" /> },
  { name: "NestJS", icon: <SiNestjs className="text-red-600" /> },
  {
    name: "Express",
    icon: <SiExpress className="text-black dark:text-white" />,
  },
  {
    name: "Prisma",
    icon: <SiPrisma className="text-teal-900 dark:text-white" />,
  },
  { name: "Supabase", icon: <SiSupabase className="text-green-600" /> },
  { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-400" /> },
  { name: "MySQL", icon: <SiMysql className="text-blue-500" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
  { name: "Firebase", icon: <SiFirebase className="text-orange-500" /> },
  { name: "Docker", icon: <SiDocker className="text-blue-500" /> },
  {
    name: "Shell / Bash",
    icon: <SiGnubash className="text-zinc-600 dark:text-zinc-400" />,
  },
  { name: "Node-RED", icon: <SiNodered className="text-red-700" /> },
  { name: "Arduino", icon: <SiArduino className="text-teal-500" /> },
  { name: "ESP32", icon: <SiEspressif className="text-red-600" /> },
  { name: "Raspberry Pi", icon: <SiRaspberrypi className="text-pink-600" /> },
  { name: "EasyEDA", icon: <SiEasyeda className="text-blue-600" /> },
  { name: "MQTT", icon: <SiMqtt className="text-red-600" /> },
  { name: "Vercel", icon: <SiVercel className="text-black dark:text-white" /> },
];

// รวมทั้งหมด
export const allSkills = [...skillsRow1, ...skillsRow2];
