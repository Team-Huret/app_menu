"use client";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { MdAdd } from "react-icons/md";
import { Input } from "@/components/ui/input";
import { HiOutlineFolderPlus } from "react-icons/hi2";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { addSucategory } from "@/app/dashboard/menu/[category]/_data/addSubcategory";
import { useCategoryStore } from "../_store/useCategoryStore";

export default function EmptyFields() {
  const { categoryId } = useCategoryStore();
  const [subcategoryName, setSubcategoryName] = useState("");
  const handleAddSucategory = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (subcategoryName && categoryId) {
      addSucategory(subcategoryName, categoryId);
      setSubcategoryName("");
    }
  };
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <p className="text-base mb-3">Nothing here yet, you can start by creating your first subcategory.</p>
      <div className="w-full flex justify-center items-center max-w-[60%] gap-3">
        <Popover>
          <PopoverTrigger>
            <Button variant="dashed" className="w-full">
              <HiOutlineFolderPlus className="size-5 mr-2" />
              Add a subcategory
            </Button>
          </PopoverTrigger>
          <PopoverContent>
            <form onSubmit={handleAddSucategory} className="flex items-center gap-x-2">
              <Input
                placeholder="Enter subcategory name"
                className="w-full"
                onChange={(e) => setSubcategoryName(e.target.value)}
                value={subcategoryName}
              />
              <button type="submit">
                <MdAdd className="size-6 cursor-pointer" />
              </button>
            </form>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
}
