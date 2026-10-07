import type { Metadata } from "next";

import { LandingHeaderEntry } from "@/widgets/landing/header";

export const metadata: Metadata = {
  description:
    "Optix is a lightweight media and asset service for developers: S3-compatible storage and on-the-fly image transforms without the MinIO or AWS boilerplate.",
};

export default function LandingPage() {
  return <LandingHeaderEntry />;
}
