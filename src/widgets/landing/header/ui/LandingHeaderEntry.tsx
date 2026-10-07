import Image from "next/image";
import Link from "next/link";

import { AuthMethodEntry } from "@/features/auth-method";

import { LandingHeader } from "./LandingHeader";

export const LandingHeaderEntry = () => {
  return (
    <LandingHeader>
      <LandingHeader.LandingHeaderLeftSide>
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <Image src="/logo.svg" alt="Optix" width={36} height={36} />
          <span className="text-2xl">Optix</span>
        </Link>
      </LandingHeader.LandingHeaderLeftSide>

      <LandingHeader.LandingHeaderRightSide>
        <AuthMethodEntry />
      </LandingHeader.LandingHeaderRightSide>
    </LandingHeader>
  );
};
