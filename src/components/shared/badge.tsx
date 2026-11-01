import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils/cn";

type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  variant?: "default" | "accent" | "outline";
};

const variants = {
  default: "bg-muted text-muted-foreground",
  accent: "border-accent/20 bg-accent-soft text-accent",
  outline: "border-border bg-background/60 text-muted-foreground",
};

export function Badge({
  className,
  variant = "default",
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex w-fit items-center rounded-full border px-3 py-1 text-xs font-medium leading-none tracking-normal",
        variants[variant],
        className,
      )}
      {...props}
    />
  );
}
