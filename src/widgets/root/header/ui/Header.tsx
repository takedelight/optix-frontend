import type { ComponentProps } from "react";

export const HeaderRoot = ({ children, className = "", ...props }: ComponentProps<"header">) => {
  return (
    <header
      className={`flex h-16 shrink-0 items-center justify-between border-b px-4 ${className}`}
      {...props}
    >
      {children}
    </header>
  );
};

const HeaderLeftSide = ({ children, className = "", ...props }: ComponentProps<"div">) => {
  return (
    <div className={`flex items-center gap-2 ${className}`} {...props}>
      {children}
    </div>
  );
};

const HeaderRightSide = ({ children, className = "", ...props }: ComponentProps<"div">) => {
  return (
    <div className={`flex items-center gap-2 ${className}`} {...props}>
      {children}
    </div>
  );
};

export const Header = Object.assign(HeaderRoot, {
  HeaderLeftSide,
  HeaderRightSide,
});
