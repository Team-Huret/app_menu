"use client";
import { Button } from "@/components/ui/button";
import { IoLanguage } from "react-icons/io5";
import SelectInput from "@/components/global/SelectInput";
import { useState } from "react";

export default function MenuTopBar() {
  const [language, setLanguage] = useState("");
  return (
    <div className="w-full py-7 border-b border-gray-300">
      <div className="flex justify-between items-center px-7">
        <h2 className="text-2xl font-bold">Add a new event</h2>
        <div className="flex gap-x-4">
          <div className="min-w-[150px]">
            <SelectInput icon={<IoLanguage className="size-4" />} value={language} setValue={setLanguage} data={["English", "Thai"]} />
          </div>
          <Button>Save</Button>
        </div>
      </div>
    </div>
  );
}
