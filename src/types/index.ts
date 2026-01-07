// src/types/index.ts

import { ReactNode } from "react";

export type Project = {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  featured?: boolean;
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
