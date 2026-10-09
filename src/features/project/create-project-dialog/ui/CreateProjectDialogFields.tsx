import { Controller, type Control, type FieldErrors } from "react-hook-form";

import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  Input,
  Textarea,
} from "@/shared/ui";

import type { CreateProjectInput } from "../model/schemas/create-project.schema";

interface CreateProjectDialogFieldsProps {
  control: Control<CreateProjectInput>;
  errors: FieldErrors<CreateProjectInput>;
}

export const CreateProjectDialogFields = ({ control, errors }: CreateProjectDialogFieldsProps) => {
  return (
    <FieldGroup>
      <Controller
        control={control}
        name="name"
        render={({ field }) => (
          <Field data-invalid={!!errors.name}>
            <FieldLabel htmlFor="project-name">Name</FieldLabel>
            <Input id="project-name" placeholder="Optix" aria-invalid={!!errors.name} {...field} />
            <FieldError>{errors.name?.message}</FieldError>
          </Field>
        )}
      />

      <Controller
        control={control}
        name="description"
        render={({ field }) => (
          <Field data-invalid={!!errors.description}>
            <FieldLabel htmlFor="project-description">Description</FieldLabel>
            <Textarea
              id="project-description"
              placeholder="What is this project for?"
              aria-invalid={!!errors.description}
              {...field}
              value={field.value ?? ""}
            />
            <FieldError>{errors.description?.message}</FieldError>
          </Field>
        )}
      />

      <Controller
        control={control}
        name="slug"
        render={({ field }) => (
          <Field data-invalid={!!errors.slug}>
            <FieldLabel htmlFor="project-slug">Slug</FieldLabel>
            <Input
              id="project-slug"
              placeholder="optix"
              aria-invalid={!!errors.slug}
              {...field}
              value={field.value ?? ""}
            />
            {errors.slug ? (
              <FieldError>{errors.slug.message}</FieldError>
            ) : (
              <FieldDescription>
                Lowercase letters, numbers and single dashes. Generated from the name when left
                empty.
              </FieldDescription>
            )}
          </Field>
        )}
      />

      <Controller
        control={control}
        name="color"
        render={({ field }) => (
          <Field data-invalid={!!errors.color}>
            <FieldLabel htmlFor="project-color">Color</FieldLabel>
            <div className="flex items-center gap-2">
              <input
                id="project-color"
                type="color"
                aria-invalid={!!errors.color}
                className="size-8 cursor-pointer rounded-lg border border-input bg-transparent p-0.5"
                {...field}
                value={field.value ?? ""}
              />
              <span className="text-sm text-muted-foreground tabular-nums">
                {field.value ?? "—"}
              </span>
            </div>
            <FieldError>{errors.color?.message}</FieldError>
          </Field>
        )}
      />
    </FieldGroup>
  );
};
