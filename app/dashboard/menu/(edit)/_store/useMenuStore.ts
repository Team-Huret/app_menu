import { create } from "zustand";
import { Category } from "@/types/menu";
import { SetStateAction } from "react";

// Define the shape of the store
interface UseMenuStore {
  categories: Category[] | [];
  setCategories: (value: SetStateAction<Category[]>) => void;

  categoriesName: string[] | [];
  setCategoriesName: (value: SetStateAction<string[]>) => void;
}
// Create the zustand store
export const useMenuStore = create<UseMenuStore>((set) => ({
  categories: [],
  setCategories: (value: SetStateAction<Category[]>) =>
    set((state) => ({
      categories: typeof value === "function" ? value(state.categories) : value,
    })),

  categoriesName: [],
  setCategoriesName: (value: SetStateAction<string[]>) =>
    set((state) => ({
      categoriesName: typeof value === "function" ? value(state.categoriesName) : value,
    })),
}));
