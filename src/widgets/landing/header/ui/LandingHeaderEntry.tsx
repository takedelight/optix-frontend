"use client";

import Image from "next/image";
import Link from "next/link";

import { AuthMethodEntry } from "@/features/auth-method";
import { useSession } from "@/shared/auth";
import { LinkButton, Show } from "@/shared/ui";

import { LandingHeader } from "./LandingHeader";

export const LandingHeaderEntry = () => {
  const { data: session } = useSession();

  const isAuthenticated = !!session;

  return (
    <LandingHeader>
      <LandingHeader.LandingHeaderLeftSide>
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <Image src="/logo.svg" alt="Optix" width={36} height={36} />
          <span className="text-2xl">Optix</span>
        </Link>
      </LandingHeader.LandingHeaderLeftSide>

      <LandingHeader.LandingHeaderRightSide>
        <Show when={isAuthenticated} fallback={<AuthMethodEntry />}>
          <LinkButton size="lg" href="/app">
            Go to App
          </LinkButton>
        </Show>
      </LandingHeader.LandingHeaderRightSide>
    </LandingHeader>
  );
};
