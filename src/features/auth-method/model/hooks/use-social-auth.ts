// shared/auth/model/hooks/use-social-auth.ts
import { useState } from "react";

import { authClient } from "@/shared/auth";
import { APP_URL } from "@/shared/const";
import { toast } from "@/shared/ui";

import type { SocialProvider } from "../types/types";

export const useSocialAuth = () => {
  const [isLoading, setIsLoading] = useState(false);

  const login = async (provider: SocialProvider) => {
    setIsLoading(true);

    try {
      const { error } = await authClient.signIn.social({
        provider,
        callbackURL: APP_URL,
      });

      if (error) {
        toast.add({
          title: "Sign-in Error",
          description: error.message || `Failed to sign in with ${provider}`,
          priority: "high",
        });
        return { ok: false };
      }

      return { ok: true };
    } catch {
      toast.add({
        title: "Network Error",
        description: "Failed to connect to the authentication server",
      });
      return { ok: false };
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    login,
  };
};
