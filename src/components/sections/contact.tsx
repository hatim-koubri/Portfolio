import { ExternalLink, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/shared/button";
import { Container } from "@/components/shared/container";
import { GradientCard } from "@/components/shared/gradient-card";
import { SectionHeader } from "@/components/shared/section-header";
import { Reveal } from "@/components/motion/reveal";
import type { Locale } from "@/lib/constants/locales";
import type { Profile } from "@/types/portfolio";

type ContactProps = {
  profile: Profile;
  locale: Locale;
};

const copy = {
  fr: {
    eyebrow: "Contact",
    title: "Discutons d'une opportunité de stage, d'un projet ou d'une collaboration technique.",
    description:
      "Pour une équipe de recrutement ou d'ingénierie, le plus simple est de démarrer par LinkedIn ou par email. Le portfolio et GitHub donnent le contexte technique.",
    email: "Envoyer un email",
    phone: "Appeler · 06 42 70 35 34",
    linkedin: "LinkedIn",
    github: "GitHub",
    location: "Localisation",
    locationValue: "Maroc",
    availability: "Disponibilité",
  },
  en: {
    eyebrow: "Contact",
    title: "Interested in discussing an internship opportunity, a project, or software engineering collaboration?",
    description:
      "For recruiting or engineering teams, the easiest path is LinkedIn or email. The portfolio and GitHub provide the technical context.",
    email: "Send email",
    phone: "Call · 06 42 70 35 34",
    linkedin: "LinkedIn",
    github: "GitHub",
    location: "Location",
    locationValue: "Morocco",
    availability: "Availability",
  },
} as const;

export function Contact({ profile, locale }: ContactProps) {
  const t = copy[locale];
  const github = profile.socialLinks.find((link) => link.label === "GitHub");
  const linkedin = profile.socialLinks.find((link) => link.label === "LinkedIn");

  return (
    <section id="contact" aria-labelledby="contact-title" className="py-14 sm:py-20">
      <Container className="space-y-8">
        <Reveal>
          <SectionHeader
            eyebrow={t.eyebrow}
            title={t.title}
            description={t.description}
          />
        </Reveal>

        <Reveal>
          <GradientCard className="p-0">
            <div className="grid gap-0 divide-y divide-border/70 lg:grid-cols-[1fr_auto] lg:divide-x lg:divide-y-0">
              <div className="space-y-6 p-6 sm:p-8">
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-accent">
                    {profile.identity.name}
                  </p>
                  <h3 className="text-3xl font-semibold tracking-normal">
                    {profile.targetRole}
                  </h3>
                  <p className="max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
                    {profile.valueProposition}
                  </p>
                </div>

                <div className="flex flex-wrap gap-3">
                  <Button
                    href={`mailto:${profile.contactEmail}`}
                    icon={<Mail className="size-4" aria-hidden="true" />}
                  >
                    {t.email}
                  </Button>
                  <Button
                    href="tel:+212642703534"
                    variant="secondary"
                    icon={<Phone className="size-4" aria-hidden="true" />}
                  >
                    {t.phone}
                  </Button>
                  {linkedin ? (
                    <Button
                      href={linkedin.href}
                      target="_blank"
                      rel="noreferrer"
                      variant="secondary"
                      icon={<ExternalLink className="size-4" aria-hidden="true" />}
                    >
                      {t.linkedin}
                    </Button>
                  ) : null}
                  {github ? (
                    <Button
                      href={github.href}
                      target="_blank"
                      rel="noreferrer"
                      variant="ghost"
                      icon={<ExternalLink className="size-4" aria-hidden="true" />}
                    >
                      {t.github}
                    </Button>
                  ) : null}
                </div>
              </div>

              <div className="grid min-w-[280px] gap-4 p-6 sm:p-8">
                <div className="rounded-lg border bg-background/45 p-4">
                  <div className="flex items-center gap-3">
                    <MapPin className="size-4 text-accent" aria-hidden="true" />
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                      {t.location}
                    </p>
                  </div>
                  <p className="mt-2 font-medium">{t.locationValue}</p>
                </div>
                <div className="rounded-lg border bg-background/45 p-4">
                  <div className="flex items-center gap-3">
                    <ExternalLink className="size-4 text-accent" aria-hidden="true" />
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                      {t.availability}
                    </p>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {profile.availability}
                  </p>
                </div>
              </div>
            </div>
          </GradientCard>
        </Reveal>
      </Container>
    </section>
  );
}
