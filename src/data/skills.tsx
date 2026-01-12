import { Skill } from "@/types";
import {
  // Languages
  SiJavascript,
  SiTypescript,
  SiPython,
  SiCplusplus,
  SiHtml5,
  SiCss3,
  SiPhp,
  // Frontend
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiFramer,
  SiFigma,
  SiExpo,
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
  SiOracle,
  SiLaravel,
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

// ---------------------------------------------------------
// 1. Full List (เอาไว้ใช้ในหน้า Skills รวม หรือ About)
// ---------------------------------------------------------
export const allSkills: Skill[] = [
  // =======================================================
  // 1. Languages
  // =======================================================
  { name: "HTML5", icon: <SiHtml5 className="text-orange-500" /> },
  { name: "CSS3", icon: <SiCss3 className="text-blue-500" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
  { name: "Java", icon: <FaJava className="text-red-500" /> },
  { name: "Python", icon: <SiPython className="text-yellow-500" /> },
  { name: "C++", icon: <SiCplusplus className="text-blue-700" /> },
  { name: "PHP", icon: <SiPhp className="text-indigo-400" /> },

  // =======================================================
  // 2. Frontend & Mobile
  // =======================================================
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
  { name: "Expo", icon: <SiExpo className="text-black dark:text-white" /> },

  // =======================================================
  // 3. Backend & Frameworks
  // =======================================================
  { name: "Node.js", icon: <SiNodedotjs className="text-green-500" /> },
  { name: "NestJS", icon: <SiNestjs className="text-red-600" /> },
  {
    name: "Express",
    icon: <SiExpress className="text-black dark:text-white" />,
  },
  { name: "Laravel", icon: <SiLaravel className="text-red-600" /> },
  {
    name: "Prisma",
    icon: <SiPrisma className="text-teal-900 dark:text-white" />,
  },

  // =======================================================
  // 4. Databases
  // =======================================================
  { name: "Supabase", icon: <SiSupabase className="text-green-600" /> },
  { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-400" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
  { name: "MySQL", icon: <SiMysql className="text-blue-500" /> },
  { name: "Oracle DB", icon: <SiOracle className="text-red-600" /> },
  { name: "Firebase", icon: <SiFirebase className="text-orange-500" /> },

  // =======================================================
  // 5. Tools, Cloud & DevOps
  // =======================================================
  { name: "Docker", icon: <SiDocker className="text-blue-500" /> },
  { name: "Git", icon: <SiGit className="text-orange-600" /> },
  { name: "GitHub", icon: <SiGithub className="text-black dark:text-white" /> },
  { name: "AWS", icon: <SiAmazonwebservices className="text-orange-500" /> },
  { name: "Vercel", icon: <SiVercel className="text-black dark:text-white" /> },
  { name: "Bash", icon: <SiGnubash className="text-yellow-600" /> },

  // =======================================================
  // 6. IoT & Electronics
  // =======================================================
  { name: "Arduino", icon: <SiArduino className="text-teal-500" /> },
  { name: "ESP32", icon: <SiEspressif className="text-red-600" /> },
  { name: "Raspberry Pi", icon: <SiRaspberrypi className="text-pink-600" /> },
  { name: "MQTT", icon: <SiMqtt className="text-red-600" /> },
  { name: "Node-RED", icon: <SiNodered className="text-red-700" /> },
  { name: "EasyEDA", icon: <SiEasyeda className="text-blue-600" /> },
];

// ---------------------------------------------------------
// 2. Marquee Highlights (คัดเฉพาะตัวโหดๆ เอาไปโชว์หน้าแรก)
// ---------------------------------------------------------

// แถวที่ 1: Modern Web Stack (Frontend + Core Backend)
export const skillsRow1: Skill[] = [
  {
    name: "Next.js",
    icon: <SiNextdotjs className="text-black dark:text-white" />,
  },
  { name: "React", icon: <SiReact className="text-cyan-400" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
  { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-500" /> },
  { name: "Node.js", icon: <SiNodedotjs className="text-green-500" /> },
  { name: "NestJS", icon: <SiNestjs className="text-red-600" /> },
  { name: "Laravel", icon: <SiLaravel className="text-red-600" /> },
  {
    name: "Prisma",
    icon: <SiPrisma className="text-teal-900 dark:text-white" />,
  },
];

// แถวที่ 2: Specialized & Infrastructure (Database, Cloud, IoT)
export const skillsRow2: Skill[] = [
  { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-400" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
  { name: "Oracle DB", icon: <SiOracle className="text-red-600" /> },
  { name: "Docker", icon: <SiDocker className="text-blue-500" /> },
  { name: "AWS", icon: <SiAmazonwebservices className="text-orange-500" /> },
  { name: "Supabase", icon: <SiSupabase className="text-green-600" /> },
  { name: "Expo", icon: <SiExpo className="text-black dark:text-white" /> },
  { name: "Arduino", icon: <SiArduino className="text-teal-500" /> },
  { name: "ESP32", icon: <SiEspressif className="text-red-600" /> },
];
