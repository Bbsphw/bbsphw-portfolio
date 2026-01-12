// src/app/projects/[slug]/page.tsx

import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import ProjectDetail from "@/components/sections/ProjectDetail";
import { Metadata } from "next";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

// 1. Generate Static Params (เพื่อทำ SSG ให้โหลดเร็ว)
export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

// 2. Generate Metadata (เพื่อ SEO เวลาแชร์ลิงก์)
export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} | Projects`,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      images: project.image ? [project.image] : [],
    },
  };
}

// 3. Main Page Component
export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;

  // ✅ Best Practice: ใช้ findIndex เพื่อหาทั้งโปรเจกต์ปัจจุบัน และใช้คำนวณหาตัวก่อนหน้า/ถัดไป
  const currentIndex = projects.findIndex((p) => p.slug === slug);

  // ถ้าหาไม่เจอ (findIndex คืนค่า -1) ให้ไปหน้า 404
  if (currentIndex === -1) {
    notFound();
  }

  const project = projects[currentIndex];

  // ✅ Logic คำนวณหา Previous Project
  // ถ้า index > 0 แสดงว่ามีตัวก่อนหน้า
  const prevProject =
    currentIndex > 0
      ? {
          slug: projects[currentIndex - 1].slug,
          title: projects[currentIndex - 1].title,
        }
      : null;

  // ✅ Logic คำนวณหา Next Project
  // ถ้า index < ตัวสุดท้าย แสดงว่ามีตัวถัดไป
  const nextProject =
    currentIndex < projects.length - 1
      ? {
          slug: projects[currentIndex + 1].slug,
          title: projects[currentIndex + 1].title,
        }
      : null;

  return (
    <main className="container mx-auto max-w-5xl px-6 py-10 md:py-16">
      {/* ✅ ส่ง props ทั้งหมดไปให้ ProjectDetail */}
      <ProjectDetail
        project={project}
        prevProject={prevProject}
        nextProject={nextProject}
      />
    </main>
  );
}
