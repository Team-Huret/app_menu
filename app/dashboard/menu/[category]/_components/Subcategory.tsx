"use client";
import { LuTrash2 } from "react-icons/lu";
import { MdDragIndicator } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import { MdAdd } from "react-icons/md";
import EntryBlock from "./EntryBlock";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { arrayMove, SortableContext } from "@dnd-kit/sortable";
import { DndContext } from "@dnd-kit/core";
import { Entry } from "@/types/menu";
import { useState } from "react";
import { DragOverEvent } from "@dnd-kit/core";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface SubcategoryProps {
  entries: Entry[];
  name: string;
}

export default function Subcategory({ entries, name }: SubcategoryProps) {
  const pathname = usePathname();
  const slug = pathname.split("/")[3];
  const decodedSlug = decodeURIComponent(slug);

  const [entriesList, setEntriesList] = useState<Entry[]>(entries);
  const entriesName = entries.map((entry) => entry.name);

  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: name });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const handleDragOver = (event: DragOverEvent) => {
    const { active, over } = event;
    if (over && active.id !== over.id) {
      setEntriesList((prev) => {
        const oldIndex = prev.findIndex((item) => item.name === active.id);
        const newIndex = prev.findIndex((item) => item.name === over.id);
        return arrayMove(prev, oldIndex, newIndex);
      });
    }
  };
  const handleDragEnd = () => {
    console.log("drag end");
  };

  return (
    <div className="border border-gray-300 rounded-lg bg-white" {...attributes} {...listeners} ref={setNodeRef} style={style}>
      <div className="flex items-center justify-between gap-x-5 p-4 border-b border-gray-300">
        <h3>{name}</h3>
        <div className="flex gap-x-4 items-center">
          <FiEdit className="size-5 cursor-pointer" />
          <LuTrash2 className="size-5 cursor-pointer" />
          <MdDragIndicator className=" size-5 cursor-pointer" />
        </div>
      </div>
      <DndContext
        onDragOver={handleDragOver}
        onDragEnd={() => {
          handleDragEnd;
        }}
      >
        <SortableContext items={entriesName}>
          {entriesList.map((entry, index) => (
            <>
              <EntryBlock key={index} name={entry.name} />
              <div className="h-px w-full bg-gray-300"></div>
            </>
          ))}
        </SortableContext>
      </DndContext>
      <Link
        href={`/dashboard/menu/${decodedSlug}/${name}/add`}
        className="flex justify-center items-center w-full p-4 hover:bg-gray-50 cursor-pointer gap-x-2 rounded-br-lg rounded-bl-lg"
      >
        <MdAdd className="size-5" />
        <p className=" font-medium">Add new entry</p>
      </Link>
    </div>
  );
}
