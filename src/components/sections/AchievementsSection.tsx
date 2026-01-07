// //src/components/sections/AchievementsSection.tsx
// "use client";

// import { FaSearch } from "react-icons/fa";
// import { AchievementCombobox } from "../comboboxs/AchievementsCombobox";
// import { AchievementSummary } from "../AchievementSummary";
// import { useMemo, useState } from "react";
// import AchievementCard from "../cards/AchievementCard";

// export type Achievement = {
//   type: "certification" | "badge" | "awards";
//   title: string;
//   organization: string;
//   image: string;
//   link?: string;
//   date?: string;
// };

// // ตัวอย่าง mock data
// const mockAchievements: Achievement[] = [
//   {
//     type: "certification",
//     title: "AWS Certified",
//     organization: "Amazon Web Services",
//     image: "/vercel.svg",
//     link: "https://example.com/certificate",
//     date: "2024-01-01",
//   },
//   {
//     type: "badge",
//     title: "Open Source Contributor",
//     organization: "GitHub",
//     image: "/vercel.svg",
//     link: "https://example.com/certificate",
//     date: "2024-01-01",
//   },
//   {
//     type: "awards",
//     title: "Best Dev 2024",
//     organization: "Tech Awards",
//     image: "/vercel.svg",
//     link: "https://example.com/certificate",
//     date: "2024-01-01",
//   },
// ];

// export default function AchievementsSection() {
//   // const [achievements] = useState(mockAchievements); // หรือใช้ fetch/props ได้
//   const [achievements] = useState<Achievement[]>(mockAchievements);
//   const [filters, setFilters] = useState<{
//     type: string;
//     searchQuery: string;
//   }>({ type: "", searchQuery: "" });

//   // Memoize filtered achievements to avoid unnecessary re-computation
//   const filteredAchievements = useMemo(() => {
//     return achievements.filter((achievement) => {
//       const matchesType = filters.type
//         ? achievement.type === filters.type
//         : true;
//       const matchesSearch = filters.searchQuery
//         ? achievement.title
//             .toLowerCase()
//             .includes(filters.searchQuery.toLowerCase()) ||
//           achievement.organization
//             .toLowerCase()
//             .includes(filters.searchQuery.toLowerCase())
//         : true;
//       return matchesType && matchesSearch;
//     });
//   }, [achievements, filters]);

//   // Handle search input changes with debouncing (optional, can be added later)
//   const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFilters((prev) => ({ ...prev, searchQuery: e.target.value }));
//   };

//   // Handle type selection from combobox
//   const handleTypeSelect = (type: string) => {
//     setFilters((prev) => ({ ...prev, type }));
//   };

//   return (
//     <section id="achievements" aria-labelledby="achievements-heading">
//       <header>
//         <h1 className="text-2xl font-medium">Achievements</h1>
//         <p className="mb-6 pb-6 pt-2 text-neutral-600 dark:text-neutral-400">
//           A collection of certificates and badges that I have earned throughout
//           my professional journey.
//         </p>
//       </header>

//       {/* Separator */}
//       <hr className="my-6 border-zinc-200 dark:border-zinc-700" />

//       {/* Achievements List */}
//       <section className="space-y-4">
//         {/* Search and Filter */}
//         <div className="flex flex-col space-y-4">
//           <div className="flex w-full flex-col items-center justify-between space-y-4 md:flex-row">
//             {/* Search Input */}
//             <div className="flex w-full items-center gap-2 rounded-lg bg-neutral-50 p-2 outline outline-1 outline-neutral-300 focus-within:outline-neutral-400 dark:bg-neutral-900 dark:outline-neutral-700 md:w-1/2">
//               <FaSearch
//                 className="h-5 w-5 text-neutral-500 dark:text-neutral-400"
//                 aria-hidden="true"
//               />
//               <input
//                 type="text"
//                 placeholder="Search achievements..."
//                 value={filters.searchQuery}
//                 onChange={handleSearchChange}
//                 className="w-full bg-transparent text-base text-neutral-900 placeholder:text-neutral-500 focus:outline-none dark:text-white dark:placeholder:text-neutral-400"
//                 aria-label="Search achievements"
//               />
//             </div>

//             {/* Filter Dropdown */}
//             <div className="relative justify-end w-full md:w-[230px]">
//               <AchievementCombobox
//                 selectedType={filters.type}
//                 onSelect={handleTypeSelect}
//               />
//             </div>
//           </div>
//           {/* Total Achievements */}
//           <div className="ml-1 text-sm text-neutral-500 dark:text-neutral-400">
//             {/* <AchievementSummary total={achievements.length} /> */}
//             <AchievementSummary total={filteredAchievements.length} />
//           </div>
//         </div>

//         {/* Achievements Grid or Empty State */}
//         {filteredAchievements.length > 0 ? (
//           <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
//             {filteredAchievements.map((achievement, index) => (
//               <AchievementCard
//                 key={`${achievement.type}-${achievement.title}-${index}`}
//                 {...achievement}
//               />
//             ))}
//           </div>
//         ) : (
//           <div className="text-center text-neutral-500 dark:text-neutral-400">
//             No achievements found.
//           </div>
//         )}
//       </section>
//     </section>
//   );
// }

// src/components/sections/AchievementsSection.tsx
"use client";

import { FaSearch } from "react-icons/fa";
import { AchievementCombobox } from "../comboboxs/AchievementsCombobox";
import { AchievementSummary } from "../AchievementSummary";
import { Suspense, useCallback, useMemo } from "react";
import AchievementCard from "../cards/AchievementCard";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { achievements } from "@/data/achievements"; // Import data

function AchievementsContent() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // 1. ดึงค่าจาก URL (ถ้าไม่มีให้เป็นค่าว่าง)
  const currentType = searchParams.get("type") || "";
  const currentSearch = searchParams.get("q") || "";

  // 2. ฟังก์ชันสำหรับอัปเดต URL (Helper Function)
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

  // 3. Logic การ Filter (ใช้ค่าจาก URL แทน State)
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

  // 4. Handle Search Input (ใช้ replace เพื่ออัปเดต URL)
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    router.replace(pathname + "?" + createQueryString("q", value), {
      scroll: false, // ไม่ต้องเลื่อนหน้าจอขึ้นบนสุด
    });
  };

  // 5. Handle Type Select
  const handleTypeSelect = (type: string) => {
    router.replace(pathname + "?" + createQueryString("type", type), {
      scroll: false,
    });
  };

  return (
    <div className="space-y-6">
      <header>
        <h1
          id="achievements-heading"
          className="text-2xl font-medium text-neutral-900 dark:text-neutral-50"
        >
          Achievements
        </h1>
        <p className="mb-6 pt-2 text-neutral-600 dark:text-neutral-400">
          A collection of certificates and badges earned throughout my
          professional journey.
        </p>
      </header>

      <hr className="my-6 border-zinc-200 dark:border-zinc-700" />

      <section className="space-y-4">
        <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
          {/* Search Input */}
          <div className="flex w-full items-center gap-2 rounded-lg bg-neutral-50 p-2 outline outline-1 outline-neutral-300 focus-within:outline-neutral-400 md:w-1/2 dark:bg-neutral-900 dark:outline-neutral-700">
            <FaSearch
              className="h-5 w-5 text-neutral-500 dark:text-neutral-400"
              aria-hidden="true"
            />
            <input
              type="text"
              placeholder="Search achievements..."
              // ใช้ defaultValue เพื่อให้พิมพ์ได้ลื่นไหล (Uncontrolled Input with URL Sync)
              defaultValue={currentSearch}
              onChange={handleSearchChange}
              className="w-full bg-transparent text-base text-neutral-900 placeholder:text-neutral-500 focus:outline-none dark:text-white dark:placeholder:text-neutral-400"
              aria-label="Search achievements"
            />
          </div>

          {/* Filter Dropdown */}
          <div className="w-full md:w-[230px]">
            <AchievementCombobox
              selectedType={currentType}
              onSelect={handleTypeSelect}
            />
          </div>
        </div>

        {/* Summary */}
        <div className="ml-1 text-sm text-neutral-500 dark:text-neutral-400">
          <AchievementSummary total={filteredAchievements.length} />
        </div>

        {/* Achievements Grid or Empty State */}
        {filteredAchievements.length > 0 ? (
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {filteredAchievements.map((achievement, index) => (
              <AchievementCard
                key={`${achievement.type}-${achievement.title}-${index}`}
                {...achievement}
              />
            ))}
          </div>
        ) : (
          <div className="text-center text-neutral-500 dark:text-neutral-400">
            No achievements found.
          </div>
        )}
      </section>
    </div>
  );
}

// Main Component ต้อง Wrap ด้วย Suspense เพราะมีการใช้ useSearchParams
export default function AchievementsSection() {
  return (
    <section id="achievements" aria-labelledby="achievements-heading">
      <Suspense fallback={<div>Loading achievements...</div>}>
        <AchievementsContent />
      </Suspense>
    </section>
  );
}
