import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="animate-in fade-in space-y-6 duration-500">
      {/* 1. Header Skeleton */}
      <div className="space-y-2">
        <Skeleton className="h-8 w-[200px] rounded-lg" /> {/* Title */}
        <Skeleton className="h-4 w-[300px] rounded" /> {/* Description */}
      </div>

      <div className="my-6 border-b border-zinc-200 dark:border-zinc-700" />

      {/* 2. Content Skeleton (จำลอง Layout ของ Cards) */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* สร้าง Skeleton Cards 6 ใบ วนลูปแสดงผล */}
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="flex flex-col space-y-3 rounded-xl border border-zinc-200 p-4 shadow-sm dark:border-zinc-800"
          >
            {/* Image placeholder */}
            <Skeleton className="h-40 w-full rounded-lg" />

            {/* Text placeholder */}
            <div className="space-y-2">
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-4 w-1/2" />
            </div>

            {/* Tags/Footer placeholder */}
            <div className="flex gap-2 pt-2">
              <Skeleton className="h-6 w-12 rounded-full" />
              <Skeleton className="h-6 w-12 rounded-full" />
              <Skeleton className="h-6 w-12 rounded-full" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
