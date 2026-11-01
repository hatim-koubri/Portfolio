import { cn } from "@/lib/utils/cn";

type HeroTechPillProps = {
  label: string;
  className?: string;
};

export function HeroTechPill({ label, className }: HeroTechPillProps) {
  return (
    <span
      className={cn(
        "inline-flex h-9 items-center rounded-full border bg-card/70 px-3 text-sm font-medium text-muted-foreground shadow-sm backdrop-blur transition hover:border-accent/40 hover:text-foreground",
        className,
      )}
    >
      {label}
    </span>
  );
}
