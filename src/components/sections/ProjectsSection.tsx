// src/components/sections/ProjectsSection.tsx

"use client";

import { useMemo, useCallback, Suspense } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { Search } from "lucide-react";
import { motion, Variants, AnimatePresence } from "framer-motion";
import ProjectCard from "@/components/cards/ProjectCard";
import { projects } from "@/data/projects";
import { ProjectsCombobox } from "@/components/comboboxs/ProjectsCombobox";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

function ProjectsContent() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // 1. Get URL Params
  const currentCategory = searchParams.get("category") || "";
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

  // 3. Filtering Logic
  const filteredProjects = useMemo(() => {
    let result = [...projects];

    if (currentCategory) {
      result = result.filter((p) => p.category === currentCategory);
    }

    if (currentSearch) {
      const q = currentSearch.toLowerCase();
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.tags.some((tag) => tag.toLowerCase().includes(q)),
      );
    }

    return result.sort(
      (a, b) => (Number(b.featured) || 0) - (Number(a.featured) || 0),
    );
  }, [currentCategory, currentSearch]);

  return (
    <section className="space-y-6">
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
          A curated collection of my work spanning modern Web Apps,
          Cross-platform Mobile solutions, and Embedded Systems.
        </p>
      </motion.header>

      <hr className="border-zinc-200 dark:border-zinc-700" />

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
              className="w-full rounded-lg border border-zinc-200 bg-zinc-50 py-2 pr-4 pl-10 text-sm text-zinc-900 placeholder:text-zinc-500 focus:border-zinc-400 focus:outline-none dark:border-zinc-800 dark:bg-zinc-900/50 dark:text-zinc-100"
            />
          </div>

          <div className="w-full md:w-[230px]">
            <ProjectsCombobox
              selectedCategory={currentCategory}
              onSelect={(val) => updateUrl("category", val)}
            />
          </div>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          className="ml-1 text-sm text-zinc-500 dark:text-zinc-400"
        >
          <p>Showing {filteredProjects.length} project(s)</p>
        </motion.div>

        {filteredProjects.length > 0 ? (
          <motion.div
            key={`${currentCategory}-${currentSearch}`}
            className="grid grid-cols-1 gap-6 md:grid-cols-2"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div key={project.title} variants={fadeInUp} layout>
                  <ProjectCard {...project} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        ) : (
          <motion.div
            key="empty"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="py-20 text-center text-zinc-500 dark:text-zinc-400"
          >
            <p>No projects found matching your criteria.</p>
          </motion.div>
        )}
      </motion.div>
    </section>
  );
}

export default function ProjectsSection() {
  return (
    <section id="projects" aria-labelledby="projects-heading">
      <Suspense fallback={<div className="py-20 text-center">Loading...</div>}>
        <ProjectsContent />
      </Suspense>
    </section>
  );
}
