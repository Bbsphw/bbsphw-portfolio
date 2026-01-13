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
  {
    id: "skill-html5",
    name: "HTML5",
    icon: <SiHtml5 className="text-orange-500" />,
  },
  {
    id: "skill-css3",
    name: "CSS3",
    icon: <SiCss3 className="text-blue-500" />,
  },
  {
    id: "skill-js",
    name: "JavaScript",
    icon: <SiJavascript className="text-yellow-400" />,
  },
  {
    id: "skill-ts",
    name: "TypeScript",
    icon: <SiTypescript className="text-blue-600" />,
  },
  { id: "skill-java", name: "Java", icon: <FaJava className="text-red-500" /> },
  {
    id: "skill-python",
    name: "Python",
    icon: <SiPython className="text-yellow-500" />,
  },
  {
    id: "skill-cpp",
    name: "C++",
    icon: <SiCplusplus className="text-blue-700" />,
  },
  { id: "skill-php", name: "PHP", icon: <SiPhp className="text-indigo-400" /> },

  // =======================================================
  // 2. Frontend & Mobile
  // =======================================================
  {
    id: "skill-react",
    name: "React",
    icon: <SiReact className="text-cyan-400" />,
  },
  {
    id: "skill-nextjs",
    name: "Next.js",
    icon: <SiNextdotjs className="text-black dark:text-white" />,
  },
  {
    id: "skill-tailwind",
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="text-cyan-500" />,
  },
  {
    id: "skill-framer",
    name: "Framer Motion",
    icon: <SiFramer className="text-black dark:text-white" />,
  },
  {
    id: "skill-figma",
    name: "Figma",
    icon: <SiFigma className="text-pink-500" />,
  },
  {
    id: "skill-expo",
    name: "Expo",
    icon: <SiExpo className="text-black dark:text-white" />,
  },

  // =======================================================
  // 3. Backend & Frameworks
  // =======================================================
  {
    id: "skill-nodejs",
    name: "Node.js",
    icon: <SiNodedotjs className="text-green-500" />,
  },
  {
    id: "skill-nestjs",
    name: "NestJS",
    icon: <SiNestjs className="text-red-600" />,
  },
  {
    id: "skill-express",
    name: "Express",
    icon: <SiExpress className="text-black dark:text-white" />,
  },
  {
    id: "skill-laravel",
    name: "Laravel",
    icon: <SiLaravel className="text-red-600" />,
  },
  {
    id: "skill-prisma",
    name: "Prisma",
    icon: <SiPrisma className="text-teal-900 dark:text-white" />,
  },

  // =======================================================
  // 4. Databases
  // =======================================================
  {
    id: "skill-supabase",
    name: "Supabase",
    icon: <SiSupabase className="text-green-600" />,
  },
  {
    id: "skill-postgres",
    name: "PostgreSQL",
    icon: <SiPostgresql className="text-blue-400" />,
  },
  {
    id: "skill-mongodb",
    name: "MongoDB",
    icon: <SiMongodb className="text-green-600" />,
  },
  {
    id: "skill-mysql",
    name: "MySQL",
    icon: <SiMysql className="text-blue-500" />,
  },
  {
    id: "skill-oracle",
    name: "Oracle DB",
    icon: <SiOracle className="text-red-600" />,
  },
  {
    id: "skill-firebase",
    name: "Firebase",
    icon: <SiFirebase className="text-orange-500" />,
  },

  // =======================================================
  // 5. Tools, Cloud & DevOps
  // =======================================================
  {
    id: "skill-docker",
    name: "Docker",
    icon: <SiDocker className="text-blue-500" />,
  },
  { id: "skill-git", name: "Git", icon: <SiGit className="text-orange-600" /> },
  {
    id: "skill-github",
    name: "GitHub",
    icon: <SiGithub className="text-black dark:text-white" />,
  },
  {
    id: "skill-aws",
    name: "AWS",
    icon: <SiAmazonwebservices className="text-orange-500" />,
  },
  {
    id: "skill-vercel",
    name: "Vercel",
    icon: <SiVercel className="text-black dark:text-white" />,
  },
  {
    id: "skill-bash",
    name: "Bash",
    icon: <SiGnubash className="text-yellow-600" />,
  },

  // =======================================================
  // 6. IoT & Electronics
  // =======================================================
  {
    id: "skill-arduino",
    name: "Arduino",
    icon: <SiArduino className="text-teal-500" />,
  },
  {
    id: "skill-esp32",
    name: "ESP32",
    icon: <SiEspressif className="text-red-600" />,
  },
  {
    id: "skill-rpi",
    name: "Raspberry Pi",
    icon: <SiRaspberrypi className="text-pink-600" />,
  },
  { id: "skill-mqtt", name: "MQTT", icon: <SiMqtt className="text-red-600" /> },
  {
    id: "skill-nodered",
    name: "Node-RED",
    icon: <SiNodered className="text-red-700" />,
  },
  {
    id: "skill-easyeda",
    name: "EasyEDA",
    icon: <SiEasyeda className="text-blue-600" />,
  },
];

// ---------------------------------------------------------
// 2. Marquee Highlights (คัดเฉพาะตัวโหดๆ เอาไปโชว์หน้าแรก)
// ---------------------------------------------------------

// แถวที่ 1: Modern Web Stack (Frontend + Core Backend)
export const skillsRow1: Skill[] = [
  {
    id: "hl-nextjs",
    name: "Next.js",
    icon: <SiNextdotjs className="text-black dark:text-white" />,
  },
  {
    id: "hl-react",
    name: "React",
    icon: <SiReact className="text-cyan-400" />,
  },
  {
    id: "hl-ts",
    name: "TypeScript",
    icon: <SiTypescript className="text-blue-600" />,
  },
  {
    id: "hl-tailwind",
    name: "Tailwind",
    icon: <SiTailwindcss className="text-cyan-500" />,
  },
  {
    id: "hl-nodejs",
    name: "Node.js",
    icon: <SiNodedotjs className="text-green-500" />,
  },
  {
    id: "hl-nestjs",
    name: "NestJS",
    icon: <SiNestjs className="text-red-600" />,
  },
  {
    id: "hl-laravel",
    name: "Laravel",
    icon: <SiLaravel className="text-red-600" />,
  },
  {
    id: "hl-prisma",
    name: "Prisma",
    icon: <SiPrisma className="text-teal-900 dark:text-white" />,
  },
];

// แถวที่ 2: Specialized & Infrastructure (Database, Cloud, IoT)
export const skillsRow2: Skill[] = [
  {
    id: "hl-postgres",
    name: "PostgreSQL",
    icon: <SiPostgresql className="text-blue-400" />,
  },
  {
    id: "hl-mongodb",
    name: "MongoDB",
    icon: <SiMongodb className="text-green-600" />,
  },
  {
    id: "hl-oracle",
    name: "Oracle DB",
    icon: <SiOracle className="text-red-600" />,
  },
  {
    id: "hl-docker",
    name: "Docker",
    icon: <SiDocker className="text-blue-500" />,
  },
  {
    id: "hl-aws",
    name: "AWS",
    icon: <SiAmazonwebservices className="text-orange-500" />,
  },
  {
    id: "hl-supabase",
    name: "Supabase",
    icon: <SiSupabase className="text-green-600" />,
  },
  {
    id: "hl-expo",
    name: "Expo",
    icon: <SiExpo className="text-black dark:text-white" />,
  },
  {
    id: "hl-arduino",
    name: "Arduino",
    icon: <SiArduino className="text-teal-500" />,
  },
  {
    id: "hl-esp32",
    name: "ESP32",
    icon: <SiEspressif className="text-red-600" />,
  },
];
