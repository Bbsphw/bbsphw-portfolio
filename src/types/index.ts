// src/types/index.ts

// ✅ 1. เพิ่ม Type สำหรับภาษา
export type Language = "en" | "th";

// ✅ 2. สร้าง Generic Type สำหรับข้อมูลที่แยกภาษา
export type LocalizedData<T> = Record<Language, T>;

export const PROJECT_CATEGORIES = [
  "Web App",
  "Mobile App",
  "Embedded / IoT",
  "Enterprise",
  "Others",
] as const;

export type ProjectCategory = (typeof PROJECT_CATEGORIES)[number];

export interface Project {
  id: string;
  slug: string;
  title: string;
  category: ProjectCategory;
  description: string;

  // Meta Info
  role?: string;
  date?: string;

  // Deep Dive
  overview?: string;
  features?: string[];
  challenges?: { problem: string; solution: string }[];

  technologies: string[];

  tags: string[];
  link?: string;
  githubUrl?: string;
  featured?: boolean;
  image?: string;
  gallery?: string[];
}

export type Skill = {
  id: string;
  name: string;
  icon: string;
};

export type AchievementType =
  | "certification"
  | "badge"
  | "awards"
  | "hackathon"
  | "talks";

export type Achievement = {
  id: string;
  type: AchievementType;
  title: string;
  organization: string;
  image: string;
  link?: string;
  date: string;
  description?: string;
  skills?: string[];
  gallery?: string[];
};

export type Education = {
  id: string;
  school: string;
  degree: string;
  year: string;
  location?: string;
  description: string;
  logo?: string;
};

export type Career = {
  id: string;
  role: string;
  company: string;
  logo?: string;
  location: string;
  start: string;
  end: string;
  duration?: string;
  type: string;
  mode: string;
  description: string[];
  current?: boolean;
};
