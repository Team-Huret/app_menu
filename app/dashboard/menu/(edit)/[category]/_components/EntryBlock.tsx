"use client";
import { LuTrash2 } from "react-icons/lu";
import { MdDragIndicator } from "react-icons/md";
import { LuChefHat } from "react-icons/lu";
import Link from "next/link";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { usePathname } from "next/navigation";
import { deleteEntry } from "../[subcategory]/_data/deleteEntry";
import { useSubcategoryStore } from "../[subcategory]/_store/useSubcategoryStore";
import { useRouter } from "next/navigation";

type EntryBlockProps = {
  name: string;
  className?: string;
  subCategoryName: string;
  modif?: boolean;
  entryId: number;
};

export default function EntryBlock({ name, className, subCategoryName, modif, entryId }: EntryBlockProps) {
  const router = useRouter();
  const pathname = usePathname();
  const slug = pathname.split("/").filter((item) => item !== "");
  const decodedSlugParts = slug.map((item) => decodeURIComponent(item));

  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: name });
  const style = {
    transform: CSS.Translate.toString(transform),
    transition,
  };
  const { setEntries } = useSubcategoryStore();
  const handleDelete = async () => {
    const res = await deleteEntry(entryId);
    if (res) {
      setEntries((prev) => {
        const index = prev.findIndex((item) => item.ID === entryId);
        prev.splice(index, 1);
        return [...prev];
      });
    }
  };
  return (
    <div
      className={`flex items-center justify-between gap-x-2 rounded-sm hover:bg-gray-50 ${className}`}
      {...attributes}
      {...listeners}
      ref={setNodeRef}
      style={style}
    >
      <div
        className="p-4 grow hover:underline"
        onClick={() => router.push(`/dashboard/menu/${decodedSlugParts[2]}/${subCategoryName}/entry/${name}`)}
      >
        <div className="flex items-center gap-x-2">
          <LuChefHat className="size-5 mr-2" />
          <p>{name}</p>
        </div>
      </div>

      {modif && (
        <div className="flex gap-x-4 items-center p-4">
          <LuTrash2 className="size-5 cursor-pointer hover:text-red-500 transition" onClick={handleDelete} />
          <MdDragIndicator className=" size-5 cursor-pointer" />
        </div>
      )}
    </div>
  );
}
