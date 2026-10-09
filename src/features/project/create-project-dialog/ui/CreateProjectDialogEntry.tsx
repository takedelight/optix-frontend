"use client";

import { useCreateProject } from "../model/hooks/use-create-project";
import { CreateProjectDialog } from "./CreateProjectDialog";
import { CreateProjectDialogFields } from "./CreateProjectDialogFields";
import { CreateProjectDialogFooter } from "./CreateProjectDialogFooter";
import { CreateProjectDialogHeader } from "./CreateProjectDialogHeader";
import { CreateProjectDialogTrigger } from "./CreateProjectDialogTrigger";

export const CreateProjectDialogEntry = () => {
  const { control, formState } = useCreateProject();

  return (
    <CreateProjectDialog>
      <CreateProjectDialogTrigger />

      <CreateProjectDialog.Content>
        <CreateProjectDialog.Header>
          <CreateProjectDialogHeader />
        </CreateProjectDialog.Header>

        <form className="flex flex-col gap-4">
          <CreateProjectDialogFields control={control} errors={formState.errors} />

          <CreateProjectDialog.Footer>
            <CreateProjectDialogFooter />
          </CreateProjectDialog.Footer>
        </form>
      </CreateProjectDialog.Content>
    </CreateProjectDialog>
  );
};
