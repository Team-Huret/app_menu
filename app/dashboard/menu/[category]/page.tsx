"use client";
import { usePathname } from "next/navigation";
import SubcategoryBlock from "./_components/SubcategoryBlock";
import { arrayMove, SortableContext } from "@dnd-kit/sortable";
import { DndContext } from "@dnd-kit/core";
import { DragOverEvent } from "@dnd-kit/core";
import { useGetCategory } from "./_data/getCategory";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { MdAdd } from "react-icons/md";
import { Input } from "@/components/ui/input";
import { HiOutlineFolderPlus } from "react-icons/hi2";
import EmptySubs from "./_components/EmptySubs";
import { Button } from "@/components/ui/button";

export default function Category() {
  const pathname = usePathname();
  const slug = pathname.split("/").filter((item) => item !== "");
  const decodedSlugParts = slug.map((item) => decodeURIComponent(item));

  const { categoryData, subCategoriesName, setCategoryData } = useGetCategory(decodedSlugParts[2]);

  if (categoryData.length === 0) {
    return <EmptySubs />;
  }

  const handleDragOver = (event: DragOverEvent) => {
    const { active, over } = event;
    if (over && active.id !== over.id) {
      setCategoryData((prev) => {
        const oldIndex = prev.findIndex((item) => item.name === active.id);
        const newIndex = prev.findIndex((item) => item.name === over.id);
        return arrayMove(prev, oldIndex, newIndex);
      });
    }
  };

  const handleDragEnd = () => {
    console.log("order updated");
  };

  return (
    <div className="w-full p-5 flex flex-col gap-5 max-w-[1100px] mx-auto">
      <DndContext onDragOver={handleDragOver} onDragEnd={handleDragEnd}>
        <SortableContext items={subCategoriesName}>
          {categoryData.map((field, index) => {
            return <SubcategoryBlock key={index} name={field.name} entries={field.data} />;
          })}
        </SortableContext>
      </DndContext>
      <Popover>
        <PopoverTrigger>
          <Button variant="dashed" className="w-full">
            <HiOutlineFolderPlus className="size-5 mr-2" />
            Add a subcategory
          </Button>
        </PopoverTrigger>
        <PopoverContent>
          <form onSubmit={() => {}} className="flex items-center gap-x-2">
            <Input placeholder="Enter subcategory name" className="w-full" />
            <button type="submit">
              <MdAdd className="size-6 cursor-pointer" />
            </button>
          </form>
        </PopoverContent>
      </Popover>
    </div>
  );
}
