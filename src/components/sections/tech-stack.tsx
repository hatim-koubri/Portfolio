import { TechCard } from "@/components/cards/tech-card";
import { Container } from "@/components/shared/container";
import { GradientCard } from "@/components/shared/gradient-card";
import { SectionHeader } from "@/components/shared/section-header";
import { Reveal } from "@/components/motion/reveal";
import type { Locale } from "@/lib/constants/locales";
import type { Skill, SkillCategory } from "@/types/portfolio";

type TechStackProps = {
  skills: Skill[];
  locale: Locale;
};

const groups: Array<{
  category: SkillCategory;
  emphasis: "primary" | "secondary";
}> = [
  { category: "Backend", emphasis: "primary" },
  { category: "Frontend", emphasis: "primary" },
  { category: "Databases", emphasis: "secondary" },
  { category: "Cloud & DevOps", emphasis: "secondary" },
  { category: "Testing & Quality", emphasis: "primary" },
  { category: "Tools", emphasis: "secondary" },
];

const copy = {
  fr: {
    eyebrow: "Tech stack",
    title: "Les outils qui structurent ses projets full-stack.",
    description:
      "Une vue compacte pour identifier rapidement le socle backend, frontend, base de données, qualité et outillage.",
    primary: "Stack forte",
    secondary: "Outils de support",
  },
  en: {
    eyebrow: "Tech stack",
    title: "The tools behind his full-stack projects.",
    description:
      "A compact view to quickly identify backend, frontend, database, quality, and tooling foundations.",
    primary: "Strong stack",
    secondary: "Supporting tools",
  },
} as const;

export function TechStack({ skills, locale }: TechStackProps) {
  const t = copy[locale];

  return (
    <section
      id="tech-stack"
      aria-labelledby="tech-stack-title"
      className="pb-16 pt-8 sm:pb-24 sm:pt-10"
    >
      <Container className="space-y-8">
        <Reveal>
          <SectionHeader
            eyebrow={t.eyebrow}
            title={t.title}
            description={t.description}
          />
        </Reveal>

        <GradientCard className="p-0">
          <div className="grid gap-0 divide-y divide-border/70 lg:grid-cols-2 lg:divide-x lg:divide-y-0">
            {groups.map((group) => {
              const groupSkills = skills.filter(
                (skill) => skill.category === group.category,
              );

              return (
                <div key={group.category} className="space-y-4 p-5 sm:p-6">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <h3 className="font-semibold">{group.category}</h3>
                      <p className="mt-1 text-xs font-medium uppercase tracking-[0.12em] text-muted-foreground">
                        {group.emphasis === "primary" ? t.primary : t.secondary}
                      </p>
                    </div>
                    <span className="rounded-full border bg-background/60 px-2.5 py-1 text-xs text-muted-foreground">
                      {groupSkills.length}
                    </span>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2">
                    {groupSkills.map((skill) => (
                      <TechCard key={skill.name} skill={skill} />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </GradientCard>
      </Container>
    </section>
  );
}
