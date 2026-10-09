"use client";

import { ProjectCardEntry } from "@/features/project/project-card";
import { Show } from "@/shared/ui";

import { useProjectGrid } from "../model/hooks/use-project-grid";
import { ProjectGrid } from "./ProjectGrid";

export const ProjectGridEntry = () => {
  const { projects, loading, error } = useProjectGrid();

  if (loading) return <ProjectGrid.ProjectGridSkeleton />;
  if (error) return <ProjectGrid.ProjectGridError message={error} />;

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
