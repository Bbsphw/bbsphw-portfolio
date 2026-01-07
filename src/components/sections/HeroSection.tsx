// src/components/hero-section.tsx
"use client";

import * as React from "react";
import { MailIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

import { HiCode } from "react-icons/hi";
import { skills } from "@/data/skills";
import { RiServiceFill } from "react-icons/ri";
import SkillsMarquee from "../SkillsMarquee";

export default function HeroSection(): React.JSX.Element {
  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      // className="py-12 px-4 sm:px-6 lg:px-8"
    >
      {/* Hero Intro */}
      <header className="space-y-2 bg-cover bg-no-repeat">
        <h1
          id="hero-heading"
          className="text-3xl font-medium text-zinc-900 dark:text-zinc-50"
          //class="text-3xl font-medium text-neutral-900 dark:text-neutral-50" รอแก้ไข
        >
          Hi, I&apos;m Sophonwit Thapseng
        </h1>

        <div className="space-y-4">
          <div className="ml-5 flex flex-col gap-y-2 text-zinc-700 md:flex-row md:gap-x-2 dark:text-zinc-400">
            <div className="flex items-center gap-2">
              <span>•</span>
              <span>Based in Bangkok, Thailand 🇹🇭</span>
            </div>
            <div className="flex items-center gap-2">
              <span>•</span>
              <span>Hybrid work</span>
            </div>
          </div>
        </div>

        <div className="mt-3 leading-loose">
          <p className="text-lg leading-relaxed text-zinc-600 dark:text-zinc-300">
            Passionate and seasoned Software Engineer with a strong focus on
            frontend development. Proficient in TypeScript and well-versed in
            all aspects of web technologies. Collaborative team player dedicated
            to delivering efficient, scalable, and visually appealing web
            applications.
          </p>
        </div>
      </header>

      <hr className="my-6 border-zinc-300 dark:border-zinc-700" />

      {/* Skills Section */}
      <section aria-labelledby="skills-heading" className="space-y-6">
        <div className="flex items-center gap-2">
          <i>
            <HiCode />
          </i>
          <h2
            id="skills-heading"
            className="text-xl font-medium text-zinc-800 capitalize dark:text-zinc-300"
          >
            Skills
          </h2>
        </div>
        <div className="flex flex-col justify-between gap-2 md:flex-row lg:items-center">
          <p className="text-zinc-600 dark:text-zinc-400">
            My professional skills.
          </p>
        </div>

        {/* Skills Marquee */}
        {/* Marquee Left */}
        <SkillsMarquee skills={skills} direction="left" speed={25} />

        {/* Marquee Right */}

        <SkillsMarquee
          skills={skills}
          direction="right"
          speed={25}
          //className="mt-10"
        />
      </section>

      <hr className="my-6 border-zinc-300 dark:border-zinc-700" />

      {/* Service Section */}
      <section aria-labelledby="service-heading" className="space-y-5">
        <div className="space-y-3">
          <div className="flex items-center gap-1.5">
            {/* <Image
              src="/icon/room-service-2-svgrepo-com.svg"
              alt="service Icon"
              width={40}
              height={40}
              className="h-8 w-8 rounded-full object-cover text-white"
            /> */}
            <RiServiceFill />
            <h2
              id="service-heading"
              className="text-xl font-medium text-zinc-800 capitalize dark:text-zinc-300"
            >
              Service
            </h2>
          </div>

          <div className="flex flex-col justify-between gap-2 md:flex-row lg:items-center">
            <p className="text-zinc-600 dark:text-zinc-400">
              I work as a freelancer to develop exceptional websites for brands,
              companies, institutions, and startups, focusing on strategic web
              solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <footer className="my-4 space-y-4">
        <div className="w-full rounded-xl border-[1.5px] border-zinc-300 p-1 shadow-sm dark:border-[#333333]">
          <div className="space-y-4 rounded-lg bg-gradient-to-b from-zinc-200 to-zinc-100 p-6 transition-all duration-300 hover:to-[#ffffff] dark:from-[#242424] dark:to-zinc-900 dark:hover:to-zinc-950">
            <div className="flex items-center gap-2">
              <RiServiceFill />
              <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
                Let&apos;s work together!
              </h2>
            </div>

            <p className="text-zinc-600 dark:text-zinc-400">
              I&apos;m open for freelance projects, feel free to email me to see
              how can we collaborate.
            </p>
            <Button
              className="items-center gap-2 rounded-lg bg-zinc-500 px-4 py-2 text-zinc-50 transition duration-300 hover:scale-105 hover:bg-zinc-600 active:scale-95 dark:bg-zinc-600 dark:hover:bg-zinc-700"
              asChild
            >
              <Link href="/contact" aria-label="Go to contact section">
                <MailIcon className="h-4 w-4" />
                Contact Me
              </Link>
            </Button>
          </div>
        </div>
      </footer>
    </section>
  );
}

// finish
