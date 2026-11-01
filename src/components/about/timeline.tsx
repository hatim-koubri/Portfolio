import { TimelineItem } from "@/components/about/timeline-item";
import type { TimelineItem as TimelineItemType } from "@/types/portfolio";

type TimelineProps = {
  items: TimelineItemType[];
};

export function Timeline({ items }: TimelineProps) {
  return (
    <ol aria-label="Engineering journey" className="relative">
      {items.map((item) => (
        <TimelineItem key={`${item.period}-${item.title}`} item={item} />
      ))}
    </ol>
  );
}
