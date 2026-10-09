import { useProjects } from "@/entities/project";

export const useProjectGrid = () => {
  const { projects } = useProjects();

  return { projects };
};
