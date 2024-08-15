import { BusinessDoc } from "@/firebase/types/business";
import { User } from "firebase/auth";

import { create } from "zustand";

// Define the shape of the global state
interface GlobalStore {
  dialogCounter: number;
  increaseDialogCounter: () => void;
  resetDialogCounter: () => void;

  businessTypeValue: string;
  setBusinessTypeValue: (value: string) => void;

  businessName: string;
  setBusinessName: (value: string) => void;

  featureList: string[];
  pushFeature: (value: string) => void;
  removeFeature: (value: string) => void;
  resetFeatureList: () => void;

  userDoc: User | null;
  setUserDoc: (value: User) => void;

  businessDoc: BusinessDoc | null;
  setBusinessDoc: (value: BusinessDoc) => void;
}

// Create the zustand store
export const globalStore = create<GlobalStore>((set) => ({
  userDoc: null,
  setUserDoc: (value) => set({ userDoc: value }),

  businessDoc: null,
  setBusinessDoc: (value) => set({ businessDoc: value }),

  dialogCounter: 0,
  increaseDialogCounter: () => set((state) => ({ dialogCounter: state.dialogCounter + 1 })),
  resetDialogCounter: () => set({ dialogCounter: 1 }),

  businessTypeValue: "",
  setBusinessTypeValue: (value) => set({ businessTypeValue: value }),

  businessName: "",
  setBusinessName: (value) => set({ businessName: value }),

  featureList: [],
  pushFeature: (value) => set((state) => ({ featureList: [...state.featureList, value] })),
  removeFeature: (value) => set((state) => ({ featureList: state.featureList.filter((feature) => feature !== value) })),
  resetFeatureList: () => set({ featureList: [] }),
}));
