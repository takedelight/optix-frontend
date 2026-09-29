import type { ComponentProps } from "react";

import {
  Sidebar as BaseSidebar,
  SidebarHeader as BaseSidebarHeader,
  SidebarContent as BaseSidebarContent,
  SidebarFooter as BaseSidebarFooter,
} from "@/shared/ui";

export const Sidebar = ({ children, ...props }: ComponentProps<typeof BaseSidebar>) => {
  return (
    <BaseSidebar collapsible="icon" {...props}>
      {children}
    </BaseSidebar>
  );
};

export const RootSidebarHeader = ({ children }: ComponentProps<typeof BaseSidebar>) => {
  return <BaseSidebarHeader>{children}</BaseSidebarHeader>;
};

export const RootSidebarContent = ({ children }: ComponentProps<typeof BaseSidebar>) => {
  return <BaseSidebarContent>{children}</BaseSidebarContent>;
};

export const RootSidebarFooter = ({ children }: ComponentProps<typeof BaseSidebar>) => {
  return <BaseSidebarFooter>{children}</BaseSidebarFooter>;
};

export const RootSidebar = Object.assign(Sidebar, {
  RootSidebarHeader,
  RootSidebarContent,
  RootSidebarFooter,
});
