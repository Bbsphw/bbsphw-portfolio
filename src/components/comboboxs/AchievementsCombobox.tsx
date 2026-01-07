// //src/components/comboboxs/AchievementsCombobox.tsx
// "use client";

// import * as React from "react";
// import { Check, ChevronsUpDown } from "lucide-react";

// import { cn } from "@/lib/utils";
// import { Button } from "@/components/ui/button";
// import {
//   Command,
//   CommandEmpty,
//   CommandGroup,
//   CommandInput,
//   CommandItem,
//   CommandList,
// } from "@/components/ui/command";
// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger,
// } from "@/components/ui/popover";

// const achievementTypes = [
//   { value: "certification", label: "Certification" },
//   { value: "badge", label: "Badge" },
//   { value: "awards", label: "Awards" },
// ];

// export function AchievementCombobox() {
//   const [open, setOpen] = React.useState(false);
//   const [value, setValue] = React.useState("");

//   return (
//     <Popover open={open} onOpenChange={setOpen}>
//       <PopoverTrigger asChild>
//         <Button
//           variant="outline"
//           role="combobox"
//           aria-expanded={open}
//           className="w-[200px] justify-between"
//         >
//           {value
//             ? achievementTypes.find((type) => type.value === value)?.label
//             : "Select achievement type..."}
//           <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
//         </Button>
//       </PopoverTrigger>
//       <PopoverContent className="w-[200px] p-0">
//         <Command>
//           <CommandInput placeholder="Search achievement..." className="h-9" />
//           <CommandList>
//             <CommandEmpty>No result found.</CommandEmpty>
//             <CommandGroup>
//               {achievementTypes.map((type) => (
//                 <CommandItem
//                   key={type.value}
//                   value={type.value}
//                   onSelect={(currentValue) => {
//                     setValue(currentValue === value ? "" : currentValue);
//                     setOpen(false);
//                   }}
//                 >
//                   {type.label}
//                   <Check
//                     className={cn(
//                       "ml-auto h-4 w-4",
//                       value === type.value ? "opacity-100" : "opacity-0"
//                     )}
//                   />
//                 </CommandItem>
//               ))}
//             </CommandGroup>
//           </CommandList>
//         </Command>
//       </PopoverContent>
//     </Popover>
//   );
// }

// src/components/comboboxs/AchievementsCombobox.tsx
"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const achievementTypes = [
  { value: "", label: "All Achievements" },
  { value: "certification", label: "Certification" },
  { value: "badge", label: "Badge" },
  { value: "awards", label: "Awards" },
];

interface AchievementComboboxProps {
  selectedType: string;
  onSelect: (value: string) => void;
}

export function AchievementCombobox({
  selectedType,
  onSelect,
}: AchievementComboboxProps) {
  const [open, setOpen] = React.useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          aria-label="Select achievement type"
          className="w-full justify-between text-neutral-900 md:w-[230px] dark:text-neutral-50"
        >
          {achievementTypes.find((type) => type.value === selectedType)
            ?.label || "Select achievement type..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[230px] p-0" align="end">
        <Command>
          <CommandInput placeholder="Search type..." className="h-9" />
          <CommandList>
            <CommandEmpty>No type found.</CommandEmpty>
            <CommandGroup>
              {achievementTypes.map((type) => (
                <CommandItem
                  key={type.value}
                  value={type.value}
                  onSelect={(currentValue) => {
                    onSelect(currentValue);
                    setOpen(false);
                  }}
                >
                  {type.label}
                  <Check
                    className={cn(
                      "ml-auto h-4 w-4",
                      selectedType === type.value ? "opacity-100" : "opacity-0",
                    )}
                    aria-hidden="true"
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
