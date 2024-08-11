"use client";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from "@/components/ui/command";
import { Button } from "@/components/ui/button";
import { IoLanguage } from "react-icons/io5";
import { useState } from "react";
import { Check } from "lucide-react";
import { ChevronsUpDown } from "lucide-react";

export default function LanguageSelect() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("English");

  const languages = ["English", "Thai", "Chinese", "Russian"];
  return (
    <Popover onOpenChange={setOpen} open={open}>
      <PopoverTrigger>
        <Button variant="outline" role="combobox" aria-expanded={open} className=" w-48 justify-between">
          <span className="flex items-center gap-2">
            <IoLanguage />
            {value}
          </span>
          <ChevronsUpDown className="ml-2 size-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        {languages.map((lang) => (
          <p
            key={lang}
            className="px-3 py-1.5 hover:bg-gray-100 cursor-pointer rounded-lg"
            onClick={() => {
              setValue(lang);
              setOpen(false);
            }}
          >
            {lang}
          </p>
        ))}
      </PopoverContent>
    </Popover>
  );
}
