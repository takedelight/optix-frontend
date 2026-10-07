import type { RemixiconComponentType } from "@remixicon/react";

export type SocialProvider = "github" | "google";

export interface AuthMethodItem {
  icon: RemixiconComponentType;
  label: string;
  alias: SocialProvider;
}
