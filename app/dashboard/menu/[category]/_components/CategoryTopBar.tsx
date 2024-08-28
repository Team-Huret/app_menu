"use client";
import { FiEdit } from "react-icons/fi";
import { LuTrash2 } from "react-icons/lu";

export default function CategoryTopBar({ name }: { name: string }) {
  return (
    <div className="w-full py-7 border-b border-gray-300">
      <div className="flex justify-between items-center px-7">
        <h2 className="text-2xl font-bold">{name}</h2>
        <div className="flex gap-x-4">
          <FiEdit className="size-5 cursor-pointer" />
          <LuTrash2 className="size-5 cursor-pointer" />
        </div>
      </div>
    </div>
  );
}
