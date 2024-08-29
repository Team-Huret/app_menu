import { useEffect } from "react";
import { useCategoryStore } from "../../_store/useCategoryStore";
import { useSubcategoryStore } from "../_store/useSubcategoryStore";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

export const useGetEntries = (subCategoryName: string) => {
  const router = useRouter();
  const pathname = usePathname();
  const { subcategories, categoryName } = useCategoryStore();
  const { setEntries, setEntriesName, setSubcategoryName, setSubcategoryId } = useSubcategoryStore();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const subCategory = subcategories.find((subCategory) => subCategory.Name === subCategoryName);
    if (!subCategory) {
      router.push(`/dashboard/menu/${categoryName}`);
      return;
    }
    setSubcategoryName(subCategoryName);
    setSubcategoryId(subCategory.ID);
    if (!subCategory.Entries) {
      setIsLoading(false);
      return;
    }
    const sortedByOrder = subCategory.Entries.sort((a, b) => (a.Order ?? 0) - (b.Order ?? 0));
    setEntries(sortedByOrder);
    setEntriesName(sortedByOrder.map((field) => field.Name));
    setIsLoading(false);
  }, [pathname]);

  return { isLoading };
};
