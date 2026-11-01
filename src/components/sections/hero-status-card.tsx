import { MapPin, School, Target, Workflow } from "lucide-react";
import { GradientCard } from "@/components/shared/gradient-card";
import type { Locale } from "@/lib/constants/locales";
import type { Profile } from "@/types/portfolio";

type HeroStatusCardProps = {
  profile: Profile;
  locale: Locale;
};

export function HeroStatusCard({ profile, locale }: HeroStatusCardProps) {
  const labels = {
    fr: {
      location: "Localisation",
      target: "Objectif",
      education: "Formation",
      focus: "Focus",
      focusValue: "Ingénierie full-stack",
    },
    en: {
      location: "Location",
      target: "Target",
      education: "Education",
      focus: "Focus",
      focusValue: "Full-stack Engineering",
    },
  }[locale];

  const items = [
    {
      label: labels.location,
      value: profile.identity.country,
      icon: MapPin,
    },
    {
      label: labels.target,
      value:
        locale === "fr"
          ? "Stage PFE en ingénierie logicielle"
          : "Software Engineering PFE Internship",
      icon: Target,
    },
    {
      label: labels.education,
      value: profile.education.school,
      icon: School,
    },
    {
      label: labels.focus,
      value: labels.focusValue,
      icon: Workflow,
    },
  ];

  return (
    <GradientCard subtle className="p-0">
      <dl className="grid gap-0 divide-y divide-border/70">
        {items.map((item) => {
          const Icon = item.icon;

          return (
            <div key={item.label} className="flex items-start gap-3 p-4">
              <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-md border bg-background/70 text-accent">
                <Icon className="size-4" aria-hidden="true" />
              </span>
              <div className="min-w-0 space-y-1">
                <dt className="text-xs font-medium uppercase tracking-[0.12em] text-muted-foreground">
                  {item.label}
                </dt>
                <dd className="text-sm font-medium text-foreground">{item.value}</dd>
              </div>
            </div>
          );
        })}
      </dl>
    </GradientCard>
  );
}
