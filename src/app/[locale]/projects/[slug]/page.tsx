// src/app/[locale]/projects/[slug]/page.tsx

import { notFound } from "next/navigation";
import ProjectDetail from "@/components/sections/ProjectDetail";
import { getProjectBySlug, getAllProjects, getAllProjectSlugs } from "@/lib/mdx";
import { MdxContent } from "@/components/mdx-content";
import { Metadata } from "next";
import { routing } from "@/i18n/routing";
import { Language, Project } from "@/types";
import { setRequestLocale, getTranslations } from "next-intl/server";

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
    const slugs = getAllProjectSlugs(locale);
    for (const slug of slugs) {
      params.push({
        locale,
        slug,
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

  if (!routing.locales.includes(locale as Language)) {
    return { title: "Page Not Found" };
  }

  const mdxData = getProjectBySlug(locale, slug);
  if (!mdxData) {
    return {
      title: locale === "th" ? "ไม่พบโปรเจกต์" : "Project Not Found",
    };
  }

  const project = mdxData.meta;
  const t = await getTranslations({ locale, namespace: "Section" });

  return {
    title: `${project.title} | ${t("projects")}`,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      images: project.image ? [project.image] : [],
      locale: locale,
    },
    alternates: {
      canonical: `/${locale}/projects/${slug}`,
      languages: {
        en: `/en/projects/${slug}`,
        th: `/th/projects/${slug}`,
      },
    },
  };
}

// 3. Main Page Component
export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug, locale } = await params;

  if (!routing.locales.includes(locale as Language)) {
    notFound();
  }
  setRequestLocale(locale);

  const lang = locale as Language;
  const projects = getAllProjects(lang);
  const currentIndex = projects.findIndex((p) => p.slug === slug);

  if (currentIndex === -1) {
    notFound();
  }

  const mdxData = getProjectBySlug(lang, slug);
  if (!mdxData) {
    notFound();
  }

  const project = { ...mdxData.meta, slug } as unknown as Project;
  const mdxNode = mdxData.content.trim() ? <MdxContent source={mdxData.content} /> : null;

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
        mdxContent={mdxNode}
      />
    </main>
  );
}
