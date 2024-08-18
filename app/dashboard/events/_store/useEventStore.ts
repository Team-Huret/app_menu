import { create } from "zustand";
import { Event } from "@/types/event";

// Define the shape of the store
interface EventStore {
  events: Event[];
  setEvents: (value: Event[]) => void;
}

// Create the zustand store
export const useEventStore = create<EventStore>((set) => ({
  events: [],
  setEvents: (value) => set({ events: value }),
}));
