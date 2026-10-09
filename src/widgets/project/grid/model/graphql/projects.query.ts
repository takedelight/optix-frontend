import { gql, type TypedDocumentNode } from "@apollo/client";

import type { Project } from "@/features/project/project-card";

export interface ApiProject {
  id: string;
  name: string;
  description: string | null;
  slug: string | null;
  color: string | null;
  ownerId: string;
  /** ISO 8601 string */
  createdAt: string;
}

interface ProjectsQueryData {
  projects: ApiProject[];
}

export const PROJECTS_QUERY: TypedDocumentNode<ProjectsQueryData, Record<string, never>> = gql`
  query Projects {
    projects {
      id
      name
      description
      slug
      color
      ownerId
      createdAt
    }
  }
`;

export const toCardProject = (api: ApiProject): Project => ({
  id: api.id,
  name: api.name,
  slug: api.slug ?? api.id,
  color: api.color ?? undefined,
  ownerId: api.ownerId,
  status: "active",
  region: "-",
  storageGb: 0,
  transferGb: 0,
  requests: 0,
  updatedAt: api.createdAt,
});
