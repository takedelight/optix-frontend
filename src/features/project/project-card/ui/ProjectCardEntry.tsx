import type { Project } from "@/features/project/project-card/model/const/const";

import { ProjectCard } from "./ProjectCard";
import { ProjectCardContent } from "./ProjectCardContent";
import { ProjectCardFooter } from "./ProjectCardFooter";
import { ProjectCardHeader } from "./ProjectCardHeader";

interface ProjectCardProps {
  project: Project;
}

export const ProjectCardEntry = ({ project }: ProjectCardProps) => {
  return (
    <ProjectCard>
      <ProjectCard.Header>
        <ProjectCardHeader project={project} />
      </ProjectCard.Header>

      <ProjectCard.Content>
        <ProjectCardContent project={project} />
      </ProjectCard.Content>

      <ProjectCard.Footer>
        <ProjectCardFooter {...project} />
      </ProjectCard.Footer>
    </ProjectCard>
  );
};
