import { ArrowDownToLine, ExternalLink, Mail } from "lucide-react";
import { Container } from "@/components/shared/container";
import { Button } from "@/components/shared/button";
import { Reveal } from "@/components/motion/reveal";
import { HeroAvailability } from "@/components/sections/hero-availability";
import { HeroPhoto } from "@/components/sections/hero-photo";
import { HeroStatusCard } from "@/components/sections/hero-status-card";
import { HeroTechPill } from "@/components/sections/hero-tech-pill";
import type { Locale } from "@/lib/constants/locales";
import type { Profile } from "@/types/portfolio";

type HeroProps = {
  profile: Profile;
  locale: Locale;
};

const heroTechStack = ["Java", "Spring Boot", "Next.js", "TypeScript"];

export function Hero({ profile, locale }: HeroProps) {
  const socialLinks = profile.socialLinks.filter((link) =>
    ["GitHub", "LinkedIn"].includes(link.label),
  );

  return (
    <section
      aria-labelledby="hero-title"
      className="relative overflow-hidden pb-8 pt-14 sm:pb-10 sm:pt-20 lg:pb-12 lg:pt-24"
    >
      <div className="pointer-events-none absolute left-1/2 top-10 h-72 w-72 -translate-x-1/2 rounded-full bg-accent/10 blur-3xl motion-reduce:hidden" />
      <Container className="relative grid items-center gap-10 lg:grid-cols-[minmax(0,1.45fr)_340px] xl:grid-cols-[minmax(0,1.55fr)_360px]">
        <Reveal>
          <div className="max-w-5xl space-y-7">
            <div className="space-y-5">
              <HeroAvailability label={profile.availability} />
              <div className="space-y-4">
                <p className="text-sm font-semibold text-accent">
                  {profile.education.level}
                </p>
                <h1
                  id="hero-title"
                  className="text-4xl font-bold leading-tight tracking-tight text-balance text-foreground sm:text-5xl lg:text-6xl"
                >
                  {profile.identity.name}
                </h1>
                <h2 className="max-w-5xl text-3xl font-semibold leading-[1.08] tracking-normal text-balance text-muted-foreground sm:text-4xl lg:text-[3.25rem]">
                  {profile.headline}
                </h2>
                <p className="max-w-3xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
                  {profile.shortBio}
                </p>
              </div>
            </div>

            <ul className="flex flex-wrap gap-2.5 pt-1" aria-label="Core technologies">
              {heroTechStack.map((tech) => (
                <li key={tech}>
                  <HeroTechPill label={tech} />
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-3 pt-1">
              <Button href="#projects" size="lg" showArrow>
                {profile.ctaLabels.viewProjects}
              </Button>
              <Button
                href="/cv/Hatim-Koubri-CV.pdf"
                size="lg"
                variant="secondary"
                icon={<ArrowDownToLine className="size-4" aria-hidden="true" />}
              >
                {profile.ctaLabels.downloadCv}
              </Button>
              <Button
                href="#contact"
                size="lg"
                variant="ghost"
                icon={<Mail className="size-4" aria-hidden="true" />}
              >
                {profile.ctaLabels.contact}
              </Button>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 transition hover:text-foreground"
                >
                  {link.label}
                  <ExternalLink className="size-3.5" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal transition={{ delay: 0.08, duration: 0.5 }}>
          <div className="grid gap-4 sm:grid-cols-[0.78fr_1fr] lg:grid-cols-1 lg:justify-items-end">
            <HeroPhoto
              name={profile.identity.name}
              className="mx-auto w-full max-w-[260px] sm:max-w-[280px] lg:mx-0 lg:max-w-[292px]"
            />
            <HeroStatusCard profile={profile} locale={locale} />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
