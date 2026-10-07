import { data } from "../model/const";
import { RootSidebar } from "./RootSidebar";
import { RootSidebarMenu } from "./RootSidebarMenu";
import { VersionSwitcher } from "./version-switcher";

export const RootSidebarEntry = () => {
  return (
    <RootSidebar>
      <RootSidebar.RootSidebarHeader>
        <VersionSwitcher versions={data.versions} defaultVersion={data.versions[0]!} />
      </RootSidebar.RootSidebarHeader>

      <RootSidebar.RootSidebarContent>
        <RootSidebarMenu data={data} />
      </RootSidebar.RootSidebarContent>
    </RootSidebar>
  );
};
