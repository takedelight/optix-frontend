import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/shared/ui";

import type { SidebarData } from "../model/const";

interface RootSidebarMenuProps {
  data: SidebarData;
}

export const RootSidebarMenu = ({ data }: RootSidebarMenuProps) => {
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

                  return (
                    <SidebarMenuItem key={subItem.title}>
                      <SidebarMenuButton
                        isActive={subItem.isActive}
                        tooltip={subItem.title}
                        render={<a href={subItem.url} aria-label={subItem.title} />}
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
