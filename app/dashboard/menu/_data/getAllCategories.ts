import { useEffect } from "react";
import { useMenuStore } from "@/app/dashboard/menu/_store/useMenuStore";
import { Category, Menu } from "@/types/menu";

export const useGetAllCategories = () => {
  const { setCategories, categories, setCategoriesName, categoriesName } = useMenuStore();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch("https://app-menu-go.onrender.com/api/menu", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "x-api-key": "13_singletest",
          },
        });
        const data: { menu: Menu } = await response.json();
        const categories = data.menu.Categories as Category[];
        console.log(categories);
        setCategories(categories);
        setCategoriesName(categories.map((category) => category.Name));
      } catch (err) {
        console.log(err);
      }
    };

    fetchCategories();
  }, [setCategories, setCategoriesName]);

  const updateOrder = async () => {
    const response = await fetch("https://app-menu-go.onrender.com/api/menu", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "x-api-key": "13_singletest",
      },
    });
    console.log("Order updated successfully");
  };

  return { categories, setCategories, updateOrder, categoriesName, setCategoriesName };
};
