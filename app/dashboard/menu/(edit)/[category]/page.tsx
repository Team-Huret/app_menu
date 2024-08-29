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
import CategoryTopBar from "./_components/CategoryTopBar";
import { useState } from "react";
import { addSubcategory } from "./_data/addSubcategory";
import { useUpdateSubcategoriesOrder } from "./_data/updateSubcategoriesOrder";
import { useSensor, useSensors, MouseSensor, KeyboardSensor } from "@dnd-kit/core";

export default function Category() {
  const mouseSensor = useSensor(MouseSensor, {
    activationConstraint: {
      distance: 1,
    },
  });
  const keyboardSensor = useSensor(KeyboardSensor);
  const sensors = useSensors(mouseSensor, keyboardSensor);
  const { subcategories, subcategoriesName, setSubcategories, categoryId } = useCategoryStore();
  const [subcategoryName, setSubcategoryName] = useState("");
  const { updateOrder } = useUpdateSubcategoriesOrder();

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
    updateOrder();
    console.log("order updated");
  };

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

      <div className="w-full p-5 flex flex-col gap-5 max-w-[1100px] mx-auto">
        <DndContext onDragOver={handleDragOver} onDragEnd={handleDragEnd} sensors={sensors}>
          <SortableContext items={subcategoriesName}>
            {subcategories.map((field, index) => {
              return <SubcategoryBlock key={index} name={field.Name} entries={field.Entries} />;
            })}
          </SortableContext>
        </DndContext>
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="dashed" className="w-full">
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
  );
}
