// src/data/about.ts

import { Career, Education } from "@/types";

export const careerData: Career[] = [
  {
    id: "career-thai-summit", 
    role: "Full Stack Developer",
    company: "Thai Summit Harness Public Company Limited",
    logo: "/images/LOGO-TSH-SVG.svg",
    location: "Chonburi, Thailand",
    start: "Nov 2025",
    end: "Present",
    duration: "4 mos",
    type: "Internship",
    mode: "Onsite",
    current: true,
    description: [
      "Designed and developed a responsive web application using Next.js and Tailwind CSS.",
      "Collaborated with the backend team to integrate RESTful APIs.",
      "Optimized website performance, reducing load time by 40%.",
      "Participated in daily stand-up meetings and agile development processes.",
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
