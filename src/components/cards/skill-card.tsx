import { Badge } from "@/components/shared/badge";
import { GradientCard } from "@/components/shared/gradient-card";
import type { Locale } from "@/lib/constants/locales";
import type { Skill } from "@/types/portfolio";

type SkillCardProps = {
  skill: Skill;
  locale: Locale;
};

const levelLabels = {
  fr: {
    comfortable: "À l'aise",
    practicing: "En pratique",
    learning: "En apprentissage",
  },
  en: {
    comfortable: "Comfortable",
    practicing: "Practicing",
    learning: "Learning",
  },
} as const;

export function SkillCard({ skill, locale }: SkillCardProps) {
  const labels = levelLabels[locale];

  return (
    <GradientCard
      subtle
      className="h-full p-0 transition duration-300 hover:-translate-y-0.5 hover:border-accent/35 hover:bg-card"
    >
      <article
        tabIndex={0}
        className="flex h-full flex-col gap-4 rounded-xl p-5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
      >
        <div className="flex items-start justify-between gap-3">
          <div className="space-y-1">
            <h3 className="text-lg font-semibold leading-tight">{skill.name}</h3>
            <p className="text-xs font-medium uppercase tracking-[0.12em] text-muted-foreground">
              {skill.category}
            </p>
          </div>
          <Badge variant={skill.level === "comfortable" ? "accent" : "outline"}>
            {labels[skill.level]}
          </Badge>
        </div>

        <p className="text-sm leading-6 text-muted-foreground">
          {skill.description}
        </p>

      </article>
    </GradientCard>
  );
}
