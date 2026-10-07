import { UserDropdownEntry } from "@/features/user-dropdown";
import { SidebarTrigger, Separator } from "@/shared/ui";

import { Header } from "./Header";
import { HeaderBreadcrumbs } from "./HeaderBreadcrumbs";

export const HeaderEntry = () => {
  return (
    <Header>
      <Header.HeaderLeftSide>
        <SidebarTrigger className="-ml-1" />
        <Separator orientation="vertical" className="mr-2 data-[orientation=vertical]:h-4" />

        <HeaderBreadcrumbs />
      </Header.HeaderLeftSide>

      <Header.HeaderRightSide>
        <UserDropdownEntry />
      </Header.HeaderRightSide>
    </Header>
  );
};
