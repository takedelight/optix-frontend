import { ProjectStatusBadge, type ProjectStatusEnum } from "@/entities/project";
import { dateFormatter } from "@/shared/lib";

interface ProjectCardFooterProps {
  updatedAt: string;
  status: ProjectStatusEnum;
}

export const ProjectCardFooter = ({ status, updatedAt }: ProjectCardFooterProps) => {
  return (
    <>
      <ProjectStatusBadge status={status} />
      <span className="text-xs text-muted-foreground">
        Updated {dateFormatter.format(new Date(updatedAt))}
      </span>
    </>
  );
};
