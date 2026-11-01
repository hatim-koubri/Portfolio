import { Boxes, Code2, FlaskConical, ShieldCheck } from "lucide-react";
import { AchievementCard } from "@/components/cards/achievement-card";
import { Container } from "@/components/shared/container";
import { SectionHeader } from "@/components/shared/section-header";
import { Reveal } from "@/components/motion/reveal";
import type { Locale } from "@/lib/constants/locales";
import type { Achievement } from "@/types/portfolio";

type AchievementsProps = {
  achievements: Achievement[];
  locale: Locale;
};

const copy = {
  fr: {
    eyebrow: "Preuves d'ingénierie",
    title: "Des indicateurs qualitatifs, sans métriques inventées.",
    description:
      "Cette section met en avant des preuves réalistes : projets full-stack, stack pratiquée, API, architecture, tests et qualité logicielle.",
    items: [
      {
        label: "Projets full-stack",
        value: "Plusieurs",
        description:
          "Projets académiques et personnels couvrant APIs backend, interfaces frontend, persistance, authentification et documentation.",
      },
      {
        label: "Technologies pratiquées",
        value: "Stack cœur",
        description:
          "Pratique concrète de Java, Spring Boot, Next.js, React, TypeScript, bases SQL/NoSQL, Docker et outils développeur.",
      },
      {
        label: "Axes d'ingénierie",
        value: "Architecture + qualité",
        description:
          "Attention portée à la maintenabilité, au clean code, à la conception d'API, aux tests, à la documentation et aux décisions produit.",
      },
      {
        label: "Outils qualité",
        value: "Tests + analyse",
        description:
          "Pratique de JUnit, Postman, GitHub et des concepts d'analyse statique avec SonarCloud.",
      },
    ],
  },
  en: {
    eyebrow: "Engineering evidence",
    title: "Qualitative indicators, without invented metrics.",
    description:
      "This section highlights realistic proof points: full-stack projects, practiced stack, APIs, architecture, testing, and software quality.",
    items: null,
  },
} as const;

const icons = [
  <Boxes key="boxes" className="size-4" aria-hidden="true" />,
  <Code2 key="code" className="size-4" aria-hidden="true" />,
  <ShieldCheck key="shield" className="size-4" aria-hidden="true" />,
  <FlaskConical key="flask" className="size-4" aria-hidden="true" />,
];

export function Achievements({ achievements, locale }: AchievementsProps) {
  const t = copy[locale];
  const displayAchievements = locale === "fr" ? copy.fr.items : achievements;

  return (
    <section
      id="achievements"
      aria-labelledby="achievements-title"
      className="py-14 sm:py-20"
    >
      <Container className="space-y-8">
        <Reveal>
          <SectionHeader
            eyebrow={t.eyebrow}
            title={t.title}
            description={t.description}
          />
        </Reveal>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {displayAchievements.map((achievement, index) => (
            <Reveal key={achievement.label}>
              <AchievementCard
                achievement={achievement}
                icon={icons[index % icons.length]}
              />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
