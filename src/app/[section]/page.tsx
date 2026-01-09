import { notFound } from "next/navigation";
import { Metadata } from "next";

// Import Components
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import SkillsSection from "@/components/sections/SkillsSection";
import AchievementsSection from "@/components/sections/AchievementsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ContactSection from "@/components/sections/ContactSection";

// 1. Define Valid Sections
const SECTIONS = {
  hero: <HeroSection />,
  about: <AboutSection />,
  skills: <SkillsSection />,
  achievements: <AchievementsSection />,
  projects: <ProjectsSection />,
  contact: <ContactSection />,
} as const;

type SectionKey = keyof typeof SECTIONS;

interface SectionPageProps {
  params: Promise<{ section: string }>;
}

// Helper function to check validity
const isValidSection = (section: string): section is SectionKey => {
  return section in SECTIONS;
};

// 2. SSG Params Generation
export async function generateStaticParams() {
  return Object.keys(SECTIONS).map((section) => ({
    section: section,
  }));
}

// 3. Dynamic Metadata
export async function generateMetadata({
  params,
}: SectionPageProps): Promise<Metadata> {
  const { section } = await params;

  if (!isValidSection(section)) {
    return { title: "Page Not Found" };
  }

  const title = section.charAt(0).toUpperCase() + section.slice(1);

  const descriptions: Record<SectionKey, string> = {
    hero: "Welcome to my portfolio. Discover my work and skills.",
    about: "Get to know Sophonwit Thapseng, a dedicated Software Engineer.",
    skills:
      "Explore my technical stack including React, Next.js, and TypeScript.",
    projects: "Showcase of my featured web development projects.",
    achievements: "Certifications, Awards, and Badges I have earned.",
    contact: "Let's work together. Get in touch with me.",
  };

  return {
    title: `${title} | Sophonwit Thapseng`,
    description: descriptions[section],
    openGraph: {
      title: `${title} | Sophonwit Thapseng`,
      description: descriptions[section],
      url: `/${section}`,
    },
  };
}

// 4. Page Component
export default async function SectionPage({ params }: SectionPageProps) {
  const { section } = await params;

  if (!isValidSection(section)) {
    notFound();
  }

  return (
    // เพิ่ม Fade-in animation เล็กน้อยตอนเปลี่ยนหน้า
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      {SECTIONS[section]}
    </div>
  );
}
