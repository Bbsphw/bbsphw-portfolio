// src/components/app-sidebar.tsx

"use client";

import Link from "next/link";
import { Home, User, Code2, Trophy, Mail } from "lucide-react";
import NavMain, { NavItem } from "./nav-main";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import ThemeSwitch from "./theme-switch";
import { LanguageSwitch } from "./language-switch"; // ✅ Import แบบใหม่
import { cn } from "@/lib/utils";

// ✅ ใช้ titleKey ให้ตรงกับ JSON
const navMain: NavItem[] = [
  { titleKey: "home", url: "/", icon: Home },
  { titleKey: "about", url: "/about", icon: User },
  { titleKey: "projects", url: "/projects", icon: Code2 },
  { titleKey: "achievements", url: "/achievements", icon: Trophy },
  { titleKey: "contact", url: "/contact", icon: Mail },
];

export default function AppSidebar() {
  return (
    <aside
      className={cn(
        "flex h-full w-full flex-col px-4 py-6 transition-colors",
        "bg-zinc-50 dark:bg-zinc-900",
      )}
    >
      <header className="space-y-6">
        <div className="flex justify-center">
          <Avatar className="size-24 border-2 border-zinc-200 shadow-md transition-transform hover:scale-105 dark:border-zinc-700">
            <AvatarImage
              src="/images/profile.JPG"
              alt="Profile"
              className="object-cover"
            />
            <AvatarFallback className="bg-white text-2xl font-bold text-zinc-900 dark:bg-zinc-800 dark:text-zinc-50">
              ST
            </AvatarFallback>
          </Avatar>
        </div>

        <div className="space-y-1 text-center">
          <Link href="/" className="block transition-opacity hover:opacity-80">
            <h2 className="flex items-center justify-center gap-1 text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
              Sophonwit Thapseng
              <svg
                viewBox="0 0 24 24"
                aria-label="Verified"
                className="h-5 w-5 fill-current text-blue-500"
              >
                <path d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .495.083.965.238 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z" />
              </svg>
            </h2>
          </Link>
          <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
            @Bbsphw_
          </p>
        </div>

        <section className="flex items-center justify-center gap-4 py-2">
          <LanguageSwitch />
          <ThemeSwitch />
        </section>
      </header>

      <hr className="my-6 border-zinc-200 dark:border-zinc-800" />

      <nav className="flex-1 space-y-1">
        <NavMain items={navMain} />
      </nav>

      <footer className="mt-auto space-y-2 border-t border-zinc-200 pt-6 text-center text-xs text-zinc-400 dark:border-zinc-800 dark:text-zinc-500">
        <div className="flex flex-col gap-1">
          <p>COPYRIGHT © {new Date().getFullYear()}</p>
          <p>Sophonwit Thapseng. All rights reserved.</p>
        </div>
      </footer>
    </aside>
  );
}
