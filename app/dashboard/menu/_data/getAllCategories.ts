import { useEffect } from "react";
import { useMenuStore } from "@/app/dashboard/menu/_store/useMenuStore";
import categoriesMock from "@/mock/categories.json";
import { Category, Menu } from "@/types/menu";

export const useGetAllCategories = () => {
  const { setCategories, categories, setCategoriesName, categoriesName } = useMenuStore();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch("https://api.mocki.io/v2/cge9r1ed/menu");
        const data: Menu = await res.json();
        console.log(data);
        setCategories(data.menu as Category[]);
        setCategoriesName(data.menu.map((category) => category.name));
      } catch (err) {
        console.log(err);
      }
    };

    fetchCategories();
  }, [setCategories, setCategoriesName]);

  const updateOrder = () => {
    console.log("Order updated successfully");
  };

  return { categories, setCategories, updateOrder, categoriesName, setCategoriesName };
};
