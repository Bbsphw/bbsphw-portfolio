// //src/components/cards/AchievementCard.tsx

// import Image from "next/image";

// import { LuArrowRightToLine } from "react-icons/lu";
// import { Achievement } from "@/components/sections/AchievementsSection";

// export default function AchievementCard({
//   type,
//   title,
//   organization,
//   image,
//   link,
//   date,
// }: Achievement) {
//   return (
//     <div className="opacity-100 will-change-auto transform-none">
//       <div className="rounded-xl w-full border-[1.5px] border-neutral-300 p-1 shadow-sm dark:border-[#333333]">
//         <div className="rounded-lg bg-gradient-to-b from-neutral-200 to-neutral-100 transition-all duration-300 hover:to-[#ffffff] dark:from-[#242424] dark:to-neutral-900 dark:hover:to-neutral-950 group flex h-full flex-col overflow-hidden">
//           <div className="relative">
//             <Image
//               src={image}
//               alt={title}
//               width={400}
//               height={200}
//               className="rounded-t-lg object-cover w-full h-48 transition-transform duration-300 group-hover:scale-105"
//             />
//             <div className="absolute left-0 top-0 flex h-full w-full items-center justify-center gap-1 rounded-t-lg bg-black text-sm font-medium opacity-0 transition-opacity duration-300 group-hover:opacity-80 dark:text-neutral-50">
//               <span>Show Credentials</span>
//               <LuArrowRightToLine />
//             </div>
//           </div>
//           <div className="my-auto space-y-2 p-4">
//             <p className=" text-neutral-900 dark:text-neutral-50">{title}</p>
//             <p className="text-sm text-neutral-500 dark:text-neutral-400">
//               {organization}
//             </p>
//             <div>
//               <p className="text-xs text-neutral-400 dark:text-neutral-500 ">
//                 Issued on
//               </p>
//               <p className="text-sm text-neutral-500 dark:text-neutral-400">
//                 {date}
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import Image from "next/image";
import { LuArrowRightToLine } from "react-icons/lu";
import { Achievement } from "@/components/sections/AchievementsSection";

export default function AchievementCard({
  //   type,
  title,
  organization,
  image,
  link,
  date,
}: Achievement) {
  return (
    <div className="transform-none opacity-100 will-change-auto">
      <div className="w-full rounded-xl border-[1.5px] border-neutral-300 p-1 shadow-sm dark:border-[#333333]">
        <div className="group flex h-full flex-col overflow-hidden rounded-lg bg-gradient-to-b from-neutral-200 to-neutral-100 transition-all duration-300 hover:to-[#ffffff] dark:from-[#242424] dark:to-neutral-900 dark:hover:to-neutral-950">
          <div className="relative">
            <Image
              src={image}
              alt={`${title} from ${organization}`}
              width={400}
              height={200}
              className="h-48 w-full rounded-t-lg object-cover transition-transform duration-300 group-hover:scale-105"
            />
            {link && (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 flex items-center justify-center gap-1 rounded-t-lg bg-black text-sm font-medium text-neutral-50 opacity-0 transition-opacity duration-300 group-hover:opacity-80"
                aria-label={`View credentials for ${title}`}
              >
                <span>Show Credentials</span>
                <LuArrowRightToLine aria-hidden="true" />
              </a>
            )}
          </div>
          <div className="my-auto space-y-2 p-4">
            <p className="text-neutral-900 dark:text-neutral-50">{title}</p>
            <p className="text-sm text-neutral-500 dark:text-neutral-400">
              {organization}
            </p>
            {date && (
              <div>
                <p className="text-xs text-neutral-400 dark:text-neutral-500">
                  Issued on
                </p>
                <p className="text-sm text-neutral-500 dark:text-neutral-400">
                  {date}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
