import { useEffect } from "react";
import { useState } from "react";
import { useMenuStore } from "@/app/dashboard/menu/_store/useMenuStore";
import categoriesMock from "@/mock/categories.json";
import { Category } from "@/types/menu";

export const useGetCategories = () => {
  const { setCategories, categories, setCategoriesName, categoriesName } = useMenuStore();

  useEffect(() => {
    setCategories(categoriesMock.menu as Category[]);
    setCategoriesName(categoriesMock.menu.map((category) => category.name));
  }, []);

  const updateOrder = () => {
    console.log("Order updated successfully");
  };

  return { categories, setCategories, updateOrder, categoriesName, setCategoriesName };
};
