import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { Owner } from "@/Models/models";

interface OwnerStore {
  allOwners: Owner[];
  lastFetched: number | null;
  getAllOwners: () => Owner[];
  setAllOwners: (owners: Owner[]) => void;
  getOwnerById: (id: string) => Owner | undefined;
  isCacheValid: () => boolean;
}

const THREE_DAYS = 3* 24*60 * 60 * 1000;

const useOwnerStore = create<OwnerStore>()(
  persist(
    (set, get) => ({
      allOwners: [],
      lastFetched: null,
      getAllOwners: () => get().allOwners,
      setAllOwners: (allOwners) => set({ allOwners, lastFetched: Date.now() }),
      getOwnerById: (id: string) => get().allOwners.find(owner => owner.id === id),
      isCacheValid: () => {
        const last = get().lastFetched;
        return last !== null && Date.now() - last < THREE_DAYS;
      }
    }),
    {
      name: "owner-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useOwnerStore;