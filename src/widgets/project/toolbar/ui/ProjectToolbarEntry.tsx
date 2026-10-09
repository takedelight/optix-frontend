import { CreateProjectDialogEntry } from "@/features/project/create-project-dialog";
import { ProjectSearchBarEntry } from "@/features/project/project-search-bar";

import { ProjectToolbar } from "./ProjectToolbar";

export const ProjectToolbarEntry = () => {
  return (
    <ProjectToolbar>
      <ProjectToolbar.ProjectToolbarLeftSide>
        <h1 className="font-heading text-xl font-semibold">All Projects</h1>
        <p className="text-sm text-muted-foreground">1 projects</p>
      </ProjectToolbar.ProjectToolbarLeftSide>
      <ProjectToolbar.ProjectToolbarRightSide>
        <ProjectSearchBarEntry />
        <CreateProjectDialogEntry />
      </ProjectToolbar.ProjectToolbarRightSide>
    </ProjectToolbar>
  );
};
