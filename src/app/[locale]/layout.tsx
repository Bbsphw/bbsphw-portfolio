// src/app/[locale]/layout.tsx

import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { routing } from "@/i18n/routing";
import Script from "next/script";

// Components
import AppSidebar from "@/components/app-sidebar";
import { ThemeProvider } from "@/providers/theme-provider";
import LazyMotionProvider from "@/components/providers/lazy-motion-provider";
import {
  Sheet,
  SheetTitle,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Toaster } from "@/components/ui/sonner";
import "@/app/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL
  ? `https://${process.env.NEXT_PUBLIC_BASE_URL}`
  : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Sophonwit Thapseng | Portfolio",
    template: "%s | Sophonwit Thapseng",
  },
  description:
    "Sophonwit Thapseng - Software Engineer & Full Stack Developer Portfolio",
  openGraph: {
    title: "Sophonwit Thapseng | Portfolio",
    description:
      "Passionate Software Engineer specializing in Full Stack Development.",
    url: baseUrl,
    siteName: "Sophonwit Portfolio",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5, // อนุญาตให้ zoom ได้เพื่อ Accessibility
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" }, // สีขาวสำหรับ Light Mode
    { media: "(prefers-color-scheme: dark)", color: "#09090b" }, // สีดำ (zinc-950) สำหรับ Dark Mode
  ],
};

// ✅ เพิ่มฟังก์ชันนี้เพื่อบังคับ Static Rendering สำหรับทุก Locale
export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Validate locale type-safe
  if (!routing.locales.includes(locale as (typeof routing.locales)[number])) {
    notFound();
  }

  const messages = await getMessages();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Sophonwit Thapseng",
    url: baseUrl, // 🔹 ใส่ Domain จริง
    jobTitle: "Software Engineer & Full Stack Developer",
    sameAs: [
      "https://github.com/Bbsphw",
      "https://linkedin.com/in/sophonwit-thapseng",
      "https://twitter.com/Bbsphw_",
      "https://www.instagram.com/bbsphw_/",
    ],
    knowsAbout: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Software Engineering",
    ],
  };

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        {/* ✅ เพิ่ม Preconnect เพื่อเร่งความเร็วโหลดรูปจาก Cloudinary */}
        <link rel="preconnect" href="https://res.cloudinary.com" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-white font-sans text-zinc-900 antialiased dark:bg-zinc-950 dark:text-zinc-50`}
      >
        <NextIntlClientProvider messages={messages}>
          <LazyMotionProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              <div className="mx-auto grid min-h-screen max-w-7xl grid-cols-1 lg:grid-cols-[17rem_1fr] lg:px-8 xl:px-12">
                <aside className="sticky top-0 hidden h-screen overflow-y-auto border-r border-zinc-200 lg:block dark:border-zinc-800">
                  <AppSidebar />
                </aside>

                <main className="flex min-h-screen min-w-0 flex-col">
                  {/* Mobile Header */}
                  <div className="sticky top-0 z-50 flex items-center justify-between border-b border-zinc-200 bg-white/80 p-4 backdrop-blur-md lg:hidden dark:border-zinc-800 dark:bg-zinc-950/80">
                    <div className="flex items-center gap-3">
                      <Sheet>
                        <SheetTrigger asChild>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="-ml-2 hover:bg-zinc-100 dark:hover:bg-zinc-800"
                          >
                            <Menu className="h-5 w-5" />
                            <span className="sr-only">Toggle menu</span>
                          </Button>
                        </SheetTrigger>
                        <SheetContent
                          side="left"
                          className="w-72 border-r-zinc-200 p-0 dark:border-r-zinc-800"
                        >
                          <SheetTitle className="sr-only">
                            Mobile Menu
                          </SheetTitle>
                          <AppSidebar />
                        </SheetContent>
                      </Sheet>
                      <span className="text-lg font-semibold tracking-tight">
                        @Bbsphw_
                      </span>
                    </div>
                  </div>

                  <div className="mx-auto w-full max-w-5xl min-w-0 flex-1 p-6 md:p-8 lg:mt-0 lg:p-10">
                    {children}
                  </div>
                </main>
              </div>

              <Script
                id="json-ld-profile"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
              />

              <Toaster />
            </ThemeProvider>
          </LazyMotionProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
