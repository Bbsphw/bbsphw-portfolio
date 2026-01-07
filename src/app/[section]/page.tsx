import { notFound } from "next/navigation";
import { Metadata } from "next"; // เพิ่ม Import

import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import SkillsSection from "@/components/sections/SkillsSection";
import AchievementsSection from "@/components/sections/AchievementsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ContactSection from "@/components/sections/ContactSection";

// 1. Keys
type SectionKey =
  | "hero"
  | "about"
  | "skills"
  | "achievements"
  | "projects"
  | "contact";

// 2. Params Type
interface SectionPageProps {
  params: Promise<{ section: string }>;
}

const sectionComponents: Record<SectionKey, React.ReactNode> = {
  hero: <HeroSection />,
  about: <AboutSection />,
  skills: <SkillsSection />,
  achievements: <AchievementsSection />,
  projects: <ProjectsSection />,
  contact: <ContactSection />,
};

const isValidSection = (section: string): section is SectionKey => {
  return Object.keys(sectionComponents).includes(section);
};

// 3. Generate Static Params (SSG)
export async function generateStaticParams() {
  return Object.keys(sectionComponents).map((section) => ({
    section: section,
  }));
}

// 4. Dynamic Metadata
export async function generateMetadata({
  params,
}: SectionPageProps): Promise<Metadata> {
  const { section } = await params;

  if (!isValidSection(section)) {
    return {
      title: "Page Not Found",
    };
  }

  // แปลงตัวอักษรแรกเป็นตัวพิมพ์ใหญ่ (เช่น "about" -> "About")
  const title = section.charAt(0).toUpperCase() + section.slice(1);

  // Custom Description ตาม Section (Optional)
  const descriptions: Record<string, string> = {
    hero: "Welcome to my portfolio. Discover my work and skills.",
    about: "Learn more about my background and experience.",
    skills: "Check out my technical skills and expertise.",
    projects: "Explore the projects I have worked on.",
    achievements: "See my certifications, awards, and badges.",
    contact: "Get in touch with me for work or collaboration.",
  };

  return {
    title: `${title} | Sophonwit Thapseng`, // Title ที่จะโชว์บน Tab Browser
    description: descriptions[section] || "Sophonwit Thapseng Portfolio Site",
    openGraph: {
      title: `${title} | Sophonwit Thapseng`,
      description: descriptions[section],
      // images: [`/og/${section}.png`], // ถ้ามีรูป OG แยกแต่ละหน้า
    },
  };
}

// 5. Page Component
export default async function SectionPage({ params }: SectionPageProps) {
  const { section } = await params;

  if (!isValidSection(section)) {
    notFound();
  }

  return <main>{sectionComponents[section as SectionKey]}</main>;
}
