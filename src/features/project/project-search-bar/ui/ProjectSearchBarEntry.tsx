import { RiSearchLine } from "@remixicon/react";

import { Input } from "@/shared/ui";

export const ProjectSearchBarEntry = () => {
  return (
    <div className="relative rounded-md border ">
      <RiSearchLine
        aria-hidden="true"
        className="absolute top-1/2 left-2.5 size-4 -translate-y-1/2 text-muted-foreground"
      />
      <Input
        type="search"
        placeholder="Search projects…"
        aria-label="Search projects"
        className="w-full pl-8 sm:w-64"
      />
    </div>
  );
};
