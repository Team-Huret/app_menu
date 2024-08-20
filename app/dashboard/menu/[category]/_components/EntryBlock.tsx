"use client";
import { LuTrash2 } from "react-icons/lu";
import { MdDragIndicator } from "react-icons/md";
import { LuChefHat } from "react-icons/lu";
import Link from "next/link";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { usePathname } from "next/navigation";

type EntryBlockProps = {
  name: string;
  className?: string;
  subCategoryName: string;
  modif?: boolean;
};

export default function EntryBlock({ name, className, subCategoryName, modif }: EntryBlockProps) {
  const pathname = usePathname();
  const slug = pathname.split("/")[3];
  const decodedSlug = decodeURIComponent(slug);

  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: name });
  const style = {
    transform: CSS.Translate.toString(transform),
    transition,
  };
  return (
    <div
      className={`flex items-center justify-between gap-x-2 rounded-sm hover:bg-gray-50 ${className}`}
      {...attributes}
      {...listeners}
      ref={setNodeRef}
      style={style}
    >
      <Link href={`/dashboard/menu/${decodedSlug}/${subCategoryName}/entry/${name}`} className="p-4 grow hover:underline">
        <div className="flex items-center gap-x-2">
          <LuChefHat className="size-5 mr-2" />
          <p>{name}</p>
        </div>
      </Link>

     {modif && <div className="flex gap-x-4 items-center p-4">
        <LuTrash2 className="size-5 cursor-pointer" />
        <MdDragIndicator className=" size-5 cursor-pointer" />
      </div>}
    </div>
  );
}
