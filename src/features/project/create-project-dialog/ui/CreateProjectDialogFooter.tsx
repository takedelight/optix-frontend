import { Button, DialogClose } from "@/shared/ui";

export const CreateProjectDialogFooter = () => {
  return (
    <>
      <DialogClose
        render={
          <Button variant="outline" type="button">
            Cancel
          </Button>
        }
      />
      <Button type="submit">Create Project</Button>
    </>
  );
};
