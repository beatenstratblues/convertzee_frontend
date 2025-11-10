import { create } from "zustand";

export const useConversionStore = create((set) => ({
  isConverting: false,
  convertedImageUrl: null,
  startConversion: () => set({ isConverting: true }),
  stopConversion: () => set({ isConverting: false }),
  setConvertedImageUrl: (url) => set({ convertedImageUrl: url }),
  clearConvertedImageUrl: () => set({ convertedImageUrl: null })
}));
