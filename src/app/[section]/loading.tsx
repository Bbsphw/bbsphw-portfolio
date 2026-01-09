import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="w-full animate-pulse space-y-6">
      {/* 1. Header Skeleton (เลียนแบบหน้า Section Header) */}
      <div className="space-y-3">
        {/* Icon + Title */}
        <div className="flex items-center gap-2">
          <Skeleton className="h-8 w-8 rounded-full" />
          <Skeleton className="h-8 w-48 rounded-lg" />
        </div>
        {/* Description */}
        <Skeleton className="h-4 w-full max-w-md rounded" />
      </div>

      <div className="my-6 border-b border-zinc-200 dark:border-zinc-800" />

      {/* 2. Controls Skeleton (Search + Filter bar) */}
      <div className="flex flex-col gap-4 md:flex-row md:justify-between">
        <Skeleton className="h-10 w-full rounded-lg md:w-1/2" />
        <Skeleton className="h-10 w-full rounded-lg md:w-[230px]" />
      </div>

      {/* 3. Content Grid Skeleton (เลียนแบบ Project/Achievement Cards) */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="flex flex-col overflow-hidden rounded-xl border border-zinc-200 dark:border-zinc-800"
          >
            {/* Image Area */}
            <Skeleton className="h-48 w-full" />

            {/* Content Area */}
            <div className="space-y-3 p-5">
              <Skeleton className="h-5 w-3/4 rounded" />
              <Skeleton className="h-4 w-full rounded" />
              <Skeleton className="h-4 w-2/3 rounded" />

              {/* Footer/Tags */}
              <div className="flex gap-2 pt-2">
                <Skeleton className="h-6 w-12 rounded-md" />
                <Skeleton className="h-6 w-12 rounded-md" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
