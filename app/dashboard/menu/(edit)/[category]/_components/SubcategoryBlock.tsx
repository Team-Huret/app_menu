"use client";
import { MdDragIndicator } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import { MdAdd } from "react-icons/md";
import EntryBlock from "./EntryBlock";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Entry } from "@/types/menu";
import { usePathname, useRouter } from "next/navigation";

interface SubcategoryProps {
  entries: Entry[];
  name: string;
}

export default function SubcategoryBlock({ entries, name }: SubcategoryProps) {
  const router = useRouter();
  const pathname = usePathname();
  const slug = pathname.split("/").filter((item) => item !== "");
  const decodedSlugParts = slug.map((item) => decodeURIComponent(item));
  const orderedEntries = entries.sort((a, b) => a.Order - b.Order);

  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: name });
  const style = {
    transform: CSS.Translate.toString(transform),
    transition,
  };

  return (
    <div className="border border-gray-300 rounded-lg bg-white" {...attributes} {...listeners} ref={setNodeRef} style={style}>
      <div className="group flex items-center border-b border-gray-300 pr-4">
        <div className="flex items-center gap-x-2 p-4 w-full" onClick={() => router.push(`/dashboard/menu/${decodedSlugParts[2]}/${name}`)}>
          <h3 className="grow group-hover:underline">{name}</h3>
          <FiEdit className="size-5 cursor-pointer shrink-0" />
        </div>
        <MdDragIndicator className=" size-5 cursor-pointer" />
      </div>

      {orderedEntries.map((entry, index) => (
        <div key={index}>
          <EntryBlock name={entry.Name} subCategoryName={name} entryId={entry.ID} />
          <div className="h-px w-full bg-gray-300"></div>
        </div>
      ))}

      <div
        onClick={() => router.push(`/dashboard/menu/${decodedSlugParts[2]}/${name}/entry`)}
        className="flex justify-center items-center w-full p-4 hover:bg-gray-50 cursor-pointer gap-x-2 rounded-br-lg rounded-bl-lg"
      >
        <MdAdd className="size-5" />
        <p className=" font-medium">Add new entry</p>
      </div>
    </div>
  );
}
