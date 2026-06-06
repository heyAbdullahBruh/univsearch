import { create } from "zustand";

const getInitialTheme = () => {
  if (typeof window !== "undefined") {
    const stored = localStorage.getItem("uni-explorer-theme");
    if (stored) return stored === "dark";

    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  }
  return false;
};

export const useThemeStore = create((set) => ({
  isDark: getInitialTheme(),

  toggleTheme: () => {
    set((state) => {
      const newDark = !state.isDark;
      localStorage.setItem("uni-explorer-theme", newDark ? "dark" : "light");

      if (newDark) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }

      return { isDark: newDark };
    });
  },

  init: () => {
    const isDark = getInitialTheme();
    if (isDark) {
      document.documentElement.classList.add("dark");
    }
  },
}));
