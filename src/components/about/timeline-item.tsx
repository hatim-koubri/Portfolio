import type { TimelineItem as TimelineItemType } from "@/types/portfolio";

type TimelineItemProps = {
  item: TimelineItemType;
};

export function TimelineItem({ item }: TimelineItemProps) {
  return (
    <li className="relative grid gap-3 pb-8 pl-9 last:pb-0">
      <span className="absolute left-0 top-1 flex size-5 items-center justify-center rounded-full border bg-card shadow-sm">
        <span className="size-2 rounded-full bg-accent" />
      </span>
      <div className="absolute bottom-0 left-[9px] top-7 w-px bg-border last:hidden" />

      <div className="space-y-1">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">
          {item.period}
        </p>
        <h3 className="text-lg font-semibold leading-tight">{item.title}</h3>
        <p className="text-sm font-medium text-muted-foreground">
          {item.organization}
        </p>
      </div>
      <p className="text-sm leading-7 text-muted-foreground">{item.description}</p>
    </li>
  );
}
