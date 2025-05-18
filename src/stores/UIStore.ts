// store/ui-store.ts
import { create } from "zustand";

interface UIStore {
  isFilterDialogOpen: boolean;
  openFilterDialog: () => void;
  closeFilterDialog: () => void;
  setFilterDialogOpen: (value: boolean) => void;
}

export const useUIStore = create<UIStore>((set) => ({
  isFilterDialogOpen: false,
  openFilterDialog: () => set({ isFilterDialogOpen: true }),
  closeFilterDialog: () => set({ isFilterDialogOpen: false }),
  setFilterDialogOpen: (value) => set({ isFilterDialogOpen: value }),
}));
