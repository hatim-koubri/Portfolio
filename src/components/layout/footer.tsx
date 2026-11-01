import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { Container } from "@/components/shared/container";
import { LanguageSwitcher } from "@/components/shared/language-switcher";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import type { Translations } from "@/content/translations";
import type { Locale } from "@/lib/constants/locales";
import type { Profile } from "@/types/portfolio";

type FooterProps = {
  locale: Locale;
  translations: Translations;
  profile: Profile;
};

const footerCopy = {
  fr: {
    nav: "Navigation rapide",
    skills: "Compétences",
    preferences: "Préférences",
    rights: "Tous droits réservés.",
  },
  en: {
    nav: "Quick navigation",
    skills: "Skills",
    preferences: "Preferences",
    rights: "All rights reserved.",
  },
} as const;

export function Footer({ locale, translations, profile }: FooterProps) {
  const copy = footerCopy[locale];
  const year = new Date().getFullYear();
  const github = profile.socialLinks.find((link) => link.label === "GitHub");
  const linkedin = profile.socialLinks.find((link) => link.label === "LinkedIn");
  const navItems = [
    { href: `/${locale}/#projects`, label: translations.navigation.work },
    { href: `/${locale}/#skills`, label: copy.skills },
    { href: `/${locale}/#about`, label: translations.navigation.about },
    { href: `/${locale}/#contact`, label: translations.navigation.contact },
  ];

  return (
    <footer className="border-t border-border/70 bg-background/80">
      <Container className="grid gap-8 py-10 lg:grid-cols-[1fr_auto]">
        <div className="space-y-4">
          <div className="space-y-2">
            <Link href={`/${locale}`} className="text-lg font-semibold">
              {profile.identity.name}
            </Link>
            <p className="max-w-xl text-sm leading-6 text-muted-foreground">
              {profile.headline}
            </p>
          </div>
          <p className="text-sm text-muted-foreground">
            © {year} {profile.identity.name}. {copy.rights}
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-[auto_auto_auto]">
          <nav aria-label={copy.nav} className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              {copy.nav}
            </p>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="transition hover:text-foreground"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>

          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              {translations.footer.social}
            </p>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              {[github, linkedin].filter(Boolean).map((link) => (
                <a
                  key={link?.label}
                  href={link?.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 transition hover:text-foreground"
                >
                  {link?.label}
                  <ExternalLink className="size-3.5" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              {copy.preferences}
            </p>
            <div className="flex flex-wrap gap-2">
              <LanguageSwitcher />
              <ThemeToggle />
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
