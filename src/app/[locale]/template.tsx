// src/app/[locale]/template.tsx

"use client";

import { m } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <m.div
      key={pathname}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="flex min-h-full w-full flex-1 flex-col"
    >
      {children}
    </m.div>
  );
}
