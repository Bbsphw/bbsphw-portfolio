// src/components/sections/ContactSection.tsx

"use client";

"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ContactForm } from "../forms/ContactForm";
import { MessageSquare } from "lucide-react";
import {
  SiGmail,
  SiInstagram,
  SiLinkedin,
  SiTiktok,
  SiGithub,
} from "react-icons/si";
import { MdArrowOutward } from "react-icons/md";
import { motion, Variants } from "framer-motion";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

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

export default function ContactSection() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="space-y-6"
    >
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
            id="contact-heading"
            className="text-3xl font-medium text-zinc-900 dark:text-zinc-50"
          >
            Contact
          </h1>
        </div>
        <p className="text-zinc-600 dark:text-zinc-400">
          Have a question or looking for a developer?
        </p>
      </motion.header>

      <hr className="border-zinc-200 dark:border-zinc-700" />

      {/* --- SOCIAL BENTO GRID --- */}
      <motion.div
        className="space-y-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={staggerContainer}
      >
        <motion.h4
          variants={fadeInUp}
          className="text-lg font-semibold text-zinc-800 dark:text-zinc-200"
        >
          Find me on social media
        </motion.h4>

        {/* Grid Layout แบบเดิม (Bento Grid) */}
        {/* ปรับ Mobile เป็น 1 col, Desktop เป็น 6 cols เหมือนเดิม */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:grid-rows-9 md:gap-6">
          {/* 1. GMAIL (Full Width Top) */}
          <SocialCard
            variant="red"
            className="md:col-span-6 md:row-span-3"
            icon={<SiGmail className="h-10 w-10" />}
            bgIcon={<SiGmail className="h-[275px] w-[275px] text-white/10" />}
            title="Get in touch"
            description="For inquiries or collaborations, please contact us via email."
            buttonText="Go to Email"
            href="mailto:sophonwit.ts@gmail.com"
          />

          {/* 2. INSTAGRAM (Left Middle) */}
          <SocialCard
            variant="purple"
            className="md:col-span-3 md:row-span-3"
            icon={<SiInstagram className="h-10 w-10" />}
            bgIcon={
              <SiInstagram className="h-[275px] w-[275px] text-white/10" />
            }
            title="Follow My Journey"
            description="Stay updated with my latest posts and stories on Instagram."
            buttonText="Go to Instagram"
            href="https://www.instagram.com/bbsphw_"
          />

          {/* 3. LINKEDIN (Right Middle) */}
          <SocialCard
            variant="sky"
            className="md:col-span-3 md:row-span-3"
            icon={<SiLinkedin className="h-10 w-10" />}
            bgIcon={
              <SiLinkedin className="h-[275px] w-[275px] text-white/10" />
            }
            title="Let's Connect"
            description="Connect for collaboration or explore my professional experience."
            buttonText="Go to LinkedIn"
            href="https://linkedin.com/in/sophonwit-thapseng-1b1076330"
          />

          {/* 4. TIKTOK (Left Bottom) */}
          <SocialCard
            variant="zinc"
            className="md:col-span-3 md:row-span-3"
            icon={<SiTiktok className="h-10 w-10" />}
            bgIcon={<SiTiktok className="h-[275px] w-[275px] text-white/10" />}
            title="Join the Fun"
            description="Follow me on TikTok for entertaining and engaging content."
            buttonText="Go to TikTok"
            href="https://www.tiktok.com/@bbsphw_"
          />

          {/* 5. GITHUB (Right Bottom) */}
          <SocialCard
            variant="slate"
            className="md:col-span-3 md:row-span-3"
            icon={<SiGithub className="h-10 w-10" />}
            bgIcon={<SiGithub className="h-[275px] w-[275px] text-white/10" />}
            title="Explore the Code"
            description="Explore the source code for all my projects on GitHub."
            buttonText="Go to Github"
            href="https://github.com/Bbsphw"
          />
        </div>
      </motion.div>

      <hr className="border-zinc-200 dark:border-zinc-700" />

      {/* --- CONTACT FORM --- */}
      <motion.div
        className="space-y-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <motion.div variants={fadeInUp} className="space-y-2">
          <div className="flex items-center gap-2">
            <MessageSquare className="text-xl text-zinc-800 dark:text-zinc-200" />
            <h2 className="text-lg font-medium text-zinc-800 dark:text-zinc-200">
              Or Send Me a Message
            </h2>
          </div>
        </motion.div>

        <motion.div variants={fadeInUp}>
          <ContactForm />
        </motion.div>
      </motion.div>
    </section>
  );
}

// ----------------------------------------------------------------------
// Reusable Social Card Component (Clean Code & DRY Principle)
// ----------------------------------------------------------------------

interface SocialCardProps {
  variant: "red" | "purple" | "sky" | "zinc" | "slate";
  className?: string;
  icon: ReactNode;
  bgIcon: ReactNode;
  title: string;
  description: string;
  buttonText: string;
  href: string;
}

function SocialCard({
  variant,
  className,
  icon,
  bgIcon,
  title,
  description,
  buttonText,
  href,
}: SocialCardProps) {
  // Define styles based on variant
  const styles = {
    red: {
      bg: "bg-gradient-to-b from-red-700 to-red-900 border-red-300",
      textTitle: "text-red-300",
      textDesc: "text-red-300",
      btn: "bg-red-300 text-black hover:bg-red-200",
    },
    purple: {
      bg: "bg-gradient-to-b from-purple-700 via-pink-500 to-orange-500 border-purple-200",
      textTitle: "text-purple-300",
      textDesc: "text-purple-300",
      btn: "bg-purple-300 text-black hover:bg-purple-200",
    },
    sky: {
      bg: "bg-gradient-to-b from-sky-700 to-sky-900 border-sky-300",
      textTitle: "text-sky-300",
      textDesc: "text-sky-300",
      btn: "bg-sky-300 text-black hover:bg-sky-200",
    },
    zinc: {
      bg: "bg-gradient-to-b from-zinc-700 to-zinc-900 border-zinc-400",
      textTitle: "text-zinc-300",
      textDesc: "text-zinc-300",
      btn: "bg-zinc-300 text-black hover:bg-zinc-200",
    },
    slate: {
      bg: "bg-gradient-to-b from-slate-900 to-slate-950 border-slate-400",
      textTitle: "text-slate-300",
      textDesc: "text-slate-300",
      btn: "bg-slate-300 text-black hover:bg-slate-200",
    },
  };

  const currentStyle = styles[variant];

  return (
    <motion.div
      variants={fadeInUp}
      className={cn("group", className)} // รับ className เพื่อจัด grid (col-span, row-span)
    >
      <div
        className={cn(
          "relative grid h-full w-full grid-cols-1 gap-4 overflow-hidden rounded-md border p-6 md:grid-cols-[2.5fr_1fr]",
          currentStyle.bg,
        )}
      >
        {/* Background icon inside the box behind text */}
        <div className="absolute -top-[3.5rem] -left-[3.5rem] rotate-45 text-zinc-50/5 transition-transform duration-500 group-hover:scale-110">
          {bgIcon}
        </div>

        {/* Text Content */}
        <div className="z-10 flex flex-col justify-between gap-y-2 subpixel-antialiased">
          <h4
            className={cn(
              "text-lg font-semibold tracking-wide",
              currentStyle.textTitle,
            )}
          >
            {title}
          </h4>
          <p className={cn("pb-2 text-sm", currentStyle.textDesc)}>
            {description}
          </p>
          <Button
            asChild
            className={cn(
              "hover:bg-opacity-100 w-max rounded-md px-4 py-2 transition duration-100",
              currentStyle.btn,
            )}
          >
            <Link
              href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              aria-label={title}
              className="flex items-center justify-center gap-x-2"
            >
              <span className="text-sm font-medium">{buttonText}</span>
              <MdArrowOutward className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        {/* Right Icon */}
        <div className="flex items-end justify-end">
          <div className="border-opacity-10 bg-opacity-5 rounded-2xl border-8 p-2 text-zinc-50 backdrop-blur-sm">
            {icon}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
