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

interface ProjectsComboboxProps {
  selectedTag: string;
  onSelect: (value: string) => void;
  options: string[]; // ✅ รับรายการ Tags ทั้งหมดเข้ามา
}

export function ProjectsCombobox({
  selectedTag,
  onSelect,
  options,
}: ProjectsComboboxProps) {
  const [open, setOpen] = React.useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          aria-label="Select technology"
          className="w-full justify-between border-zinc-200 bg-zinc-50 text-zinc-900 hover:bg-zinc-100 md:w-[230px] dark:border-zinc-800 dark:bg-zinc-900/50 dark:text-zinc-100 dark:hover:bg-zinc-900"
        >
          {/* แสดง Tag ที่เลือก หรือแสดง Placeholder */}
          {selectedTag || "All Technologies"}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className="w-[230px] border-zinc-200 p-0 dark:border-zinc-800"
        align="end"
      >
        <Command className="bg-white dark:bg-zinc-950">
          <CommandInput placeholder="Search tech..." className="h-9" />
          <CommandList>
            <CommandEmpty>No technology found.</CommandEmpty>
            <CommandGroup>
              {/* ตัวเลือกสำหรับเคลียร์ Filter */}
              <CommandItem
                value="all"
                onSelect={() => {
                  onSelect("");
                  setOpen(false);
                }}
                className="cursor-pointer font-medium text-zinc-500 aria-selected:bg-zinc-100 dark:aria-selected:bg-zinc-800"
              >
                All Technologies
                <Check
                  className={cn(
                    "ml-auto h-4 w-4",
                    selectedTag === "" ? "opacity-100" : "opacity-0",
                  )}
                />
              </CommandItem>

              {/* Loop สร้าง Options ตาม Data จริง */}
              {options.map((tag) => (
                <CommandItem
                  key={tag}
                  value={tag}
                  onSelect={(currentValue) => {
                    // ถ้าเลือกซ้ำให้เป็นค่าว่าง (toggle)
                    onSelect(
                      currentValue === selectedTag.toLowerCase() ? "" : tag,
                    );
                    setOpen(false);
                  }}
                  className="cursor-pointer aria-selected:bg-zinc-100 dark:aria-selected:bg-zinc-800"
                >
                  {tag}
                  <Check
                    className={cn(
                      "ml-auto h-4 w-4",
                      selectedTag === tag ? "opacity-100" : "opacity-0",
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
