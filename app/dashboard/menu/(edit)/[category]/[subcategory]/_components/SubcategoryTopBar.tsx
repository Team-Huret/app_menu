"use client";
import { FiEdit } from "react-icons/fi";
import { LuTrash2 } from "react-icons/lu";
import { useSubcategoryStore } from "../_store/useSubcategoryStore";
import { useState, useEffect, useRef } from "react";
import { Input } from "@/components/ui/input";
import { MdAdd } from "react-icons/md";
import { Button } from "@/components/ui/button";
import { updateSubcategoryName } from "../_data/updateSubcategoryName";
import { deleteSubcategory } from "../_data/deleteSubcategory";
import { useCategoryStore } from "../../_store/useCategoryStore";
import { useRouter } from "next/navigation";
import { GrFormPrevious } from "react-icons/gr";

export default function SubcategoryTopBar() {
  const { subcategoryName, setSubcategoryName, subcategoryId } = useSubcategoryStore();
  const { categoryName, setSubcategories } = useCategoryStore();
  const router = useRouter();

  const [newName, setNewName] = useState("");
  const [edit, setEdit] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (edit && inputRef.current) {
      inputRef.current.focus();
    }
  }, [edit]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (newName && subcategoryId) {
      const res = await updateSubcategoryName(newName, subcategoryId);
      if (res) {
        setSubcategoryName(newName);
        setSubcategories((prev) => prev.map((subcategory) => (subcategory.ID === subcategoryId ? { ...subcategory, Name: newName } : subcategory)));
        router.replace(`/dashboard/menu/${categoryName}/${newName}`);
      }
      setEdit(false);
    }
  };

  const handleDelete = async () => {
    if (!subcategoryId) return;
    const res = await deleteSubcategory(subcategoryId);
    if (res) {
      window.location.replace(`/dashboard/menu/${categoryName}`);
    }
  };

  return (
    <div className="w-full py-7 border-b border-gray-300">
      <div className="flex justify-between items-center px-7">
        <div className="flex gap-x-4 items-center">
          <GrFormPrevious className="size-7 cursor-pointer" onClick={() => router.push(`/dashboard/menu/${categoryName}`)} />

          {edit ? (
            <form onSubmit={handleSubmit} className="flex gap-x-4 items-center">
              <Input
                type="text"
                defaultValue={subcategoryName}
                onChange={(e) => setNewName(e.target.value)}
                className="text-2xl font-bold w-fit"
                ref={inputRef}
              />
              <Button size="icon" variant="outline" type="submit">
                <MdAdd className="size-5 cursor-pointer" />
              </Button>
            </form>
          ) : (
            <h2 className="text-2xl font-bold">{subcategoryName}</h2>
          )}
        </div>

        <div className="flex gap-x-4">
          <FiEdit className="size-5 cursor-pointer" onClick={() => setEdit(!edit)} />
          <LuTrash2 className="size-5 cursor-pointer hover:text-red-500 transition" onClick={handleDelete} />
        </div>
      </div>
    </div>
  );
}
