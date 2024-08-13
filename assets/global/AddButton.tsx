import { HiOutlineFolderPlus } from "react-icons/hi2";

export default function AddButton({ children, className }: { children: string; className?: string }) {
  return (
    <div
      className={`flex justify-center items-center border border-dashed border-gray-800 rounded-lg px-5 py-2 hover:bg-gray-50 cursor-pointer gap-x-2 ${className}`}
    >
      <HiOutlineFolderPlus />
      <p className="text-sm whitespace-nowrap">{children}</p>
    </div>
  );
}
