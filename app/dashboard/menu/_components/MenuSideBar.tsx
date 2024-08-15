"use client";
import Category from "@/app/dashboard/menu/_components/Category";
import AddButton from "@/components/global/AddButton";
import { useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { MdAdd } from "react-icons/md";
import { Input } from "@/components/ui/input";
import { useGetCategories } from "@/app/dashboard/menu/_data/getCategories";
import { postCategory } from "@/app/dashboard/menu/_data/postCategory";
import { DndContext } from "@dnd-kit/core";
import { arrayMove, SortableContext } from "@dnd-kit/sortable";
import { DragOverEvent } from "@dnd-kit/core";

export default function MenuSideBar() {
  const [categoryName, setCategoryName] = useState("");
  const { categories, setCategories, updateOrder } = useGetCategories();

  const handleAddCategory = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (categoryName) {
      postCategory(categoryName);
      setCategoryName("");
    }
  };
  const handleDragOver = (event: DragOverEvent) => {
    const { active, over } = event;
    if (over && active.id !== over.id) {
      setCategories((prev) => {
        const oldIndex = prev.findIndex((item) => item === active.id);
        const newIndex = prev.findIndex((item) => item === over.id);
        return arrayMove(prev, oldIndex, newIndex);
      });
    }
  };
  const handleDragEnd = () => {
    updateOrder();
  };

  return (
    <div className="w-56 border-r border-gray-300 bg-white pt-5 px-2" style={{ height: "calc(100vh - 70px)" }}>
      <h3 className="mb-3 ml-2">Categories</h3>
      <div>
        <DndContext onDragOver={handleDragOver} onDragEnd={handleDragEnd}>
          <SortableContext items={categories}>
            {categories.length > 0 ? (
              categories.map((category: any, index: number) => <Category key={index} name={category} />)
            ) : (
              <p className="px-3 text-sm">No categories</p>
            )}
          </SortableContext>
        </DndContext>
      </div>
      <div className="w-[88%] h-[1px] bg-gray-300 rounded-full mx-auto my-5"></div>
      <Popover>
        <PopoverTrigger>
          <AddButton className="w-full">Add new category</AddButton>
        </PopoverTrigger>
        <PopoverContent>
          <form onSubmit={handleAddCategory} className="flex items-center gap-x-2">
            <Input placeholder="Enter category name" className="w-full" onChange={(e) => setCategoryName(e.target.value)} value={categoryName} />
            <button type="submit">
              <MdAdd className="size-6 cursor-pointer" />
            </button>
          </form>
        </PopoverContent>
      </Popover>
    </div>
  );
}
