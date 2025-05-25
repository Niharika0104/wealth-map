import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { Property } from "@/Models/models";

interface PropertyStore {
  allProperties: Property[];
  lastFetched: number | null;
  getAllProperties: () => Property[];
  setAllProperties: (properties: Property[]) => void;
  getPropertyById: (id: string) => Property | undefined;
  isCacheValid: () => boolean;
}

const TEN_MINUTES = 10 * 60 * 1000;

const usePropertyStore = create<PropertyStore>()(
  persist(
    (set, get) => ({
      allProperties: [],
      lastFetched: null,
      getAllProperties: () => get().allProperties,
      setAllProperties: (allProperties) => set({ allProperties, lastFetched: Date.now() }),
      getPropertyById: (id: string) => get().allProperties.find(property => property.id === id),
      isCacheValid: () => {
        const last = get().lastFetched;
        return last !== null && Date.now() - last < TEN_MINUTES;
      }
    }),
    {
      name: "property-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default usePropertyStore;