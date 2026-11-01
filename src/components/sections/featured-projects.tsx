"use client";

import { useState } from "react";
import { Container } from "@/components/shared/container";
import { SectionHeader } from "@/components/shared/section-header";
import { Reveal } from "@/components/motion/reveal";
import { ProjectCard } from "@/components/cards/project-card";
import { ArrowUpRight, ChevronUp } from "lucide-react";
import type { Locale } from "@/lib/constants/locales";
import type { Project } from "@/types/portfolio";

type FeaturedProjectsProps = {
  projects: Project[];
  locale: Locale;
};

const copy = {
  fr: {
    eyebrow: "Projets sélectionnés",
    title: "Des projets présentés comme des décisions d'ingénierie.",
    description:
      "Un aperçu rapide des projets les plus représentatifs. Les détails techniques complets restent disponibles dans chaque étude de cas.",
    more: "Voir plus de projets",
    less: "Voir moins de projets",
  },
  en: {
    eyebrow: "Featured projects",
    title: "Projects framed as engineering decisions.",
    description:
      "A quick view of the most representative projects. Full technical depth is available inside each case study.",
    more: "See more projects",
    less: "See fewer projects",
  },
} as const;

export function FeaturedProjects({ projects, locale }: FeaturedProjectsProps) {
  const [showAll, setShowAll] = useState(false);
  const t = copy[locale];
  const prioritySlugs = [
    "khotwa-e-learning-platform",
    "rihla-intelligent-bus-station-platform",
    "kaynbus-real-time-bus-geolocation",
  ];
  const featuredProjects = prioritySlugs
    .map((slug) => projects.find((project) => project.slug === slug))
    .filter((project) => project !== undefined);
  const otherProjects = projects.filter(
    (project) => !prioritySlugs.includes(project.slug),
  );
  const visibleProjects = showAll
    ? [...featuredProjects, ...otherProjects]
    : featuredProjects;

  return (
    <section
      id="projects"
      aria-labelledby="featured-projects-title"
      className="relative pb-16 pt-8 sm:pb-24 sm:pt-10"
    >
      <Container className="space-y-8">
        <Reveal>
          <SectionHeader
            eyebrow={t.eyebrow}
            title={t.title}
            description={t.description}
          />
        </Reveal>

        <div className="grid items-stretch gap-5 lg:grid-cols-2 xl:grid-cols-3">
          {visibleProjects.map((project) => (
            <Reveal key={project.slug} className="h-full">
              <ProjectCard project={project} locale={locale} />
            </Reveal>
          ))}
        </div>
        {otherProjects.length > 0 ? (
          <div className="flex justify-center">
          <button
            type="button"
            onClick={() => setShowAll((current) => !current)}
            aria-expanded={showAll}
            className="inline-flex items-center gap-2 rounded-full border bg-card px-5 py-2.5 text-sm font-semibold transition hover:border-accent hover:text-accent"
          >
            {showAll ? t.less : t.more}
            {showAll ? (
              <ChevronUp className="size-4" aria-hidden="true" />
            ) : (
              <ArrowUpRight className="size-4" aria-hidden="true" />
            )}
          </button>
          </div>
        ) : null}
      </Container>
    </section>
  );
}

