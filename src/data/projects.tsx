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
  SiPython,
  SiOpencv,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiAuth0,
} from "react-icons/si";

import {
  FaMobileAlt,
  FaServer,
  FaDatabase,
  FaChartLine,
  FaCamera,
  FaFileInvoiceDollar,
  FaBrain,
} from "react-icons/fa";

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
    link: "https://bbsphw-portfolio.vercel.app/",
    githubUrl: "https://github.com/Bbsphw/bbsphw-portfolio",
    featured: true,
    image:
      "https://res.cloudinary.com/bbsphw/image/upload/v1768290030/hero-section-desktop_kmigsn.png",
    gallery: [
      "https://res.cloudinary.com/bbsphw/image/upload/v1768290034/about-skills-animation_meko7b.png",
      "https://res.cloudinary.com/bbsphw/image/upload/v1768290031/projects-grid-view_idr87q.png",
      "https://res.cloudinary.com/bbsphw/image/upload/v1768290040/projects-detail-grid-view_lfi88f.png",
      "https://res.cloudinary.com/bbsphw/image/upload/v1768290033/contact-gird-view_og1gtn.png",
      "https://res.cloudinary.com/bbsphw/image/upload/v1768291199/mb-appside-bar_vls3lq.jpg",
      "https://res.cloudinary.com/bbsphw/image/upload/v1768291200/mb-hero-section-view_enfhyz.jpg",
    ],
  },

  // // ----------------------------------------------------------------
  // // PROJECT 2: WarehouseFlow ERP
  // // ----------------------------------------------------------------
  // {
  //   id: "proj-warehouse-erp",
  //   slug: "warehouse-erp-system",
  //   title: "WarehouseFlow ERP",
  //   category: "Enterprise",
  //   description:
  //     "A comprehensive Invoice & Warehouse management system integrating with Oracle ERP for real-time stock tracking.",
  //   role: "Full Stack Developer",
  //   date: "Nov 2024 - Dec 2024",
  //   overview:
  //     "WarehouseFlow is a bespoke internal tool designed to streamline the 'Invoice-packing_list' generation and warehouse stock management. It bridges the gap between the physical warehouse operations and the central Oracle ERP system. The system handles Debit/Credit note reporting, picking lists generation, and real-time inventory synchronization.",
  //   features: [
  //     "Automated Invoice E (Export) & P (Picking) generation",
  //     "Real-time integration with Oracle ERP database",
  //     "Debit/Credit Note (CN/DN) Report Management",
  //     "Role-based Access Control (RBAC) for staff and managers",
  //     "PDF Export functionality for official documents",
  //   ],
  //   challenges: [
  //     {
  //       problem:
  //         "Syncing massive datasets from the legacy Oracle database caused timeouts.",
  //       solution:
  //         "Implemented database chunking and optimized SQL queries. Used Laravel Queues to handle heavy synchronization tasks in the background without blocking the UI.",
  //     },
  //     {
  //       problem: "Complex dynamic forms for invoice line items.",
  //       solution:
  //         "Leveraged Laravel Livewire to create reactive, dynamic forms that allow users to add/remove rows and calculate totals instantly without full page reloads.",
  //     },
  //   ],
  //   technologies: [
  //     { name: "Laravel", icon: <SiLaravel className="text-red-600" /> },
  //     { name: "PHP", icon: <SiPhp className="text-indigo-400" /> },
  //     { name: "Livewire", icon: <FaServer className="text-pink-500" /> },
  //     { name: "Oracle DB", icon: <SiOracle className="text-red-500" /> },
  //     { name: "Docker", icon: <SiDocker className="text-blue-500" /> },
  //   ],
  //   tags: ["Laravel", "Livewire", "PHP", "Oracle DB", "Tailwind CSS"],
  //   // githubUrl: "https://github.com/Bbsphw/iwms-system",
  //   featured: true,
  //   image:
  //     "https://res.cloudinary.com/bbsphw/image/upload/v1768376571/dashboard-overview-analytics_noy0kq.png",
  //   gallery: [
  //     "https://res.cloudinary.com/bbsphw/image/upload/v1768376573/login-screen_joxbhj.png",
  //     "https://res.cloudinary.com/bbsphw/image/upload/v1768376572/register-screen_e4gg04.png",
  //     "https://res.cloudinary.com/bbsphw/image/upload/v1768376569/forget-screen_bltqrn.png",
  //     "https://res.cloudinary.com/bbsphw/image/upload/v1768376566/invoice-e-screen_ay9kf7.png",
  //     "https://res.cloudinary.com/bbsphw/image/upload/v1768376565/invoice-e-add_txxpib.png",
  //     "https://res.cloudinary.com/bbsphw/image/upload/v1768376567/invoice-p-screen_vtqezn.png",
  //     "https://res.cloudinary.com/bbsphw/image/upload/v1768376572/invoice-p-create_d6cdws.png",
  //     "https://res.cloudinary.com/bbsphw/image/upload/v1768376565/invoice-p-import_tdb2gn.png",
  //     "https://res.cloudinary.com/bbsphw/image/upload/v1768376567/invoice-p-search_y9lv8h.png",
  //     "https://res.cloudinary.com/bbsphw/image/upload/v1768376580/report-dncn-screen_st08zn.png",
  //     "https://res.cloudinary.com/bbsphw/image/upload/v1768376568/acc-manage_a7wbdv.png",
  //     "https://res.cloudinary.com/bbsphw/image/upload/v1768376575/master-com_hybzm9.png",
  //     "https://res.cloudinary.com/bbsphw/image/upload/v1768376570/master-cus_tsrcqq.png",
  //     "https://res.cloudinary.com/bbsphw/image/upload/v1768376571/master-product_qyrok0.png",
  //   ],
  // },

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
    // link: "https://expo.dev/@bbsphw/bunlux-nail",
    githubUrl: "https://github.com/Bbsphw/bunluxnail-mobile",
    featured: false,
    image:
      "https://res.cloudinary.com/bbsphw/image/upload/v1768377808/chat-maps_gavksq.png",
    gallery: [
      "https://res.cloudinary.com/bbsphw/image/upload/v1768377814/sign-in_q5uyjm.png",
      "https://res.cloudinary.com/bbsphw/image/upload/v1768377816/sign-up_bb4cjs.png",
      "https://res.cloudinary.com/bbsphw/image/upload/v1768377808/create-user_zlgwsf.png",
      "https://res.cloudinary.com/bbsphw/image/upload/v1768377819/verify-user_pjsbcx.png",
      "https://res.cloudinary.com/bbsphw/image/upload/v1768377808/forget_xj0cge.png",
      "https://res.cloudinary.com/bbsphw/image/upload/v1768377807/chat-ai_ivvbcv.jpg",
      "https://res.cloudinary.com/bbsphw/image/upload/v1768377808/select-day_q7tjcg.png",
    ],
  },

  // ----------------------------------------------------------------
  // PROJECT 4: MonkPad Finance
  // ----------------------------------------------------------------
  {
    id: "proj-monkpad",
    slug: "monkpad-finance-tracker",
    title: "MonkPad Finance",
    category: "Web App",
    description:
      "A smart financial management platform featuring OCR slip scanning and automated expense tracking.",
    role: "Frontend Developer",
    date: "July 2024 - Aug 2024",
    overview:
      "MonkPad is a personal finance application designed to simplify expense tracking. It solves the tedium of manual data entry by implementing OCR (Optical Character Recognition) to scan transaction slips and automatically categorize expenses. The dashboard provides clear visualization of spending habits and monthly reports.",
    features: [
      "Smart Slip Scanning with OCR Integration",
      "Interactive Dashboard with Spending Trends",
      "Transaction Management & Categorization",
      "Monthly & Yearly Financial Reports",
      "Secure Authentication & User Profile Management",
    ],
    challenges: [
      {
        problem: "Accurately parsing text from diverse slip formats.",
        solution:
          "Implemented a custom parsing logic post-OCR to identify key information like date, amount, and merchant from unstructured text data.",
      },
      {
        problem: "Visualizing financial data effectively.",
        solution:
          "Integrated Chart.js/Recharts to create interactive bar and pie charts that allow users to drill down into specific spending categories.",
      },
    ],
    technologies: [
      {
        name: "Next.js",
        icon: <SiNextdotjs className="text-black dark:text-white" />,
      },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="text-cyan-500" />,
      },
      { name: "OCR", icon: <FaFileInvoiceDollar className="text-green-500" /> },
      { name: "Recharts", icon: <FaChartLine className="text-orange-500" /> },
    ],
    tags: ["Next.js", "Finance", "OCR", "Dashboard", "TypeScript"],
    githubUrl: "https://github.com/Bbsphw/monkpad-frontend",
    link: "https://youtu.be/hjAAhFDxCyQ",
    featured: false,
    image:
      "https://res.cloudinary.com/bbsphw/image/upload/v1768356580/landing-page-hero_apxmqd.png",
    gallery: [
      "https://res.cloudinary.com/bbsphw/image/upload/v1768356580/login-in-view_q0lgvz.png",
      "https://res.cloudinary.com/bbsphw/image/upload/v1768356579/resgiter-view_ksemib.png",
      "https://res.cloudinary.com/bbsphw/image/upload/v1768356579/dashboard-analytics_uwddn6.png",
      "https://res.cloudinary.com/bbsphw/image/upload/v1768356581/upload-slip-ocr_gqibnf.png",
      "https://res.cloudinary.com/bbsphw/image/upload/v1768356580/transaction-list_bjsedj.png",
      "https://res.cloudinary.com/bbsphw/image/upload/v1768356583/reports-view_gjpd2e.png",
    ],
  },

  // ----------------------------------------------------------------
  // PROJECT 5: SE Admin Dashboard (TiawPao)
  // ----------------------------------------------------------------
  {
    id: "proj-se-dashboard",
    slug: "tiawpao-admin-dashboard",
    title: "TiawPao Admin Dashboard",
    category: "Web App",
    description:
      "A comprehensive admin interface for the 'TiawPao' travel application, managing users, content, and system analytics.",
    role: "Frontend Developer",
    date: "Aug 2024 - Sep 2024",
    overview:
      "This project serves as the backend control panel for the TiawPao travel platform. It empowers administrators to manage user accounts, monitor system health, and analyze trip planning trends. The dashboard is built for scalability and ease of use, featuring advanced filtering and real-time data visualization.",
    features: [
      "Comprehensive User Management System (CRUD)",
      "Trip Plan Analytics & Popular Destinations",
      "System Health Monitoring & Logs",
      "Role-Based Access Control (Admin/Super Admin)",
      "User Demographics & Retention Analysis",
    ],
    challenges: [
      {
        problem: "Handling complex state for multi-step forms and filters.",
        solution:
          "Utilized React Hook Form with Zod validation to manage form state efficiently and ensure data integrity across the application.",
      },
      {
        problem: "Presenting complex user retention data clearly.",
        solution:
          "Designed custom chart components to visualize cohort analysis and user growth trends, making abstract data actionable for admins.",
      },
    ],
    technologies: [
      {
        name: "Next.js",
        icon: <SiNextdotjs className="text-black dark:text-white" />,
      },
      { name: "React", icon: <SiReact className="text-cyan-400" /> },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="text-cyan-500" />,
      },
      { name: "NextAuth", icon: <SiAuth0 className="text-purple-500" /> },
    ],
    tags: ["React", "Admin Panel", "Data Visualization", "Tailwind CSS"],
    githubUrl: "https://github.com/Bbsphw/se-frontend-dashboard",
    featured: true,
    image:
      "https://res.cloudinary.com/bbsphw/image/upload/v1768374285/group-view-1_umhdrs.jpg",
    gallery: [
      "https://res.cloudinary.com/bbsphw/image/upload/v1768374286/group-view-2_tzrxah.jpg",
      "https://res.cloudinary.com/bbsphw/image/upload/v1768374512/dashboard-overview-demo_v4fodr.jpg",
    ],
  },

  // ----------------------------------------------------------------
  // PROJECT 6: AI Workout Trainer
  // ----------------------------------------------------------------
  {
    id: "proj-cv-workout",
    slug: "ai-workout-assistant",
    title: "AI Workout Assistant",
    category: "Others",
    description:
      "A desktop application leveraging Computer Vision to provide real-time exercise form correction and rep counting.",
    role: "AI Developer",
    date: "May 2024 - June 2024",
    overview:
      "This project explores the intersection of fitness and AI using Python. By utilizing MediaPipe's Pose Estimation, the application detects key body landmarks from a webcam feed to analyze exercise mechanics. It accurately counts repetitions for exercises like Push-ups and Squats while providing visual feedback on form.",
    features: [
      "Real-time Human Pose Estimation",
      "Automatic Repetition Counting Logic",
      "Form Correction Feedback (e.g., 'Lower your hips')",
      "Angle Calculation for Joint Analysis",
      "User-friendly GUI built with CustomTkinter/PyQt",
    ],
    challenges: [
      {
        problem: "Inaccurate detection during fast movements.",
        solution:
          "implemented a smoothing algorithm for landmark coordinates and optimized confidence thresholds to reduce jitter.",
      },
      {
        problem: "Calculating rep states (UP/DOWN) reliably.",
        solution:
          "Developed a state machine logic based on calculated joint angles to prevent false positives in rep counting.",
      },
    ],
    technologies: [
      { name: "Python", icon: <SiPython className="text-yellow-500" /> },
      { name: "OpenCV", icon: <SiOpencv className="text-green-600" /> },
      { name: "MediaPipe", icon: <FaBrain className="text-teal-500" /> },
    ],
    tags: ["Computer Vision", "AI", "Python", "MediaPipe", "OpenCV"],
    githubUrl: "https://github.com/Bbsphw/cv-workout",
    featured: false,
    image:
      "https://res.cloudinary.com/bbsphw/image/upload/v1768373176/ai-pose-detection-cover_gdqztn.jpg",
    gallery: [
      "https://res.cloudinary.com/bbsphw/image/upload/v1768374539/test-pose-detection_hmmodt.jpg",
    ],
  },

  // ----------------------------------------------------------------
  // PROJECT 7: Legacy Portfolio
  // ----------------------------------------------------------------
  {
    id: "proj-legacy-portfolio",
    slug: "legacy-html-portfolio",
    title: "Legacy Portfolio",
    category: "Web App",
    description:
      "My first portfolio website built with raw HTML, CSS, and JavaScript, marking the beginning of my web dev journey.",
    role: "Frontend Developer",
    date: "Early 2024",
    overview:
      "This project represents my foundational step into web development. Hosted on GitHub Pages, it was built without any frameworks to understand the core concepts of the DOM, responsive design with media queries, and basic interactivity using Vanilla JavaScript.",
    features: [
      "Pure HTML5 & CSS3 Implementation",
      "Responsive Layout using CSS Grid/Flexbox",
      "Vanilla JavaScript for Mobile Menu & Interactions",
      "Hosted via GitHub Pages",
    ],
    challenges: [
      {
        problem: "Making the site responsive without a CSS framework.",
        solution:
          "Manually wrote media queries for various breakpoints to ensure the layout adapted correctly to mobile, tablet, and desktop screens.",
      },
    ],
    technologies: [
      { name: "HTML5", icon: <SiHtml5 className="text-orange-600" /> },
      { name: "CSS3", icon: <SiCss3 className="text-blue-500" /> },
      {
        name: "JavaScript",
        icon: <SiJavascript className="text-yellow-400" />,
      },
    ],
    tags: ["HTML", "CSS", "JavaScript", "GitHub Pages"],
    link: "https://bbsphw.github.io",
    githubUrl: "https://github.com/Bbsphw/bbsphw.github.io",
    featured: false,
    image:
      "https://res.cloudinary.com/bbsphw/image/upload/v1768358489/about-section_z0jcfd.png",
    gallery: [
      "https://res.cloudinary.com/bbsphw/image/upload/v1768358489/about-section_z0jcfd.png",
      "https://res.cloudinary.com/bbsphw/image/upload/v1768358489/contact-form_eidiyz.png",
    ],
  },
];
