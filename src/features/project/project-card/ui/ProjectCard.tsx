import type { PropsWithChildren } from "react";

import { Card, CardContent, CardFooter, CardHeader } from "@/shared/ui";

const ProjectCardRoot = ({ children }: PropsWithChildren) => {
  return <Card>{children}</Card>;
};

const Header = ({ children }: PropsWithChildren) => {
  return <CardHeader>{children}</CardHeader>;
};

const Content = ({ children }: PropsWithChildren) => {
  return <CardContent>{children}</CardContent>;
};
const Footer = ({ children }: PropsWithChildren) => {
  return <CardFooter className="flex items-center justify-between gap-2">{children}</CardFooter>;
};

export const ProjectCard = Object.assign(ProjectCardRoot, {
  Header,
  Content,
  Footer,
});
