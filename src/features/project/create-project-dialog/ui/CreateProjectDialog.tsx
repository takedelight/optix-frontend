import type { ComponentProps, PropsWithChildren } from "react";

import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTrigger } from "@/shared/ui";

const CreateProjectDialogRoot = ({ children, ...props }: ComponentProps<typeof Dialog>) => {
  return <Dialog {...props}>{children}</Dialog>;
};

const Trigger = ({ children, ...props }: ComponentProps<typeof DialogTrigger>) => {
  return <DialogTrigger {...props}>{children}</DialogTrigger>;
};

const Header = ({ children, ...props }: PropsWithChildren) => {
  return <DialogHeader {...props}>{children}</DialogHeader>;
};

const Content = ({ children, ...props }: ComponentProps<typeof DialogContent>) => {
  return (
    <DialogContent className="w-full sm:max-w-150" {...props}>
      {children}
    </DialogContent>
  );
};

const Footer = ({ children, ...props }: PropsWithChildren) => {
  return <DialogFooter {...props}>{children}</DialogFooter>;
};

export const CreateProjectDialog = Object.assign(CreateProjectDialogRoot, {
  Trigger,
  Header,
  Content,
  Footer,
});
