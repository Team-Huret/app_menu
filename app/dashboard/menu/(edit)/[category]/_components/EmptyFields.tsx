"use client";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { MdAdd } from "react-icons/md";
import { Input } from "@/components/ui/input";
import { HiOutlineFolderPlus } from "react-icons/hi2";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { addSubcategory } from "@/app/dashboard/menu/(edit)/[category]/_data/addSubcategory";
import { useCategoryStore } from "../_store/useCategoryStore";
import CategoryTopBar from "./CategoryTopBar";

export default function EmptyFields() {
  const { categoryId, setSubcategories, subcategories } = useCategoryStore();
  const [subcategoryName, setSubcategoryName] = useState("");
  const handleAddSubcategory = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (subcategoryName && categoryId) {
      const data = await addSubcategory(subcategoryName, categoryId);
      setSubcategories([...subcategories, data.subcategory]);
      setSubcategoryName("");
    }
  };
  return (
    <div className="w-full">
      <CategoryTopBar />

      <div className="w-full flex flex-col justify-center items-center mt-20">
        <p className="text-base mb-3">Nothing here yet, you can start by creating your first subcategory.</p>
        <div className="w-full flex justify-center items-center max-w-[60%] gap-3">
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="dashed" className="w-fit px-8">
                <HiOutlineFolderPlus className="size-5 mr-2" />
                Add a subcategory
              </Button>
            </PopoverTrigger>
            <PopoverContent>
              <form onSubmit={handleAddSubcategory} className="flex items-center gap-x-2">
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
    </div>
  );
}
