"use client";
import { FiEdit } from "react-icons/fi";
import { LuTrash2 } from "react-icons/lu";
import { useCategoryStore } from "../_store/useCategoryStore";
import { updateCategoryName } from "../_data/updateCategoryName";
import { useState, useEffect, useRef } from "react";
import { Input } from "@/components/ui/input";
import { MdAdd } from "react-icons/md";
import { Button } from "@/components/ui/button";
import { deletecategory } from "../_data/deleteCategory";
import { useRouter } from "next/navigation";
import { useMenuStore } from "../../_store/useMenuStore";

export default function CategoryTopBar() {
  const router = useRouter();
  const { categoryName, categoryId, setCategoryName } = useCategoryStore();
  const { setCategories } = useMenuStore();
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
    if (newName && categoryId) {
      const res = await updateCategoryName(newName, categoryId);
      if (res) {
        setCategoryName(newName);
        setCategories((prev) => {
          return prev.map((category) => {
            if (category.ID === categoryId) {
              return {
                ...category,
                Name: newName,
              };
            }
            return category;
          });
        });
        router.replace(`/dashboard/menu/${newName}`);
      }
      setEdit(false);
    }
  };

  const handleDelete = async () => {
    if (!categoryId) return;
    const res = await deletecategory(categoryId);
    if (res) {
      window.location.replace("/dashboard/menu");
    }
  };

  return (
    <div className="w-full py-7 border-b border-gray-300">
      <div className="flex justify-between items-center px-7">
        {edit ? (
          <form onSubmit={handleSubmit} className="flex gap-x-4 items-center">
            <Input
              type="text"
              defaultValue={categoryName}
              onChange={(e) => setNewName(e.target.value)}
              className="text-2xl font-bold w-fit"
              ref={inputRef}
            />
            <Button size="icon" variant="outline" type="submit">
              <MdAdd className="size-5 cursor-pointer" />
            </Button>
          </form>
        ) : (
          <h2 className="text-2xl font-bold">{categoryName}</h2>
        )}
        <div className="flex gap-x-4">
          <FiEdit className="size-5 cursor-pointer" onClick={() => setEdit(!edit)} />
          <LuTrash2 className="size-5 cursor-pointer hover:text-red-500 transition" onClick={handleDelete} />
        </div>
      </div>
    </div>
  );
}
