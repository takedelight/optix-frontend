"use client";

import { useContext } from "react";

import { ProjectContext, type ProjectContextValue } from "../project-context";

export const useProjects = (): ProjectContextValue => {
  const ctx = useContext(ProjectContext);
  if (!ctx) throw new Error("useProjects must be used within ProjectProvider");
  return ctx;
};
