import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils/cn";

type GradientCardProps = HTMLAttributes<HTMLDivElement> & {
  subtle?: boolean;
};

export function GradientCard({
  className,
  subtle = false,
  ...props
}: GradientCardProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-xl border bg-card p-6 text-card-foreground shadow-[var(--shadow-soft)]",
        "before:absolute before:inset-0 before:bg-[var(--gradient-surface)] before:opacity-80 before:content-['']",
        "after:absolute after:inset-x-0 after:top-0 after:h-px after:bg-[var(--gradient-primary)] after:opacity-45 after:content-['']",
        subtle && "shadow-none before:opacity-55",
        className,
      )}
    >
      <div className="relative z-10" {...props} />
    </div>
  );
}
