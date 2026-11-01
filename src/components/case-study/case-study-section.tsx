import type { ReactNode } from "react";
import { cn } from "@/lib/utils/cn";

type CaseStudySectionProps = {
  id: string;
  eyebrow?: string;
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
};

export function CaseStudySection({
  id,
  eyebrow,
  title,
  description,
  children,
  className,
}: CaseStudySectionProps) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className={className}>
      <div className="space-y-5">
        <div className="space-y-3">
          {eyebrow ? (
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">
              {eyebrow}
            </p>
          ) : null}
          <div className="space-y-2">
            <h2
              id={`${id}-title`}
              className="text-2xl font-semibold tracking-normal sm:text-3xl"
            >
              {title}
            </h2>
            {description ? (
              <p className="max-w-3xl text-sm leading-7 text-muted-foreground sm:text-base">
                {description}
              </p>
            ) : null}
          </div>
        </div>
        <div className={cn("space-y-4", className)}>{children}</div>
      </div>
    </section>
  );
}
