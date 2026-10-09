import type { PropsWithChildren } from "react";

import { Skeleton } from "@/shared/ui";

const ProjectGridRoot = ({ children }: PropsWithChildren) => {
  return <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">{children}</div>;
};

const ProjectGridEmpty = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-1 rounded-xl border border-dashed py-16 text-center">
      <p className="font-medium">No projects found</p>
      <p className="text-sm text-muted-foreground">Nothing matches . Try another search.</p>
    </div>
  );
};

const ProjectGridSkeleton = () => {
  return (
    <ProjectGridRoot>
      {["p1", "p2", "p3", "p4", "p5", "p6"].map((id) => (
        <Skeleton key={id} className="h-56 rounded-xl" />
      ))}
    </ProjectGridRoot>
  );
};

const ProjectGridError = ({ message }: { message?: string }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-1 rounded-xl border border-dashed py-16 text-center">
      <p className="font-medium">Failed to load projects</p>
      <p className="text-sm text-muted-foreground">{message ?? "Something went wrong"}</p>
    </div>
  );
};

export const ProjectGrid = Object.assign(ProjectGridRoot, {
  ProjectGridEmpty,
  ProjectGridSkeleton,
  ProjectGridError,
});
