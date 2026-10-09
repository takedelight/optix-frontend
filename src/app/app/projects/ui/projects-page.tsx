import { ProjectGridEntry } from "@/widgets/project/grid";
import { ProjectToolbarEntry } from "@/widgets/project/toolbar";

export const ProjectsPage = () => {
  return (
    <div className="flex flex-col gap-4">
      <ProjectToolbarEntry />
      <ProjectGridEntry />
    </div>
  );
};
