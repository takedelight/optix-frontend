"use client";

import type { PropsWithChildren } from "react";

import { useSuspenseQuery } from "@apollo/client/react";

import { PROJECTS_QUERY } from "./graphql/projects.query";
import { ProjectContext } from "./project-context";

export const ProjectProvider = ({ children }: PropsWithChildren) => {
  const { data } = useSuspenseQuery(PROJECTS_QUERY);

  return (
    <ProjectContext.Provider value={{ projects: data.projects }}>
      {children}
    </ProjectContext.Provider>
  );
};
