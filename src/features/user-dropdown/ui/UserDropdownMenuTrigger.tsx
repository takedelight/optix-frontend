import { RiExpandUpDownLine } from "@remixicon/react";

import { getInitials } from "@/entities/user";
import { Avatar, AvatarFallback, AvatarImage } from "@/shared/ui";

interface UserDropdownMenuTriggerProps {
  image?: string | null;
  name?: string;
}

/** Контент триггера: сам <button> рендерит DropdownMenuTrigger, здесь только содержимое. */
export const UserDropdownMenuTrigger = ({ image, name }: UserDropdownMenuTriggerProps) => {
  return (
    <>
      <Avatar size="lg">
        <AvatarImage src={image ?? undefined} alt={name ?? "User avatar"} />
        <AvatarFallback>{getInitials(name)}</AvatarFallback>
      </Avatar>
      <span className="min-w-0 flex-1 truncate text-start">{name}</span>
      <RiExpandUpDownLine className="size-4 shrink-0 text-muted-foreground" />
    </>
  );
};
