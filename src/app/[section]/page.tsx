// src/app/[section]/page.tsx
import { notFound, redirect } from "next/navigation";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import SkillsSection from "@/components/sections/SkillsSection";
import AchievementsSection from "@/components/sections/AchievementsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ContactSection from "@/components/sections/ContactSection";

type SectionKey =
  | "hero"
  | "about"
  | "skills"
  | "achievements"
  | "projects"
  | "contact";

interface SectionPageProps {
  params: { section: string };
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

export default async function SectionPage({ params }: SectionPageProps) {
  const { section } = await params;

  if (!isValidSection(section)) {
    redirect(notFound());
    return null; // This line will never be reached but helps TypeScript
  }

  return <main>{sectionComponents[section as SectionKey]}</main>;
}
