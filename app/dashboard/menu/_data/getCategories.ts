import { useEffect } from "react";
import { useMenuStore } from "@/app/dashboard/menu/_store/useMenuStore";
import { Category, Menu } from "@/types/menu";
import { useState } from "react";

export const useGetCategories = () => {
  const { setCategories, setCategoriesName } = useMenuStore();
  const [isLoading, setIsLoading] = useState(true);

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
        const sortedByOrder = categories.sort((a, b) => (a.Order ?? 0) - (b.Order ?? 0));
        setCategories(sortedByOrder);
        setCategoriesName(sortedByOrder.map((category) => category.Name));
        setIsLoading(false);
      } catch (err) {
        console.log(err);
      }
    };

    fetchCategories();
  }, []);

  return { isLoading };
};
