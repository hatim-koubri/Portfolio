import { Badge } from "@/components/shared/badge";

type HeroAvailabilityProps = {
  label: string;
};

export function HeroAvailability({ label }: HeroAvailabilityProps) {
  return (
    <Badge variant="accent" className="gap-2 py-1.5">
      <span className="relative flex size-2">
        <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-40 motion-reduce:animate-none" />
        <span className="relative inline-flex size-2 rounded-full bg-accent" />
      </span>
      {label}
    </Badge>
  );
}
