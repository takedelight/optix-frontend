import { cn } from "@/shared/lib";

import type { ProjectStatusEnum } from "../model/schemas/project.schema";

import { STATUS_META } from "../model/const/const";

interface ProjectStatusBadgeProps {
  status: ProjectStatusEnum;
}

export const ProjectStatusBadge = ({ status }: ProjectStatusBadgeProps) => {
  const meta = STATUS_META[status];

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5  text-xs font-medium whitespace-nowrap",
        meta.text,
      )}
    >
      <span className={cn("size-1.5 animate-pulse rounded-full", meta.dot)} aria-hidden="true" />
      {meta.label}
    </span>
  );
};
