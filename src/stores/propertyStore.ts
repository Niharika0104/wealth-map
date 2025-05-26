import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { Property } from "@/Models/models";

interface PropertyCacheEntry {
  data: Property;
  timestamp: number;
}

interface PropertyStore {
  propertyCache: Record<string, PropertyCacheEntry>;
  setPropertyCache: (id: string, data: Property) => void;
  getPropertyFromCache: (id: string) => Property | null;
  isPropertyCacheValid: (id: string, ttl?: number) => boolean;
  allProperties: Property[];
  lastFetched: number | null;
  getAllProperties: () => Property[];
  setAllProperties: (properties: Property[]) => void;
  getPropertyById: (id: string) => Property | undefined;
  isCacheValid: () => boolean;
}

const TEN_MINUTES = 10 * 60 * 1000;
const THREE_DAYS = 3 * 24 * 60 * 60 * 1000;

const usePropertyStore = create<PropertyStore>()(
  persist(
    (set, get) => ({
      propertyCache: {},
      setPropertyCache: (id, data) => set(state => ({
        propertyCache: {
          ...state.propertyCache,
          [id]: { data, timestamp: Date.now() }
        }
      })),
      getPropertyFromCache: (id) => {
        const entry = get().propertyCache[id];
        return entry ? entry.data : null;
      },
      isPropertyCacheValid: (id, ttl = THREE_DAYS) => {
        const entry = get().propertyCache[id];
        return !!entry && (Date.now() - entry.timestamp < ttl);
      },
      allProperties: [],
      lastFetched: null,
      getAllProperties: () => get().allProperties,
      setAllProperties: (allProperties) => set({ allProperties, lastFetched: Date.now() }),
      getPropertyById: (id: string) => get().allProperties.find(property => property.id === id),
      isCacheValid: () => {
        const last = get().lastFetched;
        return last !== null && Date.now() - last < THREE_DAYS;
      }
    }),
    {
      name: "property-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default usePropertyStore;