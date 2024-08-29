"use client";
import { LuFolders } from "react-icons/lu";
import { MdDragIndicator } from "react-icons/md";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import Link from "next/link";
import { useSensor, useSensors, PointerSensor } from "@dnd-kit/core";

export default function CategoryTab({ name }: { name: string }) {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: name });
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };
 

  return (
    <div
      className=" px-4 py-2 hover:bg-gray-100 rounded-lg relative cursor-pointer overflow-hidden flex items-center gap-2"
      {...attributes}
      {...listeners}
      ref={setNodeRef}
      style={style}
    >
      <LuFolders className="size-5 shrink-0" />
      <Link href={`/dashboard/menu/${name}`} className="truncate max-w-[120px] grow">
        {name}
      </Link>
      <MdDragIndicator className=" text-gray-900 shrink-0" onClick={() => console.log("click")} />
    </div>
  );
}
