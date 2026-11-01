import { ExternalLink } from "lucide-react";
import { Button } from "@/components/shared/button";
import type { Locale } from "@/lib/constants/locales";
import type { GitHubRepository } from "@/types/portfolio";

type GitHubRepositoryCardProps = {
  repository: GitHubRepository;
  locale: Locale;
};

const labels = {
  fr: {
    open: "Voir sur GitHub",
    comingSoon: "Code bient\u00f4t disponible",
  },
  en: {
    open: "View on GitHub",
    comingSoon: "Code coming soon",
  },
} as const;

export function GitHubRepositoryCard({
  repository,
  locale,
}: GitHubRepositoryCardProps) {
  const t = labels[locale];

  return (
    <article
      tabIndex={0}
      className="group flex h-full flex-col gap-5 rounded-xl border bg-card/75 p-5 shadow-sm backdrop-blur transition duration-300 hover:-translate-y-0.5 hover:border-accent/40 hover:bg-card focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
    >
      <div className="space-y-3">
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0 space-y-1">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">
              {repository.category}
            </p>
            <h3 className="break-words text-xl font-semibold">
              {repository.name}
            </h3>
          </div>
          <span className="flex size-10 shrink-0 items-center justify-center rounded-md border bg-background/70 text-accent transition group-hover:scale-105">
            {repository.name.slice(0, 2).toUpperCase()}
          </span>
        </div>
        <p className="text-sm leading-7 text-muted-foreground">
          {repository.description}
        </p>
      </div>

      <ul className="flex flex-wrap gap-2" aria-label="Repository technologies">
        {repository.technologies.map((technology) => (
          <li
            key={technology}
            className="rounded-full border bg-background/65 px-2.5 py-1 text-xs font-medium text-muted-foreground"
          >
            {technology}
          </li>
        ))}
      </ul>

      <div className="mt-auto pt-1">
        {repository.url ? (
          <Button
            href={repository.url}
            target="_blank"
            rel="noreferrer"
            variant="secondary"
            icon={<ExternalLink className="size-4" aria-hidden="true" />}
          >
            {t.open}
          </Button>
        ) : (
          <span
            aria-disabled="true"
            className="inline-flex h-10 items-center justify-center rounded-full border bg-background/55 px-4 text-sm font-medium text-muted-foreground shadow-sm"
          >
            {t.comingSoon}
          </span>
        )}
      </div>
    </article>
  );
}
