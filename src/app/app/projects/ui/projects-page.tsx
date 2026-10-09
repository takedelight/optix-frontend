"use client";

import { useState } from "react";

import { ProjectCardEntry, PROJECTS, type Project } from "@/features/project/project-card";
import { Show } from "@/shared/ui";
import { ProjectToolbarEntry } from "@/widgets/project/toolbar";

export const ProjectsPage = () => {
  const [allProjects] = useState<Project[]>(PROJECTS);

  return (
    <div className="flex flex-col gap-4">
      <ProjectToolbarEntry />

      <Show
        when={allProjects.length > 0}
        fallback={
          <div className="flex flex-col items-center justify-center gap-1 rounded-xl border border-dashed py-16 text-center">
            <p className="font-medium">No projects found</p>
            <p className="text-sm text-muted-foreground">Nothing matches . Try another search.</p>
          </div>
        }
      >
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {allProjects.map((project) => (
            <ProjectCardEntry key={project.id} project={project} />
          ))}
        </div>
      </Show>

      {/*<CreateProjectDialog
        open={isCreateOpen}
        onOpenChange={setIsCreateOpen}
        onCreate={handleCreate}
      />*/}
    </div>
  );
};
