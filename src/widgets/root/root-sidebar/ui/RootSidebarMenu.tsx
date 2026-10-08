"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/shared/ui";

import { data } from "../model/const";

export const RootSidebarMenu = () => {
  const pathname = usePathname();

  return (
    <>
      {data.navMain.map((group) => {
        const GroupIcon = group.icon;

        return (
          <SidebarGroup key={group.title}>
            <SidebarGroupLabel className="flex items-center gap-2">
              {GroupIcon && <GroupIcon className="size-4 shrink-0" />}
              <span>{group.title}</span>
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {group.items.map((subItem) => {
                  const SubItemIcon = subItem.icon;
                  const isActive =
                    pathname === subItem.url ||
                    (subItem.url !== "/" && pathname.startsWith(subItem.url));

                  return (
                    <SidebarMenuItem key={subItem.title}>
                      <SidebarMenuButton
                        isActive={isActive}
                        tooltip={subItem.title}
                        render={<Link href={subItem.url} aria-label={subItem.title} />}
                      >
                        {SubItemIcon && <SubItemIcon className="size-4 shrink-0" />}
                        <span className="truncate">{subItem.title}</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  );
                })}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        );
      })}
    </>
  );
};
