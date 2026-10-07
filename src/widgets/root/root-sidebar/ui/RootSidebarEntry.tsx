import { data } from "../model/const";
import { RootSidebar } from "./RootSidebar";
import { RootSidebarFooter } from "./RootSidebarFooter";
import { RootSidebarMenu } from "./RootSidebarMenu";
import { VersionSwitcher } from "./version-switcher";

export const RootSidebarEntry = () => {
  return (
    <RootSidebar>
      <RootSidebar.RootSidebarHeader>
        <VersionSwitcher versions={data.versions} defaultVersion={data.versions[0]!} />
      </RootSidebar.RootSidebarHeader>

      <RootSidebar.RootSidebarContent>
        <RootSidebarMenu />
      </RootSidebar.RootSidebarContent>

      <RootSidebar.RootSidebarFooter>
        <RootSidebarFooter />
      </RootSidebar.RootSidebarFooter>
    </RootSidebar>
  );
};
