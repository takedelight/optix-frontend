import { Skeleton } from "@/shared/ui";
import { ProjectGrid } from "@/widgets/project/grid";
import { ProjectToolbar } from "@/widgets/project/toolbar";

export default function ProjectsLoading() {
  return (
    <div className="flex flex-col gap-4">
      <ProjectToolbar>
        <ProjectToolbar.ProjectToolbarLeftSide>
          <Skeleton className="h-8 w-44" />
          <Skeleton className="mt-2 h-4 w-24" />
          loading
        </ProjectToolbar.ProjectToolbarLeftSide>
        <ProjectToolbar.ProjectToolbarRightSide>
          <Skeleton className="h-9 w-64" />
          <Skeleton className="h-9 w-28" />
          loading
        </ProjectToolbar.ProjectToolbarRightSide>
      </ProjectToolbar>

      <ProjectGrid.ProjectGridSkeleton />
    </div>
  );
}
