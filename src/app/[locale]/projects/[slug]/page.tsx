import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink, FileText } from "lucide-react";
import { ArchitectureCard } from "@/components/case-study/architecture-card";
import { CaseStudySection } from "@/components/case-study/case-study-section";
import { CaseStudyToc } from "@/components/case-study/case-study-toc";
import { EvidenceList } from "@/components/case-study/evidence-list";
import { ProjectTechStack } from "@/components/cards/project-tech-stack";
import { SiteShell } from "@/components/layout/site-shell";
import { Button } from "@/components/shared/button";
import { Container } from "@/components/shared/container";
import { GradientCard } from "@/components/shared/gradient-card";
import { SafeProjectImage } from "@/components/shared/safe-project-image";
import { getLocaleContent } from "@/content";
import {
  defaultLocale,
  isLocale,
  supportedLocales,
  type Locale,
} from "@/lib/constants/locales";
import { getTranslations } from "@/lib/utils/get-translations";
import { createMetadata, siteMetadata } from "@/lib/seo/site-metadata";
import type { Project } from "@/types/portfolio";

type ProjectPageProps = {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
};

const labels = {
  fr: {
    back: "Retour aux projets",
    github: "Voir le code",
    report: "Voir le rapport",
    codeSoon: "Code bient\u00f4t disponible",
    toc: "Sommaire",
    heroEyebrow: "Étude de cas",
    overview: "Vue d'ensemble",
    context: "Contexte",
    problem: "Problème",
    objectives: "Objectifs",
    solution: "Solution",
    solutionBuilt: "Ce qui a été construit",
    solutionReasoning: "Pourquoi cette approche",
    architecture: "Architecture",
    architectureDescription:
      "Une lecture structurée des blocs techniques et des responsabilités prévues dans le projet.",
    challenges: "Défis techniques",
    decisions: "Décisions d'ingénierie",
    quality: "Qualité & tests",
    media: "Captures & diagrammes",
    screenshots: "Captures d'écran",
    architectureDiagram: "Diagramme d'architecture",
    results: "Résultats",
    lessons: "Leçons apprises",
    placeholder: "Placeholder à compléter",
    frontend: "Frontend",
    backend: "Backend",
    database: "Base de données",
    authentication: "Authentification",
    integrations: "Intégrations",
    frontendBody:
      "Interface web pensée pour clarifier les parcours, organiser les états d'interface et rendre les données compréhensibles.",
    backendBody:
      "Backend orienté API pour isoler la logique métier, structurer les flux et préparer une évolution maintenable.",
    databaseBody:
      "Persistance adaptée au modèle de données du projet, avec attention portée à la cohérence et aux relations utiles.",
    authenticationBody:
      "Parcours d'accès et de sécurité à documenter selon le périmètre réel du projet.",
    integrationsBody:
      "Outils et services utilisés pour tester, documenter ou faire évoluer l'application.",
    qualityIntro:
      "La qualité est présentée comme une démarche progressive : tests ciblés, lisibilité, analyse statique et décisions documentées.",
    lessonsIntro:
      "Ces apprentissages transforment le projet en preuve de raisonnement technique, pas seulement en liste de fonctionnalités.",
  },
  en: {
    back: "Back to projects",
    github: "View code",
    report: "View report",
    codeSoon: "Code coming soon",
    toc: "Contents",
    heroEyebrow: "Case study",
    overview: "Project overview",
    context: "Context",
    problem: "Problem",
    objectives: "Objectives",
    solution: "Solution",
    solutionBuilt: "What was built",
    solutionReasoning: "Why this approach",
    architecture: "Architecture",
    architectureDescription:
      "A structured view of the technical blocks and responsibilities planned in the project.",
    challenges: "Technical challenges",
    decisions: "Engineering decisions",
    quality: "Quality & testing",
    media: "Screenshots & diagrams",
    screenshots: "Screenshots",
    architectureDiagram: "Architecture diagram",
    results: "Results",
    lessons: "Lessons learned",
    placeholder: "Placeholder to complete",
    frontend: "Frontend",
    backend: "Backend",
    database: "Database",
    authentication: "Authentication",
    integrations: "Integrations",
    frontendBody:
      "Web interface designed to clarify user flows, organize UI states, and make data understandable.",
    backendBody:
      "API-oriented backend to isolate business logic, structure flows, and prepare maintainable evolution.",
    databaseBody:
      "Persistence layer aligned with the project data model, with attention to consistency and useful relationships.",
    authenticationBody:
      "Access and security flow to document according to the actual project scope.",
    integrationsBody:
      "Tools and services used to test, document, or evolve the application.",
    qualityIntro:
      "Quality is presented as a progressive engineering approach: targeted tests, readability, static analysis, and documented decisions.",
    lessonsIntro:
      "These takeaways turn the project into evidence of technical reasoning, not just a feature list.",
  },
} as const;

function findProject(locale: Locale, slug: string) {
  return getLocaleContent(locale).projects.find((project) => project.slug === slug);
}

function getArchitecture(project: Project, locale: Locale) {
  const t = labels[locale];

  return [
    {
      label: t.frontend,
      title: t.frontend,
      description: project.architecture.frontend,
    },
    {
      label: t.backend,
      title: t.backend,
      description: project.architecture.backend,
    },
    {
      label: t.database,
      title: t.database,
      description: project.architecture.database,
    },
    {
      label: t.authentication,
      title: t.authentication,
      description: project.architecture.authentication,
    },
    {
      label: t.integrations,
      title: t.integrations,
      description: project.architecture.integrations,
    },
  ];
}

function getLessons(project: Project, locale: Locale) {
  if (locale === "fr") {
    return [
      `Transformer "${project.problem}" en décisions techniques explicites.`,
      "Présenter les compromis de manière claire pour faciliter la revue par une équipe.",
      "Relier l'architecture, les tests et la maintenabilité à un problème concret.",
    ];
  }

  return [
    `Turn "${project.problem}" into explicit technical decisions.`,
    "Present trade-offs clearly so an engineering team can review the reasoning.",
    "Connect architecture, testing, and maintainability to a concrete problem.",
  ];
}

export function generateStaticParams() {
  return supportedLocales.flatMap((locale) =>
    getLocaleContent(locale).projects.map((project) => ({
      locale,
      slug: project.slug,
    })),
  );
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { locale: requestedLocale, slug } = await params;
  const locale = isLocale(requestedLocale) ? requestedLocale : defaultLocale;
  const t = getTranslations(locale);
  const project = findProject(locale, slug);

  return createMetadata({
    title: project ? project.title : `${t.seo.projectTitle}: ${slug}`,
    description: project?.shortDescription ?? t.seo.description,
    alternates: {
      canonical: `/${locale}/projects/${slug}`,
      languages: {
        fr: `/fr/projects/${slug}`,
        en: `/en/projects/${slug}`,
      },
    },
    openGraph: {
      type: "article",
      title: project ? project.title : `${t.seo.projectTitle}: ${slug}`,
      description: project?.shortDescription ?? t.seo.description,
      url: `${siteMetadata.url}/${locale}/projects/${slug}`,
      locale,
    },
    twitter: {
      title: project ? project.title : `${t.seo.projectTitle}: ${slug}`,
      description: project?.shortDescription ?? t.seo.description,
    },
  });
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { locale: requestedLocale, slug } = await params;
  const locale: Locale = isLocale(requestedLocale)
    ? requestedLocale
    : defaultLocale;
  const translations = getTranslations(locale);
  const { profile } = getLocaleContent(locale);
  const project = findProject(locale, slug);

  if (!project) {
    notFound();
  }

  const t = labels[locale];
  const tocItems = [
    { id: "overview", label: t.overview },
    { id: "solution", label: t.solution },
    { id: "architecture", label: t.architecture },
    { id: "challenges", label: t.challenges },
    { id: "decisions", label: t.decisions },
    { id: "quality", label: t.quality },
    { id: "results", label: t.results },
    { id: "lessons", label: t.lessons },
  ];
  const architecture = getArchitecture(project, locale);
  const lessons = getLessons(project, locale);

  return (
    <SiteShell locale={locale} translations={translations} profile={profile}>
      <main className="pb-16 pt-10 sm:pb-24 sm:pt-16">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_260px]">
            <div className="min-w-0 space-y-10">
              <section aria-labelledby="project-title" className="space-y-7">
                <div className="flex flex-wrap gap-3">
                  <Button
                    href={`/${locale}/#projects`}
                    variant="ghost"
                    icon={<ArrowLeft className="size-4" aria-hidden="true" />}
                  >
                    {t.back}
                  </Button>
                  {project.githubUrl && project.githubUrl !== "#" ? (
                    <Button
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      variant="secondary"
                      icon={<ExternalLink className="size-4" aria-hidden="true" />}
                    >
                      {t.github}
                    </Button>
                  ) : (
                    <span
                      aria-disabled="true"
                      className="inline-flex h-10 items-center justify-center rounded-full border bg-background/55 px-4 text-sm font-medium text-muted-foreground shadow-sm"
                    >
                      {t.codeSoon}
                    </span>
                  )}
                  {project.reportUrl ? (
                    <Button
                      href={project.reportUrl}
                      target="_blank"
                      rel="noreferrer"
                      variant="secondary"
                      icon={<FileText className="size-4" aria-hidden="true" />}
                    >
                      {t.report}
                    </Button>
                  ) : null}
                </div>

                <GradientCard className="p-0">
                  <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[1fr_224px]">
                    <div className="space-y-6">
                      <div className="space-y-3">
                        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">
                          {project.status ?? t.heroEyebrow}
                        </p>
                        <div className="space-y-3">
                          <h1
                            id="project-title"
                            className="text-4xl font-semibold leading-tight tracking-normal sm:text-5xl"
                          >
                            {project.title}
                          </h1>
                          <p className="max-w-3xl text-base leading-8 text-muted-foreground sm:text-lg">
                            {project.shortDescription}
                          </p>
                        </div>
                      </div>
                      <div className="rounded-xl border bg-background/50 p-4">
                        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                          {locale === "fr" ? "Rôle" : "Role"}
                        </p>
                        <p className="mt-2 text-sm leading-6">{project.role}</p>
                      </div>
                      <ProjectTechStack stack={project.stack} />
                    </div>

                    <div className="relative w-full self-start overflow-hidden rounded-xl border bg-background/60">
                      <div className="relative flex aspect-video items-center justify-center bg-muted/30">
                        <SafeProjectImage
                          src={project.coverImage}
                          alt={`${project.title} cover screenshot`}
                          fallbackLabel={project.title
                            .split(" ")
                            .slice(0, 3)
                            .map((word) => word[0])
                            .join("")
                            .toUpperCase()}
                          priority
                          fit="contain"
                          sizes="(min-width: 1024px) 320px, 100vw"
                        />
                      </div>
                    </div>
                  </div>
                </GradientCard>
              </section>

              <CaseStudySection
                id="overview"
                eyebrow={t.context}
                title={t.overview}
                description={project.caseStudySections[0]?.body}
              >
                <div className="grid gap-4 md:grid-cols-2">
                  <GradientCard subtle>
                    <h3 className="mb-2 font-semibold">{t.problem}</h3>
                    <p className="text-sm leading-7 text-muted-foreground">
                      {project.problem}
                    </p>
                  </GradientCard>
                  <GradientCard subtle>
                    <h3 className="mb-2 font-semibold">{t.objectives}</h3>
                    <EvidenceList items={project.highlights} />
                  </GradientCard>
                </div>
              </CaseStudySection>

              <CaseStudySection id="solution" title={t.solution}>
                <div className="grid gap-4 md:grid-cols-2">
                  <GradientCard subtle>
                    <h3 className="mb-2 font-semibold">{t.solutionBuilt}</h3>
                    <p className="text-sm leading-7 text-muted-foreground">
                      {project.solution}
                    </p>
                  </GradientCard>
                  <GradientCard subtle>
                    <h3 className="mb-2 font-semibold">{t.solutionReasoning}</h3>
                    <p className="text-sm leading-7 text-muted-foreground">
                      {project.caseStudySections[1]?.body ?? project.solution}
                    </p>
                  </GradientCard>
                </div>
              </CaseStudySection>

              <CaseStudySection
                id="architecture"
                title={t.architecture}
                description={t.architectureDescription}
              >
                <div className="grid gap-4 md:grid-cols-2">
                  {architecture.map((item) => (
                    <ArchitectureCard
                      key={item.label}
                      label={item.label}
                      title={item.title}
                      description={item.description}
                    />
                  ))}
                </div>
              </CaseStudySection>

              <CaseStudySection id="challenges" title={t.challenges}>
                <GradientCard subtle>
                  <EvidenceList items={project.challenges} />
                </GradientCard>
              </CaseStudySection>

              <CaseStudySection id="decisions" title={t.decisions}>
                <div className="grid gap-4 md:grid-cols-3">
                  {project.highlights.map((highlight) => (
                    <GradientCard key={highlight} subtle>
                      <p className="text-sm leading-7 text-muted-foreground">
                        {highlight}
                      </p>
                    </GradientCard>
                  ))}
                </div>
              </CaseStudySection>

              <CaseStudySection
                id="quality"
                title={t.quality}
                description={t.qualityIntro}
              >
                <div className="grid gap-4 md:grid-cols-2">
                  <GradientCard subtle>
                    <h3 className="mb-2 font-semibold">
                      {locale === "fr" ? "Approche de test" : "Testing approach"}
                    </h3>
                    <p className="text-sm leading-7 text-muted-foreground">
                      {project.caseStudySections[2]?.body ?? t.qualityIntro}
                    </p>
                  </GradientCard>
                  <GradientCard subtle>
                    <h3 className="mb-2 font-semibold">
                      {locale === "fr"
                        ? "Maintenabilité et analyse"
                        : "Maintainability and analysis"}
                    </h3>
                    <EvidenceList
                      items={[
                        "JUnit",
                        "Postman",
                        "SonarCloud",
                        locale === "fr"
                          ? "Architecture lisible et responsabilités séparées"
                          : "Readable architecture and separated responsibilities",
                      ].filter((item) =>
                        item === "JUnit" ||
                        item === "Postman" ||
                        item === "SonarCloud"
                          ? project.stack.includes(item)
                          : true,
                      )}
                    />
                  </GradientCard>
                </div>
              </CaseStudySection>

              <CaseStudySection id="results" title={t.results}>
                <GradientCard subtle>
                  <EvidenceList items={project.results} />
                </GradientCard>
              </CaseStudySection>

              <CaseStudySection
                id="lessons"
                title={t.lessons}
                description={t.lessonsIntro}
              >
                <GradientCard subtle>
                  <EvidenceList items={lessons} />
                </GradientCard>
              </CaseStudySection>
            </div>

            <CaseStudyToc title={t.toc} items={tocItems} />
          </div>
        </Container>
      </main>
    </SiteShell>
  );
}
