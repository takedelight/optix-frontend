import Link from "next/link";
import type { ComponentProps } from "react";
import  { Button } from "./button";

export function LinkButton({
  href,
  children,
  ...props
}: { href: string } & ComponentProps<typeof Button>) {
  return (
    <Button render={<Link href={href} />} nativeButton={false} {...props}>
      {children}
    </Button>
  );
}
