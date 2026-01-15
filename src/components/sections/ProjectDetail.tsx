"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Globe,
  Github,
  Layout,
  CheckCircle2,
  ExternalLink,
  Calendar,
  User,
  Zap,
  ArrowLeft,
  ArrowRight,
  Share2,
  Copy,
  Linkedin,
  Twitter,
  X,
  Maximize2,
  Check,
  Smartphone,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Project } from "@/types";
import { toast } from "sonner";
import { UniversalImage } from "../universal-image";

interface ProjectNode {
  slug: string;
  title: string;
}

interface ProjectDetailProps {
  project: Project;
  prevProject?: ProjectNode | null;
  nextProject?: ProjectNode | null;
}

export default function ProjectDetail({
  project,
  prevProject,
  nextProject,
}: ProjectDetailProps) {
  // --- STATE & REFS ---
  const [currentUrl, setCurrentUrl] = useState("");
  const [isCopied, setIsCopied] = useState(false);
  const [canShare, setCanShare] = useState(false);
  const [selectedImage, setSelectedImage] = useState<{
    url: string;
    id: string;
  } | null>(null);

  const galleryRef = useRef<HTMLDivElement>(null);

  // --- EFFECTS ---
  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentUrl(window.location.href);
      if (typeof navigator.share === "function") {
        setCanShare(true);
      }
    }
  }, []);

  // ปิด Lightbox ด้วยปุ่ม ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedImage(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // --- HANDLERS ---
  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(currentUrl);
      setIsCopied(true);
      toast.success("Link copied to clipboard!");
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      toast.error("Failed to copy link");
    }
  };

  const handleNativeShare = async () => {
    if (canShare) {
      try {
        await navigator.share({
          title: project.title,
          text: `Check out this project: ${project.title}`,
          url: currentUrl,
        });
      } catch (err) {
        console.log("Share canceled");
      }
    }
  };

  const scrollGallery = (direction: "left" | "right") => {
    if (galleryRef.current) {
      const scrollAmount = 400;
      galleryRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-4xl space-y-12 pb-20"
      >
        {/* ================= HEADER SECTION ================= */}
        <div>
          <Button
            variant="ghost"
            asChild
            className="-ml-4 gap-2 text-zinc-600 hover:bg-transparent hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-200"
          >
            <Link href="/projects">
              <ChevronLeft className="h-4 w-4" />
              Back to All Projects
            </Link>
          </Button>
        </div>

        <header className="space-y-4">
          <div className="space-y-2">
            <div className="flex items-start justify-between gap-4">
              <h1 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-50">
                {project.title}
              </h1>
              <Badge
                variant="secondary"
                className="mt-1 shrink-0 text-zinc-600 dark:text-zinc-400"
              >
                {project.category}
              </Badge>
            </div>
            <p className="max-w-2xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-300">
              {project.description}
            </p>
          </div>
        </header>

        <hr className="my-6 border-zinc-200 dark:border-zinc-800" />

        {/* ================= ACTION BAR (Tech Stack & Links) ================= */}
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
          <div className="space-y-2">
            <span className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
              Technologies Used
            </span>
            <div className="flex flex-wrap items-center gap-2">
              {project.technologies.map((tech, idx) => (
                <div
                  key={idx}
                  className="flex h-10 w-10 items-center justify-center rounded-md border border-zinc-200 bg-white p-2 shadow-sm transition-transform hover:scale-105 dark:border-zinc-800 dark:bg-zinc-900"
                  title={tech.name}
                >
                  <div className="text-xl text-zinc-700 dark:text-zinc-300">
                    {tech.icon}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {project.link && (
              <Button
                asChild
                variant="default"
                size="lg"
                className="gap-2 shadow-lg shadow-cyan-500/20"
              >
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Globe className="h-4 w-4" />
                  Live Demo
                  <ExternalLink className="h-3 w-3 opacity-50" />
                </a>
              </Button>
            )}
            {project.githubUrl && (
              <Button asChild variant="outline" size="lg" className="gap-2">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-4 w-4" />
                  Source Code
                </a>
              </Button>
            )}
          </div>
        </div>

        {/* ================= HERO IMAGE (Refactored) ================= */}
        <motion.div
          layoutId="hero-image-main"
          className="relative aspect-video w-full cursor-zoom-in overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-100 shadow-xl dark:border-zinc-800 dark:bg-zinc-900"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
          onClick={() => {
            if (project.image) {
              setSelectedImage({
                url: project.image,
                id: "hero-image-main",
              });
            }
          }}
        >
          {/* ✅ ใช้ UniversalImage จัดการ logic ทั้งหมด */}
          <UniversalImage
            src={project.image}
            alt={`${project.title} Preview`}
            fill
            className="object-cover transition-transform duration-500 hover:scale-105"
            priority
            cldProps={{
              sizes: "(max-width: 1200px) 100vw, 1200px",
              crop: "fill",
              gravity: "auto",
              sharpen: "100",
            }}
          />

          <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-300 hover:bg-black/10">
            <Maximize2 className="h-12 w-12 text-white opacity-0 shadow-lg drop-shadow-md transition-opacity duration-300 hover:opacity-100" />
          </div>
        </motion.div>

        {/* Meta Info Grid */}
        <div className="grid grid-cols-2 gap-4 rounded-xl border border-zinc-200 bg-zinc-50 p-4 sm:grid-cols-4 dark:border-zinc-800 dark:bg-zinc-900/50">
          <div className="col-span-2 flex items-center gap-3 sm:col-span-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-200 dark:bg-zinc-800">
              <User className="h-5 w-5 text-zinc-600 dark:text-zinc-400" />
            </div>
            <div>
              <p className="text-xs font-medium text-zinc-500 uppercase">
                Role
              </p>
              <p className="font-medium text-zinc-900 dark:text-zinc-200">
                {project.role || "Developer"}
              </p>
            </div>
          </div>
          <div className="col-span-2 flex items-center gap-3 sm:col-span-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-200 dark:bg-zinc-800">
              <Calendar className="h-5 w-5 text-zinc-600 dark:text-zinc-400" />
            </div>
            <div>
              <p className="text-xs font-medium text-zinc-500 uppercase">
                Timeline
              </p>
              <p className="font-medium text-zinc-900 dark:text-zinc-200">
                {project.date || "-"}
              </p>
            </div>
          </div>
        </div>

        {/* ================= MAIN CONTENT GRID ================= */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[2fr_1fr]">
          {/* Left Column (Details) */}
          <div className="min-w-0 space-y-12">
            {/* Overview */}
            {project.overview && (
              <section className="space-y-4">
                <h2 className="flex items-center gap-2 text-2xl font-bold text-zinc-900 dark:text-zinc-50">
                  <Layout className="h-6 w-6 text-cyan-500" />
                  Project Overview
                </h2>
                <div className="prose prose-zinc dark:prose-invert max-w-none leading-loose text-zinc-600 dark:text-zinc-300">
                  <p>{project.overview}</p>
                </div>
              </section>
            )}

            {/* Features */}
            {project.features && project.features.length > 0 && (
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">
                  Key Features
                </h2>
                <ul className="space-y-3">
                  {project.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-zinc-600 dark:text-zinc-300"
                    >
                      <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-cyan-500" />
                      <span className="leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Challenges */}
            {project.challenges && project.challenges.length > 0 && (
              <section className="space-y-6">
                <h2 className="flex items-center gap-2 text-2xl font-bold text-zinc-900 dark:text-zinc-50">
                  <Zap className="h-6 w-6 text-yellow-500" />
                  Challenges & Solutions
                </h2>
                <div className="space-y-4">
                  {project.challenges.map((item, idx) => (
                    <div
                      key={idx}
                      className="overflow-hidden rounded-xl border border-zinc-200 dark:border-zinc-800"
                    >
                      <div className="bg-zinc-50 px-5 py-3 dark:bg-zinc-900">
                        <h3 className="font-semibold text-red-600 dark:text-red-400">
                          Problem:{" "}
                          <span className="text-zinc-900 dark:text-zinc-200">
                            {item.problem}
                          </span>
                        </h3>
                      </div>
                      <div className="bg-white px-5 py-4 dark:bg-zinc-950">
                        <p className="text-zinc-600 dark:text-zinc-400">
                          <span className="font-semibold text-green-600 dark:text-green-500">
                            Solution:{" "}
                          </span>
                          {item.solution}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Gallery Section */}
            {project.gallery && project.gallery.length > 0 && (
              <section className="w-full space-y-4 pt-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">
                    Gallery
                  </h2>

                  {project.gallery.length > 1 && (
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => scrollGallery("left")}
                        className="bg-background/80 h-8 w-8 rounded-full backdrop-blur-sm"
                        title="Previous Image"
                      >
                        <ChevronLeft className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => scrollGallery("right")}
                        className="bg-background/80 h-8 w-8 rounded-full backdrop-blur-sm"
                        title="Next Image"
                      >
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </div>
                  )}
                </div>

                <div
                  ref={galleryRef}
                  className="scrollbar-hide flex w-full max-w-full snap-x snap-mandatory gap-4 overflow-x-auto px-1 pb-4"
                  style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                >
                  {project.gallery.map((img, idx) => (
                    <motion.div
                      key={`${img}-${idx}`}
                      layoutId={`gallery-${img}-${idx}`}
                      onClick={() =>
                        setSelectedImage({
                          url: img,
                          id: `gallery-${img}-${idx}`,
                        })
                      }
                      className="group relative aspect-video min-w-[280px] flex-shrink-0 cursor-zoom-in snap-center overflow-hidden rounded-xl border border-zinc-200 bg-zinc-100 sm:min-w-[400px] dark:border-zinc-800 dark:bg-zinc-900"
                    >
                      {/* ✅ ใช้ UniversalImage ใน Gallery Grid */}
                      <UniversalImage
                        src={img}
                        alt={`Gallery ${idx + 1}`}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        cldProps={{
                          sizes: "(max-width: 768px) 100vw, 400px",
                          sharpen: "100",
                        }}
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-300 group-hover:bg-black/20">
                        <Maximize2 className="h-8 w-8 text-white opacity-0 shadow-lg transition-opacity duration-300 group-hover:opacity-100" />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Right Column (Sidebar) */}
          <div className="h-fit min-w-[250px] space-y-8 lg:sticky lg:top-24">
            {/* Tags */}
            <div className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
              <h3 className="mb-4 font-semibold text-zinc-900 dark:text-zinc-50">
                Related Tags
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="outline"
                    className="bg-zinc-50 px-3 py-1 font-normal text-zinc-600 hover:border-zinc-400 dark:bg-zinc-900 dark:text-zinc-400"
                  >
                    #{tag}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Share Project */}
            <div className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
              <h3 className="mb-4 flex items-center gap-2 font-semibold text-zinc-900 dark:text-zinc-50">
                <Share2 className="h-4 w-4" />
                Share Project
              </h3>

              <div className="flex w-full gap-2">
                {/* 1. Copy Link */}
                <Button
                  variant="outline"
                  size="icon"
                  onClick={handleCopyLink}
                  title="Copy Link"
                  className={`flex-1 transition-all duration-300 ${
                    isCopied
                      ? "border-green-500 bg-green-50 text-green-600 dark:bg-green-900/20 dark:text-green-400"
                      : "hover:bg-zinc-100 dark:hover:bg-zinc-800"
                  }`}
                >
                  {isCopied ? (
                    <Check className="h-4 w-4" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </Button>

                {/* 2. LinkedIn */}
                <Button
                  variant="outline"
                  size="icon"
                  asChild
                  title="Share on LinkedIn"
                  className="flex-1 text-[#0077b5] hover:bg-[#0077b5]/10 hover:text-[#0077b5] dark:text-[#0a66c2] dark:hover:bg-[#0a66c2]/20"
                >
                  <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                      currentUrl,
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                </Button>

                {/* 3. X (Twitter) */}
                <Button
                  variant="outline"
                  size="icon"
                  asChild
                  title="Share on X (Twitter)"
                  className="flex-1 text-black hover:bg-zinc-100 dark:text-white dark:hover:bg-zinc-800"
                >
                  <a
                    href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                      `Check out ${project.title} by Sophonwit!`,
                    )}&url=${encodeURIComponent(currentUrl)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Twitter className="h-4 w-4" />
                  </a>
                </Button>

                {/* 4. Native Share (Mobile) */}
                {canShare && (
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={handleNativeShare}
                    title="Share via..."
                    className="flex-1 text-purple-600 hover:bg-purple-50 md:hidden dark:text-purple-400 dark:hover:bg-purple-900/20"
                  >
                    <Smartphone className="h-4 w-4" />
                  </Button>
                )}
              </div>
            </div>

            {/* CTA */}
            <div className="rounded-xl bg-gradient-to-br from-zinc-50 to-zinc-100 p-6 text-center shadow-inner dark:from-zinc-900/50 dark:to-zinc-900">
              <p className="mb-4 text-sm font-medium text-zinc-600 dark:text-zinc-300">
                Need a developer?
              </p>
              <Button
                variant="default"
                className="w-full shadow-lg shadow-zinc-500/10"
                asChild
              >
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* ================= FOOTER NAV ================= */}
        <hr className="my-10 border-zinc-200 dark:border-zinc-800" />

        <div className="flex items-center justify-between">
          {prevProject ? (
            <Button
              variant="ghost"
              asChild
              className="group gap-2 pl-0 text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-200"
            >
              <Link href={`/projects/${prevProject.slug}`}>
                <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                <div className="flex flex-col items-start">
                  <span className="text-xs text-zinc-400">Previous</span>
                  <span className="max-w-[150px] truncate font-medium sm:max-w-xs">
                    {prevProject.title}
                  </span>
                </div>
              </Link>
            </Button>
          ) : (
            <div />
          )}

          {nextProject ? (
            <Button
              variant="ghost"
              asChild
              className="group gap-2 pr-0 text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-200"
            >
              <Link href={`/projects/${nextProject.slug}`}>
                <div className="flex flex-col items-end">
                  <span className="text-xs text-zinc-400">Next</span>
                  <span className="max-w-[150px] truncate font-medium sm:max-w-xs">
                    {nextProject.title}
                  </span>
                </div>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          ) : (
            <div />
          )}
        </div>
      </motion.div>

      {/* ================= LIGHTBOX (Refactored) ================= */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-md"
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-[110] rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
            >
              <X className="h-6 w-6" />
            </button>

            <motion.div
              layoutId={selectedImage.id}
              className="relative aspect-video w-full max-w-6xl overflow-hidden rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* ✅ ใช้ UniversalImage ใน Lightbox (High Quality) */}
              <UniversalImage
                src={selectedImage.url}
                alt="Full screen preview"
                fill
                className="object-contain"
                priority
                cldProps={{ quality: "90", sharpen: "100" }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
