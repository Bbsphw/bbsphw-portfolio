// src/data/about.ts

import { Career, Education, LocalizedData } from "@/types";

// ✅ แยกข้อมูล Career เป็น EN/TH
export const careerData: LocalizedData<Career[]> = {
  en: [
    {
      id: "career-thai-summit",
      role: "Full Stack Developer (Internship)",
      company: "Thai Summit Harness Public Company Limited",
      logo: "/images/LOGO-TSH-SVG.svg",
      location: "Chonburi, Thailand",
      start: "Nov 2024",
      end: "Mar 2025",
      duration: "4 mos",
      type: "Internship",
      mode: "Onsite",
      current: true,
      description: [
        "Developed 'WarehouseFlow ERP', a bespoke internal system designed to bridge physical warehouse operations with the legacy Oracle ERP.",
        "Built the full-stack architecture using Laravel (PHP), Livewire, and Oracle DB to automate Invoice (Export/Picking) generation and Debit/Credit Note reporting.",
        "Resolved legacy database timeout issues by implementing chunking strategies and utilizing Laravel Queues for background synchronization of massive datasets.",
        "Implemented Role-Based Access Control (RBAC) and PDF export features, streamlining the workflow and significantly reducing manual data entry errors.",
      ],
    },
  ],
  th: [
    {
      id: "career-thai-summit",
      role: "นักพัฒนา Full Stack (นักศึกษาฝึกงาน)",
      company: "บริษัท ไทยซัมมิท ฮาร์เนส จำกัด (มหาชน)",
      logo: "/images/LOGO-TSH-SVG.svg",
      location: "ชลบุรี, ไทย",
      start: "พ.ย. 2567",
      end: "มี.ค. 2568",
      duration: "4 เดือน",
      type: "ฝึกงาน",
      mode: "ออนไซต์",
      current: true,
      description: [
        "พัฒนา 'WarehouseFlow ERP' ระบบภายในองค์กรเพื่อเชื่อมโยงการทำงานในคลังสินค้าเข้ากับระบบ Oracle ERP เดิม",
        "ออกแบบและพัฒนา Full-stack architecture โดยใช้ Laravel (PHP), Livewire และ Oracle DB เพื่อจัดการระบบ Invoice (Export/Picking) และรายงาน Debit/Credit Note แบบอัตโนมัติ",
        "แก้ไขปัญหา Timeout ของฐานข้อมูลเก่า (Legacy DB) โดยใช้เทคนิค Chunking และ Laravel Queues เพื่อประมวลผลข้อมูลขนาดใหญ่ในเบื้องหลัง",
        "พัฒนาระบบจัดการสิทธิ์ผู้ใช้งาน (RBAC) และระบบออกรายงาน PDF ช่วยลดขั้นตอนการทำงานและลดความผิดพลาดจากการคีย์ข้อมูล",
      ],
    },
  ],
};

// ✅ แยกข้อมูล Education เป็น EN/TH
export const educationData: LocalizedData<Education[]> = {
  en: [
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
  ],
  th: [
    {
      id: "edu-kasetsart",
      school: "มหาวิทยาลัยเกษตรศาสตร์ วิทยาเขตศรีราชา",
      degree: "วิศวกรรมศาสตรบัณฑิต สาขาวิศวกรรมคอมพิวเตอร์และสารสนเทศ",
      year: "พ.ค. 2565 - ปัจจุบัน",
      location: "ชลบุรี, ไทย",
      description:
        "มุ่งเน้นด้านวิศวกรรมซอฟต์แวร์ เทคโนโลยีเว็บ และสถาปัตยกรรมระบบ",
      logo: "/images/kusrc-logo.png",
    },
    {
      id: "edu-prakhanong",
      school: "โรงเรียนพระโขนงพิทยาลัย",
      degree: "มัธยมศึกษาตอนปลาย (แผนการเรียน วิทย์-คณิต)",
      year: "พ.ค. 2562 - มี.ค. 2565",
      location: "กรุงเทพมหานคร, ไทย",
      description:
        "สำเร็จการศึกษาแผนการเรียนวิทยาศาสตร์และคณิตศาสตร์ เน้นพื้นฐานตรรกะและการคำนวณ",
      logo: "/images/pk-logo.png",
    },
    {
      id: "edu-phramae",
      school: "โรงเรียนพระแม่มารีพระโขนง",
      degree: "ประถมศึกษา และ มัธยมศึกษาตอนต้น",
      year: "พ.ค. 2551 - มี.ค. 2562",
      location: "กรุงเทพมหานคร, ไทย",
      description: "ปูพื้นฐานการศึกษาและร่วมกิจกรรมเสริมหลักสูตร",
      logo: "/images/pmk-logo.jpeg",
    },
  ],
};