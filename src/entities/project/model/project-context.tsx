"use client";

import { createContext } from "react";

import type { ApiProject } from "./graphql/projects.query";

export interface ProjectContextValue {
  projects: ApiProject[];
  loading: boolean;
  error: string | null;
}

export const ProjectContext = createContext<ProjectContextValue | null>(null);
