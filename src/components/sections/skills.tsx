import { SkillCard } from "@/components/cards/skill-card";
import { Container } from "@/components/shared/container";
import { SectionHeader } from "@/components/shared/section-header";
import { Reveal } from "@/components/motion/reveal";
import type { Locale } from "@/lib/constants/locales";
import type { Skill, SkillCategory } from "@/types/portfolio";

type SkillsProps = {
  skills: Skill[];
  locale: Locale;
};

const categories: SkillCategory[] = [
  "Backend",
  "Frontend",
  "Databases",
  "Cloud & DevOps",
  "Testing & Quality",
  "Tools",
];

const copy = {
  fr: {
    eyebrow: "Compétences",
    title: "Un profil technique lisible, sans pourcentages artificiels.",
    description:
      "Les compétences sont organisées par domaine avec un niveau de pratique honnête et des preuves à compléter au fil des projets.",
  },
  en: {
    eyebrow: "Skills",
    title: "A readable technical profile, without fake percentages.",
    description:
      "Skills are grouped by engineering area with honest practice levels and proof placeholders that can be connected to projects later.",
  },
} as const;

export function Skills({ skills, locale }: SkillsProps) {
  const t = copy[locale];

  return (
    <section id="skills" aria-labelledby="skills-title" className="py-14 sm:py-20">
      <Container className="space-y-8">
        <Reveal>
          <SectionHeader
            eyebrow={t.eyebrow}
            title={t.title}
            description={t.description}
          />
        </Reveal>

        <div className="space-y-8">
          {categories.map((category) => {
            const categorySkills = skills.filter(
              (skill) => skill.category === category,
            );

            if (!categorySkills.length) {
              return null;
            }

            return (
              <Reveal key={category}>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <h3 className="text-xl font-semibold">{category}</h3>
                    <span className="h-px flex-1 bg-border" />
                    <span className="text-sm text-muted-foreground">
                      {categorySkills.length}
                    </span>
                  </div>
                  <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                    {categorySkills.map((skill) => (
                      <SkillCard key={skill.name} skill={skill} locale={locale} />
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
