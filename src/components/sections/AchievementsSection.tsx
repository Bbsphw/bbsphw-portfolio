"use client";

import { Search } from "lucide-react";
import { AchievementCombobox } from "../comboboxs/AchievementsCombobox";
import { AchievementSummary } from "../AchievementSummary";
import { Suspense, useCallback, useMemo } from "react";
import AchievementCard from "../cards/AchievementCard";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { achievements } from "@/data/achievements";
import { motion, Variants } from "framer-motion";

// --- Animation Variants ---
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

function AchievementsContent() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // 1. ดึงค่าจาก URL
  const currentType = searchParams.get("type") || "";
  const currentSearch = searchParams.get("q") || "";

  // 2. Helper Update URL
  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      if (value) {
        params.set(name, value);
      } else {
        params.delete(name);
      }
      return params.toString();
    },
    [searchParams],
  );

  // 3. Logic Filter
  const filteredAchievements = useMemo(() => {
    return achievements.filter((achievement) => {
      const matchesType = currentType ? achievement.type === currentType : true;
      const matchesSearch = currentSearch
        ? achievement.title
            .toLowerCase()
            .includes(currentSearch.toLowerCase()) ||
          achievement.organization
            .toLowerCase()
            .includes(currentSearch.toLowerCase())
        : true;
      return matchesType && matchesSearch;
    });
  }, [currentType, currentSearch]);

  // 4. Handlers
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    router.replace(pathname + "?" + createQueryString("q", e.target.value), {
      scroll: false,
    });
  };

  const handleTypeSelect = (type: string) => {
    router.replace(pathname + "?" + createQueryString("type", type), {
      scroll: false,
    });
  };

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
          <h1
            id="achievements-heading"
            className="text-2xl font-medium text-zinc-900 dark:text-zinc-50"
          >
            Achievements
          </h1>
        </div>
        <p className="text-zinc-600 dark:text-zinc-400">
          A collection of certificates and badges earned throughout my
          professional journey.
        </p>
      </motion.header>

      <hr className="border-zinc-200 dark:border-zinc-700" />

      {/* --- FILTER BAR --- */}
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
          {/* Search Input (Style ให้เหมือน Contact Form) */}
          <div className="relative flex w-full items-center md:w-1/2">
            <div className="pointer-events-none absolute left-3 flex items-center pl-1">
              <Search className="h-4 w-4 text-zinc-500" />
            </div>
            <input
              type="text"
              placeholder="Search achievements..."
              defaultValue={currentSearch}
              onChange={handleSearchChange}
              className="w-full rounded-lg border border-zinc-200 bg-zinc-50 py-2 pr-4 pl-10 text-sm text-zinc-900 placeholder:text-zinc-500 focus:border-zinc-400 focus:ring-1 focus:ring-zinc-400 focus:outline-none dark:border-zinc-800 dark:bg-zinc-900/50 dark:text-zinc-100 dark:placeholder:text-zinc-400 dark:focus:border-zinc-700"
            />
          </div>

          {/* Filter Dropdown */}
          <div className="w-full md:w-[230px]">
            <AchievementCombobox
              selectedType={currentType}
              onSelect={handleTypeSelect}
            />
          </div>
        </motion.div>

        {/* Summary */}
        <motion.div
          variants={fadeInUp}
          className="ml-1 text-sm text-zinc-500 dark:text-zinc-400"
        >
          <AchievementSummary total={filteredAchievements.length} />
        </motion.div>

        {/* --- GRID CONTENT --- */}
        {filteredAchievements.length > 0 ? (
          <motion.div
            className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3" // ใช้ gap-6 ให้เท่ากับ Projects
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {filteredAchievements.map((achievement, index) => (
              <motion.div
                key={`${achievement.type}-${achievement.title}-${index}`}
                variants={fadeInUp}
              >
                <AchievementCard {...achievement} />
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            variants={fadeInUp}
            className="py-10 text-center text-zinc-500 dark:text-zinc-400"
          >
            No achievements found matching your criteria.
          </motion.div>
        )}
      </motion.div>
    </section>
  );
}

// Main Component
export default function AchievementsSection() {
  return (
    <section id="achievements" aria-labelledby="achievements-heading">
      <Suspense
        fallback={
          <div className="py-20 text-center">Loading achievements...</div>
        }
      >
        <AchievementsContent />
      </Suspense>
    </section>
  );
}
