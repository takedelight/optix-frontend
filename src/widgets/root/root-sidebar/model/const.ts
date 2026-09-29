import type { RemixiconComponentType } from "@remixicon/react";

import {
  RiApps2Line,
  RiBarChartBoxLine,
  RiBookOpenLine,
  RiCloudLine,
  RiCodeSSlashLine,
  RiCommandLine,
  RiExchangeLine,
  RiFolderLine,
  RiHardDrive2Line,
  RiHistoryLine,
  RiImageEditLine,
  RiKey2Line,
  RiLockPasswordLine,
  RiPaintBrushLine,
  RiPulseLine,
  RiRefreshLine,
  RiShieldFlashLine,
  RiTerminalBoxLine,
  RiUploadCloud2Line,
  RiWebhookLine,
} from "@remixicon/react";

export interface NavSubItem {
  title: string;
  url: string;
  icon?: RemixiconComponentType;
  isActive?: boolean;
}

export interface NavMainGroup {
  title: string;
  url: string;
  icon: RemixiconComponentType;
  isActive?: boolean;
  items: NavSubItem[];
}

export interface SidebarData {
  versions: string[];
  navMain: NavMainGroup[];
}

export const data = {
  versions: ["1.0.0", "1.1.0-beta", "2.0.0-canary"],
  navMain: [
    {
      title: "Core Platform",
      url: "/projects",
      icon: RiApps2Line,
      items: [
        {
          title: "All Projects",
          url: "/projects",
          icon: RiFolderLine,
        },
        {
          title: "Usage & Limits",
          url: "/usage",
          icon: RiBarChartBoxLine,
          isActive: true,
        },
        {
          title: "Global API Keys",
          url: "/api-keys",
          icon: RiKey2Line,
        },
        {
          title: "Audit Logs",
          url: "/audit-logs",
          icon: RiHistoryLine,
        },
      ],
    },
    {
      title: "Integrations & Storage",
      url: "/integrations",
      icon: RiCloudLine,
      items: [
        {
          title: "S3 Providers (MinIO / AWS)",
          url: "/integrations/s3",
          icon: RiHardDrive2Line,
        },
        {
          title: "Cloudflare & CDN Edge",
          url: "/integrations/cdn",
          icon: RiShieldFlashLine,
        },
        {
          title: "Webhooks & Events",
          url: "/integrations/webhooks",
          icon: RiWebhookLine,
        },
      ],
    },
    {
      title: "Transformation API",
      url: "/docs/api",
      icon: RiImageEditLine,
      items: [
        {
          title: "Presigned Uploads",
          url: "/docs/api/uploads",
          icon: RiUploadCloud2Line,
        },
        {
          title: "On-the-fly Resize & Fit",
          url: "/docs/api/transformations",
          icon: RiExchangeLine,
        },
        {
          title: "Formats (WebP / AVIF)",
          url: "/docs/api/formats",
          icon: RiPaintBrushLine,
        },
        {
          title: "URL Signing (HMAC)",
          url: "/docs/api/signatures",
          icon: RiLockPasswordLine,
        },
        {
          title: "Cache Invalidation",
          url: "/docs/api/caching",
          icon: RiRefreshLine,
        },
      ],
    },
    {
      title: "Developer Tools",
      url: "/docs",
      icon: RiCodeSSlashLine,
      items: [
        {
          title: "Interactive Playground",
          url: "/playground",
          icon: RiTerminalBoxLine,
        },
        {
          title: "TypeScript / React SDK",
          url: "/docs/sdks",
          icon: RiBookOpenLine,
        },
        {
          title: "CLI & Direct Streaming",
          url: "/docs/cli",
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
