import { numberFormatter } from "@/shared/lib";

export const ProjectCardContent = () => {
  return (
    <dl className="grid grid-cols-3 gap-2">
      <div>
        <dt className="text-xs text-muted-foreground">Storage</dt>
        <dd className="font-medium tabular-nums">0 GB</dd>
      </div>
      <div>
        <dt className="text-xs text-muted-foreground">Transfer</dt>
        <dd className="font-medium tabular-nums">0 GB</dd>
      </div>
      <div>
        <dt className="text-xs text-muted-foreground">Requests</dt>
        <dd className="font-medium tabular-nums">{numberFormatter.format(0)}</dd>
      </div>
    </dl>
  );
};
