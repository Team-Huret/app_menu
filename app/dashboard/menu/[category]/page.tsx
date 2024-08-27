"use client";
import SubcategoryBlock from "./_components/SubcategoryBlock";
import { arrayMove, SortableContext } from "@dnd-kit/sortable";
import { DndContext } from "@dnd-kit/core";
import { DragOverEvent } from "@dnd-kit/core";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { MdAdd } from "react-icons/md";
import { Input } from "@/components/ui/input";
import { HiOutlineFolderPlus } from "react-icons/hi2";
import EmptyFields from "./_components/EmptyFields";
import { Button } from "@/components/ui/button";
import { useCategoryStore } from "./_store/useCategoryStore";

export default function Category() {
  const { subcategories, subcategoriesName, setSubcategories } = useCategoryStore();

  if (subcategories.length === 0) {
    return <EmptyFields />;
  }

  const handleDragOver = (event: DragOverEvent) => {
    const { active, over } = event;
    if (over && active.id !== over.id) {
      setSubcategories((prev) => {
        const oldIndex = prev.findIndex((item) => item.Name === active.id);
        const newIndex = prev.findIndex((item) => item.Name === over.id);
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
        <SortableContext items={subcategoriesName}>
          {subcategories.map((field, index) => {
            return <SubcategoryBlock key={index} name={field.Name} entries={field.Entries} />;
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
