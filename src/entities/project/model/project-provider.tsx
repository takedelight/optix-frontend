"use client";

import type { PropsWithChildren } from "react";

import { useQuery } from "@apollo/client/react";

import { PROJECTS_QUERY } from "./graphql/projects.query";
import { ProjectContext } from "./project-context";

export const ProjectProvider = ({ children }: PropsWithChildren) => {
  const { data, loading, error } = useQuery(PROJECTS_QUERY);

  return (
    <ProjectContext.Provider
      value={{
        projects: data?.projects ?? [],
        loading,
        error: error ? error.message : null,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
};
