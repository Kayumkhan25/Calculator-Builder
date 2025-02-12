import { create } from "zustand";

const useCalculatorStore = create((set) => ({
  buttons: ["7", "8", "9", "+", "4", "5", "6", "-", "1", "2", "3", "*", "0", "/", "="],
  layout: [],
  history: [],
  darkMode: false,

  addButton: (button) =>
    set((state) => ({
      layout: [...state.layout, button],
      history: [...state.history, state.layout],
    })),

  removeButton: (index) =>
    set((state) => ({
      layout: state.layout.filter((_, i) => i !== index),
      history: [...state.history, state.layout],
    })),

  toggleDarkMode: () => set((state) => ({ darkMode: !state.darkMode })),

  undo: () => set((state) => state.history.length > 0 ? { layout: state.history.pop() } : {}),
}));
export default useCalculatorStore;
