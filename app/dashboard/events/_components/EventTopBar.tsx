"use client";
import { Button } from "@/components/ui/button";
import React from "react";
import { LuFilter } from "react-icons/lu";
import { HiOutlineFolderPlus } from "react-icons/hi2";
import { LuSearch } from "react-icons/lu";
import { Input } from "@/components/ui/input";
import { HiOutlineChevronUpDown } from "react-icons/hi2";
import { useRouter } from "next/navigation";

export default function EventTopBar() {
  const router = useRouter();
  return (
    <div className="flex justify-between items-center px-7 py-5 border-b border-gray-300 w-full">
      <div className="flex gap-x-4">
        <Button variant="dashed" onClick={() => router.push("/dashboard/events/add")}>
          <HiOutlineFolderPlus className="size-4 mr-1" />
          Add new Event
        </Button>
        <Button variant="outline" className="justify-start border-black/90 w-[170px] hover:bg-gray-50 relative">
          <LuFilter className="size-4 mr-2" />
          Filter
          <HiOutlineChevronUpDown className="size-5 absolute right-2 top-1/2 -translate-y-1/2" />
        </Button>
      </div>
      <div className="w-full max-w-[350px] relative">
        <Input placeholder="Search for events" />
        <LuSearch className="size-5 text-muted-foreground absolute right-4 top-1/2 -translate-y-1/2" />
      </div>
    </div>
  );
}
