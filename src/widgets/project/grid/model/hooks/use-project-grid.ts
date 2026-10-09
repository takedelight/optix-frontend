import { useProjects } from "@/entities/project";

export const useProjectGrid = () => {
  const { projects, loading, error } = useProjects();

  return { projects, loading, error };
};
