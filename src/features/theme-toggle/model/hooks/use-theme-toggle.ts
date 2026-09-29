import { useTheme } from "next-themes";

export const useThemeToggle = () => {
  const { setTheme, theme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return {
    theme,
    toggleTheme,
  };
};
