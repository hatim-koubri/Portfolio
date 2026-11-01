import { ExternalLink, FileText, Layers3 } from "lucide-react";
import { Badge } from "@/components/shared/badge";
import { Button } from "@/components/shared/button";
import { GradientCard } from "@/components/shared/gradient-card";
import { SafeProjectImage } from "@/components/shared/safe-project-image";
import { ProjectTechStack } from "@/components/cards/project-tech-stack";
import type { Locale } from "@/lib/constants/locales";
import type { Project } from "@/types/portfolio";

type ProjectCardProps = {
  project: Project;
  locale: Locale;
};

const labels = {
  fr: {
    role: "Rôle",
    evidence: "Preuves d'ingénierie",
    caseStudy: "Voir l'étude de cas",
    github: "Voir le code",
    report: "Voir le rapport",
    codeSoon: "Code bient\u00f4t disponible",
    visual: "Étude de cas",
  },
  en: {
    role: "Role",
    evidence: "Engineering evidence",
    caseStudy: "View case study",
    github: "View code",
    report: "View report",
    codeSoon: "Code coming soon",
    visual: "Case study",
  },
} as const;

const conciseCopy = {
  fr: {
    "khotwa-e-learning-platform": {
      description: "Plateforme e-learning Web et mobile pour apprendre, s’évaluer et suivre sa progression.",
      role: "Développement full-stack en stage chez MIC Consulting Group.",
      highlights: ["Cours, quiz et suivi de progression.", "Espaces pour apprenants, formateurs et administrateurs."],
    },
    "rihla-intelligent-bus-station-platform": {
      description: "Plateforme de gestion de gare routière reliant voyageurs, chauffeurs et compagnies.",
      role: "Conception et développement full-stack de la plateforme.",
      highlights: ["Système distribué avec API, messagerie et notifications temps réel.", "Identification des bus par OCR et YOLOv8."],
    },
    "kaynbus-real-time-bus-geolocation": {
      description: "Application Web et mobile de suivi des bus et de planification des trajets.",
      role: "Développement full-stack et intégration de l’application mobile.",
      highlights: ["Localisation GPS des bus sur carte.", "Gestion des lignes, arrêts et trajets."],
    },
  },
  en: {
    "khotwa-e-learning-platform": {
      description: "Web and mobile learning platform for courses, assessments, and progress tracking.",
      role: "Full-stack development internship at MIC Consulting Group.",
      highlights: ["Courses, quizzes, and learner progress.", "Dedicated learner, trainer, and admin areas."],
    },
    "rihla-intelligent-bus-station-platform": {
      description: "Bus station platform connecting passengers, drivers, and transport companies.",
      role: "Full-stack platform design and development.",
      highlights: ["Distributed services, messaging, and real-time updates.", "Bus identification with OCR and YOLOv8."],
    },
    "kaynbus-real-time-bus-geolocation": {
      description: "Web and mobile app for bus tracking and trip planning.",
      role: "Full-stack development and mobile integration.",
      highlights: ["Live GPS bus locations on a map.", "Routes, stops, and trip management."],
    },
  },
} as const;

function getProjectInitials(title: string) {
  return title
    .split(" ")
    .filter(Boolean)
    .slice(0, 3)
    .map((word) => word[0])
    .join("")
    .toUpperCase();
}

export function ProjectCard({ project, locale }: ProjectCardProps) {
  const t = labels[locale];
  const caseStudyHref = `/${locale}/projects/${project.slug}`;
  const hasGithubUrl = Boolean(project.githubUrl && project.githubUrl !== "#");
  const visibleStack = project.stack.slice(0, 3);
  const hiddenStackCount = Math.max(project.stack.length - visibleStack.length, 0);
  const concise = conciseCopy[locale][project.slug as keyof (typeof conciseCopy)[typeof locale]];

  return (
    <GradientCard className="group h-full p-0 transition duration-300 hover:-translate-y-1 hover:border-accent/45 hover:shadow-[0_28px_100px_color-mix(in_srgb,var(--accent)_14%,transparent)] focus-within:border-accent/50">
      <article className="flex h-full flex-col gap-3 p-3 sm:p-4">
        <div className="relative overflow-hidden rounded-lg border bg-background/60 transition group-hover:border-accent/35">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_24%_18%,color-mix(in_srgb,var(--accent)_28%,transparent),transparent_35%),linear-gradient(135deg,color-mix(in_srgb,var(--card)_88%,transparent),color-mix(in_srgb,var(--muted)_74%,transparent))]" />
          <div className="relative flex aspect-[16/6] items-center justify-center">
            <SafeProjectImage
              src={project.coverImage}
              alt={`${project.title} cover screenshot`}
              fallbackLabel={getProjectInitials(project.title)}
              sizes="(min-width: 1280px) 33vw, (min-width: 1024px) 50vw, 100vw"
            />
            <div className="absolute bottom-3 left-3 inline-flex items-center gap-2 rounded-full border bg-card/75 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur">
              <Layers3 className="size-3.5 text-accent" aria-hidden="true" />
              {t.visual}
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <div className="space-y-1.5">
            <div className="min-h-16 content-start flex flex-wrap gap-2">
              <Badge variant={project.status ? "accent" : "outline"}>
                {project.status ?? project.category}
              </Badge>
              {project.status ? <Badge variant="outline">{project.category}</Badge> : null}
            </div>
            <h3 className="text-xl font-semibold leading-tight tracking-normal">
              {project.title}
            </h3>
            <p className="line-clamp-2 min-h-10 text-sm leading-5 text-muted-foreground">
              {concise?.description ?? project.shortDescription}
            </p>
          </div>

        </div>

        <ProjectTechStack
          stack={[
            ...visibleStack,
            ...(hiddenStackCount > 0 ? [`+${hiddenStackCount}`] : []),
          ]}
        />

        <div className="mt-auto flex flex-wrap gap-2 pt-1">
          <Button href={caseStudyHref} showArrow>
            {t.caseStudy}
          </Button>
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
          {hasGithubUrl && project.githubUrl ? (
            <Button
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              variant="secondary"
              icon={<ExternalLink className="size-4" aria-hidden="true" />}
            >
              {t.github}
            </Button>
          ) : null}
        </div>
      </article>
    </GradientCard>
  );
}

