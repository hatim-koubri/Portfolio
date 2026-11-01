import { ExternalLink, GitBranch } from "lucide-react";
import { GitHubRepositoryCard } from "@/components/cards/github-repository-card";
import { Container } from "@/components/shared/container";
import { Button } from "@/components/shared/button";
import { GradientCard } from "@/components/shared/gradient-card";
import { SectionHeader } from "@/components/shared/section-header";
import { Reveal } from "@/components/motion/reveal";
import type { Locale } from "@/lib/constants/locales";
import type { GitHubRepository } from "@/types/portfolio";

type GitHubShowcaseProps = {
  repositories: GitHubRepository[];
  locale: Locale;
};

const copy = {
  fr: {
    eyebrow: "GitHub",
    title: "Des dépôts prêts à documenter le raisonnement technique.",
    description:
      "Le showcase est manuel pour l'instant : il prépare les dépôts à relier aux études de cas, sans appeler l'API GitHub ni afficher de fausses métriques.",
    profile: "Profil GitHub",
    noteTitle: "Architecture prête pour l'API",
    note:
      "Les cartes supportent déjà nom, description, technologies, catégorie et lien. Les données pourront être remplacées par une intégration GitHub plus tard.",
  },
  en: {
    eyebrow: "GitHub",
    title: "Repositories prepared to document technical reasoning.",
    description:
      "The showcase is manual for now: it prepares repositories to connect with case studies, without calling the GitHub API or showing fake metrics.",
    profile: "GitHub profile",
    noteTitle: "API-ready architecture",
    note:
      "Cards already support name, description, technologies, category, and link. The data can later be replaced by a GitHub integration.",
  },
} as const;

export function GitHubShowcase({ repositories, locale }: GitHubShowcaseProps) {
  const t = copy[locale];

  return (
    <section
      id="github"
      aria-labelledby="github-showcase-title"
      className="pb-16 pt-8 sm:pb-24 sm:pt-10"
    >
      <Container className="space-y-8">
        <Reveal>
          <SectionHeader
            eyebrow={t.eyebrow}
            title={t.title}
            description={t.description}
            action={
              <Button
                href="https://github.com/hatim-koubri"
                target="_blank"
                rel="noreferrer"
                variant="secondary"
                icon={<ExternalLink className="size-4" aria-hidden="true" />}
              >
                {t.profile}
              </Button>
            }
          />
        </Reveal>

        <div className="grid gap-5 lg:grid-cols-[0.72fr_1.28fr]">
          <Reveal>
            <GradientCard className="h-full">
              <div className="space-y-4">
                <span className="flex size-11 items-center justify-center rounded-lg border bg-background/70 text-accent">
                  <GitBranch className="size-5" aria-hidden="true" />
                </span>
                <div className="space-y-2">
                  <h3 className="text-2xl font-semibold">{t.noteTitle}</h3>
                  <p className="text-sm leading-7 text-muted-foreground">
                    {t.note}
                  </p>
                </div>
              </div>
            </GradientCard>
          </Reveal>

          <div className="grid gap-4 md:grid-cols-2">
            {repositories.map((repository) => (
              <Reveal key={repository.name}>
                <GitHubRepositoryCard
                  repository={repository}
                  locale={locale}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
