import { DialogDescription, DialogTitle } from "@/shared/ui";

export const CreateProjectDialogHeader = () => {
  return (
    <>
      <DialogTitle>Create Project</DialogTitle>
      <DialogDescription>
        Only the name is required — slug, description and color can be added later.
      </DialogDescription>
    </>
  );
};
