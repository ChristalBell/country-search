import { create } from "zustand";

export const useBearStore = create((set) => ({
  isDarkMode: false,
  toggleDarkMode: () => set((state) => ({ isDarkMode: !state.DarkMode })),
}));
