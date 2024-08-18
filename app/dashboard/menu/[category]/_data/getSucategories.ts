import { useEffect } from "react";
import { useMenuStore } from "@/app/dashboard/menu/_store/useMenuStore";
import { Subcategory } from "@/types/menu";
import { useState } from "react";

export const useGetSubcategories = (slug: string) => {
  const { setCategories, categories } = useMenuStore();
  const [subCategories, setSubCategories] = useState<Subcategory[]>([]);
  const [subCategoriesName, setSubCategoriesName] = useState<string[]>([]);

  useEffect(() => {
    const category = categories.find((category) => category.name === slug);
    if (!category || !category.data) return;
    setSubCategories(category.data);
    const subcategoryName = category.data.map((field) => field.name);
    if (subcategoryName) {
      setSubCategoriesName(subcategoryName);
    }
  }, [categories]);

  const updateOrder = () => {
    console.log("Order updated successfully");
  };

  return { subCategories, setSubCategories, setSubCategoriesName, subCategoriesName, updateOrder };
};
