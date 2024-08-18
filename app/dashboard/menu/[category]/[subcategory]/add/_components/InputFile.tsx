import React from "react";
import { BiImageAdd } from "react-icons/bi";

export default function InputFile() {
  return (
    <div className="basis-[25%] border border-gray-300 rounded-lg relative flex items-center justify-center">
      <span className="flex items-center gap-x-2 cursor-pointer">
        <BiImageAdd className="size-5 cursor-pointer" />
        Add image
      </span>
      <input type="file" className="h-full w-full inset-0 absolute cursor-pointer opacity-0" />
    </div>
  );
}
