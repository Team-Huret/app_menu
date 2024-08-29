"use client";
import { BiImageAdd } from "react-icons/bi";
import { useState, ChangeEvent } from "react";
import Image from "next/image";
import { useEntryStore } from "../_store/useEntryStore";

export default function InputFile() {
  const [image, setImage] = useState<string | null>(null);
  const { setEntryImage } = useEntryStore();

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files || event.target.files.length === 0) return;
    const file = event.target.files[0];
    setEntryImage(file);
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <div className="max-w-[220px] max-h-[190px] overflow-hidden grow border border-gray-300 hover:border-slate-800 transition rounded-lg relative flex items-center justify-center">
      {image ? (
        <div>
          <Image src={image} alt="Selected" width={190} height={190} className="h-full w-full object-cover rounded-lg" />
          <span className="flex cursor-pointer gap-2 items-center absolute z-20 bottom-2 right-2 text-xs p-2 bg-white rounded-lg text-black border border-border">
            <BiImageAdd className="size-5 cursor-pointer" />
            Edit
          </span>
        </div>
      ) : (
        <span className="flex items-center gap-x-2 cursor-pointer ">
          <BiImageAdd className="size-5 cursor-pointer" />
          Add image
        </span>
      )}
      <input type="file" accept="image/*" className="h-full w-full inset-0 absolute cursor-pointer opacity-0 z-30" onChange={handleFileChange} />
    </div>
  );
}
