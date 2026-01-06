// // src/components/AchievementSummary.tsx

// interface AchievementSummaryProps {
//   total: number;
// }

// export function AchievementSummary({ total }: AchievementSummaryProps) {
//   return (
//     <div className="text-sm font-medium text-muted-foreground">
//       Total : <span className="font-semibold text-foreground">{total}</span>
//     </div>
//   );
// }

interface AchievementSummaryProps {
  total: number;
}

export function AchievementSummary({ total }: AchievementSummaryProps) {
  return (
    <p
      aria-live="polite"
      className="text-sm text-neutral-500 dark:text-neutral-400"
    >
      Showing {total} achievement{total !== 1 ? "s" : ""}
    </p>
  );
}
