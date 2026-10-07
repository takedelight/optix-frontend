import { RiGoogleFill, RiGithubFill } from "@remixicon/react";

import type { AuthMethodItem } from "../types/types";

export const SOCIAL_ITEMS: AuthMethodItem[] = [
  {
    icon: RiGoogleFill,
    label: "Google",
    alias: "google",
  },
  {
    icon: RiGithubFill,
    label: "Github",
    alias: "github",
  },
];
