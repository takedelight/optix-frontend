import type { Metadata } from "next";

import { ProjectsPage } from "./projects/ui/projects-page";

export const metadata: Metadata = {
  title: "All Projects",
};

export default function ProjectsRoute() {
  return <ProjectsPage />;
}
