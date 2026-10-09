import { gql, type TypedDocumentNode } from "@apollo/client";

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
