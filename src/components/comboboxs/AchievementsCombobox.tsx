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
  { value: "hackathon", label: "Hackathon" },
  { value: "talks", label: "Talks" },
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
          className="w-full justify-between border-zinc-200 bg-zinc-50 text-zinc-900 hover:bg-zinc-100 md:w-[230px] dark:border-zinc-800 dark:bg-zinc-900/50 dark:text-zinc-100 dark:hover:bg-zinc-900"
        >
          {achievementTypes.find((type) => type.value === selectedType)
            ?.label || "All Achievements"}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className="w-[230px] border-zinc-200 p-0 dark:border-zinc-800"
        align="end"
      >
        <Command className="bg-white dark:bg-zinc-950">
          <CommandInput placeholder="Search type..." className="h-9" />
          <CommandList>
            <CommandEmpty>No type found.</CommandEmpty>
            <CommandGroup>
              {achievementTypes.map((type) => (
                <CommandItem
                  key={type.value}
                  value={type.value}
                  onSelect={(currentValue) => {
                    // ถ้าเลือกซ้ำให้เป็นค่าว่าง ("") หรือเลือกค่าใหม่
                    const newValue =
                      currentValue === selectedType ? "" : currentValue;
                    // ถ้าเลือก "All Achievements" (value="") ก็ให้ส่งค่าว่างไป
                    onSelect(type.value === "" ? "" : newValue);
                    setOpen(false);
                  }}
                  className="cursor-pointer aria-selected:bg-zinc-100 dark:aria-selected:bg-zinc-800"
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
