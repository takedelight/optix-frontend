import type { Metadata } from "next";

import { TooltipProvider } from "@/shared/ui";
import { SidebarInset, SidebarProvider } from "@/shared/ui/sidebar";
import { HeaderEntry } from "@/widgets/root/header";
import { RootSidebarEntry } from "@/widgets/root/root-sidebar";

export const metadata: Metadata = {
  title: "Dashboard",
};

export default function AppLayout({ children }: LayoutProps<"/app">) {
  return (
    <SidebarProvider>
      <TooltipProvider>
        <RootSidebarEntry />
      </TooltipProvider>

      <SidebarInset>
        <HeaderEntry />
        <div className="flex flex-1 flex-col p-4">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  );
}
