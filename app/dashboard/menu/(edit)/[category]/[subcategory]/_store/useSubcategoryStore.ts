import { create } from "zustand";
import { SetStateAction } from "react";
import { Entry, Option } from "@/types/menu";

// Define the shape of the store
interface UseSubcategoryStore {
  subcategoryName: string;
  setSubcategoryName: (value: string) => void;

  subcategoryId: number | null;
  setSubcategoryId: (value: number) => void;

  entries: Entry[] | [];
  setEntries: (value: SetStateAction<Entry[]>) => void;

  entriesName: string[] | [];
  setEntriesName: (value: SetStateAction<string[]>) => void;

  entryName: string;
  setEntryName: (value: string) => void;

  entryDescription: string;
  setEntryDescription: (value: string) => void;

  entryImage: string;
  setEntryImage: (value: string) => void;

  entryPrice: number;
  setEntryPrice: (value: number) => void;

  entryOptions: Option[] | [];
  setEntryOptions: (value: Option[]) => void;

  entryLabels: string[] | [];
  setEntryLabels: (value: string[]) => void;

  entryAllergies: string[] | [];
  setEntryAllergies: (value: string[]) => void;
}

// Create the zustand store
export const useSubcategoryStore = create<UseSubcategoryStore>((set) => ({
  subcategoryName: "",
  setSubcategoryName: (value) => set({ subcategoryName: value }),

  subcategoryId: null,
  setSubcategoryId: (value) => set({ subcategoryId: value }),

  entries: [],
  setEntries: (value: SetStateAction<Entry[]>) =>
    set((state) => ({
      entries: typeof value === "function" ? value(state.entries) : value,
    })),

  entriesName: [],
  setEntriesName: (value: SetStateAction<string[]>) =>
    set((state) => ({
      entriesName: typeof value === "function" ? value(state.entriesName) : value,
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
