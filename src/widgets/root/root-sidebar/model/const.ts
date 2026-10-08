import type { RemixiconComponentType } from "@remixicon/react";

import {
  RiApps2Line,
  RiBarChartBoxLine,
  RiBookOpenLine,
  RiCodeSSlashLine,
  RiCommandLine,
  RiFolderLine,
  RiGithubLine,
  RiHistoryLine,
  RiKey2Line,
  RiNotificationLine,
  RiPulseLine,
  RiRobot2Line,
  RiTerminalBoxLine,
  RiToolsLine,
} from "@remixicon/react";

export interface NavSubItem {
  title: string;
  url: string;
  icon?: RemixiconComponentType;
}

export interface NavMainGroup {
  title: string;
  url: string;
  icon: RemixiconComponentType;
  items: NavSubItem[];
}

export interface SidebarData {
  versions: string[];
  navMain: NavMainGroup[];
}

export const data: SidebarData = {
  versions: ["1.0.0", "1.1.0-beta", "2.0.0-canary"],
  navMain: [
    {
      title: "Core Platform",
      url: "/app",
      icon: RiApps2Line,
      items: [
        {
          title: "All Projects",
          url: "/app",
          icon: RiFolderLine,
        },
        {
          title: "Usage & Limits",
          url: "/app/usage",
          icon: RiBarChartBoxLine,
        },
        {
          title: "Global API Keys",
          url: "/app/api-keys",
          icon: RiKey2Line,
        },
        {
          title: "Audit Logs",
          url: "/app/audit-logs",
          icon: RiHistoryLine,
        },
      ],
    },
    {
      title: "Developer Tools",
      url: "/app/docs",
      icon: RiCodeSSlashLine,
      items: [
        {
          title: "Interactive Playground",
          url: "/app/playground",
          icon: RiTerminalBoxLine,
        },
        {
          title: "TypeScript / React SDK",
          url: "/app/docs/sdks",
          icon: RiBookOpenLine,
        },
        {
          title: "CLI & Direct Streaming",
          url: "/app/docs/cli",
          icon: RiCommandLine,
        },
        {
          title: "System Status",
          url: "https://status.optix.dev",
          icon: RiPulseLine,
        },
      ],
    },
  ],
};

export const FOOTER_ITEMS = [
  {
    title: "GitHub",
    url: "https://github.com/",
    icon: RiGithubLine,
  },
  {
    title: "Tools",
    url: "/app/tools",
    icon: RiToolsLine,
  },
  {
    title: "Notifications",
    url: "/app/notifications",
    icon: RiNotificationLine,
  },
  {
    title: "MCP",
    url: "/app/mcp",
    icon: RiRobot2Line,
  },
];
