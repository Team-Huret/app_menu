"use client";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ChevronsUpDown } from "lucide-react";
import { useState } from "react";

export default function SelectInput({ value, setValue, data }: { value: string; setValue: (item: string) => void; data: string[] }) {
  const [open, setOpen] = useState(false);
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline" className="w-full justify-between text-muted-foreground font-normal">
          {value ? value : "Select..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        {data.map((item) => (
          <div
            key={item}
            onClick={() => {
              setValue(item);
              setOpen(false);
            }}
            className="px-1.5 py-1.5 hover:bg-gray-50 cursor-pointer rounded-lg flex items-center justify-start text-sm transition"
          >
            <Check className={`mr-2 size-4 ${value === item ? "opacity-100" : "opacity-0"}`} />
            {item}
          </div>
        ))}
      </PopoverContent>
    </Popover>
  );
}
