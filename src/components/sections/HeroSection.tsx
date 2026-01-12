// src/components/sections/HeroSection.tsx

"use client";

import * as React from "react";
import Link from "next/link";
import {
  Mail,
  Code2,
  Sparkles,
  Handshake,
  MapPin,
  Briefcase,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { skillsRow1, skillsRow2 } from "@/data/skills";
import SkillsMarquee from "../SkillsMarquee";
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

export default function HeroSection(): React.JSX.Element {
  return (
    <section id="hero" aria-labelledby="hero-heading" className="space-y-6">
      {/* --- HERO INTRO --- */}
      <motion.header
        className="space-y-6"
        initial="hidden"
        animate="visible" // บังคับให้เล่น Animation ทันทีที่ Component ถูก Mount
        variants={fadeInUp}
      >
        <div className="space-y-2">
          <h1
            id="hero-heading"
            className="text-3xl font-medium text-zinc-900 dark:text-zinc-50"
          >
            Hi, I&apos;m Sophonwit Thapseng
          </h1>

          {/* Meta Info (Location & Work) */}
          <div className="flex flex-col gap-y-2 text-zinc-600 sm:flex-row sm:items-center sm:gap-x-4 dark:text-zinc-400">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>Based in Bangkok, Thailand 🇹🇭</span>
            </div>
            <div className="hidden h-1 w-1 rounded-full bg-zinc-300 sm:block dark:bg-zinc-700" />
            <div className="flex items-center gap-2">
              <Briefcase className="h-4 w-4" />
              <span>Hybrid work</span>
            </div>
          </div>
        </div>

        <div className="leading-loose">
          <p className="text-lg leading-relaxed text-zinc-600 dark:text-zinc-300">
            Passionate and seasoned Software Engineer with a strong focus on
            frontend development. Proficient in TypeScript and well-versed in
            all aspects of web technologies. Collaborative team player dedicated
            to delivering efficient, scalable, and visually appealing web
            applications.
          </p>
        </div>
      </motion.header>

      <hr className="border-zinc-200 dark:border-zinc-700" />

      {/* --- SKILLS SECTION --- */}
      <motion.section
        aria-labelledby="skills-heading"
        className="space-y-6"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <motion.div variants={fadeInUp} className="space-y-2">
          <div className="flex items-center gap-2">
            <Code2 className="text-2xl text-zinc-800 dark:text-zinc-200" />
            <h2
              id="skills-heading"
              className="text-xl font-medium text-zinc-900 dark:text-zinc-50"
            >
              Skills
            </h2>
          </div>
          <p className="text-zinc-600 dark:text-zinc-400">
            My professional technical stack.
          </p>
        </motion.div>

        {/* Marquee Content */}
        <motion.div variants={fadeInUp} className="space-y-6 py-2">
          <SkillsMarquee skills={skillsRow1} direction="left" speed={40} />
          <SkillsMarquee skills={skillsRow2} direction="right" speed={40} />
        </motion.div>
      </motion.section>

      <hr className="border-zinc-200 dark:border-zinc-700" />

      {/* --- SERVICE SECTION --- */}
      <motion.section
        aria-labelledby="service-heading"
        className="space-y-6"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <motion.div variants={fadeInUp} className="space-y-2">
          <div className="flex items-center gap-2">
            <Sparkles className="text-2xl text-zinc-800 dark:text-zinc-200" />
            <h2
              id="service-heading"
              className="text-xl font-medium text-zinc-900 dark:text-zinc-50"
            >
              Service
            </h2>
          </div>
          <p className="text-zinc-600 dark:text-zinc-400">
            I work as a freelancer to develop exceptional websites for brands,
            companies, institutions, and startups, focusing on strategic web
            solutions.
          </p>
        </motion.div>
      </motion.section>

      {/* --- CALL TO ACTION (Footer Style) --- */}
      <motion.footer
        className="pt-2"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        <div className="w-full rounded-xl border-[1.5px] border-zinc-300 p-1 shadow-sm transition-all hover:border-zinc-400 dark:border-[#333333] dark:hover:border-zinc-600">
          <div className="flex flex-col gap-6 rounded-lg bg-gradient-to-b from-zinc-200 to-zinc-100 p-6 text-center transition-all duration-300 hover:to-[#ffffff] sm:text-left dark:from-[#242424] dark:to-zinc-900 dark:hover:to-zinc-950">
            <div className="space-y-2">
              <div className="flex items-center justify-center gap-2 sm:justify-start">
                <Handshake className="text-zinc-800 dark:text-zinc-200" />
                <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
                  Let&apos;s work together!
                </h2>
              </div>
              <p className="text-zinc-600 dark:text-zinc-400">
                I&apos;m open for freelance projects. Feel free to email me to
                see how can we collaborate.
              </p>
            </div>

            <div>
              <Button
                size="lg"
                className="group w-full gap-2 rounded-full bg-zinc-900 text-zinc-50 hover:bg-zinc-800 sm:w-fit dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
                asChild
              >
                <Link href="/contact" aria-label="Go to contact section">
                  <Mail className="h-4 w-4 transition-transform group-hover:-translate-y-1" />
                  Contact Me
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </motion.footer>
    </section>
  );
}
