// src/data/achievements.ts

import { Achievement } from "@/types";

export const achievements: Achievement[] = [
  {
    id: "aws-cert-2024", 
    type: "certification",
    title: "AWS Certified",
    organization: "Amazon Web Services",
    image: "/vercel.svg",
    link: "https://example.com/certificate",
    date: "2024-01-01",
  },
  {
    id: "badge-opensource-2024", 
    type: "badge",
    title: "Open Source Contributor",
    organization: "GitHub",
    image: "/vercel.svg",
    link: "https://example.com/certificate",
    date: "2024-01-01",
  },
  {
    id: "award-bestdev-2024", 
    type: "awards",
    title: "Best Dev 2024",
    organization: "Tech Awards",
    image: "/vercel.svg",
    link: "https://example.com/certificate",
    date: "2024-01-01",
  },
];
