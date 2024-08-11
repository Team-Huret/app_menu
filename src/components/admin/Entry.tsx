import React from "react";
import { LuTrash2 } from "react-icons/lu";
import { MdDragIndicator } from "react-icons/md";
import { LuChefHat } from "react-icons/lu";

type EntryProps = {
  entry: any;
  border: string;
  className?: string;
};

export default function Entry({ entry, border, className }: EntryProps) {
  return (
    <div className={`flex items-center justify-between gap-x-2 p-4 ${border} ${className} border-gray-300`}>
      <div className="flex items-center gap-x-2">
        <LuChefHat className="size-5 mr-2" />
        <p>{entry.name}</p>
      </div>
      <div className="flex gap-x-4 items-center">
        <LuTrash2 className="size-5 cursor-pointer" />
        <MdDragIndicator className=" size-5 cursor-pointer" />
      </div>
    </div>
  );
}
