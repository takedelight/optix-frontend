"use client";

import { Skeleton } from "@/shared/ui";

import { useUserDropdown } from "../model/hooks/use-user-dropdown";
import { UserDropdown } from "./UserDropdown";
import { UserDropdownContent } from "./UserDropdownContent";
import { UserDropdownMenuTrigger } from "./UserDropdownMenuTrigger";

export const UserDropdownEntry = () => {
  const { user, isPending, toggleTheme, handleSignOut, isDark } = useUserDropdown();

  if (isPending) {
    return <Skeleton className="h-10 w-50" />;
  }

  if (!user) {
    return null;
  }

  return (
    <UserDropdown>
      <UserDropdown.UserDropdownTrigger>
        <UserDropdownMenuTrigger image={user.image} name={user.name} />
      </UserDropdown.UserDropdownTrigger>

      <UserDropdown.UserDropdownContent>
        <UserDropdownContent
          isDark={isDark}
          handleSignOut={handleSignOut}
          toggleTheme={toggleTheme}
        />
      </UserDropdown.UserDropdownContent>
    </UserDropdown>
  );
};
