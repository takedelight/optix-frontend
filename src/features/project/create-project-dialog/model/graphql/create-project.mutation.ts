import { gql, type TypedDocumentNode } from "@apollo/client";

import type { CreateProjectInput } from "../schemas/create-project.schema";

interface CreateProjectMutationData {
  createProject: {
    id: string;
    name: string;
    description: string | null;
    slug: string | null;
    color: string | null;
    ownerId: string;
    /** ISO 8601 string */
    createdAt: string;
  };
}

interface CreateProjectMutationVariables {
  input: CreateProjectInput;
}

export const createProjectMutation: TypedDocumentNode<
  CreateProjectMutationData,
  CreateProjectMutationVariables
> = gql`
  mutation CreateProject($input: CreateProjectInput!) {
    createProject(input: $input) {
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
