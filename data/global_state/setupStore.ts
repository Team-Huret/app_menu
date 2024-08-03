import { create } from "zustand";

// Define the shape of the global state
interface AppState {
  dialogCounter: number;
  increaseDialogCounter: () => void;
  resetDialogCounter: () => void;
  countryValue: string;
  setCountryValue: (value: string) => void;
  languageValue: string;
  setLanguageValue: (value: string) => void;
  businessTypeValue: string;
  setBusinessTypeValue: (value: string) => void;
  businessName: string;
  setBusinessName: (value: string) => void;
  currencyValue: string;
  setCurrencyValue: (value: string) => void;
  ownership: boolean;
  toggleOwnership: () => void;
  featureList: string[];
  pushFeature: (value: string) => void;
  removeFeature: (value: string) => void;
  resetFeatureList: () => void;
}

// Create the zustand store
export const setupStore = create<AppState>((set) => ({
  dialogCounter: 0,
  increaseDialogCounter: () => set((state) => ({ dialogCounter: state.dialogCounter + 1 })),
  resetDialogCounter: () => set({ dialogCounter: 1 }),
  countryValue: "",
  setCountryValue: (value) => set({ countryValue: value }),
  languageValue: "",
  setLanguageValue: (value) => set({ languageValue: value }),
  businessTypeValue: "",
  setBusinessTypeValue: (value) => set({ businessTypeValue: value }),
  businessName: "",
  setBusinessName: (value) => set({ businessName: value }),
  currencyValue: "",
  setCurrencyValue: (value) => set({ currencyValue: value }),
  ownership: true,
  toggleOwnership: () => set((state) => ({ ownership: !state.ownership })),
  featureList: [],
  pushFeature: (value) => set((state) => ({ featureList: [...state.featureList, value] })),
  removeFeature: (value) => set((state) => ({ featureList: state.featureList.filter((feature) => feature !== value) })),
  resetFeatureList: () => set({ featureList: [] }),
}));
