import { useEffect } from "react";
import { useCategoryStore } from "../_store/useCategoryStore";
import { useMenuStore } from "../../_store/useMenuStore";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

export const useGetSubcategories = (categoryName: string) => {
  const router = useRouter();
  const { setSubcategories, setSubcategoriesName, setCategoryId, setCategoryName } = useCategoryStore();
  const { categories } = useMenuStore();
  const [isLoading, setIsLoading] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    const category = categories.find((category) => category.Name === categoryName);
    if (!category) {
      router.push("/dashboard/menu");
      return;
    }
    setCategoryName(categoryName);
    setCategoryId(category.ID);

    if (!category.Subcategories) {
      setIsLoading(false);
      return;
    }
    const sortedByOrder = category.Subcategories.sort((a, b) => (a.Order ?? 0) - (b.Order ?? 0));
    setSubcategories(sortedByOrder);
    setSubcategoriesName(sortedByOrder.map((field) => field.Name));
    setIsLoading(false);
  }, [pathname]);
  return { isLoading };
};
