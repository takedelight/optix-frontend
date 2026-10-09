"use client";

import { useMutation } from "@apollo/client/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { toast } from "@/shared/ui";

import { createProjectMutation } from "../graphql/create-project.mutation";
import { createProjectSchema, type CreateProjectInput } from "../schemas/create-project.schema";

interface UseCreateProjectOptions {
  onSuccess?: () => void;
}

export const useCreateProject = ({ onSuccess }: UseCreateProjectOptions = {}) => {
  const form = useForm<CreateProjectInput>({
    resolver: zodResolver(createProjectSchema),
    defaultValues: {
      name: "",
      description: "",
      slug: "",
      color: "#000",
    },
  });

  const [createProject, { loading }] = useMutation(createProjectMutation);

  const onSubmit = form.handleSubmit(async (values) => {
    try {
      await createProject({
        variables: { input: values },
        refetchQueries: ["Projects"],
      });
      toast.add({
        type: "success",
        title: "Project created",
        description: `"${values.name}" has been created`,
      });
      form.reset();
      onSuccess?.();
    } catch (error) {
      toast.add({
        title: "Failed to create project",
        description: error instanceof Error ? error.message : "Something went wrong",
        priority: "high",
      });
    }
  });

  return { ...form, onSubmit, loading };
};
