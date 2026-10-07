"use client";

import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";
import { useCallback } from "react";

import { signOut, useSession } from "@/shared/auth";

export const useUserDropdown = () => {
  const router = useRouter();
  const { data, isPending } = useSession();
  const { resolvedTheme, setTheme } = useTheme();

  const isDark = resolvedTheme === "dark";

  const toggleTheme = useCallback(() => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  }, [resolvedTheme, setTheme]);

  const handleSignOut = useCallback(async () => {
    await signOut();
    router.push("/");
  }, [router]);

  return {
    user: data?.user,
    isPending,
    isDark,
    toggleTheme,
    handleSignOut,
  };
};
