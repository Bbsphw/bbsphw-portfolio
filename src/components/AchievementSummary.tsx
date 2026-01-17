import { useTranslations } from "next-intl"; // ✅

interface AchievementSummaryProps {
  total: number;
}

export function AchievementSummary({ total }: AchievementSummaryProps) {
  const t = useTranslations("Common"); // ✅

  return (
    <p aria-live="polite" className="text-sm text-zinc-500 dark:text-zinc-400">
      {t("showingAchievements", { count: total })} {/* ✅ */}
    </p>
  );
}
