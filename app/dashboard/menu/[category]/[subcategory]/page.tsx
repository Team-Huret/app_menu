"use client";
import { usePathname } from "next/navigation";
import { arrayMove, SortableContext } from "@dnd-kit/sortable";
import { DndContext } from "@dnd-kit/core";
import { DragOverEvent } from "@dnd-kit/core";
import { HiOutlineFolderPlus } from "react-icons/hi2";
import { Button } from "@/components/ui/button";
import { useGetEntries } from "./_data/getEntries";
import EntryBlock from "../_components/EntryBlock";
import EmptyEntries from "./_components/EmptyEntries";
import SubcategoryTopBar from "./_components/SubcategoryTopBar";
import Link from "next/link";

export default function SubCategory() {
  const pathname = usePathname();
  const slug = pathname.split("/").filter((item) => item !== "");
  const decodedSlugParts = slug.map((item) => decodeURIComponent(item));

  const { entriesData, setEntriesData, entriesName } = useGetEntries(decodedSlugParts[2], decodedSlugParts[3]);

  if (entriesData.length === 0) {
    return <EmptyEntries />;
  }

  const handleDragOver = (event: DragOverEvent) => {
    const { active, over } = event;
    if (over && active.id !== over.id) {
      setEntriesData((prev) => {
        const oldIndex = prev.findIndex((item) => item.name === active.id);
        const newIndex = prev.findIndex((item) => item.name === over.id);
        return arrayMove(prev, oldIndex, newIndex);
      });
    }
  };

  const handleDragEnd = () => {
    //updateOrder();
  };

  return (
    <div className="w-full">
      <SubcategoryTopBar name={decodedSlugParts[3]} />
      <div className="w-full p-5 flex flex-col gap-5 max-w-[1100px] mx-auto">
        <DndContext onDragOver={handleDragOver} onDragEnd={handleDragEnd}>
          <SortableContext items={entriesName}>
            {entriesData.map((field, index) => {
              return <EntryBlock key={index} name={field.name} subCategoryName={decodedSlugParts[3]} className="border !rounded-lg" modif />;
            })}
          </SortableContext>
        </DndContext>
        <Link href={`/dashboard/menu/${decodedSlugParts[2]}/${decodedSlugParts[3]}/entry`} className="w-full">
          <Button variant="dashed" className="w-full">
            <HiOutlineFolderPlus className="size-5 mr-2" />
            Add an entry
          </Button>
        </Link>
      </div>
    </div>
  );
}
