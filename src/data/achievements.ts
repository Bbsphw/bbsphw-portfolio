// src/data/achievements.ts

import { Achievement } from "@/types";

// 1. certification (ใบรับรอง / วุฒิบัตรวิชาชีพ)
// "เครื่องการันตีความสามารถตามมาตรฐานสากล"
// ความหมาย: เอกสารที่ยืนยันว่าคุณมีความรู้ความเชี่ยวชาญในเรื่องนั้นๆ ผ่านเกณฑ์มาตรฐาน ส่วนใหญ่ต้อง "สอบ (Exam)" อย่างจริงจัง และมักมีวันหมดอายุ
// ลักษณะเด่น:
// ออกโดยองค์กรใหญ่ (AWS, Google, Microsoft, Cisco).
// มี Credential ID หรือ Link สำหรับตรวจสอบความถูกต้อง.
// มีความยากในการได้มาสูง (ต้องอ่านหนังสือ/เตรียมตัวสอบ).
// สิ่งที่สื่อถึง HR: "คนนี้มีความรู้แน่น ผ่านเกณฑ์มาตรฐาน ทำงานได้จริง"
// ตัวอย่าง: AWS Certified Cloud Practitioner, JLPT (วัดระดับภาษา), Meta Frontend Developer Certificate.

// 2. badge (เหรียญตรา / ตราสัญลักษณ์ทักษะ)
// "สัญลักษณ์ของการเรียนรู้และการมีส่วนร่วม"
// ความหมาย: ตราดิจิทัลที่แสดงว่าคุณผ่านการเรียนรู้ทักษะย่อย (Micro-credential), เข้าร่วมกิจกรรม, หรือเป็นสมาชิกที่ Active ใน Community
// ลักษณะเด่น:
// ได้มาจากการเรียนจบคอร์สสั้นๆ, ทำ Lab เสร็จ, หรือร่วม Event.
// ดูเป็นกันเอง (Casual) และทันสมัยกว่า Certification.
// เน้นปริมาณและความสม่ำเสมอในการเรียนรู้.
// สิ่งที่สื่อถึง HR: "คนนี้ Active นะ ชอบเรียนรู้อะไรใหม่ๆ ตลอดเวลา"
// ตัวอย่าง: GitHub Pro Badge, Google Cloud Skills Boost Badge, Postman Student Expert.

// 3. awards (รางวัล / เกียรติยศ)
// "เครื่องยืนยันความเป็นเลิศและความสำเร็จ"
// ความหมาย: รางวัลที่ได้รับจากการชนะการประกวด การคัดเลือก หรือการทำผลงานได้ดีเยี่ยมเหนือผู้อื่น
// ลักษณะเด่น:
// มีการจัดอันดับ (ที่ 1, ที่ 2, เหรียญทอง).
// ต้องมีการแข่งขัน (Competition) หรือการคัดเลือก (Selection).
// สิ่งที่สื่อถึง HR: "คนนี้เก่งระดับท็อป มีความสามารถโดดเด่นกว่าคนทั่วไป"
// ตัวอย่าง: รางวัลเรียนดี (เกียรตินิยม), พนักงานดีเด่น, รางวัลชนะเลิศโครงงานวิทยาศาสตร์.

// 4. hackathon (การแข่งขันแฮกกาธอน)
// "สนามประลองฝีมือและการทำงานเป็นทีม"
// ความหมาย: การเข้าร่วมกิจกรรมระดมสมองและเขียนโปรแกรมเพื่อแก้ปัญหาภายในเวลาที่จำกัด (เช่น 24-48 ชั่วโมง) ไม่ว่าจะได้รางวัลหรือไม่ การเข้าร่วมถือเป็น Achievement
// ลักษณะเด่น:
// เน้นการลงมือทำจริง (Practical) และการสร้างต้นแบบ (Prototype).
// ทำงานภายใต้ความกดดันและเวลาจำกัด.
// มักมีรูปบรรยากาศการทำงานกลุ่ม หรือการพรีเซนต์งาน.
// สิ่งที่สื่อถึง HR: "คนนี้ทำงานเป็นทีมได้ สู้งาน ทนแรงกดดันได้ และสร้างของเป็น"
// ตัวอย่าง: Stupid Hackathon, NASA Space Apps Challenge, University Hackathon.

// 5. talks (วิทยากร / การบรรยาย)
// "การแบ่งปันความรู้และภาวะผู้นำ"
// ความหมาย: การได้รับเชิญไปพูด บรรยาย สอน หรือแชร์ความรู้ในที่สาธารณะ หรืองาน Event ต่างๆ
// ลักษณะเด่น:
// แสดงถึงความเชี่ยวชาญในระดับที่ "สอนคนอื่นได้".
// ต้องใช้ทักษะการสื่อสาร (Communication) และความกล้าแสดงออก.
// สิ่งที่สื่อถึง HR: "คนนี้มี Soft Skill ดีเยี่ยม สื่อสารรู้เรื่อง และมี Mindset ของการแบ่งปัน (Leader)"
// ตัวอย่าง: Guest Speaker งานรับน้อง, คนสอน Workshop เขียนโค้ด, Speaker งาน Tech Meetup.

export const achievements: Achievement[] = [
  // =========================================================================
  // TYPE: HACKATHON (การแข่งขัน & Hackathon)
  // =========================================================================
  {
    id: "hackathon-topgun-2024",
    type: "hackathon",
    title: "Top Gun Rally 2024 - Silver Level",
    organization: "Thai Embedded Systems Association (TESA)",
    date: "Nov 2024",
    image:
      "https://res.cloudinary.com/bbsphw/image/upload/v1768444336/topgun-rally-silver_k1rbpe.png",
    link: "https://www.facebook.com/p/Top-Gun-Rally-2024-at-KU-Sriracha-61566322193217/",
    description:
      "Achieved Silver Level in the 'Best of the Best Embedded System Developers' competition. Worked as a team '404 Team Not Found' to develop embedded solutions under pressure.",
    skills: ["Embedded Systems", "Teamwork", "Problem Solving", "C/C++"],
    gallery: [
      "https://res.cloudinary.com/bbsphw/image/upload/v1768444336/topgun-rally-overview_x90cma.jpg",
      "https://res.cloudinary.com/bbsphw/image/upload/v1768444331/topgun-rally-cert_iiihzm.png",
      "https://res.cloudinary.com/bbsphw/image/upload/v1768444340/topgun-rally-workshop_ybdpni.jpg",
      "https://res.cloudinary.com/bbsphw/image/upload/v1768444332/topgun-rally-exam-lab_zhf1mc.jpg",
    ],
  },
  // {
  //   id: "hackathon-ku-2024",
  //   type: "hackathon",
  //   title: "KU Hackathon 2024 - Winner",
  //   organization: "Kasetsart University",
  //   date: "Nov 2024",
  //   image:
  //     "https://res.cloudinary.com/bbsphw/image/upload/achievements/ku-hackathon-cover.jpg",
  //   link: "https://www.facebook.com/example-post",
  //   description:
  //     "Won the 1st Prize under the theme 'Smart Campus'. Developed an AI-powered waste management system using IoT sensors.",
  //   skills: ["IoT", "Pitching", "Prototyping", "Teamwork"],
  //   gallery: [
  //     "https://res.cloudinary.com/bbsphw/image/upload/achievements/ku-hackathon-team-pitch.jpg",
  //     "https://res.cloudinary.com/bbsphw/image/upload/achievements/ku-hackathon-coding.jpg",
  //     "https://res.cloudinary.com/bbsphw/image/upload/achievements/ku-hackathon-award.jpg",
  //   ],
  // },

  // =========================================================================
  // TYPE: CERTIFICATION (ใบรับรองวิชาชีพ / สอบวัดระดับ)
  // =========================================================================
  {
    id: "cert-ku-cybersecurity-training",
    type: "certification",
    title: "Cybersecurity Training Course (12 Hours)",
    organization: "Faculty of Engineering at Sriracha, KU",
    date: "Nov 2025",
    image:
      "https://res.cloudinary.com/bbsphw/image/upload/v1768442278/ku-cybersecurity-training_fy5fb6.png",
    link: "https://www.facebook.com/DAT.KUSRC/posts/pfbid0nHz5PLSZhcb4ncs5kTwuNjjcARjL3FNydzwAqDBUEBx2yvuuuk34YHJsrgZaPZb8l",
    description:
      "Completed a 12-hour intensive training program on Cybersecurity principles and practices organized by Digital Academy Thailand & KU.",
    skills: ["Cybersecurity", "InfoSec", "Risk Management"],
    gallery: [
      "https://res.cloudinary.com/bbsphw/image/upload/v1768444377/ku-cybersecurity-overview_kwwklo.jpg",
      "https://res.cloudinary.com/bbsphw/image/upload/v1768444374/ku-cybersecurity-lab_jzwbp0.jpg",
    ],
  },
  {
    id: "cert-ku-digital-id",
    type: "certification",
    title: "Digital Identification Training (12 Hours)",
    organization: "Faculty of Engineering at Sriracha, KU",
    date: "Nov 2025",
    image:
      "https://res.cloudinary.com/bbsphw/image/upload/v1768442278/ku-digital-id-training_rzjolc.png",
    link: "https://www.facebook.com/DAT.KUSRC/posts/pfbid02kLx8iMPfQcSHxwi2xMhKUuUSGPf3LYAec5Aj8MyUZS8bQxAnVEMZrnPGJBUUKrJRl",
    description:
      "Completed a 12-hour training curriculum focused on Digital Identification technologies, standards, and implementation.",
    skills: ["Digital ID", "Identity Management", "Authentication"],
    gallery: [
      "https://res.cloudinary.com/bbsphw/image/upload/v1768444378/ku-digital-id-overview_e2ntpr.jpg",
      "https://res.cloudinary.com/bbsphw/image/upload/v1768444376/ku-digital-id-lab_neduoy.jpg",
    ],
  },
  {
    id: "cert-ku-exite-2025",
    type: "certification",
    title: "KU-EXITE English Proficiency (CEFR B1)",
    organization: "Kasetsart University",
    date: "Aug 2025",
    image:
      "https://res.cloudinary.com/bbsphw/image/upload/v1768442278/ku-exite-score_ijxjao.png",
    link: "https://verify.ku.ac.th/index.php?id=2530003439&cid=NN5PoE",
    description:
      "Achieved CEFR Level B1 (Total Score: 55) in the Kasetsart University English Examination, demonstrating independent user proficiency.",
    skills: ["English Communication", "Reading", "Listening"],
  },
  {
    id: "cert-digital-literacy-2025",
    type: "certification",
    title: "KU Digital Literacy Competency",
    organization: "Office of Computer Services, KU",
    date: "Sep 2025",
    image:
      "https://res.cloudinary.com/bbsphw/image/upload/v1768442278/ku-digital-literacy_hvvv50.png",
    link: "https://verify.ku.ac.th/index.php?id=2530003756&cid=X3br5q",
    description:
      "Passed the Digital Literacy competency test, covering fundamental computer skills, internet security, and AI literacy.",
    skills: ["Digital Literacy", "Cybersecurity Awareness", "AI Literacy"],
    gallery: [
      "https://res.cloudinary.com/bbsphw/image/upload/v1768442278/ku-digital-literacy-detail_rbyrl1.png",
    ],
  },

  {
    id: "cert-google-cloud-myorder",
    type: "certification",
    title: "Google Cloud Computing Foundations",
    organization: "Google Cloud & MyOrder",
    date: "21,28 June & 5 July 2025",
    image:
      "https://res.cloudinary.com/bbsphw/image/upload/v1768442279/google-cloud-myorder_hucvvz.png",
    link: "https://www.eng.src.ku.ac.th/myorder-intelligence-and-faculty-of-engineering-at-sriracha-host-myorder-cloud-hero-training-on-google-cloud-fundamentals/",
    description:
      "Completed comprehensive training on Google Cloud Platform, covering Cloud Architecture, Big Data & Machine Learning Fundamentals, and Cloud Application Development.",
    skills: [
      "Cloud Architecture",
      "Big Data",
      "Machine Learning",
      "Google Cloud Platform",
      "App Development",
    ],
    gallery: [
      "https://res.cloudinary.com/bbsphw/image/upload/v1768444381/my-order-overview_do42bf.jpg",
    ],
  },
  {
    id: "cert-ncsa-cybersecurity",
    type: "certification",
    title: "Basic Cybersecurity",
    organization: "NCSA Thailand",
    date: "Nov 2025",
    image:
      "https://res.cloudinary.com/bbsphw/image/upload/v1768442279/ncsa-basic-cybersecurity_ez87ph.png",
    description:
      "Completed the Basic Cybersecurity course on the national cybersecurity learning platform (MOOC), covering fundamental security principles.",
    skills: [
      "Cybersecurity Fundamentals",
      "Network Security",
      "Information Safety",
    ],
  },
  {
    id: "cert-kumooc-gen-ai",
    type: "certification",
    title: "Basic Questionnaire Data Analysis with Generative AI",
    organization: "Kasetsart University (KUMOOC)",
    date: "Jan 2026",
    image:
      "https://res.cloudinary.com/bbsphw/image/upload/v1768447011/kumooc-gen-ai_u2gd5l.png",
    link: "https://kumooc.ku.th/certificate-checker/KumoocKUMOOC05200012569194560",
    description:
      "Completed the course on using Generative AI for basic questionnaire data analysis. Learned techniques for utilizing AI tools to interpret and summarize survey data.",
    skills: ["Generative AI", "Data Analysis", "Prompt Engineering"],
    gallery: [
      "https://res.cloudinary.com/bbsphw/image/upload/v1768447011/kumooc-gen-ai-detail-pass_rz85p3.png",
    ],
  },

  // =========================================================================
  // TYPE: AWARDS (รางวัลเกียรติยศ)
  // =========================================================================
  // {
  //   id: "award-academic-excellence",
  //   type: "awards",
  //   title: "Academic Excellence Award 2023",
  //   organization: "Faculty of Engineering",
  //   date: "Mar 2024",
  //   image:
  //     "https://res.cloudinary.com/bbsphw/image/upload/achievements/academic-award.jpg", // Mock Image
  //   description:
  //     "Awarded to top 5% students with outstanding GPA (3.85) in the Computer Engineering department.",
  //   skills: ["Academic", "Discipline"],
  // },
  // {
  //   id: "award-best-project",
  //   type: "awards",
  //   title: "Best Senior Project Innovation",
  //   organization: "Tech Showcase 2024",
  //   date: "May 2024",
  //   image:
  //     "https://res.cloudinary.com/bbsphw/image/upload/achievements/best-project-cert.jpg", // Mock Image
  //   description:
  //     "Received the 'Most Innovative Project' award for the 'WarehouseFlow ERP' system.",
  //   skills: ["System Design", "Innovation", "Full Stack Development"],
  // },

  // =========================================================================
  // TYPE: TALKS (วิทยากร / แบ่งปันความรู้)
  // =========================================================================
  // {
  //   id: "talk-nextjs-workshop",
  //   type: "talks",
  //   title: "Intro to Next.js & Tailwind CSS",
  //   organization: "KU Computer Club",
  //   date: "Sep 2024",
  //   image:
  //     "https://res.cloudinary.com/bbsphw/image/upload/achievements/workshop-nextjs-cover.jpg", // Mock Image
  //   link: "https://github.com/bbsphw/nextjs-workshop-slides",
  //   description:
  //     "Guest speaker for a 3-hour workshop teaching 50+ junior students how to build their first modern web application using Next.js App Router and Tailwind CSS.",
  //   skills: ["Public Speaking", "Teaching", "Mentoring", "Next.js"],
  //   gallery: [
  //     "https://res.cloudinary.com/bbsphw/image/upload/achievements/workshop-teaching.jpg",
  //     "https://res.cloudinary.com/bbsphw/image/upload/achievements/workshop-audience.jpg",
  //   ],
  // },

  // =========================================================================
  // TYPE: BADGE (ตราสัญลักษณ์ / Micro-credentials)
  // =========================================================================
  // {
  //   id: "badge-github-pro",
  //   type: "badge",
  //   title: "GitHub Global Campus Student",
  //   organization: "GitHub",
  //   date: "2023 - Present",
  //   image:
  //     "https://res.cloudinary.com/bbsphw/image/upload/achievements/github-student-badge.png", // หาโลโก้ GitHub Education ใส่
  //   description:
  //     "Verified student developer status, granting access to GitHub Copilot, Codespaces, and industry-standard developer tools.",
  //   skills: ["Git", "Open Source", "DevTools"],
  // },
  // {
  //   id: "badge-postman-expert",
  //   type: "badge",
  //   title: "Postman Student Expert",
  //   organization: "Postman",
  //   date: "Feb 2024",
  //   image:
  //     "https://res.cloudinary.com/bbsphw/image/upload/achievements/postman-badge.png", // หาโลโก้ Postman ใส่
  //   link: "https://badgr.com/public/badges/example",
  //   description:
  //     "Completed the Postman Student Expert training, mastering API request creation, testing, and documentation generation.",
  //   skills: ["API Testing", "Postman", "Rest API"],
  // },
];
