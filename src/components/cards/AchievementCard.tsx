// src/components/cards/AchievementCard.tsx

"use client";

import { useState } from "react";
import {
  ArrowUpRight,
  Calendar,
  Building2,
  ImageIcon,
  Info,
  X,
} from "lucide-react";
import { Achievement } from "@/types";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { AnimatePresence, motion } from "framer-motion";
import { UniversalImage } from "../universal-image";

export default function AchievementCard(props: Achievement) {
  const {
    title,
    organization,
    image,
    link,
    date,
    type,
    description,
    skills,
    gallery,
  } = props;
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <div
            className="group h-full transform-none cursor-pointer opacity-100 will-change-auto"
            role="button" // ✅ Accessibility: บอกว่าเป็นปุ่มกดได้
            tabIndex={0} // ✅ Accessibility: โฟกัสด้วยคีย์บอร์ดได้
            aria-label={`View details for ${title}`} // ✅ Accessibility
          >
            <div className="h-full w-full rounded-xl border-[1.5px] border-zinc-300 p-1 shadow-sm transition-all duration-300 hover:border-zinc-400 dark:border-[#333333] dark:hover:border-zinc-600">
              {/* Card Container */}
              <div className="relative flex h-full flex-col overflow-hidden rounded-lg bg-white transition-all duration-300 hover:bg-zinc-50 dark:bg-[#1e1e1e] dark:hover:bg-[#242424]">
                {/* Image Section */}
                <div className="relative h-48 w-full shrink-0 overflow-hidden border-b border-zinc-200 bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900">
                  <UniversalImage
                    src={image}
                    alt={`${title} from ${organization}`}
                    fill
                    // ✅ Performance: ขนาดที่โหลดควรเล็กเหมาะสมกับการ์ด
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                  />

                  <div className="absolute top-2 right-2 z-10">
                    <Badge
                      variant="secondary"
                      className="bg-white/90 capitalize shadow-sm backdrop-blur-sm dark:bg-black/50"
                    >
                      {type}
                    </Badge>
                  </div>

                  {gallery && gallery.length > 0 && (
                    <div className="absolute right-2 bottom-2 z-10 flex items-center gap-1 rounded-full bg-black/60 px-2 py-1 text-[10px] text-white backdrop-blur-md">
                      <ImageIcon className="h-3 w-3" />
                      <span>+{gallery.length}</span>
                    </div>
                  )}

                  <div className="absolute inset-0 flex items-center justify-center gap-2 bg-black/60 text-sm font-medium text-white opacity-0 backdrop-blur-[2px] transition-opacity duration-300 group-hover:opacity-100">
                    <span>View Details</span>
                    <Info className="h-4 w-4" />
                  </div>
                </div>

                {/* Content Section */}
                <div className="flex flex-1 flex-col p-4">
                  <div className="flex flex-col gap-1.5">
                    <h3 className="line-clamp-2 text-base font-bold text-zinc-900 transition-colors group-hover:text-teal-600 dark:text-zinc-100 dark:group-hover:text-teal-400">
                      {title}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                      <Building2 className="h-3.5 w-3.5 shrink-0" />
                      <span className="truncate">{organization}</span>
                    </div>
                  </div>

                  {date && (
                    <div className="mt-auto pt-4">
                      <div className="flex items-center gap-2 border-t border-zinc-200 pt-3 text-xs text-zinc-500 dark:border-zinc-800 dark:text-zinc-500">
                        <Calendar className="h-3.5 w-3.5" />
                        <span>Issued on {date}</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </DialogTrigger>

        {/* Dialog Detail */}
        <DialogContent className="max-h-[85vh] w-full max-w-2xl overflow-hidden p-0">
          <ScrollArea className="max-h-[85vh]">
            <div className="p-6">
              <DialogHeader className="mb-6">
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:gap-6">
                  {/* Logo Detail */}
                  <div
                    className="relative h-20 w-20 shrink-0 cursor-zoom-in overflow-hidden rounded-lg border border-zinc-200 bg-zinc-50 transition-opacity hover:opacity-80 dark:border-zinc-700 dark:bg-zinc-800"
                    onClick={() => setSelectedImage(image)}
                  >
                    <UniversalImage
                      src={image}
                      alt={title}
                      fill
                      // ✅ Performance: โหลดรูปเล็กมาก (80px)
                      sizes="80px"
                      className="object-contain p-2"
                    />
                  </div>

                  <div className="space-y-1">
                    <DialogTitle className="text-xl leading-tight">
                      {title}
                    </DialogTitle>
                    <DialogDescription className="text-base font-medium text-zinc-600 dark:text-zinc-400">
                      {organization} •{" "}
                      <span className="text-sm font-normal text-zinc-500">
                        {date}
                      </span>
                    </DialogDescription>

                    {skills && (
                      <div className="flex flex-wrap gap-2 pt-2">
                        {skills.map((s) => (
                          <Badge key={s} variant="outline" className="text-xs">
                            {s}
                          </Badge>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </DialogHeader>

              <div className="space-y-6">
                {description && (
                  <div className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                    {description}
                  </div>
                )}

                {/* Gallery Grid */}
                {gallery && gallery.length > 0 && (
                  <div className="space-y-3">
                    <h4 className="flex items-center gap-2 text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                      <ImageIcon className="h-4 w-4" />
                      Event Gallery
                    </h4>
                    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                      {gallery.map((imgUrl, idx) => (
                        <div
                          key={idx}
                          className="relative aspect-video cursor-zoom-in overflow-hidden rounded-md bg-zinc-100 shadow-sm transition-all hover:scale-[1.02] hover:shadow-md dark:bg-zinc-800"
                          onClick={() => setSelectedImage(imgUrl)}
                        >
                          <UniversalImage
                            src={imgUrl}
                            alt={`Gallery image ${idx + 1}`}
                            fill
                            className="object-cover"
                            // ✅ Performance: รูปใน Gallery ก็ไม่ต้องใหญ่มาก
                            sizes="(max-width: 768px) 50vw, 33vw"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {link && (
                  <div className="flex justify-end pt-4">
                    <Button asChild>
                      <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View credential for ${title} (opens in new tab)`} // ✅ Accessibility
                      >
                        View Credential / Post{" "}
                        <ArrowUpRight className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </ScrollArea>
        </DialogContent>
      </Dialog>

      {/* Lightbox Overlay */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[150] flex items-center justify-center bg-black/95 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-[160] rounded-full bg-white/10 p-2 text-white backdrop-blur-md transition-colors hover:bg-white/20"
              aria-label="Close lightbox" // ✅ Accessibility
            >
              <X className="h-6 w-6" />
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative aspect-video w-full max-w-5xl overflow-hidden rounded-lg p-4"
              onClick={(e) => e.stopPropagation()}
            >
              <UniversalImage
                src={selectedImage}
                alt="Full screen view"
                fill
                className="object-contain"
                // ✅ Performance: Lightbox ต้องการคุณภาพสูงสุด
                cldProps={{ quality: "90", sharpen: "100" }}
                sizes="100vw"
                priority // ✅ Performance: โหลดทันทีเมื่อเปิด Lightbox
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
