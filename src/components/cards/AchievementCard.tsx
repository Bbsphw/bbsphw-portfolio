import Image from "next/image";
import { ArrowUpRight, Calendar, Building2 } from "lucide-react";
import { Achievement } from "@/types";
import { cn } from "@/lib/utils";

export default function AchievementCard({
  title,
  organization,
  image,
  link,
  date,
}: Achievement) {
  return (
    <div className="transform-none opacity-100 will-change-auto">
      <div className="w-full rounded-xl border-[1.5px] border-zinc-300 p-1 shadow-sm transition-all duration-300 hover:border-zinc-400 dark:border-[#333333] dark:hover:border-zinc-600">
        {/* Card Container */}
        <div className="group relative flex h-full flex-col overflow-hidden rounded-lg bg-gradient-to-b from-zinc-200 to-zinc-100 transition-all duration-300 hover:to-[#ffffff] dark:from-[#242424] dark:to-zinc-900 dark:hover:to-zinc-950">
          {/* Image Section */}
          <div className="relative h-48 w-full overflow-hidden border-b border-zinc-200 dark:border-zinc-800">
            <Image
              src={image || "/images/project-placeholder.svg"} // Fallback image
              alt={`${title} from ${organization}`}
              fill // ใช้ fill เพื่อให้รูปเต็มพื้นที่
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Link Overlay */}
            {link && (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 flex items-center justify-center gap-2 bg-black/60 text-sm font-medium text-zinc-50 opacity-0 backdrop-blur-[2px] transition-opacity duration-300 group-hover:opacity-100"
                aria-label={`View credentials for ${title}`}
              >
                <span>Show Credentials</span>
                <ArrowUpRight className="h-4 w-4" />
              </a>
            )}
          </div>

          {/* Content Section */}
          <div className="flex flex-1 flex-col justify-between space-y-4 p-5">
            <div>
              <h3 className="text-lg font-bold text-zinc-800 transition-colors duration-300 group-hover:text-teal-600 dark:text-zinc-200 dark:group-hover:text-teal-400">
                {title}
              </h3>
              <div className="mt-1 flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                <Building2 className="h-3.5 w-3.5" />
                <span>{organization}</span>
              </div>
            </div>

            {/* Date Footer */}
            {date && (
              <div className="flex items-center gap-2 border-t border-zinc-200 pt-3 text-xs text-zinc-500 dark:border-zinc-800 dark:text-zinc-500">
                <Calendar className="h-3.5 w-3.5" />
                <span>Issued on {date}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
