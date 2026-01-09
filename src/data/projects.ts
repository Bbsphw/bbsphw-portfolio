// src/data/projects.ts

import { Project } from "@/types";

export const projects: Project[] = [
  {
    title: "sophonwit.site",
    description: "Personal website & portfolio, built from scratch",
    technologies: [
      "/tech/next-js-svgrepo-com.svg",
      "/tech/tailwind-css-svgrepo-com.svg",
      "/tech/typescript-icon-svgrepo-com.svg",
      "/tech/react-svgrepo-com.svg",
    ],
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    link: "https://satriabahari.site",
    featured: true,
  },
  {
    title: "Berbagi.link",
    description: "A mini-website platform for online presence",
    technologies: [
      "/tech/next-js-svgrepo-com.svg",
      "/tech/tailwind-css-svgrepo-com.svg",
      "/tech/typescript-icon-svgrepo-com.svg",
      "/tech/react-svgrepo-com.svg",
    ],
    tags: ["Next.js", "Full Stack", "Prisma", "PostgreSQL"], 
    link: "https://berbagi.link",
  },
];
