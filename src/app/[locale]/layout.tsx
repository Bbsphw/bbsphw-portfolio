// src/app/[locale]/layout.tsx

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { routing } from "@/i18n/routing";

// Components
import AppSidebar from "@/components/app-sidebar";
import { ThemeProvider } from "@/providers/theme-provider";
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
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
    "Sophonwit Thapseng - Software Engineer & Frontend Developer Portfolio",
  openGraph: {
    title: "Sophonwit Thapseng | Portfolio",
    description:
      "Passionate Software Engineer specializing in Frontend Development.",
    url: baseUrl,
    siteName: "Sophonwit Portfolio",
    type: "website",
  },
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  // 1. รอรับค่า locale
  const { locale } = await params;

  // 2. ตรวจสอบว่า locale ถูกต้องหรือไม่
  // แก้ไข: Cast type ให้ตรงกับ routing.locales แทนการใช้ @ts-ignore
  if (!routing.locales.includes(locale as (typeof routing.locales)[number])) {
    notFound();
  }

  // 3. ดึงข้อความแปลภาษามาจาก Server
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-white font-sans text-zinc-900 antialiased dark:bg-zinc-950 dark:text-zinc-50`}
      >
        <NextIntlClientProvider messages={messages}>
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
                        <SheetTitle className="sr-only">Mobile Menu</SheetTitle>
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
            <Toaster />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}