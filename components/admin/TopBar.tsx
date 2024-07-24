"use client";
import { FiEdit } from "react-icons/fi";
import { Button } from "@/components/ui/button";
import LanguageSelect from "./LanguageSelect";

export default function TopBar() {
  return (
    <div className="flex items-center justify-between gap-4 pb-5 border-b border-gray-300">
      <div className="flex items-center gap-4">
        <h2>Breakfast</h2>
        <FiEdit className="size-4 cursor-pointer" />
      </div>
      <div className="flex gap-3 items-center">
        <LanguageSelect />
        <Button variant="outline">Save</Button>
        <Button>Publish</Button>
      </div>
    </div>
  );
}
