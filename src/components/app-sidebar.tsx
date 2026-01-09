"use client";

import Link from "next/link";
import { Home, User, BookOpen, Code2, Trophy, Mail } from "lucide-react";
import NavMain, { NavItem } from "./nav-main";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import ThemeToggle from "./theme-toggle";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

// Menu Items Configuration
const navMain: NavItem[] = [
  { title: "Home", url: "/hero", icon: Home },
  { title: "About", url: "/about", icon: User },
  { title: "Skills", url: "/skills", icon: BookOpen },
  { title: "Projects", url: "/projects", icon: Code2 },
  { title: "Achievements", url: "/achievements", icon: Trophy },
  { title: "Contact", url: "/contact", icon: Mail },
];

export default function AppSidebar() {
  return (
    <aside
      className={cn(
        "flex h-full w-full flex-col px-4 py-6 transition-colors",
        "bg-zinc-50 dark:bg-zinc-900", // ✅ สีพื้นหลัง Sidebar ให้ตัดกับ Main Content
      )}
    >
      {/* --- HEADER --- */}
      <header className="space-y-6">
        {/* Avatar Section */}
        <div className="flex justify-start">
          <Avatar className="size-20 border border-zinc-200 shadow-sm transition-transform hover:scale-105 dark:border-zinc-700">
            <AvatarImage
              src="/images/profile.JPG" // ✅ ใส่ path รูปจริงของคุณ
              alt="Profile"
              className="object-cover"
            />
            <AvatarFallback className="bg-white text-lg font-medium text-zinc-900 dark:bg-zinc-800 dark:text-zinc-50">
              ST
            </AvatarFallback>
          </Avatar>
        </div>

        {/* Name & Role */}
        <div className="space-y-1">
          <Link
            href="/hero"
            className="block transition-opacity hover:opacity-80"
          >
            <h2 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
              Sophonwit Thapseng
            </h2>
          </Link>
          <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
            @Bbsphw_
          </p>
        </div>

        {/* Controls: Hire Me + Lang + Theme */}
        <section className="flex items-center justify-between gap-2">
          {/* Hire Me Badge */}
          <div className="inline-flex h-9 items-center gap-2 rounded-full border border-zinc-200 bg-white px-3 py-1 shadow-sm dark:border-zinc-700 dark:bg-zinc-950">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
            </span>
            <span className="text-xs font-medium text-zinc-600 dark:text-zinc-300">
              Hire me
            </span>
          </div>

          <div className="flex items-center gap-2">
            {/* Language Toggle (Visual Only) */}
            <Button
              variant="outline"
              size="icon"
              className="h-9 w-9 rounded-md border-zinc-200 bg-white text-zinc-700 hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-300 dark:hover:bg-zinc-900"
              aria-label="Toggle language"
            >
              <span className="text-xs font-bold">EN</span>
            </Button>

            {/* Theme Toggle */}
            <ThemeToggle />
          </div>
        </section>
      </header>

      {/* Separator */}
      <hr className="my-6 border-zinc-200 dark:border-zinc-800" />

      {/* --- NAVIGATION --- */}
      <nav className="flex-1 space-y-1">
        <NavMain items={navMain} />
      </nav>

      {/* --- FOOTER --- */}
      <footer className="mt-auto space-y-2 border-t border-zinc-200 pt-6 text-xs text-zinc-400 dark:border-zinc-800 dark:text-zinc-500">
        <div className="flex flex-col gap-1">
          <p>© {new Date().getFullYear()} Sophonwit Thapseng.</p>
          <p>All rights reserved.</p>
        </div>
      </footer>
    </aside>
  );
}
