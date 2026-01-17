"use client";

import { educationData, careerData } from "@/data/about";
import { Button } from "@/components/ui/button";
import { FileText, Backpack, GraduationCap, ExternalLink } from "lucide-react";
import CareerCard from "@/components/cards/CareerCard";
import EducationCard from "@/components/cards/EducationCard";
import { motion, Variants } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogHeader,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { useTranslations, useLocale } from "next-intl";
import { Language } from "@/types";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

export default function AboutSection() {
  const resumeUrl = "/pdf/Sophonwit_Thapseng-SoftwareENG_Internship.pdf";

  const t = useTranslations("Section"); // Namespace: Section
  const aboutT = useTranslations("About"); // Namespace: About (เพิ่มใหม่)
  const actionT = useTranslations("Action"); // Namespace: Action

  const locale = useLocale() as Language;

  // เลือกข้อมูลตามภาษา
  const careers = careerData[locale];
  const educations = educationData[locale];

  return (
    <section id="about" aria-labelledby="about-heading" className="space-y-6">
      <motion.header
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="space-y-2"
      >
        <h1
          id="about-heading"
          className="text-2xl font-medium text-zinc-900 dark:text-zinc-50"
        >
          {t("about")}
        </h1>

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-zinc-600 dark:text-zinc-400">
            {aboutT("subtitle")} {/* ✅ "A short story of me." */}
          </p>

          <Dialog>
            <DialogTrigger asChild>
              <Button
                variant="outline"
                size="sm"
                className="group w-fit gap-2 rounded-full border-zinc-300 hover:border-zinc-400 hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-800"
              >
                <FileText className="h-4 w-4 transition-transform group-hover:-translate-y-1" />
                {actionT("previewResume")}
              </Button>
            </DialogTrigger>

            <DialogContent className="flex h-[95vh] max-w-4xl flex-col overflow-hidden p-0">
              <DialogHeader className="flex-shrink-0 border-b border-zinc-200 bg-white px-6 py-4 dark:border-zinc-800 dark:bg-zinc-950">
                <div className="flex items-center justify-between pr-8">
                  <DialogTitle className="text-lg font-medium">
                    {aboutT("resumePreview")} {/* ✅ "Resume Preview" */}
                  </DialogTitle>

                  <DialogDescription className="sr-only">
                    Preview of my resume in PDF format
                  </DialogDescription>

                  <Button
                    variant="ghost"
                    size="sm"
                    asChild
                    className="gap-2 text-zinc-500 hover:text-zinc-900"
                  >
                    <a
                      href={resumeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="h-4 w-4" />
                      {actionT("openInNewTab")}
                    </a>
                  </Button>
                </div>
              </DialogHeader>

              {/* PDF Viewer (Iframe) */}
              <div className="relative h-full w-full flex-1 bg-zinc-100 dark:bg-zinc-900">
                <iframe
                  src={resumeUrl}
                  className="h-full w-full border-none"
                  title="Resume PDF"
                />
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </motion.header>

      <hr className="my-6 border-zinc-200 dark:border-zinc-700" />
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="space-y-4 leading-relaxed text-zinc-600 dark:text-zinc-300">
          {/* ✅ ใช้คำแปลจากไฟล์ JSON แทน Hardcoded Text */}
          <p>{aboutT("bio1")}</p>
          <p>{aboutT("bio2")}</p>
          <p>{aboutT("bio3")}</p>
        </div>
      </motion.section>

      {/* --- CAREER SECTION --- */}
      <hr className="my-6 border-zinc-200 dark:border-zinc-700" />
      <motion.section
        aria-labelledby="career-heading"
        className="space-y-5"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={staggerContainer}
      >
        <motion.div variants={fadeInUp} className="space-y-1">
          <div className="flex items-center gap-2">
            <Backpack className="text-xl text-zinc-800 dark:text-zinc-200" />
            <h2
              id="career-heading"
              className="text-xl font-medium text-zinc-800 capitalize dark:text-zinc-300"
            >
              {t("experience")}
            </h2>
          </div>
          <p className="text-zinc-600 dark:text-zinc-400">
            {t("experienceDesc")} {/* ✅ "My professional career journey" */}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-4">
          {careers.length > 0 ? (
            careers.map((career) => (
              <motion.div key={career.id} variants={fadeInUp}>
                <CareerCard career={career} />
              </motion.div>
            ))
          ) : (
            <motion.p variants={fadeInUp} className="text-zinc-500">
              {aboutT("noExperience")} {/* ✅ "No experience." */}
            </motion.p>
          )}
        </div>
      </motion.section>

      {/* --- EDUCATION SECTION --- */}
      <hr className="my-6 border-zinc-200 dark:border-zinc-700" />
      <motion.section
        aria-labelledby="education-heading"
        className="space-y-5"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={staggerContainer}
      >
        <motion.div variants={fadeInUp} className="space-y-1">
          <div className="flex items-center gap-2">
            <GraduationCap className="text-xl text-zinc-800 dark:text-zinc-200" />
            <h2
              id="education-heading"
              className="text-xl font-medium text-zinc-800 capitalize dark:text-zinc-300"
            >
              {t("education")}
            </h2>
          </div>
          <p className="text-zinc-600 dark:text-zinc-400">
            {t("educationDesc")} {/* ✅ "My educational background" */}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-4">
          {educations.length > 0 ? (
            educations.map((education) => (
              <motion.div key={education.id} variants={fadeInUp}>
                <EducationCard education={education} />
              </motion.div>
            ))
          ) : (
            <motion.p variants={fadeInUp} className="text-zinc-500">
              {aboutT("noEducation")} {/* ✅ "No education data." */}
            </motion.p>
          )}
        </div>
      </motion.section>
    </section>
  );
}
