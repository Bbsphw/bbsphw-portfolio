// // src/components/sections/SkillsSection.tsx
// "use client";

// import { motion, Variants } from "framer-motion";
// import { Cpu, Code2, Database, Wrench } from "lucide-react"; // Using Lucide icons for consistency
// import {
//   SiJavascript,
//   SiTypescript,
//   SiReact,
//   SiNextdotjs,
//   SiNodedotjs,
//   SiTailwindcss,
//   SiHtml5,
//   SiCss3,
//   SiGit,
//   SiDocker,
//   SiPostgresql,
//   SiMongodb,
//   SiPython,
//   SiFigma,
//   SiVercel,
// } from "react-icons/si"; // Example icons, adjust based on your actual data

// // --- Animation Variants (Consistent with AboutSection) ---
// const fadeInUp: Variants = {
//   hidden: { opacity: 0, y: 20 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
// };

// const staggerContainer: Variants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.1,
//     },
//   },
// };

// // --- Mock Data (Replace or Map from your actual @/data/skills) ---
// // You can structure your data like this in your data file
// const skillCategories = [
//   {
//     title: "Languages",
//     icon: Code2,
//     skills: [
//       { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
//       { name: "TypeScript", icon: SiTypescript, color: "text-blue-500" },
//       { name: "Python", icon: SiPython, color: "text-blue-400" },
//       { name: "HTML5", icon: SiHtml5, color: "text-orange-500" },
//       { name: "CSS3", icon: SiCss3, color: "text-blue-500" },
//     ],
//   },
//   {
//     title: "Frontend Frameworks & Libraries",
//     icon: Cpu,
//     skills: [
//       { name: "React", icon: SiReact, color: "text-cyan-400" },
//       {
//         name: "Next.js",
//         icon: SiNextdotjs,
//         color: "text-zinc-900 dark:text-zinc-100",
//       },
//       { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-400" },
//     ],
//   },
//   {
//     title: "Backend & Database",
//     icon: Database,
//     skills: [
//       { name: "Node.js", icon: SiNodedotjs, color: "text-green-500" },
//       { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-400" },
//       { name: "MongoDB", icon: SiMongodb, color: "text-green-500" },
//     ],
//   },
//   {
//     title: "Tools & DevOps",
//     icon: Wrench,
//     skills: [
//       { name: "Git", icon: SiGit, color: "text-orange-500" },
//       { name: "Docker", icon: SiDocker, color: "text-blue-500" },
//       { name: "Figma", icon: SiFigma, color: "text-pink-500" },
//       {
//         name: "Vercel",
//         icon: SiVercel,
//         color: "text-zinc-900 dark:text-zinc-100",
//       },
//     ],
//   },
// ];

// export default function SkillsSection() {
//   return (
//     <section id="skills" aria-labelledby="skills-heading" className="space-y-6">
//       {/* --- HEADER --- */}
//       <motion.header
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//         variants={fadeInUp}
//         className="space-y-2"
//       >
//         <h1
//           id="skills-heading"
//           className="text-2xl font-medium text-zinc-900 dark:text-zinc-50"
//         >
//           Skills
//         </h1>
//         <p className="text-zinc-600 dark:text-zinc-400">
//           A comprehensive overview of my technical proficiencies and tools.
//         </p>
//       </motion.header>

//       <hr className="my-6 border-zinc-200 dark:border-zinc-700" />

//       {/* --- SKILLS CATEGORIES --- */}
//       <motion.div
//         className="space-y-10"
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, margin: "-50px" }}
//         variants={staggerContainer}
//       >
//         {skillCategories.map((category, index) => (
//           <motion.div key={index} variants={fadeInUp} className="space-y-4">
//             {/* Category Title */}
//             <div className="flex items-center gap-2">
//               <category.icon className="text-xl text-zinc-800 dark:text-zinc-200" />
//               <h2 className="text-xl font-medium text-zinc-800 dark:text-zinc-300">
//                 {category.title}
//               </h2>
//             </div>

//             {/* Grid for Skills in this Category */}
//             <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
//               {category.skills.map((skill, skillIndex) => (
//                 <div
//                   key={skillIndex}
//                   className="group flex flex-col items-center justify-center gap-3 rounded-xl border border-zinc-200 bg-zinc-50 p-4 transition-all duration-300 hover:border-zinc-300 hover:shadow-sm dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-700"
//                 >
//                   <div className="relative flex h-10 w-10 items-center justify-center rounded-lg bg-white p-2 shadow-sm dark:bg-zinc-800">
//                     <skill.icon className={`text-2xl ${skill.color}`} />
//                   </div>
//                   <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
//                     {skill.name}
//                   </span>
//                 </div>
//               ))}
//             </div>
//           </motion.div>
//         ))}
//       </motion.div>
//     </section>
//   );
// }
