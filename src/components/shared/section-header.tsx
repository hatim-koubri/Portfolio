import type { ReactNode } from "react";
import { cn } from "@/lib/utils/cn";
import { Badge } from "@/components/shared/badge";

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  action?: ReactNode;
  className?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  action,
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-5",
        align === "center" && "items-center text-center",
        className,
      )}
    >
      <div className="flex max-w-3xl flex-col gap-4">
        {eyebrow ? <Badge variant="accent">{eyebrow}</Badge> : null}
        <div className="space-y-3">
          <h2 className="text-3xl font-semibold tracking-normal text-balance sm:text-4xl">
            {title}
          </h2>
          {description ? (
            <p className="max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
              {description}
            </p>
          ) : null}
        </div>
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  );
}
