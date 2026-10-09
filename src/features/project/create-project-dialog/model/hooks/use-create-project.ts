"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { createProjectSchema, type CreateProjectInput } from "../schemas/create-project.schema";

export const useCreateProject = () => {
  const form = useForm<CreateProjectInput>({
    resolver: zodResolver(createProjectSchema),
    defaultValues: {
      name: "",
      description: "",
      slug: "",
      color: "#ffffff",
    },
  });

  return { ...form };
};
