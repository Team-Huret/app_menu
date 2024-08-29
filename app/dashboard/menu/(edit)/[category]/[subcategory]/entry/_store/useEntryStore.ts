import { create } from "zustand";
import { Option } from "@/types/menu";
import { Entry } from "@/types/menu";

// Define the shape of the store
interface UseEntryStore {
  error: string;
  setError: (value: string) => void;

  entryName: string;
  setEntryName: (value: string) => void;

  entryDescription: string;
  setEntryDescription: (value: string) => void;

  entryImage: File | null;
  setEntryImage: (value: File | null) => void;

  entryPrice: number;
  setEntryPrice: (value: number) => void;

  entryOptions: Option[] | [];
  setEntryOptions: (value: Option[]) => void;

  badge: string;
  setBadge: (value: string) => void;

  entryLabels: string[] | [];
  setEntryLabels: (value: string[]) => void;

  entryAllergies: string[] | [];
  setEntryAllergies: (value: string[]) => void;

  entryToEdit: Entry | null;
  setEntryToEdit: (value: Entry) => void;

  entryToEditName: string;
  setEntryToEditName: (value: string) => void;

  entryToEditId: number;
  setEntryToEditId: (value: number) => void;
}

// Create the zustand store
export const useEntryStore = create<UseEntryStore>((set) => ({
  error: "",
  setError: (value) => set({ error: value }),

  entryName: "",
  setEntryName: (value) => set({ entryName: value }),

  entryDescription: "",
  setEntryDescription: (value) => set({ entryDescription: value }),

  entryImage: null,
  setEntryImage: (value) => set({ entryImage: value }),

  entryPrice: 0,
  setEntryPrice: (value) => set({ entryPrice: value }),

  entryOptions: [],
  setEntryOptions: (value) => set({ entryOptions: value }),

  badge: "",
  setBadge: (value) => set({ badge: value }),

  entryLabels: [],
  setEntryLabels: (value) => set({ entryLabels: value }),

  entryAllergies: [],
  setEntryAllergies: (value) => set({ entryAllergies: value }),

  entryToEdit: null,
  setEntryToEdit: (value) => set({ entryToEdit: value }),

  entryToEditName: "",
  setEntryToEditName: (value) => set({ entryToEditName: value }),

  entryToEditId: 0,
  setEntryToEditId: (value) => set({ entryToEditId: value }),
}));
