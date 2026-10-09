import { ProjectProvider } from "@/entities/project";
import { ProjectGridEntry } from "@/widgets/project/grid";
import { ProjectToolbarEntry } from "@/widgets/project/toolbar";

export const ProjectsPage = () => {
  return (
    <ProjectProvider>
      <div className="flex flex-col gap-4">
        <ProjectToolbarEntry />
        <ProjectGridEntry />
      </div>
    </ProjectProvider>
  );
};
