// src/components/sections/ProjectsSection.tsx

"use client";

import { useMemo, useCallback, Suspense } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { Search } from "lucide-react";
import { motion, Variants, AnimatePresence } from "framer-motion";
import ProjectCard from "@/components/cards/ProjectCard";
import { projects } from "@/data/projects";
import { ProjectsCombobox } from "@/components/comboboxs/ProjectsCombobox";

// --- Animation Variants ---
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

function ProjectsContent() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // 1. Get URL Params
  const currentTag = searchParams.get("tag") || "";
  const currentSearch = searchParams.get("q") || "";

  // 2. Helper Update URL
  const updateUrl = useCallback(
    (key: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      if (value) params.set(key, value);
      else params.delete(key);

      router.replace(`${pathname}?${params.toString()}`, { scroll: false });
    },
    [searchParams, pathname, router],
  );

  // 3. Extract Unique Tags (ดึง Tags ทั้งหมดจากทุกโปรเจกต์มาทำเป็น Options)
  const allTags = useMemo(() => {
    const tags = new Set<string>();
    projects.forEach((p) => p.tags.forEach((t) => tags.add(t)));
    return Array.from(tags).sort();
  }, []);

  // 4. Filtering Logic
  const filteredProjects = useMemo(() => {
    let result = [...projects];

    if (currentTag) {
      // ใช้ include เพื่อหา Tag ที่ตรงกัน
      result = result.filter((p) => p.tags.includes(currentTag));
    }

    if (currentSearch) {
      const q = currentSearch.toLowerCase();
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q),
      );
    }

    // Sort: Featured First
    return result.sort(
      (a, b) => (Number(b.featured) || 0) - (Number(a.featured) || 0),
    );
  }, [currentTag, currentSearch]);

  return (
    <section className="space-y-6">
      {/* --- HEADER --- */}
      <motion.header
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="space-y-2"
      >
        <div className="flex items-center gap-2">
          <h1 className="text-2xl font-medium text-zinc-900 dark:text-zinc-50">
            Projects
          </h1>
        </div>
        <p className="text-zinc-600 dark:text-zinc-400">
          Several projects that I have worked on, both private and open source.
        </p>
      </motion.header>

      <hr className="border-zinc-200 dark:border-zinc-700" />

      {/* --- CONTROLS --- */}
      <motion.div
        className="space-y-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={staggerContainer}
      >
        <motion.div
          variants={fadeInUp}
          className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between"
        >
          {/* Search Input */}
          <div className="relative flex w-full items-center md:w-1/2">
            <div className="pointer-events-none absolute left-3 flex items-center pl-1">
              <Search className="h-4 w-4 text-zinc-500" />
            </div>
            <input
              type="text"
              placeholder="Search projects..."
              defaultValue={currentSearch}
              onChange={(e) => updateUrl("q", e.target.value)}
              className="w-full rounded-lg border border-zinc-200 bg-zinc-50 py-2 pr-4 pl-10 text-sm text-zinc-900 placeholder:text-zinc-500 focus:border-zinc-400 focus:ring-1 focus:ring-zinc-400 focus:outline-none dark:border-zinc-800 dark:bg-zinc-900/50 dark:text-zinc-100 dark:placeholder:text-zinc-400 dark:focus:border-zinc-700"
            />
          </div>

          {/* Filter Combobox (เหมือน Achievements) */}
          <div className="w-full md:w-[230px]">
            <ProjectsCombobox
              selectedTag={currentTag}
              options={allTags} // ส่ง Tags ทั้งหมดไปให้ Combobox
              onSelect={(val) => updateUrl("tag", val)}
            />
          </div>
        </motion.div>

        {/* Summary */}
        <motion.div
          variants={fadeInUp}
          className="ml-1 flex items-center justify-between text-sm text-zinc-500 dark:text-zinc-400"
        >
          <p>
            Showing {filteredProjects.length} project
            {filteredProjects.length !== 1 ? "s" : ""}
          </p>
        </motion.div>

        {/* --- PROJECTS GRID --- */}
        {filteredProjects.length > 0 ? (
          <motion.div
            className="grid grid-cols-1 gap-6 md:grid-cols-2"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.title}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <ProjectCard {...project} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        ) : (
          <motion.div
            variants={fadeInUp}
            className="py-20 text-center text-zinc-500 dark:text-zinc-400"
          >
            <p>No projects found matching your criteria.</p>
            <button
              onClick={() => router.replace(pathname, { scroll: false })}
              className="mt-2 text-sm text-zinc-900 underline underline-offset-4 dark:text-zinc-50"
            >
              Clear all filters
            </button>
          </motion.div>
        )}
      </motion.div>
    </section>
  );
}

// Wrap with Suspense
export default function ProjectsSection() {
  return (
    <section id="projects" aria-labelledby="projects-heading">
      <Suspense
        fallback={<div className="py-20 text-center">Loading projects...</div>}
      >
        <ProjectsContent />
      </Suspense>
    </section>
  );
}
