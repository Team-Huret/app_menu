import { create } from "zustand";
import { Subcategory } from "@/types/menu";
import { SetStateAction } from "react";

// Define the shape of the store
interface UseCategoryStore {
  categoryId: number | null;
  setCategoryId: (value: number) => void;

  categoryName: string;
  setCategoryName: (value: string) => void;

  subcategories: Subcategory[] | [];
  setSubcategories: (value: SetStateAction<Subcategory[]>) => void;

  subcategoriesName: string[] | [];
  setSubcategoriesName: (value: SetStateAction<string[]>) => void;
}

// Create the zustand store
export const useCategoryStore = create<UseCategoryStore>((set) => ({
  categoryId: null,
  setCategoryId: (value) => set({ categoryId: value }),

  categoryName: "",
  setCategoryName: (value) => set({ categoryName: value }),

  subcategories: [],
  setSubcategories: (value: SetStateAction<Subcategory[]>) =>
    set((state) => ({
      subcategories: typeof value === "function" ? value(state.subcategories) : value,
    })),

  subcategoriesName: [],
  setSubcategoriesName: (value: SetStateAction<string[]>) =>
    set((state) => ({
      subcategoriesName: typeof value === "function" ? value(state.subcategoriesName) : value,
    })),
}));
