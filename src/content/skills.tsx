// src/content/skills.tsx

import { Skill } from "@/types";

export const allSkills: Skill[] = [
  // 1. Languages
  { id: "skill-ts", name: "TypeScript", icon: "TypeScript" },
  { id: "skill-js", name: "JavaScript", icon: "JavaScript" },
  { id: "skill-python", name: "Python", icon: "Python" },
  { id: "skill-java", name: "Java", icon: "Java" },
  { id: "skill-php", name: "PHP", icon: "PHP" },
  { id: "skill-dart", name: "Dart", icon: "Dart" },
  { id: "skill-c", name: "C", icon: "C" },
  { id: "skill-cpp", name: "C++", icon: "C++" },
  { id: "skill-sql", name: "SQL", icon: "SQL" },
  { id: "skill-matlab", name: "MATLAB", icon: "MATLAB" },

  // 2. Frontend & Mobile Frameworks
  { id: "skill-react", name: "React", icon: "React" },
  { id: "skill-nextjs", name: "Next.js", icon: "Next.js" },
  { id: "skill-reactnative", name: "React Native", icon: "React Native" },
  { id: "skill-flutter", name: "Flutter", icon: "Flutter" },
  { id: "skill-expo", name: "Expo", icon: "Expo" },
  { id: "skill-tailwind", name: "Tailwind CSS", icon: "Tailwind CSS" },
  { id: "skill-zustand", name: "Zustand", icon: "Zustand" },
  { id: "skill-redux", name: "Redux", icon: "Redux" },

  // 3. Backend Frameworks & Libraries
  { id: "skill-nodejs", name: "Node.js", icon: "Node.js" },
  { id: "skill-express", name: "Express.js", icon: "Express" },
  { id: "skill-nestjs", name: "NestJS", icon: "NestJS" },
  { id: "skill-fastapi", name: "FastAPI", icon: "FastAPI" },
  { id: "skill-laravel", name: "Laravel", icon: "Laravel" },
  { id: "skill-livewire", name: "Livewire", icon: "Livewire" },
  { id: "skill-prisma", name: "Prisma (ORM)", icon: "Prisma" },

  // 4. Databases & Cloud Services
  { id: "skill-postgres", name: "PostgreSQL", icon: "PostgreSQL" },
  { id: "skill-mysql", name: "MySQL (Stored Procedures)", icon: "MySQL" },
  { id: "skill-mongodb", name: "MongoDB", icon: "MongoDB" },
  { id: "skill-supabase", name: "Supabase", icon: "Supabase" },
  { id: "skill-firebase", name: "Firebase", icon: "Firebase" },

  // 5. Tools & DevOps
  { id: "skill-rest", name: "RESTful APIs", icon: "RESTful APIs" },
  { id: "skill-ws", name: "WebSocket", icon: "WebSocket" },
  { id: "skill-git", name: "Git/GitHub", icon: "Git/GitHub" },
  { id: "skill-docker", name: "Docker", icon: "Docker" },
  { id: "skill-gcp", name: "Google Cloud", icon: "Google Cloud" },
  { id: "skill-linux", name: "Linux (Bash)", icon: "Linux (Bash)" },
  { id: "skill-postman", name: "Postman", icon: "Postman" },
  { id: "skill-figma", name: "Figma", icon: "Figma" },

  // 6. Embedded Systems & IoT
  { id: "skill-arduino", name: "Arduino", icon: "Arduino" },
  { id: "skill-esp32", name: "ESP32", icon: "ESP32" },
  { id: "skill-rpi", name: "Raspberry Pi", icon: "Raspberry Pi" },
  { id: "skill-mqtt", name: "MQTT", icon: "MQTT" },
  { id: "skill-nodered", name: "Node-RED", icon: "Node-RED" },
  { id: "skill-proteus", name: "Proteus", icon: "Proteus" },
  { id: "skill-easyeda", name: "EasyEDA", icon: "EasyEDA" },
];

export const skillsRow1: Skill[] = [
  { id: "hl-ts", name: "TypeScript", icon: "TypeScript" },
  { id: "hl-js", name: "JavaScript", icon: "JavaScript" },
  { id: "hl-react", name: "React", icon: "React" },
  { id: "hl-nextjs", name: "Next.js", icon: "Next.js" },
  { id: "hl-reactnative", name: "React Native", icon: "React Native" },
  { id: "hl-flutter", name: "Flutter", icon: "Flutter" },
  { id: "hl-expo", name: "Expo", icon: "Expo" },
  { id: "hl-tailwind", name: "Tailwind CSS", icon: "Tailwind CSS" },
  { id: "hl-zustand", name: "Zustand", icon: "Zustand" },
  { id: "hl-redux", name: "Redux", icon: "Redux" },
  { id: "hl-nodejs", name: "Node.js", icon: "Node.js" },
  { id: "hl-express", name: "Express.js", icon: "Express" },
  { id: "hl-nestjs", name: "NestJS", icon: "NestJS" },
  { id: "hl-fastapi", name: "FastAPI", icon: "FastAPI" },
  { id: "hl-laravel", name: "Laravel", icon: "Laravel" },
  { id: "hl-livewire", name: "Livewire", icon: "Livewire" },
  { id: "hl-prisma", name: "Prisma (ORM)", icon: "Prisma" },
  { id: "hl-python", name: "Python", icon: "Python" },
  { id: "hl-java", name: "Java", icon: "Java" },
  { id: "hl-php", name: "PHP", icon: "PHP" },
  { id: "hl-dart", name: "Dart", icon: "Dart" },
  { id: "hl-c", name: "C", icon: "C" },
  { id: "hl-cpp", name: "C++", icon: "C++" },
];

export const skillsRow2: Skill[] = [
  { id: "hl-sql", name: "SQL", icon: "SQL" },
  { id: "hl-postgres", name: "PostgreSQL", icon: "PostgreSQL" },
  { id: "hl-mysql", name: "MySQL", icon: "MySQL" },
  { id: "hl-supabase", name: "Supabase", icon: "Supabase" },
  { id: "hl-mongodb", name: "MongoDB", icon: "MongoDB" },
  { id: "hl-firebase", name: "Firebase", icon: "Firebase" },
  { id: "hl-docker", name: "Docker", icon: "Docker" },
  { id: "hl-gcp", name: "Google Cloud", icon: "Google Cloud" },
  { id: "hl-git", name: "Git/GitHub", icon: "Git/GitHub" },
  { id: "hl-linux", name: "Linux (Bash)", icon: "Linux (Bash)" },
  { id: "hl-postman", name: "Postman", icon: "Postman" },
  { id: "hl-figma", name: "Figma", icon: "Figma" },
  { id: "hl-rest", name: "RESTful APIs", icon: "RESTful APIs" },
  { id: "hl-ws", name: "WebSocket", icon: "WebSocket" },
  { id: "hl-arduino", name: "Arduino", icon: "Arduino" },
  { id: "hl-esp32", name: "ESP32", icon: "ESP32" },
  { id: "hl-rpi", name: "Raspberry Pi", icon: "Raspberry Pi" },
  { id: "hl-proteus", name: "Proteus", icon: "Proteus" },
  { id: "hl-easyeda", name: "EasyEDA", icon: "EasyEDA" },
  { id: "hl-mqtt", name: "MQTT", icon: "MQTT" },
  { id: "hl-nodered", name: "Node-RED", icon: "Node-RED" },
  { id: "hl-matlab", name: "MATLAB", icon: "MATLAB" },
];
