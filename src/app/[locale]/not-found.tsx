// src/app/[locale]/not-found.tsx

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl"; // ✅ Import useTranslations

export default function NotFound() {
  const t = useTranslations("NotFound"); // ✅ เรียกใช้ Namespace NotFound

  return (
    <div className="flex min-h-[80vh] flex-col items-center justify-center gap-4 text-center">
      <h1 className="text-6xl font-bold text-zinc-900 dark:text-zinc-50">
        404
      </h1>
      <h2 className="text-2xl font-semibold text-zinc-700 dark:text-zinc-300">
        {t("title")}
      </h2>
      <p className="max-w-md text-zinc-500 dark:text-zinc-400">
        {t("description")}
      </p>
      <Button asChild className="mt-4">
        <Link href="/">{t("homeButton")}</Link>
      </Button>
    </div>
  );
}
