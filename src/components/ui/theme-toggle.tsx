"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils/cn";
import { useMounted } from "@/hooks/use-mounted";

type ThemeToggleProps = {
  className?: string;
};

export function ThemeToggle({ className }: ThemeToggleProps) {
  const mounted = useMounted();
  const { resolvedTheme, setTheme } = useTheme();
  const isDark = resolvedTheme === "dark";
  const nextTheme = isDark ? "light" : "dark";

  if (!mounted) {
    return (
      <div
        aria-hidden="true"
        className={cn("h-10 w-[72px] rounded-md border bg-card/70", className)}
      />
    );
  }

  return (
    <button
      type="button"
      aria-label={isDark ? "Activer le thème clair" : "Activer le thème sombre"}
      onClick={() => setTheme(nextTheme)}
      className={cn(
        "group inline-flex h-10 items-center gap-1 rounded-md border bg-card/70 p-1 text-muted-foreground backdrop-blur transition hover:bg-muted hover:text-foreground",
        className,
      )}
    >
      <span
        className={cn(
          "inline-flex size-8 items-center justify-center rounded-sm transition",
          !isDark && "bg-background text-foreground shadow-sm",
        )}
      >
        <Sun className="size-4" />
      </span>
      <span
        className={cn(
          "inline-flex size-8 items-center justify-center rounded-sm transition",
          isDark && "bg-background text-foreground shadow-sm",
        )}
      >
        <Moon className="size-4" />
      </span>
    </button>
  );
}

