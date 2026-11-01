import { BookOpen, Code2, Layers3, ShieldCheck, Sparkles } from "lucide-react";
import { Timeline } from "@/components/about/timeline";
import { Container } from "@/components/shared/container";
import { GradientCard } from "@/components/shared/gradient-card";
import { SectionHeader } from "@/components/shared/section-header";
import { Reveal } from "@/components/motion/reveal";
import type { Locale } from "@/lib/constants/locales";
import type { Profile, TimelineItem } from "@/types/portfolio";

type AboutProps = {
  profile: Profile;
  locale: Locale;
};

const copy = {
  fr: {
    eyebrow: "À propos",
    title: "Un raisonnement d'ingénieur orienté qualité, architecture et impact produit.",
    intro:
      "Hatim aborde le développement comme un travail de conception autant que d'implémentation : comprendre le problème, choisir une architecture simple, construire des interfaces lisibles et garder le code maintenable pour l'équipe qui devra le faire évoluer.",
    journeyTitle: "Parcours d'ingénierie",
    journeyDescription:
      "Une progression structurée autour des études d'ingénierie, du full-stack, de Java/Spring Boot, du frontend moderne et de la qualité logicielle.",
    valuesTitle: "Principes de travail",
    valuesDescription:
      "Des repères concrets pour évaluer sa manière de construire, documenter et améliorer un projet.",
    timeline: {
      studies: "Études d'ingénierie",
      fullStack: "Développement full-stack",
      backend: "Focus Java & Spring Boot",
      frontend: "Frontend moderne",
      quality: "Qualité logicielle et tests",
    },
  },
  en: {
    eyebrow: "About",
    title: "An engineering mindset focused on quality, architecture, and product impact.",
    intro:
      "Hatim approaches development as both design and implementation: understand the problem, choose a simple architecture, build readable interfaces, and keep the code maintainable for the team that will evolve it.",
    journeyTitle: "Engineering journey",
    journeyDescription:
      "A structured progression across engineering studies, full-stack development, Java/Spring Boot, modern frontend work, and software quality.",
    valuesTitle: "Engineering values",
    valuesDescription:
      "Practical signals for how he builds, documents, and improves a software project.",
    timeline: {
      studies: "Engineering studies",
      fullStack: "Full-stack development journey",
      backend: "Java & Spring Boot focus",
      frontend: "Modern frontend development",
      quality: "Software quality and testing",
    },
  },
} as const;

const valueCards = {
  fr: [
    {
      title: "Clean Architecture",
      description:
        "Séparer les responsabilités pour rendre les décisions techniques plus lisibles.",
      icon: Layers3,
    },
    {
      title: "Maintainability",
      description:
        "Écrire du code qu'une équipe peut reprendre, relire et faire évoluer.",
      icon: Code2,
    },
    {
      title: "User Experience",
      description:
        "Relier les choix techniques à des parcours simples et compréhensibles.",
      icon: Sparkles,
    },
    {
      title: "Continuous Learning",
      description:
        "Améliorer progressivement les pratiques avec les retours de projet.",
      icon: BookOpen,
    },
    {
      title: "Software Quality",
      description:
        "Utiliser les tests, la revue et l'analyse comme leviers de confiance.",
      icon: ShieldCheck,
    },
  ],
  en: [
    {
      title: "Clean Architecture",
      description:
        "Separate responsibilities so technical decisions stay readable.",
      icon: Layers3,
    },
    {
      title: "Maintainability",
      description:
        "Write code a team can review, understand, and evolve.",
      icon: Code2,
    },
    {
      title: "User Experience",
      description:
        "Connect technical choices to clear and understandable user flows.",
      icon: Sparkles,
    },
    {
      title: "Continuous Learning",
      description:
        "Improve engineering practices through project feedback and iteration.",
      icon: BookOpen,
    },
    {
      title: "Software Quality",
      description:
        "Use tests, review, and analysis as confidence-building tools.",
      icon: ShieldCheck,
    },
  ],
} as const;

function buildTimeline(profile: Profile, locale: Locale): TimelineItem[] {
  const t = copy[locale].timeline;
  const base = profile.timeline;

  return [
    {
      period: profile.education.level,
      title: t.studies,
      organization: profile.education.school,
      description: `${profile.education.program} · ${profile.education.specialization}`,
    },
    {
      period: base[2]?.period ?? (locale === "fr" ? "Projets" : "Projects"),
      title: t.fullStack,
      organization: base[2]?.organization ?? "Java, Spring Boot, Next.js, TypeScript",
      description: base[2]?.description ?? profile.valueProposition,
    },
    {
      period: locale === "fr" ? "Backend" : "Backend",
      title: t.backend,
      organization: "Java · Spring Boot · REST APIs",
      description:
        locale === "fr"
          ? "Consolidation d'une approche backend structurée autour des API, des services, de la persistance et de la lisibilité du code."
          : "Building a structured backend approach around APIs, services, persistence, and readable code.",
    },
    {
      period: locale === "fr" ? "Frontend" : "Frontend",
      title: t.frontend,
      organization: "Next.js · React · TypeScript · Tailwind CSS",
      description:
        locale === "fr"
          ? "Création d'interfaces modernes avec une attention portée à la clarté, à la responsivité et à la cohérence visuelle."
          : "Creating modern interfaces with attention to clarity, responsiveness, and visual consistency.",
    },
    {
      period: locale === "fr" ? "Qualité" : "Quality",
      title: t.quality,
      organization: "JUnit · SonarCloud · Postman · GitHub",
      description:
        locale === "fr"
          ? "Progression vers des pratiques qui rendent le code plus fiable : tests ciblés, analyse statique, documentation et revue."
          : "Moving toward practices that make code more reliable: targeted tests, static analysis, documentation, and review.",
    },
  ];
}

export function About({ profile, locale }: AboutProps) {
  const t = copy[locale];
  const timeline = buildTimeline(profile, locale);
  const values = valueCards[locale];

  return (
    <section id="about" aria-labelledby="about-title" className="pb-16 pt-8 sm:pb-24 sm:pt-10">
      <Container className="space-y-10">
        <Reveal>
          <SectionHeader
            eyebrow={t.eyebrow}
            title={t.title}
            description={t.intro}
          />
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <GradientCard className="h-full">
              <div className="space-y-5">
                <div className="space-y-2">
                  <h3 className="text-2xl font-semibold">{t.valuesTitle}</h3>
                  <p className="text-sm leading-7 text-muted-foreground">
                    {t.valuesDescription}
                  </p>
                </div>
                <div className="grid gap-3">
                  {values.map((value) => {
                    const Icon = value.icon;

                    return (
                      <article
                        key={value.title}
                        tabIndex={0}
                        className="flex gap-3 rounded-lg border bg-background/45 p-4 transition hover:border-accent/35 hover:bg-background/70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
                      >
                        <span className="flex size-10 shrink-0 items-center justify-center rounded-md border bg-card text-accent">
                          <Icon className="size-4" aria-hidden="true" />
                        </span>
                        <div className="space-y-1">
                          <h4 className="font-semibold">{value.title}</h4>
                          <p className="text-sm leading-6 text-muted-foreground">
                            {value.description}
                          </p>
                        </div>
                      </article>
                    );
                  })}
                </div>
              </div>
            </GradientCard>
          </Reveal>

          <Reveal>
            <GradientCard className="h-full">
              <div className="space-y-6">
                <div className="space-y-2">
                  <h3 className="text-2xl font-semibold">{t.journeyTitle}</h3>
                  <p className="text-sm leading-7 text-muted-foreground">
                    {t.journeyDescription}
                  </p>
                </div>
                <Timeline items={timeline} />
              </div>
            </GradientCard>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
