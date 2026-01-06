// src/components/nav-main.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LucideIcon } from "lucide-react";

export interface NavItem {
  title: string;
  url: string;
  icon?: LucideIcon;
}

export default function NavMain({ items }: { items: NavItem[] }) {
  const pathname = usePathname();

  return (
    <section className="grid gap-4">
      {/* Group Label
      <h3 className="text-sm font-semibold text-zinc-500 dark:text-zinc-400 px-2">
        Main Navigation
      </h3> */}

      {/* Menu List */}
      <ul className="grid gap-1">
        {items.map(({ title, url, icon: Icon }) => {
          const isActive = pathname === url;
          return (
            <li key={url}>
              <Link
                href={url}
                className={`flex items-center gap-2 px-3 py-2 rounded-md transition-colors ${
                  isActive
                    ? "bg-zinc-200 dark:bg-zinc-700 text-zinc-900 dark:text-white"
                    : "hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-300"
                }`}
              >
                {Icon && <Icon className="h-4 w-4" />}
                <span className="text-sm">{title}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
