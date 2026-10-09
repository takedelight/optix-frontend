"use client";

import { createContext } from "react";

import type { ApiProject } from "./graphql/projects.query";

export interface ProjectContextValue {
  projects: ApiProject[];
}

export const ProjectContext = createContext<ProjectContextValue | null>(null);
