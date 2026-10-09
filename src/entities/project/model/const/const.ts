import type { ProjectStatusEnum } from "../schemas/project.schema";

export const STATUS_META: Record<ProjectStatusEnum, { label: string; dot: string; text: string }> =
  {
    active: {
      label: "Active",
      dot: "bg-emerald-500",
      text: "text-emerald-600 dark:text-emerald-400",
    },
    building: {
      label: "Building",
      dot: "bg-amber-500",
      text: "text-amber-600 dark:text-amber-400",
    },
    error: {
      label: "Error",
      dot: "bg-red-500",
      text: "text-red-600 dark:text-red-400",
    },
  };
