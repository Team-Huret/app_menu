import { useEffect } from "react";
import { useMenuStore } from "@/app/dashboard/menu/_store/useMenuStore";
import { Subcategory } from "@/types/menu";
import { useState } from "react";

export const useGetCategory = (categoryName: string) => {
  const { categories } = useMenuStore();
  const [categoryData, setCategoryData] = useState<Subcategory[]>([]);
  const [subCategoriesName, setSubCategoriesName] = useState<string[]>([]);

  useEffect(() => {
    const category = categories.find((category) => category.name === categoryName);
    if (!category || !category.data) return;
    setCategoryData(category.data);
    setSubCategoriesName(category.data.map((field) => field.name));
  }, [categories]);

  return { categoryData, setCategoryData, subCategoriesName };
};
