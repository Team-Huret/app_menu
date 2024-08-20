import { useEffect } from "react";
import { useMenuStore } from "@/app/dashboard/menu/_store/useMenuStore";
import { Entry } from "@/types/menu";
import { useState } from "react";

export const useGetEntries = (categoryName: string, subCategoryName: string) => {
  const { categories } = useMenuStore();
  const [entriesData, setEntriesData] = useState<Entry[]>([]);
  const [entriesName, setEntriesName] = useState<string[]>([]);

  useEffect(() => {
    const category = categories.find((category) => category.name === categoryName);
    if (!category || !category.data) return;
    const subCategory = category.data.find((subCategory) => subCategory.name === subCategoryName);
    if (!subCategory || !subCategory.data) return;
    setEntriesData(subCategory.data);
    setEntriesName(subCategory.data.map((field) => field.name));
  }, [categories]);

  return { entriesData, setEntriesData, entriesName };
};
