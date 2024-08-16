import { create } from "zustand";

// Define the shape of the store
interface UseMenuStore {
  categoriesList: any[] | [];
  setCategoriesList: (value: any[]) => void;

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
  categoriesList: [],
  setCategoriesList: (value) => set({ categoriesList: value }),

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
