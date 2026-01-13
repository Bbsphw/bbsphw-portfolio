// src/types/index.ts

import { ReactNode } from "react";

export type ProjectCategory =
  | "Web App"
  | "Mobile App"
  | "Embedded / IoT"
  | "Enterprise"
  | "Others";

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

  technologies: { name: string; icon: ReactNode }[];

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
  icon: ReactNode;
};

export type Achievement = {
  id: string; 
  type: "certification" | "badge" | "awards";
  title: string;
  organization: string;
  image: string;
  link?: string;
  date: string;
  description?: string;
  skills?: string[];
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
