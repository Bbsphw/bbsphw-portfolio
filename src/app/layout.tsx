// src/app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import AppSidebar from "@/components/app-sidebar";
import { ThemeProvider } from "next-themes";
import {
  Sheet,
  SheetTitle,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Sophonwit Thapseng Portfolio Site",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* Main Layout Grid */}
          <div className="mx-auto grid min-h-screen max-w-7xl grid-cols-1 lg:grid-cols-[16rem_1fr] lg:px-12">
            {/* Desktop Sidebar */}
            <aside className="sticky top-0 hidden h-screen overflow-y-auto border-r border-zinc-200 lg:block dark:border-zinc-800">
              <AppSidebar />
            </aside>

            {/* Main Content */}
            <main className="flex min-h-screen flex-col">
              {/* Mobile Header (Sticky) */}
              <div className="bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 flex items-center border-b border-zinc-200 p-4 backdrop-blur lg:hidden dark:border-zinc-800">
                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant="ghost" size="icon" className="-ml-2">
                      <Menu className="h-6 w-6" />
                      <span className="sr-only">Toggle menu</span>
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="left" className="w-64 p-0">
                    <SheetTitle className="sr-only">Mobile Menu</SheetTitle>
                    <AppSidebar />
                  </SheetContent>
                </Sheet>
                <span className="ml-4 text-lg font-bold">Sophonwit.T</span>
              </div>

              {/* Content Area */}
              <div className="p-8 pb-20 lg:mt-0">{children}</div>
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
