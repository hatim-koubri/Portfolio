import type { ReactNode } from "react";
import { cn } from "@/lib/utils/cn";

type ArchitectureCardProps = {
  label: string;
  title: string;
  description: string;
  children?: ReactNode;
  className?: string;
};

export function ArchitectureCard({
  label,
  title,
  description,
  children,
  className,
}: ArchitectureCardProps) {
  return (
    <article
      className={cn(
        "rounded-xl border bg-card/80 p-5 shadow-sm backdrop-blur transition hover:border-accent/35 hover:bg-card",
        className,
      )}
    >
      <div className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">
          {label}
        </p>
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-sm leading-6 text-muted-foreground">{description}</p>
        </div>
        {children ? <div className="pt-1">{children}</div> : null}
      </div>
    </article>
  );
}
