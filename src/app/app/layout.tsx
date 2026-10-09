import type { Metadata } from "next";

import { cookies } from "next/headers";

import { TooltipProvider } from "@/shared/ui";
import { SidebarInset, SidebarProvider } from "@/shared/ui/sidebar";
import { HeaderEntry } from "@/widgets/root/header";
import { RootSidebarEntry } from "@/widgets/root/root-sidebar";

import { ApolloWrapper } from "../providers/apollo.provider";

export const metadata: Metadata = {
  title: "Dashboard",
};

export default async function AppLayout({ children }: LayoutProps<"/app">) {
  const cookieStore = await cookies();

  return (
    <ApolloWrapper serverCookie={cookieStore.toString()}>
      <SidebarProvider>
        <TooltipProvider>
          <RootSidebarEntry />
        </TooltipProvider>

        <SidebarInset>
          <HeaderEntry />
          <div className="flex flex-1 flex-col p-4">{children}</div>
        </SidebarInset>
      </SidebarProvider>
    </ApolloWrapper>
  );
}
