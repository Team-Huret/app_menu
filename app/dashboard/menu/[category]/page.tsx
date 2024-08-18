"use client";
import { usePathname } from "next/navigation";
import Subcategory from "./_components/Subcategory";
import { arrayMove, SortableContext } from "@dnd-kit/sortable";
import { DndContext } from "@dnd-kit/core";
import { DragOverEvent } from "@dnd-kit/core";
import { useGetSubcategories } from "@/app/dashboard/menu/[category]/_data/getSucategories";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { MdAdd } from "react-icons/md";
import { Input } from "@/components/ui/input";
import { HiOutlineFolderPlus } from "react-icons/hi2";
import DashedButton from "@/components/global/DashedButton";
import EmptyFields from "./_components/EmptyFields";

export default function Category() {
  const pathname = usePathname();
  const slug = pathname.split("/")[3];
  const decodedSlug = decodeURIComponent(slug);

  const { subCategories, setSubCategories, subCategoriesName, updateOrder } = useGetSubcategories(decodedSlug);

  if (subCategories.length === 0) {
    return <EmptyFields />;
  }

  const handleDragOver = (event: DragOverEvent) => {
    const { active, over } = event;
    if (over && active.id !== over.id) {
      setSubCategories((prev) => {
        const oldIndex = prev.findIndex((item) => item.name === active.id);
        const newIndex = prev.findIndex((item) => item.name === over.id);
        return arrayMove(prev, oldIndex, newIndex);
      });
    }
  };
  const handleDragEnd = () => {
    updateOrder();
  };

  return (
    <div className="w-full p-5 flex flex-col gap-5 max-w-[1100px] mx-auto">
      <DndContext onDragOver={handleDragOver} onDragEnd={handleDragEnd}>
        <SortableContext items={subCategoriesName}>
          {subCategories.map((field, index) => {
            return <Subcategory key={index} name={field.name} entries={field.data} />;
          })}
        </SortableContext>
      </DndContext>
      <Popover>
        <PopoverTrigger>
          <DashedButton className="w-full" icon={<HiOutlineFolderPlus />}>
            Add a subcategory
          </DashedButton>
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
