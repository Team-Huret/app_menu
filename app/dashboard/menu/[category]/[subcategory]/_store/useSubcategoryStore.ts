import { create } from "zustand";
import { Category, Subcategory } from "@/types/menu";
import { SetStateAction } from "react";

// Define the shape of the store
interface UseMenuStore {
  categories: Category[] | [];
  setCategories: (value: SetStateAction<Category[]>) => void;

  categoriesName: string[] | [];
  setCategoriesName: (value: SetStateAction<string[]>) => void;

  subcategories: Subcategory[] | [];
  setSubcategories: (value: SetStateAction<Subcategory[]>) => void;

  subcategoriesName: string[] | [];
  setSubcategoriesName: (value: SetStateAction<string[]>) => void;

  entryName: string;
  setEntryName: (value: string) => void;

  entryDescription: string;
  setEntryDescription: (value: string) => void;

  entryImage: string;
  setEntryImage: (value: string) => void;

  entryPrice: number;
  setEntryPrice: (value: number) => void;

  entryOptions: entryOption[] | [];
  setEntryOptions: (value: entryOption[]) => void;

  entryLabels: string[] | [];
  setEntryLabels: (value: string[]) => void;

  entryAllergies: string[] | [];
  setEntryAllergies: (value: string[]) => void;
}
interface entryOption {
  name: string;
  price: number;
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

  entryName: "",
  setEntryName: (value) => set({ entryName: value }),

  entryDescription: "",
  setEntryDescription: (value) => set({ entryDescription: value }),

  entryImage: "",
  setEntryImage: (value) => set({ entryImage: value }),

  entryPrice: 0,
  setEntryPrice: (value) => set({ entryPrice: value }),

  entryOptions: [],
  setEntryOptions: (value) => set({ entryOptions: value }),

  entryLabels: [],
  setEntryLabels: (value) => set({ entryLabels: value }),

  entryAllergies: [],
  setEntryAllergies: (value) => set({ entryAllergies: value }),
}));
