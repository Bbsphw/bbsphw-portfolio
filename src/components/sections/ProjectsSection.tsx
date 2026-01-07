// src/components/sections/ProjectsSection.tsx

"use client";

import ProjectCard from "@/components/cards/ProjectCard";
import { projects } from "@/data/projects"; // เรียกใช้ data จาก data/projects.ts

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      // className="mt-20 p-6"
    >
      {/* Header */}
      <header>
        <h1 id="projects-heading" className="text-2xl font-medium">
          Projects
        </h1>
        <p className="mb-6 pt-2 pb-6 text-neutral-600 dark:text-neutral-400">
          Several projects that I have worked on, both private and open source.
        </p>
      </header>

      {/* Separator */}
      <hr className="my-6 border-zinc-200 dark:border-zinc-700" />

      {/* Projects List */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
}
