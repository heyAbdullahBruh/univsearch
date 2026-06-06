import { useEffect } from "react";
import { useThemeStore } from "@/store/themeStore";

export const useTheme = () => {
  const { isDark, toggleTheme, init } = useThemeStore();

  useEffect(() => {
    init();
  }, [init]);

  return { isDark, toggleTheme };
};
