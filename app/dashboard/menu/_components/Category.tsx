import { LuFolders } from "react-icons/lu";
import { MdDragIndicator } from "react-icons/md";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import Link from "next/link";

export default function CategoryTab({ name }: { name: string }) {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: name });
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <Link
      href={`/dashboard/menu/${name}`}
      className="block px-4 py-2 hover:bg-gray-100 rounded-lg relative cursor-pointer overflow-hidden "
      {...attributes}
      {...listeners}
      ref={setNodeRef}
      style={style}
    >
      <span className="flex items-center gap-x-2">
        <LuFolders className="size-5" />
        {name}
      </span>
      <MdDragIndicator className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-900 z-10" />
    </Link>
  );
}
