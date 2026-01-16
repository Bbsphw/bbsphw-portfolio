// src/components/comboboxs/ProjectsCombobox.tsx

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
import { PROJECT_CATEGORIES } from "@/types";

interface ProjectsComboboxProps {
  selectedCategory: string;
  onSelect: (value: string) => void;
}

export function ProjectsCombobox({
  selectedCategory,
  onSelect,
}: ProjectsComboboxProps) {
  const [open, setOpen] = React.useState(false);

  // ✅ สร้าง Options จาก Constant
  const categories = [
    { value: "", label: "All Categories" },
    ...PROJECT_CATEGORIES.map((cat) => ({ value: cat, label: cat })),
  ];

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          aria-label="Select category"
          className="w-full justify-between border-zinc-200 bg-zinc-50 text-zinc-900 hover:bg-zinc-100 md:w-[230px] dark:border-zinc-800 dark:bg-zinc-900/50 dark:text-zinc-100 dark:hover:bg-zinc-900"
        >
          {categories.find((c) => c.value === selectedCategory)?.label ||
            "All Categories"}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className="w-[230px] border-zinc-200 p-0 dark:border-zinc-800"
        align="end"
      >
        <Command className="bg-white dark:bg-zinc-950">
          <CommandInput placeholder="Search category..." className="h-9" />
          <CommandList>
            <CommandEmpty>No category found.</CommandEmpty>
            <CommandGroup>
              {categories.map((category) => (
                <CommandItem
                  key={category.value}
                  value={category.value}
                  onSelect={(currentValue) => {
                    const val = category.value;
                    onSelect(val === selectedCategory ? "" : val);
                    setOpen(false);
                  }}
                  className="cursor-pointer aria-selected:bg-zinc-100 dark:aria-selected:bg-zinc-800"
                >
                  {category.label}
                  <Check
                    className={cn(
                      "ml-auto h-4 w-4",
                      selectedCategory === category.value
                        ? "opacity-100"
                        : "opacity-0",
                    )}
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
