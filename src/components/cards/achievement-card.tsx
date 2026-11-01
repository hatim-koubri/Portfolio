import type { ReactNode } from "react";
import { GradientCard } from "@/components/shared/gradient-card";
import type { Achievement } from "@/types/portfolio";

type AchievementCardProps = {
  achievement: Achievement;
  icon: ReactNode;
};

export function AchievementCard({ achievement, icon }: AchievementCardProps) {
  return (
    <GradientCard
      subtle
      className="h-full p-0 transition duration-300 hover:-translate-y-0.5 hover:border-accent/35"
    >
      <article
        tabIndex={0}
        className="flex h-full flex-col gap-4 rounded-xl p-5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
      >
        <div className="flex items-start justify-between gap-4">
          <span className="flex size-10 shrink-0 items-center justify-center rounded-md border bg-background/70 text-accent">
            {icon}
          </span>
          <p className="rounded-full border bg-muted/70 px-3 py-1 text-xs font-semibold text-muted-foreground">
            {achievement.value}
          </p>
        </div>
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">{achievement.label}</h3>
          <p className="text-sm leading-7 text-muted-foreground">
            {achievement.description}
          </p>
        </div>
      </article>
    </GradientCard>
  );
}
