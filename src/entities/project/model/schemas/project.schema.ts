import { z } from "zod/v4";

const projectStatus = z.enum(["error", "building", "active"]);

export const projectSchema = z.object({
  id: z.uuid(),
  name: z
    .string({ error: "Project name is required" })
    .min(4, { error: "Project name must be at least 4 characters" }),
  description: z.string().nullish(),
  slug: z.string().nullish(),
  color: z.string().nullish(),
  status: projectStatus,
  ownerId: z.uuid({ error: "Owner id must be a UUID" }),
  createdAt: z.coerce.date({ error: "createdAt must be a valid date" }),
});

export type Project = z.infer<typeof projectSchema>;
export type ProjectStatusEnum = z.infer<typeof projectStatus>;
