import { cn } from "@/lib/utils/cn";
import type { Skill } from "@/types/portfolio";

type TechCardProps = {
  skill: Skill;
};

export function TechCard({ skill }: TechCardProps) {
  return (
    <article
      tabIndex={0}
      className={cn(
        "group rounded-xl border bg-card/75 p-4 shadow-sm backdrop-blur transition duration-300",
        "hover:-translate-y-0.5 hover:border-accent/40 hover:bg-card",
        "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring",
      )}
    >
      <div className="flex items-center gap-3">
        <div className="flex size-10 shrink-0 items-center justify-center rounded-lg border bg-background/70 text-sm font-semibold text-accent transition group-hover:scale-105">
          {skill.name
            .split(" ")
            .map((word) => word[0])
            .join("")
            .slice(0, 2)
            .toUpperCase()}
        </div>
        <div className="min-w-0">
          <h3 className="truncate font-semibold">{skill.name}</h3>
          <p className="truncate text-xs text-muted-foreground">{skill.category}</p>
        </div>
      </div>
    </article>
  );
}
