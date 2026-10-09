import type { ApiProject } from "@/entities/project";

import { ProjectCard } from "./ProjectCard";
import { ProjectCardContent } from "./ProjectCardContent";
import { ProjectCardFooter } from "./ProjectCardFooter";
import { ProjectCardHeader } from "./ProjectCardHeader";

interface ProjectCardProps {
  project: ApiProject;
}

export const ProjectCardEntry = ({ project }: ProjectCardProps) => {
  return (
    <ProjectCard>
      <ProjectCard.Header>
        <ProjectCardHeader project={project} />
      </ProjectCard.Header>

      <ProjectCard.Content>
        <ProjectCardContent />
      </ProjectCard.Content>

      <ProjectCard.Footer>
        <ProjectCardFooter status="active" updatedAt={project.createdAt} />
      </ProjectCard.Footer>
    </ProjectCard>
  );
};
