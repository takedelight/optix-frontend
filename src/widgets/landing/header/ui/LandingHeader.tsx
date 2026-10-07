import type { ComponentProps } from "react";

import { cn } from "@/shared/lib";

export const LandingHeaderRoot = ({ children, ...props }: ComponentProps<"header">) => {
  return (
    <header {...props}>
      <nav
        aria-label="landing-header-nav"
        className="mx-auto flex h-14 w-full max-w-7xl items-center justify-between px-6"
      >
        {children}
      </nav>
    </header>
  );
};

const LandingHeaderLeftSide = ({ children, className = "", ...props }: ComponentProps<"div">) => {
  return (
    <div className={cn(`flex items-center gap-2`, className)} {...props}>
      {children}
    </div>
  );
};

const LandingHeaderRightSide = ({ children, className = "", ...props }: ComponentProps<"div">) => {
  return (
    <div className={cn(`flex items-center gap-2`, className)} {...props}>
      {children}
    </div>
  );
};

export const LandingHeader = Object.assign(LandingHeaderRoot, {
  LandingHeaderLeftSide,
  LandingHeaderRightSide,
});
