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
        <div className="flex flex-1 flex-col gap-4 p-4">
          <div className="grid auto-rows-min gap-4 md:grid-cols-3">{children}</div>
          <div className="min-h-screen flex-1 rounded-xl bg-muted/50 md:min-h-min" />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
