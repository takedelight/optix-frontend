"use client";

import { RiMoonLine, RiSunLine } from "@remixicon/react";

import { Button } from "@/shared/ui";

import { useThemeToggle } from "../model/hooks/use-theme-toggle";

export const ThemeToggleEntry = () => {
  const { toggleTheme } = useThemeToggle();

  return (
    <Button
      onClick={toggleTheme}
      variant="ghost"
      size="icon"
      className="relative size-8"
      aria-label="Toggle theme"
    >
      <RiSunLine className="size-4 scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
      <RiMoonLine className="absolute size-4 scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
    </Button>
  );
};
