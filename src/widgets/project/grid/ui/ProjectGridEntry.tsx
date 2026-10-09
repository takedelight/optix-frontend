"use client";

import { useQuery } from "@apollo/client/react";

import { ProjectCardEntry } from "@/features/project/project-card";
import { Show } from "@/shared/ui";

import { PROJECTS_QUERY, toCardProject } from "../model/graphql/projects.query";
import { ProjectGrid } from "./ProjectGrid";

export const ProjectGridEntry = () => {
  const { data, loading, error } = useQuery(PROJECTS_QUERY);

  if (loading) return <ProjectGrid.ProjectGridSkeleton />;
  if (error) return <ProjectGrid.ProjectGridError message={error.message} />;

  const projects = (data?.projects ?? []).map(toCardProject);

  return (
    <Show when={projects.length > 0} fallback={<ProjectGrid.ProjectGridEmpty />}>
      <ProjectGrid>
        {projects.map((project) => (
          <ProjectCardEntry key={project.id} project={project} />
        ))}
      </ProjectGrid>
    </Show>
  );
};
