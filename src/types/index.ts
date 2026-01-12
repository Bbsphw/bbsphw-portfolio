// src/types/index.ts

import { ReactNode } from "react";

export type ProjectCategory =
  | "Web App"
  | "Mobile App"
  | "Embedded / IoT"
  | "Others";

export type Project = {
  title: string;
  description: string;
  technologies: ReactNode[];
  tags: string[]; // Tech Stack (เอาไว้ Search)
  category: ProjectCategory; // สำหรับ Filter
  link?: string;
  featured?: boolean;
  image?: string;
};

export type Skill = {
  name: string;
  icon: ReactNode;
};

export type Achievement = {
  type: "certification" | "badge" | "awards";
  title: string;
  organization: string;
  image: string;
  link?: string;
  date?: string;
};

export type Education = {
  school: string;
  degree: string;
  year: string;
  location?: string;
  description: string;
  logo?: string;
};

export type Career = {
  role: string; // เช่น Full Stack Developer
  company: string; // ชื่อบริษัท
  logo?: string; // โลโก้บริษัท (icon ซ้ายมือ)
  location: string; // สถานที่ตั้ง
  start: string; // วันเริ่ม (เช่น "Jan 2023")
  end: string; // วันสิ้นสุด (เช่น "May 2023" หรือ "Present")
  duration?: string; // ระยะเวลา (เช่น "5 mos")
  type: string; // ประเภทงาน (เช่น "Internship", "Full-time")
  mode: string; // รูปแบบการทำงาน (เช่น "Onsite", "Remote", "Hybrid")
  description: string[]; // เป็น Array เพื่อทำ Bullet Point
  current?: boolean; // ทำงานอยู่ที่นี่หรือไม่
};
