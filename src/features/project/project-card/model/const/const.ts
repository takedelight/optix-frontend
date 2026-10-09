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

export const PROJECTS: Project[] = [
  {
    id: "prj_optix-web",
    name: "Optix Website",
    slug: "optix-web",
    status: "active",
    region: "eu-central-1",
    ownerId: "usr_001",
    color: "#6366f1",
    storageGb: 12.4,
    transferGb: 84.1,
    requests: 1_240_000,
    updatedAt: "2026-10-06T14:32:00Z",
  },
  {
    id: "prj_media-cdn",
    name: "Media CDN",
    slug: "media-cdn",
    status: "active",
    region: "us-east-1",
    ownerId: "usr_001",
    color: "#0ea5e9",
    storageGb: 340.8,
    transferGb: 1_920.5,
    requests: 18_430_000,
    updatedAt: "2026-10-07T09:15:00Z",
  },
  {
    id: "prj_mobile-app",
    name: "Mobile App Assets",
    slug: "mobile-app",
    status: "building",
    region: "eu-central-1",
    ownerId: "usr_002",
    storageGb: 48.2,
    transferGb: 210.7,
    requests: 3_870_000,
    updatedAt: "2026-10-08T08:01:00Z",
  },
  {
    id: "prj_docs-portal",
    name: "Docs Portal",
    slug: "docs-portal",
    status: "active",
    region: "ap-southeast-1",
    ownerId: "usr_002",
    color: "#22c55e",
    storageGb: 4.9,
    transferGb: 32.3,
    requests: 640_000,
    updatedAt: "2026-10-04T17:48:00Z",
  },
  {
    id: "prj_legacy-blog",
    name: "Legacy Blog",
    slug: "legacy-blog",
    status: "error",
    region: "us-west-2",
    ownerId: "usr_003",
    storageGb: 1.2,
    transferGb: 8.6,
    requests: 42_000,
    updatedAt: "2026-09-29T11:20:00Z",
  },
  {
    id: "prj_staging",
    name: "Staging",
    slug: "staging",
    status: "building",
    region: "eu-central-1",
    ownerId: "usr_003",
    color: "#f59e0b",
    storageGb: 22.6,
    transferGb: 55.9,
    requests: 910_000,
    updatedAt: "2026-10-08T07:44:00Z",
  },
];
