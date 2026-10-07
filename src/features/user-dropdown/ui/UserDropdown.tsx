import type { PropsWithChildren } from "react";

import { cn } from "@/shared/lib";
import {
  buttonVariants,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/shared/ui";

const UserDropdownRoot = ({ children }: PropsWithChildren) => {
  return <DropdownMenu>{children}</DropdownMenu>;
};

const UserDropdownTrigger = ({ children }: PropsWithChildren) => {
  return (
    <DropdownMenuTrigger
      className={cn(buttonVariants({ variant: "ghost" }), "h-10 w-50 justify-start gap-2 px-2")}
    >
      {children}
    </DropdownMenuTrigger>
  );
};

const UserDropdownContent = ({ children }: PropsWithChildren) => {
  return (
    <DropdownMenuContent className="w-50" side="bottom" align="start">
      {children}
    </DropdownMenuContent>
  );
};

export const UserDropdown = Object.assign(UserDropdownRoot, {
  UserDropdownTrigger,
  UserDropdownContent,
});
