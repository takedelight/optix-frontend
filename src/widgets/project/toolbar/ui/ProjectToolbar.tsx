import type { PropsWithChildren } from "react";

const ProjectToolbarRoot = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      {children}
    </div>
  );
};

const ProjectToolbarLeftSide = ({ children }: PropsWithChildren) => {
  return <div>{children}</div>;
};

const ProjectToolbarRightSide = ({ children }: PropsWithChildren) => {
  return <div className="flex items-center gap-2">{children}</div>;
};

export const ProjectToolbar = Object.assign(ProjectToolbarRoot, {
  ProjectToolbarLeftSide,
  ProjectToolbarRightSide,
});
