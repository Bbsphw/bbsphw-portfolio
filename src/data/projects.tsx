// src/data/projects.tsx

import { Project } from "@/types";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiReact,
  SiPrisma,
  SiPostgresql,
  SiLaravel,
  SiPhp,
  SiDocker,
  SiOracle,
  SiExpo,
  SiSupabase,
  SiGit,
} from "react-icons/si";
import { FaMobileAlt, FaServer, FaDatabase } from "react-icons/fa";

export const projects: Project[] = [
  // ----------------------------------------------------------------
  // PROJECT 1: Personal Portfolio
  // ----------------------------------------------------------------
  {
    id: "proj-portfolio",
    slug: "sophonwit-portfolio",
    title: "Sophonwit Portfolio",
    category: "Web App",
    description:
      "A modern, high-performance personal portfolio website built to showcase my development journey and projects.",
    role: "Frontend Developer",
    date: "Jan 2025 - Present",
    overview:
      "This portfolio was crafted from scratch to demonstrate proficiency in modern frontend technologies. It serves as a central hub for my professional identity, featuring a dynamic project showcase, detailed case studies, and an interactive UI. The goal was to achieve a perfect 100 Lighthouse score while maintaining a rich user experience.",
    features: [
      "Responsive Design with Mobile-first approach",
      "Interactive Gallery with Shared Element Transitions",
      "Dynamic Project Filtering via URL Search Params",
      "Dark/Light mode support with system detection",
      "SEO Optimized metadata and Open Graph tags",
    ],
    challenges: [
      {
        problem:
          "Implementing smooth page transitions without hurting performance.",
        solution:
          "Utilized `framer-motion`'s AnimatePresence for exit animations and optimized component mounting to ensure 60fps transitions.",
      },
      {
        problem: "Managing state for complex filters and shareable links.",
        solution:
          "Moved state management to the URL using Next.js `useSearchParams`. This allows users to bookmark or share specific filtered views of the portfolio.",
      },
    ],
    technologies: [
      {
        name: "Next.js",
        icon: <SiNextdotjs className="text-black dark:text-white" />,
      },
      { name: "React", icon: <SiReact className="text-cyan-400" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="text-cyan-500" />,
      },
    ],
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    link: "https://sophonwit.site",
    githubUrl: "https://github.com/Bbsphw/portfolio",
    featured: true,
    image: "https://placehold.co/1200x675/1a1a1a/FFF.png?text=Portfolio+Cover",
    gallery: [
      "https://placehold.co/1200x675/202020/FFF.png?text=Portfolio+Home+Screen",
      "https://placehold.co/1200x675/202020/FFF.png?text=Projects+Grid+View",
      "https://placehold.co/1200x675/202020/FFF.png?text=Contact+Page+Design",
    ],
  },

  // ----------------------------------------------------------------
  // PROJECT 2: WarehouseFlow ERP
  // ----------------------------------------------------------------
  {
    id: "proj-warehouse-erp",
    slug: "warehouse-erp-system",
    title: "WarehouseFlow ERP",
    category: "Enterprise",
    description:
      "A comprehensive Invoice & Warehouse management system integrating with Oracle ERP for real-time stock tracking.",
    role: "Full Stack Developer",
    date: "Nov 2024 - Dec 2024",
    overview:
      "WarehouseFlow is a bespoke internal tool designed to streamline the 'Invoice-packing_list' generation and warehouse stock management. It bridges the gap between the physical warehouse operations and the central Oracle ERP system. The system handles Debit/Credit note reporting, picking lists generation, and real-time inventory synchronization.",
    features: [
      "Automated Invoice E (Export) & P (Picking) generation",
      "Real-time integration with Oracle ERP database",
      "Debit/Credit Note (CN/DN) Report Management",
      "Role-based Access Control (RBAC) for staff and managers",
      "PDF Export functionality for official documents",
    ],
    challenges: [
      {
        problem:
          "Syncing massive datasets from the legacy Oracle database caused timeouts.",
        solution:
          "Implemented database chunking and optimized SQL queries. Used Laravel Queues to handle heavy synchronization tasks in the background without blocking the UI.",
      },
      {
        problem: "Complex dynamic forms for invoice line items.",
        solution:
          "Leveraged Laravel Livewire to create reactive, dynamic forms that allow users to add/remove rows and calculate totals instantly without full page reloads.",
      },
    ],
    technologies: [
      { name: "Laravel", icon: <SiLaravel className="text-red-600" /> },
      { name: "PHP", icon: <SiPhp className="text-indigo-400" /> },
      { name: "Livewire", icon: <FaServer className="text-pink-500" /> },
      { name: "Oracle DB", icon: <SiOracle className="text-red-500" /> },
      { name: "Docker", icon: <SiDocker className="text-blue-500" /> },
    ],
    tags: ["Laravel", "Livewire", "PHP", "Oracle DB", "Tailwind CSS"],
    githubUrl: "https://github.com/Bbsphw/warehouse-erp",
    featured: true,
    image:
      "https://placehold.co/1200x675/1e3a8a/FFF.png?text=Warehouse+ERP+Cover",
    gallery: [
      "https://placehold.co/1200x675/2563eb/FFF.png?text=Dashboard+Overview",
      "https://placehold.co/1200x675/2563eb/FFF.png?text=Stock+Management+Table",
      "https://placehold.co/1200x675/2563eb/FFF.png?text=Invoice+Generation+Form",
      "https://placehold.co/1200x675/2563eb/FFF.png?text=PDF+Report+Preview",
    ],
  },

  // ----------------------------------------------------------------
  // PROJECT 3: BunLux Nail
  // ----------------------------------------------------------------
  {
    id: "proj-bunlux-mobile",
    slug: "bunlux-nail-mobile",
    title: "BunLux Nail Booking",
    category: "Mobile App",
    description:
      "A cross-platform mobile application for booking nail salon appointments and browsing style catalogs.",
    role: "Mobile Developer",
    date: "Sep 2024 - Oct 2024",
    overview:
      "BunLux Nail is a customer-facing mobile application built with React Native and Expo. It solves the problem of manual booking management via phone calls. Users can browse nail art styles, check technician availability in real-time, and book appointments. The app utilizes NativeWind for consistent styling across iOS and Android.",
    features: [
      "Cross-platform support (iOS & Android) using Expo",
      "Real-time Appointment Booking System",
      "Interactive Nail Art Gallery",
      "Push Notifications for appointment reminders",
      "User Authentication and Booking History",
    ],
    challenges: [
      {
        problem:
          "Achieving consistent styling on both iOS and Android platforms.",
        solution:
          "Adopted `NativeWind` to use Tailwind CSS classes within React Native components, ensuring a unified design system while maintaining native performance.",
      },
      {
        problem: "Handling complex navigation flows (Tabs inside Stacks).",
        solution:
          "Implemented `Expo Router` (file-based routing) to manage nested navigation structures intuitively, similar to Next.js routing.",
      },
    ],
    technologies: [
      { name: "React Native", icon: <SiReact className="text-cyan-400" /> },
      { name: "Expo", icon: <SiExpo className="text-black dark:text-white" /> },
      { name: "Supabase", icon: <SiSupabase className="text-green-500" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
      { name: "Mobile", icon: <FaMobileAlt className="text-purple-500" /> },
    ],
    tags: ["React Native", "Expo", "NativeWind", "Mobile", "TypeScript"],
    link: "https://expo.dev/@bbsphw/bunlux-nail",
    githubUrl: "https://github.com/Bbsphw/bunluxnail-mobile",
    featured: false,
    image: "https://placehold.co/1200x675/831843/FFF.png?text=BunLux+App+Cover",
    gallery: [
      "https://placehold.co/1200x675/db2777/FFF.png?text=App+Home+Screen",
      "https://placehold.co/1200x675/db2777/FFF.png?text=Booking+Flow",
      "https://placehold.co/1200x675/db2777/FFF.png?text=Nail+Art+Gallery",
      "https://placehold.co/1200x675/db2777/FFF.png?text=User+Profile",
    ],
  },
];
