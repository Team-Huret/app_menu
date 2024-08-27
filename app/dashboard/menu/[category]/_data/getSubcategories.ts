import { useEffect } from "react";
import { useCategoryStore } from "../_store/useCategoryStore";
import { useMenuStore } from "../../_store/useMenuStore";

export const useGetSubcategories = (categoryName: string) => {
  const { setSubcategories, setSubcategoriesName, setCategoryId } = useCategoryStore();
  const { categories } = useMenuStore();

  useEffect(() => {
    const category = categories.find((category) => category.Name === categoryName);
    console.log(category);
    if (!category || !category.Subcategories) {
      console.log("No category found");
      return;
    }
    console.log(category);

    setCategoryId(category.ID);
    setSubcategories(category.Subcategories);
    setSubcategoriesName(category.Subcategories.map((field) => field.Name));
  }, []);
};
