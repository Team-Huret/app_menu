"use client";
import Category from "@/components/tabs/menu/Category";
import AddButton from "@/components/global/AddButton";
import { useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { MdAdd } from "react-icons/md";

export default function MenuSideBar() {
  const [categories, setCategories] = useState<[] | any[]>([]);
  return (
    <div className="w-56 border-r border-gray-300 bg-white pt-5 px-2" style={{ height: "calc(100vh - 70px)" }}>
      <h3 className="mb-3 ml-2">Categories</h3>
      <div>
        {categories.length > 0 ? (
          categories.map((category, index) => <Category key={index} name={category} />)
        ) : (
          <p className="px-3 text-sm">No categories</p>
        )}
      </div>
      <div className="w-[88%] h-[1px] bg-gray-300 rounded-full mx-auto my-5"></div>
      <Popover>
        <PopoverTrigger>
          <AddButton className="w-full">Add new category</AddButton>
        </PopoverTrigger>
        <PopoverContent>
          <div className="flex items-center gap-x-2">
            <button type="submit">
              <MdAdd className="size-6 cursor-pointer" />
            </button>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}
