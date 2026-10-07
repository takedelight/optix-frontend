import { RiLogoutBoxLine, RiMoonLine, RiSunLine } from "@remixicon/react";
import Link from "next/link";

import {
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
} from "@/shared/ui";

import { USER_DROPDOWN_ITEMS } from "../model/const/const";

interface UserDropdownContentProps {
  isDark: boolean;
  handleSignOut: () => void;
  toggleTheme: () => void;
}

export const UserDropdownContent = ({
  isDark,
  handleSignOut,
  toggleTheme,
}: UserDropdownContentProps) => {
  return (
    <>
      {USER_DROPDOWN_ITEMS.map((item) => {
        const Icon = item.icon;

        if (item.items?.length) {
          return (
            <DropdownMenuSub key={item.alias}>
              <DropdownMenuSubTrigger>
                <Icon />
                <span>{item.alias}</span>
              </DropdownMenuSubTrigger>

              <DropdownMenuSubContent>
                {item.items.map((subItem) => (
                  <DropdownMenuItem key={subItem}>{subItem}</DropdownMenuItem>
                ))}
              </DropdownMenuSubContent>
            </DropdownMenuSub>
          );
        }

        if (item.href) {
          return (
            <DropdownMenuItem
              key={item.alias}
              render={(props) => (
                <Link href={item.href!} {...props}>
                  <Icon />
                  <span>{item.alias}</span>
                </Link>
              )}
            />
          );
        }

        return (
          <DropdownMenuItem key={item.alias}>
            <Icon />
            <span>{item.alias}</span>
          </DropdownMenuItem>
        );
      })}

      <DropdownMenuItem onClick={toggleTheme}>
        {isDark ? <RiSunLine /> : <RiMoonLine />}
        <span>{isDark ? "Light Theme" : "Dark Theme"}</span>
      </DropdownMenuItem>

      <DropdownMenuSeparator />

      <DropdownMenuItem variant="destructive" onClick={handleSignOut}>
        <RiLogoutBoxLine />
        <span>Logout</span>
      </DropdownMenuItem>
    </>
  );
};
