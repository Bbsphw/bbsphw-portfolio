import React, { Suspense, ComponentType } from "react";
import dynamic from "next/dynamic";
import { cn } from "@/lib/utils";
import { Code2 } from "lucide-react";
import { IconBaseProps, IconType } from "react-icons";

// ✅ 1. กำหนด Type สำหรับ Module ของ React Icons
// เพื่อบอก TS ว่า Module นี้จะมี key เป็น string และ value เป็น IconType (หรืออื่นๆ)
type IconModule = Record<string, IconType | unknown>;

// ✅ 2. Helper Function แบบ Type-Safe (ไม่ใช้ any)
const loadIcon = (importFn: () => Promise<IconModule>, iconName: string) => {
  return dynamic<IconBaseProps>(() =>
    importFn().then((mod) => {
      // ใช้ Type Assertion ว่าค่าที่ดึงมาต้องเป็น IconType หรือ undefined
      const Icon = mod[iconName] as IconType | undefined;
      // Fallback ป้องกันเว็บพังถ้าหา icon ไม่เจอ
      return Icon || (() => <Code2 />);
    }),
  );
};

// Lazy Loaders
// TypeScript จะไม่งอแงแล้ว เพราะ import(...) return ค่าที่เข้ากันได้กับ IconModule
const loadSi = (name: string) => loadIcon(() => import("react-icons/si"), name);
const loadFa = (name: string) => loadIcon(() => import("react-icons/fa"), name);

type IconConfig = {
  Component: ComponentType<{ className?: string }>;
  color: string;
};

// Icon Map Configuration
export const TechIconsMap: Record<string, IconConfig> = {
  // Languages
  HTML5: { Component: loadSi("SiHtml5"), color: "text-orange-500" },
  CSS3: { Component: loadSi("SiCss3"), color: "text-blue-500" },
  JavaScript: { Component: loadSi("SiJavascript"), color: "text-yellow-400" },
  TypeScript: { Component: loadSi("SiTypescript"), color: "text-blue-600" },
  Java: { Component: loadFa("FaJava"), color: "text-red-500" },
  Python: { Component: loadSi("SiPython"), color: "text-yellow-500" },
  "C++": { Component: loadSi("SiCplusplus"), color: "text-blue-700" },
  C: { Component: loadSi("SiC"), color: "text-blue-600" }, // เพิ่ม C ตามที่ขอ
  PHP: { Component: loadSi("SiPhp"), color: "text-indigo-400" },

  // Frontend
  React: { Component: loadSi("SiReact"), color: "text-cyan-400" },
  "Next.js": {
    Component: loadSi("SiNextdotjs"),
    color: "text-black dark:text-white",
  },
  "Tailwind CSS": {
    Component: loadSi("SiTailwindcss"),
    color: "text-cyan-500",
  },
  Tailwind: { Component: loadSi("SiTailwindcss"), color: "text-cyan-500" },
  "Framer Motion": {
    Component: loadSi("SiFramer"),
    color: "text-black dark:text-white",
  },
  Figma: { Component: loadSi("SiFigma"), color: "text-pink-500" },
  Expo: { Component: loadSi("SiExpo"), color: "text-black dark:text-white" },
  Mobile: { Component: loadFa("FaMobileAlt"), color: "text-purple-500" },

  // Backend
  "Node.js": { Component: loadSi("SiNodedotjs"), color: "text-green-500" },
  NestJS: { Component: loadSi("SiNestjs"), color: "text-red-600" },
  Express: {
    Component: loadSi("SiExpress"),
    color: "text-black dark:text-white",
  },
  Laravel: { Component: loadSi("SiLaravel"), color: "text-red-600" },
  Prisma: {
    Component: loadSi("SiPrisma"),
    color: "text-teal-900 dark:text-white",
  },
  Livewire: { Component: loadFa("FaServer"), color: "text-pink-500" },

  // DB
  Supabase: { Component: loadSi("SiSupabase"), color: "text-green-600" },
  PostgreSQL: { Component: loadSi("SiPostgresql"), color: "text-blue-400" },
  MongoDB: { Component: loadSi("SiMongodb"), color: "text-green-600" },
  MySQL: { Component: loadSi("SiMysql"), color: "text-blue-500" },
  "Oracle DB": { Component: loadSi("SiOracle"), color: "text-red-600" },
  Firebase: { Component: loadSi("SiFirebase"), color: "text-orange-500" },

  // Tools
  Docker: { Component: loadSi("SiDocker"), color: "text-blue-500" },
  Git: { Component: loadSi("SiGit"), color: "text-orange-600" },
  GitHub: {
    Component: loadSi("SiGithub"),
    color: "text-black dark:text-white",
  },
  AWS: { Component: loadSi("SiAmazonwebservices"), color: "text-orange-500" },
  Vercel: {
    Component: loadSi("SiVercel"),
    color: "text-black dark:text-white",
  },
  Bash: { Component: loadSi("SiGnubash"), color: "text-yellow-600" },

  // IoT / Others
  Arduino: { Component: loadSi("SiArduino"), color: "text-teal-500" },
  ESP32: { Component: loadSi("SiEspressif"), color: "text-red-600" },
  "Raspberry Pi": {
    Component: loadSi("SiRaspberrypi"),
    color: "text-pink-600",
  },
  MQTT: { Component: loadSi("SiMqtt"), color: "text-red-600" },
  "Node-RED": { Component: loadSi("SiNodered"), color: "text-red-700" },
  EasyEDA: { Component: loadSi("SiEasyeda"), color: "text-blue-600" },
  OCR: { Component: loadFa("FaFileInvoiceDollar"), color: "text-green-500" },
  Recharts: { Component: loadFa("FaChartLine"), color: "text-orange-500" },
  NextAuth: { Component: loadSi("SiAuth0"), color: "text-purple-500" },
  OpenCV: { Component: loadSi("SiOpencv"), color: "text-green-600" },
  MediaPipe: { Component: loadFa("FaBrain"), color: "text-teal-500" },

  // Generic / Fallback
  Finance: { Component: loadFa("FaChartLine"), color: "text-gray-500" },
  "Admin Panel": { Component: loadFa("FaServer"), color: "text-gray-500" },
  "Data Visualization": {
    Component: loadFa("FaChartLine"),
    color: "text-gray-500",
  },
  "Computer Vision": { Component: loadSi("SiOpencv"), color: "text-green-600" },
  AI: { Component: loadFa("FaBrain"), color: "text-teal-500" },
};

interface TechIconProps {
  name: string;
  className?: string;
  withColor?: boolean;
}

export function TechIcon({ name, className, withColor = true }: TechIconProps) {
  const config = TechIconsMap[name];

  if (!config) {
    return <Code2 className={cn("text-zinc-500", className)} />;
  }

  const { Component, color } = config;

  return (
    <Suspense
      fallback={
        <div
          className={cn(
            "h-full w-full animate-pulse rounded-full bg-zinc-200 dark:bg-zinc-800",
            className,
          )}
        />
      }
    >
      <Component
        className={cn(withColor ? color : "text-current", className)}
      />
    </Suspense>
  );
}
