import { RiMoreLine } from "@remixicon/react";
import { cn } from "cn";
import Link from "next/link";

import { getInitials } from "@/entities/user";
import {
  CardTitle,
  CardDescription,
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  Avatar,
  AvatarFallback,
  Button,
} from "@/shared/ui";

import type { Project } from "../model/const/const";

interface ProjectCardProps {
  project: Project;
}

export const ProjectCardHeader = ({ project }: ProjectCardProps) => {
  const projectPath = `/app/project/${project.slug ? project.slug : project.id}`;

  return (
    <div className="flex items-start justify-between gap-2">
      <div className="flex items-center gap-4">
        <Avatar size="lg">
          <AvatarFallback
            style={project.color ? { backgroundColor: project.color } : undefined}
            className={cn(project.color && "text-white")}
          >
            {getInitials(project.name)}
          </AvatarFallback>
        </Avatar>
        <div>
          <CardTitle>
            {project.name} <span className="text-muted-foreground">({project.slug})</span>
          </CardTitle>
          <CardDescription>Lorem ipsum dolor sit amet, consectetur adipisicing.</CardDescription>
        </div>
      </div>

      <DropdownMenu>
        <DropdownMenuTrigger
          render={<Button variant="ghost" size="icon-sm" aria-label="Project actions" />}
        >
          <RiMoreLine />
        </DropdownMenuTrigger>

        <DropdownMenuContent align="end">
          <DropdownMenuItem render={<Link href={projectPath}>Open</Link>} />
          <DropdownMenuItem render={<Link href={`${projectPath}/settings`}>Settings</Link>} />
          <DropdownMenuSeparator />
          <DropdownMenuItem variant="destructive">Delete</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
