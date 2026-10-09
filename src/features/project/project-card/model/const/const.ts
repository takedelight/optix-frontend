import type { ProjectStatusEnum } from "@/entities/project";

export interface Project {
  id: string;
  name: string;
  slug: string;
  status: ProjectStatusEnum;
  region: string;
  ownerId: string;
  color?: string;
  storageGb: number;
  transferGb: number;
  requests: number;
  updatedAt: string;
}
