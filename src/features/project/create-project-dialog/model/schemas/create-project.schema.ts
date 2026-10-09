import { z } from "zod/v4";

import { projectSchema } from "@/entities/project";

export const createProjectSchema = projectSchema.pick({
  name: true,
  description: true,
  color: true,
  slug: true,
});

export type CreateProjectInput = z.infer<typeof createProjectSchema>;
