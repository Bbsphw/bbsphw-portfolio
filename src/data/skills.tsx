// src/data/skills.tsx

import { Skill } from "@/types";

export const allSkills: Skill[] = [
  // 1. Languages
  { id: "skill-html5", name: "HTML5", icon: "HTML5" },
  { id: "skill-css3", name: "CSS3", icon: "CSS3" },
  { id: "skill-js", name: "JavaScript", icon: "JavaScript" },
  { id: "skill-ts", name: "TypeScript", icon: "TypeScript" },
  { id: "skill-java", name: "Java", icon: "Java" },
  { id: "skill-python", name: "Python", icon: "Python" },
  { id: "skill-c", name: "C", icon: "C" },
  { id: "skill-cpp", name: "C++", icon: "C++" },
  { id: "skill-php", name: "PHP", icon: "PHP" },

  // 2. Frontend & Mobile
  { id: "skill-react", name: "React", icon: "React" },
  { id: "skill-nextjs", name: "Next.js", icon: "Next.js" },
  { id: "skill-tailwind", name: "Tailwind CSS", icon: "Tailwind CSS" },
  { id: "skill-framer", name: "Framer Motion", icon: "Framer Motion" },
  { id: "skill-figma", name: "Figma", icon: "Figma" },
  { id: "skill-expo", name: "Expo", icon: "Expo" },

  // 3. Backend & Frameworks
  { id: "skill-nodejs", name: "Node.js", icon: "Node.js" },
  { id: "skill-nestjs", name: "NestJS", icon: "NestJS" },
  { id: "skill-express", name: "Express", icon: "Express" },
  { id: "skill-laravel", name: "Laravel", icon: "Laravel" },
  { id: "skill-prisma", name: "Prisma", icon: "Prisma" },

  // 4. Databases
  { id: "skill-supabase", name: "Supabase", icon: "Supabase" },
  { id: "skill-postgres", name: "PostgreSQL", icon: "PostgreSQL" },
  { id: "skill-mongodb", name: "MongoDB", icon: "MongoDB" },
  { id: "skill-mysql", name: "MySQL", icon: "MySQL" },
  { id: "skill-oracle", name: "Oracle DB", icon: "Oracle DB" },
  { id: "skill-firebase", name: "Firebase", icon: "Firebase" },

  // 5. Tools, Cloud & DevOps
  { id: "skill-docker", name: "Docker", icon: "Docker" },
  { id: "skill-git", name: "Git", icon: "Git" },
  { id: "skill-github", name: "GitHub", icon: "GitHub" },
  { id: "skill-aws", name: "AWS", icon: "AWS" },
  { id: "skill-vercel", name: "Vercel", icon: "Vercel" },
  { id: "skill-bash", name: "Bash", icon: "Bash" },

  // 6. IoT & Electronics
  { id: "skill-arduino", name: "Arduino", icon: "Arduino" },
  { id: "skill-esp32", name: "ESP32", icon: "ESP32" },
  { id: "skill-rpi", name: "Raspberry Pi", icon: "Raspberry Pi" },
  { id: "skill-mqtt", name: "MQTT", icon: "MQTT" },
  { id: "skill-nodered", name: "Node-RED", icon: "Node-RED" },
  { id: "skill-easyeda", name: "EasyEDA", icon: "EasyEDA" },
];

export const skillsRow1: Skill[] = [
  { id: "hl-nextjs", name: "Next.js", icon: "Next.js" },
  { id: "hl-react", name: "React", icon: "React" },
  { id: "hl-ts", name: "TypeScript", icon: "TypeScript" },
  { id: "hl-tailwind", name: "Tailwind", icon: "Tailwind CSS" },
  { id: "hl-nodejs", name: "Node.js", icon: "Node.js" },
  { id: "hl-nestjs", name: "NestJS", icon: "NestJS" },
  { id: "hl-laravel", name: "Laravel", icon: "Laravel" },
  { id: "hl-prisma", name: "Prisma", icon: "Prisma" },
];

export const skillsRow2: Skill[] = [
  { id: "hl-postgres", name: "PostgreSQL", icon: "PostgreSQL" },
  { id: "hl-mongodb", name: "MongoDB", icon: "MongoDB" },
  { id: "hl-oracle", name: "Oracle DB", icon: "Oracle DB" },
  { id: "hl-docker", name: "Docker", icon: "Docker" },
  { id: "hl-aws", name: "AWS", icon: "AWS" },
  { id: "hl-supabase", name: "Supabase", icon: "Supabase" },
  { id: "hl-expo", name: "Expo", icon: "Expo" },
  { id: "hl-arduino", name: "Arduino", icon: "Arduino" },
  { id: "hl-esp32", name: "ESP32", icon: "ESP32" },
];
