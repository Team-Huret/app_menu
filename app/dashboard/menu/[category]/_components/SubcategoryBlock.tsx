"use client";
import { MdDragIndicator } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import { MdAdd } from "react-icons/md";
import EntryBlock from "./EntryBlock";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Entry } from "@/types/menu";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface SubcategoryProps {
  entries: Entry[];
  name: string;
}

export default function SubcategoryBlock({ entries, name }: SubcategoryProps) {
  const pathname = usePathname();
  const slug = pathname.split("/").filter((item) => item !== "");
  const decodedSlugParts = slug.map((item) => decodeURIComponent(item));

  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: name });
  const style = {
    transform: CSS.Translate.toString(transform),
    transition,
  };

  return (
    <div className="border border-gray-300 rounded-lg bg-white" {...attributes} {...listeners} ref={setNodeRef} style={style}>
      <Link
        href={`/dashboard/menu/${decodedSlugParts[2]}/${name}`}
        className="group flex items-center justify-between gap-x-5 p-4 border-b border-gray-300"
      >
        <h3 className="grow group-hover:underline">{name}</h3>
        <div className="flex gap-x-4 items-center">
          <FiEdit className="size-5 cursor-pointer" />
          <MdDragIndicator className=" size-5 cursor-pointer" />
        </div>
      </Link>

      {entries.map((entry, index) => (
        <>
          <EntryBlock key={index} name={entry.name} subCategoryName={name} />
          <div className="h-px w-full bg-gray-300"></div>
        </>
      ))}

      <Link
        href={`/dashboard/menu/${decodedSlugParts[2]}/${name}/entry`}
        className="flex justify-center items-center w-full p-4 hover:bg-gray-50 cursor-pointer gap-x-2 rounded-br-lg rounded-bl-lg"
      >
        <MdAdd className="size-5" />
        <p className=" font-medium">Add new entry</p>
      </Link>
    </div>
  );
}
