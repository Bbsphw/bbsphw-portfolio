// src/data/achievements.ts

import { Achievement, LocalizedData } from "@/types";

export const achievementsData: LocalizedData<Achievement[]> = {
  en: [
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
  ],
  th: [
    {
      id: "hackathon-topgun-2024",
      type: "hackathon",
      title: "Top Gun Rally 2024 - ระดับเงิน (Silver Level)",
      organization: "สมาคมสมองกลฝังตัวไทย (TESA)",
      date: "พ.ย. 2567",
      image:
        "https://res.cloudinary.com/bbsphw/image/upload/v1768444336/topgun-rally-silver_k1rbpe.png",
      link: "https://www.facebook.com/p/Top-Gun-Rally-2024-at-KU-Sriracha-61566322193217/",
      description:
        "ได้รับรางวัลระดับ Silver ในการแข่งขันค้นหาสุดยอดนักพัฒนาระบบสมองกลฝังตัว ทำงานร่วมกันในทีม '404 Team Not Found' เพื่อพัฒนาโซลูชันภายใต้ความกดดัน",
      skills: ["Embedded Systems", "Teamwork", "Problem Solving", "C/C++"],
      gallery: [
        "https://res.cloudinary.com/bbsphw/image/upload/v1768444336/topgun-rally-overview_x90cma.jpg",
        "https://res.cloudinary.com/bbsphw/image/upload/v1768444331/topgun-rally-cert_iiihzm.png",
        "https://res.cloudinary.com/bbsphw/image/upload/v1768444340/topgun-rally-workshop_ybdpni.jpg",
        "https://res.cloudinary.com/bbsphw/image/upload/v1768444332/topgun-rally-exam-lab_zhf1mc.jpg",
      ],
    },
    {
      id: "cert-ku-cybersecurity-training",
      type: "certification",
      title: "หลักสูตรอบรม Cybersecurity (12 ชั่วโมง)",
      organization: "คณะวิศวกรรมศาสตร์ ศรีราชา ม.เกษตรศาสตร์",
      date: "พ.ย. 2568",
      image:
        "https://res.cloudinary.com/bbsphw/image/upload/v1768442278/ku-cybersecurity-training_fy5fb6.png",
      link: "https://www.facebook.com/DAT.KUSRC/posts/pfbid0nHz5PLSZhcb4ncs5kTwuNjjcARjL3FNydzwAqDBUEBx2yvuuuk34YHJsrgZaPZb8l",
      description:
        "ผ่านการอบรมหลักสูตรเข้มข้น 12 ชั่วโมง เกี่ยวกับหลักการและความปลอดภัยทางไซเบอร์ จัดโดย Digital Academy Thailand และ ม.เกษตรศาสตร์",
      skills: ["Cybersecurity", "InfoSec", "Risk Management"],
      gallery: [
        "https://res.cloudinary.com/bbsphw/image/upload/v1768444377/ku-cybersecurity-overview_kwwklo.jpg",
        "https://res.cloudinary.com/bbsphw/image/upload/v1768444374/ku-cybersecurity-lab_jzwbp0.jpg",
      ],
    },
    {
      id: "cert-ku-digital-id",
      type: "certification",
      title: "หลักสูตรอบรม Digital Identification (12 ชั่วโมง)",
      organization: "คณะวิศวกรรมศาสตร์ ศรีราชา ม.เกษตรศาสตร์",
      date: "พ.ย. 2568",
      image:
        "https://res.cloudinary.com/bbsphw/image/upload/v1768442278/ku-digital-id-training_rzjolc.png",
      link: "https://www.facebook.com/DAT.KUSRC/posts/pfbid02kLx8iMPfQcSHxwi2xMhKUuUSGPf3LYAec5Aj8MyUZS8bQxAnVEMZrnPGJBUUKrJRl",
      description:
        "ผ่านการอบรมหลักสูตร 12 ชั่วโมง ที่เน้นเรื่องเทคโนโลยีการระบุตัวตนดิจิทัล มาตรฐาน และการนำไปใช้งานจริง",
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
      organization: "มหาวิทยาลัยเกษตรศาสตร์",
      date: "ส.ค. 2568",
      image:
        "https://res.cloudinary.com/bbsphw/image/upload/v1768442278/ku-exite-score_ijxjao.png",
      link: "https://verify.ku.ac.th/index.php?id=2530003439&cid=NN5PoE",
      description:
        "ได้คะแนนระดับ B1 (คะแนนรวม: 55) ในการสอบวัดระดับภาษาอังกฤษของมหาวิทยาลัยเกษตรศาสตร์ แสดงถึงความสามารถในการสื่อสารระดับผู้ใช้งานอิสระ",
      skills: ["English Communication", "Reading", "Listening"],
    },
    {
      id: "cert-digital-literacy-2025",
      type: "certification",
      title: "KU Digital Literacy Competency",
      organization: "สำนักบริการคอมพิวเตอร์ มก.",
      date: "ก.ย. 2568",
      image:
        "https://res.cloudinary.com/bbsphw/image/upload/v1768442278/ku-digital-literacy_hvvv50.png",
      link: "https://verify.ku.ac.th/index.php?id=2530003756&cid=X3br5q",
      description:
        "สอบผ่านเกณฑ์สมรรถนะด้านดิจิทัล ครอบคลุมทักษะคอมพิวเตอร์พื้นฐาน ความปลอดภัยทางอินเทอร์เน็ต และความรู้ด้าน AI",
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
      date: "มิ.ย. - ก.ค. 2568",
      image:
        "https://res.cloudinary.com/bbsphw/image/upload/v1768442279/google-cloud-myorder_hucvvz.png",
      link: "https://www.eng.src.ku.ac.th/myorder-intelligence-and-faculty-of-engineering-at-sriracha-host-myorder-cloud-hero-training-on-google-cloud-fundamentals/",
      description:
        "ผ่านการอบรม Google Cloud Platform ครอบคลุมเรื่อง Cloud Architecture, Big Data, Machine Learning ขั้นพื้นฐาน และการพัฒนาแอปพลิเคชันบน Cloud",
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
      organization: "สกมช. (NCSA Thailand)",
      date: "พ.ย. 2568",
      image:
        "https://res.cloudinary.com/bbsphw/image/upload/v1768442279/ncsa-basic-cybersecurity_ez87ph.png",
      description:
        "ผ่านการอบรมหลักสูตรความมั่นคงปลอดภัยไซเบอร์เบื้องต้น บนแพลตฟอร์มการเรียนรู้แห่งชาติ (MOOC)",
      skills: [
        "Cybersecurity Fundamentals",
        "Network Security",
        "Information Safety",
      ],
    },
    {
      id: "cert-kumooc-gen-ai",
      type: "certification",
      title: "การวิเคราะห์ข้อมูลแบบสอบถามเบื้องต้นด้วย Generative AI",
      organization: "มหาวิทยาลัยเกษตรศาสตร์ (KUMOOC)",
      date: "ม.ค. 2569",
      image:
        "https://res.cloudinary.com/bbsphw/image/upload/v1768447011/kumooc-gen-ai_u2gd5l.png",
      link: "https://kumooc.ku.th/certificate-checker/KumoocKUMOOC05200012569194560",
      description:
        "ผ่านการอบรมการใช้ Generative AI เพื่อวิเคราะห์ข้อมูลแบบสอบถามเบื้องต้น เรียนรู้เทคนิคการใช้เครื่องมือ AI ในการตีความและสรุปผลข้อมูล",
      skills: ["Generative AI", "Data Analysis", "Prompt Engineering"],
      gallery: [
        "https://res.cloudinary.com/bbsphw/image/upload/v1768447011/kumooc-gen-ai-detail-pass_rz85p3.png",
      ],
    },
  ],
};