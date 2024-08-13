import { LuFolders } from "react-icons/lu";
import { MdDragIndicator } from "react-icons/md";

export default function CategoryTab({ name }: { name: string }) {
  return (
    <div className="block px-4 py-2 hover:bg-gray-100 rounded-lg relative cursor-pointer">
      <span className="flex items-center gap-x-2">
        <LuFolders className="size-5" />
        {name}
      </span>
      <MdDragIndicator className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-900 z-10" />
    </div>
  );
}
