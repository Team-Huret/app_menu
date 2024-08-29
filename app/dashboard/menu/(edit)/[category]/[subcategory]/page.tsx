"use client";
import { arrayMove, SortableContext } from "@dnd-kit/sortable";
import { DndContext } from "@dnd-kit/core";
import { DragOverEvent } from "@dnd-kit/core";
import { HiOutlineFolderPlus } from "react-icons/hi2";
import { Button } from "@/components/ui/button";
import EntryBlock from "../_components/EntryBlock";
import EmptyEntries from "./_components/EmptyEntries";
import SubcategoryTopBar from "./_components/SubcategoryTopBar";
import Link from "next/link";
import { useSubcategoryStore } from "./_store/useSubcategoryStore";
import { useCategoryStore } from "../_store/useCategoryStore";
import { useSensor, useSensors, MouseSensor, KeyboardSensor } from "@dnd-kit/core";
import { useUpdateEntriesOrder } from "./_data/updateEntriesOrder";

export default function SubCategory() {
  const mouseSensor = useSensor(MouseSensor, {
    activationConstraint: {
      distance: 1,
    },
  });
  const keyboardSensor = useSensor(KeyboardSensor);
  const sensors = useSensors(mouseSensor, keyboardSensor);
  const { entriesName, entries, setEntries, subcategoryName } = useSubcategoryStore();
  const { categoryName } = useCategoryStore();
  const { updateOrder } = useUpdateEntriesOrder();

  if (entries.length === 0) {
    return <EmptyEntries />;
  }

  const handleDragOver = (event: DragOverEvent) => {
    const { active, over } = event;
    if (over && active.id !== over.id) {
      setEntries((prev) => {
        const oldIndex = prev.findIndex((item) => item.Name === active.id);
        const newIndex = prev.findIndex((item) => item.Name === over.id);
        return arrayMove(prev, oldIndex, newIndex);
      });
    }
  };

  const handleDragEnd = () => {
    updateOrder();
  };

  return (
    <div className="w-full">
      <SubcategoryTopBar />
      <div className="w-full p-5 flex flex-col gap-5 max-w-[1100px] mx-auto">
        <DndContext onDragOver={handleDragOver} onDragEnd={handleDragEnd} sensors={sensors}>
          <SortableContext items={entriesName}>
            {entries.map((field, index) => {
              return (
                <EntryBlock key={index} name={field.Name} subCategoryName={subcategoryName} entryId={field.ID} className="border !rounded-lg" modif />
              );
            })}
          </SortableContext>
        </DndContext>
        <Link href={`/dashboard/menu/${categoryName}/${subcategoryName}/entry`} className="w-full">
          <Button variant="dashed" className="w-full">
            <HiOutlineFolderPlus className="size-5 mr-2" />
            Add an entry
          </Button>
        </Link>
      </div>
    </div>
  );
}
