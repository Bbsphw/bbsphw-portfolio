// src/app/[locale]/projects/[slug]/page.tsx

import { notFound } from "next/navigation";
import { projectsData } from "@/data/projects";
import ProjectDetail from "@/components/sections/ProjectDetail";
import { Metadata } from "next";
import { routing } from "@/i18n/routing";
import { Language } from "@/types";
import { setRequestLocale } from "next-intl/server";

interface ProjectPageProps {
  params: Promise<{
    slug: string;
    locale: string;
  }>;
}

// 1. Generate Static Params (SSG)
export async function generateStaticParams() {
  const params: { locale: string; slug: string }[] = [];

  for (const locale of routing.locales) {
    const projects = projectsData[locale as Language];
    for (const project of projects) {
      params.push({
        locale,
        slug: project.slug,
      });
    }
  }

  return params;
}

// 2. Generate Metadata (SEO)
export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug, locale } = await params;

  // แก้ไข: ใช้ as Language แทน as any
  if (!routing.locales.includes(locale as Language)) {
    return { title: "Page Not Found" };
  }

  const projects = projectsData[locale as Language];
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: locale === "th" ? "ไม่พบโปรเจกต์" : "Project Not Found",
    };
  }

  return {
    title: `${project.title} | Projects`,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      images: project.image ? [project.image] : [],
      locale: locale,
    },
  };
}

// 3. Main Page Component
export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug, locale } = await params;

  // แก้ไข: ใช้ as Language แทน as any
  if (!routing.locales.includes(locale as Language)) {
    notFound();
  }
  setRequestLocale(locale);

  const lang = locale as Language;
  const projects = projectsData[lang];
  const currentIndex = projects.findIndex((p) => p.slug === slug);

  if (currentIndex === -1) {
    notFound();
  }

  const project = projects[currentIndex];

  const prevProject =
    currentIndex > 0
      ? {
          slug: projects[currentIndex - 1].slug,
          title: projects[currentIndex - 1].title,
        }
      : null;

  const nextProject =
    currentIndex < projects.length - 1
      ? {
          slug: projects[currentIndex + 1].slug,
          title: projects[currentIndex + 1].title,
        }
      : null;

  return (
    <main className="container mx-auto max-w-5xl px-6 py-10 md:py-16">
      <ProjectDetail
        project={project}
        prevProject={prevProject}
        nextProject={nextProject}
      />
    </main>
  );
}
