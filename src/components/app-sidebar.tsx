// src/components/app-sidebar.tsx
"use client";

import Link from "next/link";
import {
  HomeIcon,
  InfoIcon,
  BookOpenIcon,
  CodeIcon,
  StarIcon,
  MailIcon,
} from "lucide-react";
import NavMain, { NavItem } from "./nav-main";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import ThemeToggle from "./theme-toggle";

const navMain: NavItem[] = [
  { title: "Home", url: "/hero", icon: HomeIcon },
  { title: "About", url: "/about", icon: InfoIcon },
  { title: "Skills", url: "/skills", icon: BookOpenIcon },
  { title: "Projects", url: "/projects", icon: CodeIcon },
  { title: "Achievements", url: "/achievements", icon: StarIcon },
  { title: "Contact", url: "/contact", icon: MailIcon },
];

export default function AppSidebar() {
  return (
    <aside className="h-full w-64 border-r border-zinc-200 bg-white px-4 py-6 dark:border-zinc-700 dark:bg-zinc-900">
      {/* Header */}
      <header className="space-y-6">
        {/* Avatar */}
        <div className="flex justify-start">
          <Avatar className="size-24 border-2 border-gray-300 shadow-sm transition-shadow dark:border-zinc-600">
            <AvatarImage
              src="/images/profile.JPG"
              alt="Avatar of Sophonwit Thapseng"
              className="object-cover"
            />
            <AvatarFallback
              title="Sophonwit Thapseng"
              className="bg-gradient-to-br from-blue-100 to-purple-100 text-lg font-medium dark:from-zinc-700 dark:to-zinc-800"
            >
              ST
            </AvatarFallback>
          </Avatar>
        </div>

        {/* Name + Tag */}
        <div>
          <Link
            href="/hero"
            className="inline-block transition-opacity hover:opacity-80"
          >
            <h2 className="text-xl font-bold tracking-tight whitespace-nowrap text-zinc-900 dark:text-white">
              Sophonwit Thapseng
            </h2>
          </Link>
          <p className="text-sm text-zinc-500 dark:text-zinc-400">@Bbsphw_</p>
        </div>

        {/* Hire me + Lang/Theme */}
        <section className="flex items-center justify-between gap-4">
          {/* Hire me */}
          <div className="inline-flex h-9 items-center gap-2 rounded-full border border-zinc-300 px-3 dark:border-zinc-700">
            <span className="h-2 w-2 animate-pulse rounded-full bg-green-700"></span>
            <span className="text-sm text-zinc-700 dark:text-zinc-300">
              hire me.
            </span>
          </div>

          {/* Language + Theme toggle */}
          <div className="flex items-center gap-2">
            <select className="h-9 w-10 appearance-none rounded-md border border-zinc-300 bg-white px-2 py-1 text-center text-sm text-zinc-800 hover:bg-zinc-100 focus:outline-none dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700">
              <option value="en">🇺🇸</option>
              <option value="th">🇹🇭</option>
            </select>
            <ThemeToggle />
          </div>
        </section>
      </header>

      {/* Separator */}
      <hr className="my-6 border-zinc-200 dark:border-zinc-700" />

      {/* Navigation */}
      <nav className="mt-8 space-y-2">
        <NavMain items={navMain} />
      </nav>

      {/* Footer */}
      <footer className="mt-8 space-y-1 border-t border-zinc-200 pt-4 text-center text-xs text-gray-500 dark:border-zinc-700 dark:text-gray-400">
        <p>COPYRIGHT © {new Date().getFullYear()}</p>
        <p>Bbsphw_. All rights reserved.</p>
      </footer>
    </aside>
  );
}
