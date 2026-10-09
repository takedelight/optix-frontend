import { numberFormatter } from "@/shared/lib";

import type { Project } from "../model/const/const";

interface ProjectCardContentProps {
  project: Project;
}

export const ProjectCardContent = ({ project }: ProjectCardContentProps) => {
  return (
    <dl className="grid grid-cols-3 gap-2">
      <div>
        <dt className="text-xs text-muted-foreground">Storage</dt>
        <dd className="font-medium tabular-nums">{project.storageGb} GB</dd>
      </div>
      <div>
        <dt className="text-xs text-muted-foreground">Transfer</dt>
        <dd className="font-medium tabular-nums">{project.transferGb} GB</dd>
      </div>
      <div>
        <dt className="text-xs text-muted-foreground">Requests</dt>
        <dd className="font-medium tabular-nums">{numberFormatter.format(project.requests)}</dd>
      </div>
    </dl>
  );
};
