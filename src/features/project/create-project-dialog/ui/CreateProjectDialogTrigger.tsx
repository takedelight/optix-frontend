import { RiAddLine } from "@remixicon/react";

import { Button } from "@/shared/ui";

import { CreateProjectDialog } from "./CreateProjectDialog";

export const CreateProjectDialogTrigger = () => {
  return (
    <CreateProjectDialog.Trigger
      render={
        <Button>
          <RiAddLine data-icon="inline-start" />
          New Project
        </Button>
      }
    />
  );
};
