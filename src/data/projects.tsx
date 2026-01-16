// src/data/projects.tsx

import { LocalizedData, Project } from "@/types";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiReact,
  SiLaravel,
  SiPhp,
  SiDocker,
  SiOracle,
  SiExpo,
  SiSupabase,
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
  FaChartLine,
  FaFileInvoiceDollar,
  FaBrain,
} from "react-icons/fa";

// Tech stack objects to reuse (ลดการเขียนซ้ำ)
const techStack = {
  nextjs: {
    name: "Next.js",
    icon: <SiNextdotjs className="text-black dark:text-white" />,
  },
  react: { name: "React", icon: <SiReact className="text-cyan-400" /> },
  ts: { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
  tailwind: {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="text-cyan-500" />,
  },
  laravel: { name: "Laravel", icon: <SiLaravel className="text-red-600" /> },
  php: { name: "PHP", icon: <SiPhp className="text-indigo-400" /> },
  livewire: { name: "Livewire", icon: <FaServer className="text-pink-500" /> },
  oracle: { name: "Oracle DB", icon: <SiOracle className="text-red-500" /> },
  docker: { name: "Docker", icon: <SiDocker className="text-blue-500" /> },
  expo: {
    name: "Expo",
    icon: <SiExpo className="text-black dark:text-white" />,
  },
  supabase: {
    name: "Supabase",
    icon: <SiSupabase className="text-green-500" />,
  },
  mobile: { name: "Mobile", icon: <FaMobileAlt className="text-purple-500" /> },
  ocr: {
    name: "OCR",
    icon: <FaFileInvoiceDollar className="text-green-500" />,
  },
  recharts: {
    name: "Recharts",
    icon: <FaChartLine className="text-orange-500" />,
  },
  auth0: { name: "NextAuth", icon: <SiAuth0 className="text-purple-500" /> },
  python: { name: "Python", icon: <SiPython className="text-yellow-500" /> },
  opencv: { name: "OpenCV", icon: <SiOpencv className="text-green-600" /> },
  mediapipe: { name: "MediaPipe", icon: <FaBrain className="text-teal-500" /> },
  html: { name: "HTML5", icon: <SiHtml5 className="text-orange-600" /> },
  css: { name: "CSS3", icon: <SiCss3 className="text-blue-500" /> },
  js: {
    name: "JavaScript",
    icon: <SiJavascript className="text-yellow-400" />,
  },
};

export const projectsData: LocalizedData<Project[]> = {
  en: [
    // ---------------- PROJECT 1: Portfolio (EN) ----------------
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
        techStack.nextjs,
        techStack.react,
        techStack.ts,
        techStack.tailwind,
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
    // ---------------- PROJECT 3: BunLux Nail (EN) ----------------
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
        techStack.react,
        techStack.expo,
        techStack.supabase,
        techStack.ts,
        techStack.mobile,
      ],
      tags: ["React Native", "Expo", "NativeWind", "Mobile", "TypeScript"],
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
    // ---------------- PROJECT 4: MonkPad Finance (EN) ----------------
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
        techStack.nextjs,
        techStack.ts,
        techStack.tailwind,
        techStack.ocr,
        techStack.recharts,
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
    // ---------------- PROJECT 5: TiawPao Dashboard (EN) ----------------
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
        techStack.nextjs,
        techStack.react,
        techStack.tailwind,
        techStack.auth0,
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
    // ---------------- PROJECT 6: AI Workout (EN) ----------------
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
      technologies: [techStack.python, techStack.opencv, techStack.mediapipe],
      tags: ["Computer Vision", "AI", "Python", "MediaPipe", "OpenCV"],
      githubUrl: "https://github.com/Bbsphw/cv-workout",
      featured: false,
      image:
        "https://res.cloudinary.com/bbsphw/image/upload/v1768373176/ai-pose-detection-cover_gdqztn.jpg",
      gallery: [
        "https://res.cloudinary.com/bbsphw/image/upload/v1768374539/test-pose-detection_hmmodt.jpg",
      ],
    },
    // ---------------- PROJECT 7: Legacy Portfolio (EN) ----------------
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
      technologies: [techStack.html, techStack.css, techStack.js],
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
  ],

  // =================================================================
  // THAI (TH) PROJECTS
  // =================================================================
  th: [
    {
      id: "proj-portfolio",
      slug: "sophonwit-portfolio",
      title: "เว็บไซต์พอร์ตโฟลิโอส่วนตัว",
      category: "Web App",
      description:
        "เว็บไซต์พอร์ตโฟลิโอที่ทันสมัยและมีประสิทธิภาพสูง พัฒนาขึ้นเพื่อแสดงเส้นทางการเป็นนักพัฒนาและผลงานต่างๆ ของผม",
      role: "Frontend Developer",
      date: "ม.ค. 2568 - ปัจจุบัน",
      overview:
        "พอร์ตโฟลิโอนี้ถูกสร้างขึ้นจากศูนย์เพื่อแสดงความเชี่ยวชาญในเทคโนโลยี Frontend สมัยใหม่ เป็นศูนย์กลางข้อมูลทางวิชาชีพของผม โดยมีฟีเจอร์การแสดงผลงานแบบไดนามิก กรณีศึกษาที่ละเอียด และ UI ที่โต้ตอบได้ลื่นไหล เป้าหมายคือการทำคะแนน Lighthouse ให้ได้ 100 เต็ม พร้อมมอบประสบการณ์การใช้งานที่ดีเยี่ยม",
      features: [
        "การออกแบบ Responsive รองรับ Mobile-first",
        "แกลเลอรีแบบ Interactive พร้อม Shared Element Transitions",
        "ระบบกรองโปรเจกต์แบบไดนามิกผ่าน URL Search Params",
        "รองรับ Dark/Light mode ตามการตั้งค่าระบบ",
        "SEO Optimized ด้วย Metadata และ Open Graph tags",
      ],
      challenges: [
        {
          problem: "การทำ Page Transitions ให้ลื่นไหลโดยไม่กระทบประสิทธิภาพ",
          solution:
            "ใช้ AnimatePresence ของ `framer-motion` สำหรับ exit animations และปรับปรุงการ mount component ให้ได้เฟรมเรต 60fps",
        },
        {
          problem: "การจัดการ State สำหรับตัวกรองที่ซับซ้อนและแชร์ลิงก์ได้",
          solution:
            "ย้ายการจัดการ State ไปไว้ที่ URL โดยใช้ `useSearchParams` ของ Next.js ทำให้ผู้ใช้สามารถ Bookmark หรือแชร์หน้าที่กรองข้อมูลแล้วได้",
        },
      ],
      technologies: [
        techStack.nextjs,
        techStack.react,
        techStack.ts,
        techStack.tailwind,
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
    // Project 3: BunLux (TH)
    {
      id: "proj-bunlux-mobile",
      slug: "bunlux-nail-mobile",
      title: "แอพจองคิวร้านทำเล็บ BunLux",
      category: "Mobile App",
      description:
        "แอปพลิเคชันมือถือ Cross-platform สำหรับจองคิวทำเล็บและเลือกดูลายเล็บ",
      role: "Mobile Developer",
      date: "ก.ย. 2567 - ต.ค. 2567",
      overview:
        "BunLux Nail เป็นแอปพลิเคชันสำหรับลูกค้าที่สร้างด้วย React Native และ Expo เพื่อแก้ปัญหาการจัดการคิวจองที่ยุ่งยากผ่านโทรศัพท์ ผู้ใช้สามารถเลือกลายเล็บ ตรวจสอบคิวช่างว่างแบบ Real-time และจองคิวได้ทันที แอปใช้ NativeWind เพื่อให้ดีไซน์สวยงามและสม่ำเสมอทั้งบน iOS และ Android",
      features: [
        "รองรับทั้ง iOS และ Android ด้วย Expo",
        "ระบบจองคิวแบบ Real-time",
        "แกลเลอรีลายเล็บแบบ Interactive",
        "ระบบแจ้งเตือน (Push Notifications) เตือนนัดหมาย",
        "ระบบสมาชิกและประวัติการจอง",
      ],
      challenges: [
        {
          problem: "การทำให้ดีไซน์เหมือนกันเป๊ะทั้งบน iOS และ Android",
          solution:
            "ใช้ `NativeWind` เพื่อเขียน Tailwind CSS ใน React Native ทำให้ควบคุม Design System ได้ง่ายและได้ประสิทธิภาพแบบ Native",
        },
        {
          problem: "การจัดการ Navigation ที่ซับซ้อน (Tabs ซ้อนอยู่ใน Stacks)",
          solution:
            "ใช้ `Expo Router` (File-based routing) เพื่อจัดการโครงสร้าง Navigation ให้เข้าใจง่าย คล้ายกับการเขียนเว็บด้วย Next.js",
        },
      ],
      technologies: [
        techStack.react,
        techStack.expo,
        techStack.supabase,
        techStack.ts,
        techStack.mobile,
      ],
      tags: ["React Native", "Expo", "NativeWind", "Mobile", "TypeScript"],
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
    // Project 4: MonkPad (TH)
    {
      id: "proj-monkpad",
      slug: "monkpad-finance-tracker",
      title: "MonkPad ระบบจัดการการเงิน",
      category: "Web App",
      description:
        "แพลตฟอร์มจัดการการเงินอัจฉริยะ พร้อมฟีเจอร์สแกนสลิปด้วย OCR และบันทึกรายจ่ายอัตโนมัติ",
      role: "Frontend Developer",
      date: "ก.ค. 2567 - ส.ค. 2567",
      overview:
        "MonkPad เป็นเว็บแอปพลิเคชันสำหรับจัดการการเงินส่วนบุคคล ออกแบบมาเพื่อลดความยุ่งยากในการบันทึกรายจ่ายด้วยมือ โดยใช้เทคโนโลยี OCR สแกนสลิปโอนเงินและแยกหมวดหมู่ค่าใช้จ่ายให้อัตโนมัติ พร้อม Dashboard แสดงกราฟสรุปพฤติกรรมการใช้จ่าย",
      features: [
        "สแกนสลิปอัจฉริยะด้วย OCR",
        "Dashboard แสดงแนวโน้มการใช้จ่ายแบบ Interactive",
        "ระบบจัดการและแยกหมวดหมู่รายการ",
        "รายงานการเงินรายเดือนและรายปี",
        "ระบบสมาชิกและการยืนยันตัวตนที่ปลอดภัย",
      ],
      challenges: [
        {
          problem: "การดึงข้อมูลตัวอักษรจากสลิปที่มีรูปแบบหลากหลาย",
          solution:
            "พัฒนาระบบ Parsing Logic หลังทำ OCR เพื่อดึงข้อมูลสำคัญ เช่น วันที่ จำนวนเงิน และชื่อร้านค้า จากข้อความที่ไม่มีโครงสร้างแน่นอน",
        },
        {
          problem: "การแสดงข้อมูลการเงินให้เข้าใจง่าย",
          solution:
            "ใช้ Chart.js/Recharts สร้างกราฟแท่งและกราฟวงกลมที่โต้ตอบได้ ช่วยให้ผู้ใช้เจาะลึกดูรายละเอียดแต่ละหมวดหมู่ได้สะดวก",
        },
      ],
      technologies: [
        techStack.nextjs,
        techStack.ts,
        techStack.tailwind,
        techStack.ocr,
        techStack.recharts,
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
    // Project 5: TiawPao (TH)
    {
      id: "proj-se-dashboard",
      slug: "tiawpao-admin-dashboard",
      title: "TiawPao Admin Dashboard",
      category: "Web App",
      description:
        "ระบบหลังบ้านสำหรับแอปพลิเคชันท่องเที่ยว 'เที่ยวเป๋า' จัดการผู้ใช้งาน เนื้อหา และวิเคราะห์ข้อมูล",
      role: "Frontend Developer",
      date: "ส.ค. 2567 - ก.ย. 2567",
      overview:
        "โปรเจกต์นี้เป็นแผงควบคุม (Control Panel) สำหรับผู้ดูแลระบบแอปเที่ยวเป๋า ช่วยให้แอดมินจัดการบัญชีผู้ใช้ ตรวจสอบสถานะระบบ และวิเคราะห์เทรนด์การวางแผนท่องเที่ยว Dashboard ถูกออกแบบมาให้รองรับข้อมูลจำนวนมาก (Scalability) และใช้งานง่าย พร้อมการแสดงผลข้อมูลแบบ Real-time",
      features: [
        "ระบบจัดการผู้ใช้งานครบวงจร (CRUD)",
        "วิเคราะห์ข้อมูลแผนการท่องเที่ยวและสถานที่ยอดนิยม",
        "ตรวจสอบสถานะระบบและ Logs",
        "ระบบจัดการสิทธิ์ผู้ดูแล (Admin/Super Admin)",
        "วิเคราะห์ข้อมูลประชากรและการใช้งานของผู้ใช้ (Retention)",
      ],
      challenges: [
        {
          problem: "การจัดการ State ของฟอร์มและตัวกรองที่ซับซ้อน",
          solution:
            "ใช้ React Hook Form ร่วมกับ Zod validation เพื่อจัดการ State ของฟอร์มอย่างมีประสิทธิภาพและตรวจสอบความถูกต้องของข้อมูล",
        },
        {
          problem: "การนำเสนอข้อมูล Retention ที่ซับซ้อนให้เข้าใจง่าย",
          solution:
            "ออกแบบ Component กราฟขึ้นมาใหม่เพื่อแสดงผล Cohort Analysis และแนวโน้มการเติบโตของผู้ใช้ ให้แอดมินนำข้อมูลไปใช้ต่อได้ง่าย",
        },
      ],
      technologies: [
        techStack.nextjs,
        techStack.react,
        techStack.tailwind,
        techStack.auth0,
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
    // Project 6: AI Workout (TH)
    {
      id: "proj-cv-workout",
      slug: "ai-workout-assistant",
      title: "AI Workout Assistant",
      category: "Others",
      description:
        "โปรแกรมเดสก์ท็อปใช้ Computer Vision ตรวจจับท่าออกกำลังกายและนับจำนวนครั้งแบบเรียลไทม์",
      role: "AI Developer",
      date: "พ.ค. 2567 - มิ.ย. 2567",
      overview:
        "โปรเจกต์นี้เป็นการนำ AI มาประยุกต์ใช้กับการออกกำลังกาย โดยใช้ Python และ MediaPipe Pose Estimation เพื่อตรวจจับจุดสำคัญบนร่างกายจากกล้อง Webcam โปรแกรมสามารถวิเคราะห์กลไกการเคลื่อนไหว นับจำนวนครั้งของการวิดพื้นหรือสควอทได้อย่างแม่นยำ พร้อมแจ้งเตือนจัดระเบียบท่าทาง",
      features: [
        "ตรวจจับท่าทางร่างกายแบบ Real-time",
        "ระบบนับจำนวนครั้งอัตโนมัติ",
        "แจ้งเตือนแก้ไขท่าทาง (เช่น 'ลดสะโพกลง')",
        "คำนวณมุมข้อต่อเพื่อวิเคราะห์การเคลื่อนไหว",
        "GUI ใช้งานง่าย สร้างด้วย CustomTkinter/PyQt",
      ],
      challenges: [
        {
          problem: "การตรวจจับผิดพลาดเมื่อมีการเคลื่อนไหวเร็ว",
          solution:
            "ใช้อัลกอริทึม Smoothing ค่าพิกัดจุด Landmark และปรับค่าความเชื่อมั่น (Confidence Thresholds) เพื่อลดอาการสั่นของจุดตรวจจับ",
        },
        {
          problem: "การคำนวณสถานะ (ขึ้น/ลง) ให้แม่นยำ",
          solution:
            "พัฒนาระบบ State Machine โดยอ้างอิงจากมุมข้อต่อที่คำนวณได้ เพื่อป้องกันการนับซ้ำหรือนับผิดพลาด",
        },
      ],
      technologies: [techStack.python, techStack.opencv, techStack.mediapipe],
      tags: ["Computer Vision", "AI", "Python", "MediaPipe", "OpenCV"],
      githubUrl: "https://github.com/Bbsphw/cv-workout",
      featured: false,
      image:
        "https://res.cloudinary.com/bbsphw/image/upload/v1768373176/ai-pose-detection-cover_gdqztn.jpg",
      gallery: [
        "https://res.cloudinary.com/bbsphw/image/upload/v1768374539/test-pose-detection_hmmodt.jpg",
      ],
    },
    // Project 7: Legacy Portfolio (TH)
    {
      id: "proj-legacy-portfolio",
      slug: "legacy-html-portfolio",
      title: "Legacy Portfolio (HTML/CSS)",
      category: "Web App",
      description:
        "พอร์ตโฟลิโอเว็บแรกของผม สร้างด้วย HTML, CSS และ JavaScript ล้วน จุดเริ่มต้นเส้นทางนักพัฒนาเว็บ",
      role: "Frontend Developer",
      date: "ต้นปี 2567",
      overview:
        "โปรเจกต์นี้เป็นก้าวแรกในโลกการพัฒนาเว็บ สร้างขึ้นโดยไม่ใช้ Framework ใดๆ เพื่อทำความเข้าใจแก่นแท้ของ DOM, การจัดหน้าแบบ Responsive ด้วย Media Queries และการเขียน JavaScript พื้นฐานเพื่อจัดการการโต้ตอบหน้าเว็บ",
      features: [
        "เขียนด้วย HTML5 & CSS3 ล้วน",
        "จัด Layout แบบ Responsive ด้วย CSS Grid/Flexbox",
        "ใช้ Vanilla JavaScript ทำเมนูมือถือและ Interaction",
        "โฮสต์บน GitHub Pages",
      ],
      challenges: [
        {
          problem: "การทำเว็บให้รองรับทุกหน้าจอโดยไม่ใช้ Framework",
          solution:
            "เขียน Media Queries เองสำหรับแต่ละ Breakpoint เพื่อให้มั่นใจว่า Layout แสดงผลได้ถูกต้องทั้งบนมือถือ แท็บเล็ต และเดสก์ท็อป",
        },
      ],
      technologies: [techStack.html, techStack.css, techStack.js],
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
  ],
};
