import { z } from "zod";

import type { authClient } from "@/shared/auth";

export type User = typeof authClient.$Infer.Session.user;

export const userSchema: z.ZodType<User> = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string().email(),
  emailVerified: z.boolean(),
  image: z.string().nullable().optional(),
  createdAt: z.date(),
  updatedAt: z.date(),
});
