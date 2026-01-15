// src/data/about.ts

import { Career, Education } from "@/types";

export const careerData: Career[] = [
  {
    id: "career-thai-summit",
    role: "Full Stack Developer (Internship)",
    company: "Thai Summit Harness Public Company Limited",
    logo: "/images/LOGO-TSH-SVG.svg",
    location: "Chonburi, Thailand",
    start: "Nov 2024", // อิงตามวันที่ของ Project WarehouseFlow (Nov-Dec)
    end: "Mar 2025", // ปรับให้สอดคล้องกับระยะเวลา 4 เดือน (หรือแก้ตามจริง)
    duration: "4 mos",
    type: "Internship",
    mode: "Onsite",
    current: true, // ปรับเป็น false ถ้าจบแล้ว หรือ true ถ้ายังทำอยู่
    description: [
      // ✅ Key Contribution: บอกโปรเจกต์หลักที่ทำ
      "Developed 'WarehouseFlow ERP', a bespoke internal system designed to bridge physical warehouse operations with the legacy Oracle ERP.",

      // ✅ Tech Stack & Features: ระบุเทคโนโลยีและฟีเจอร์หลัก
      "Built the full-stack architecture using Laravel (PHP), Livewire, and Oracle DB to automate Invoice (Export/Picking) generation and Debit/Credit Note reporting.",

      // ✅ Problem Solving (Performance): เรื่องการแก้ปัญหา Timeout
      "Resolved legacy database timeout issues by implementing chunking strategies and utilizing Laravel Queues for background synchronization of massive datasets.",

      // ✅ Impact: ผลลัพธ์ที่ได้
      "Implemented Role-Based Access Control (RBAC) and PDF export features, streamlining the workflow and significantly reducing manual data entry errors.",
    ],
  },
];

export const educationData: Education[] = [
  {
    id: "edu-kasetsart",
    school: "Kasetsart University, Sriracha Campus",
    degree: "Bachelor of Engineering in Computer and Information Engineering",
    year: "May 2022 - Present",
    location: "Chonburi, Thailand",
    description:
      "Focusing on Software Engineering, Web Technologies, and System Architecture.",
    logo: "/images/kusrc-logo.png",
  },
  {
    id: "edu-prakhanong",
    school: "Prakhanongpittayalai School",
    degree: "High School Diploma (Science-Mathematics Program)",
    year: "May 2019 - Mar 2022",
    location: "Bangkok, Thailand",
    description:
      "Completed Science and Mathematics program with a focus on logic and calculation foundations.",
    logo: "/images/pk-logo.png",
  },
  {
    id: "edu-phramae",
    school: "Phramae Maree Phrakhanong School",
    degree: "Primary & Junior High School Diploma",
    year: "May 2008 - Mar 2019",
    location: "Bangkok, Thailand",
    description:
      "Built a strong foundation in basic education and extracurricular activities.",
    logo: "/images/pmk-logo.jpeg",
  },
];
