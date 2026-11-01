import type { ReactNode } from "react";
import Link from "next/link";
import { Code2 } from "lucide-react";
import { Footer } from "@/components/layout/footer";
import { Container } from "@/components/shared/container";
import { LanguageSwitcher } from "@/components/shared/language-switcher";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { cn } from "@/lib/utils/cn";
import type { Translations } from "@/content/translations";
import type { Locale } from "@/lib/constants/locales";
import type { Profile } from "@/types/portfolio";

type SiteShellProps = {
  children: ReactNode;
  locale: Locale;
  translations: Translations;
  profile: Profile;
  className?: string;
};

export function SiteShell({
  children,
  locale,
  translations,
  profile,
  className,
}: SiteShellProps) {
  const t = translations;

  return (
    <div
      className={cn(
        "relative min-h-screen overflow-x-clip bg-background text-foreground",
        className,
      )}
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[520px] bg-[var(--gradient-radial)]" />
      <div className="premium-grid pointer-events-none absolute inset-x-0 top-0 h-[620px] opacity-45" />

      <header className="sticky top-0 z-50 border-b border-border/70 bg-background/90 shadow-sm backdrop-blur-xl">
        <Container className="flex h-16 items-center justify-between gap-4">
          <Link
            href={`/${locale}`}
            aria-label="Portfolio home"
            className="inline-flex items-center gap-3 font-semibold tracking-normal"
          >
            <span className="inline-flex size-9 items-center justify-center rounded-md border bg-card shadow-sm">
              <Code2 className="size-4 text-accent" />
            </span>
            <span className="hidden sm:inline">{t.navigation.home}</span>
          </Link>

          <nav aria-label={t.navigation.aria} className="hidden md:block">
            <div className="flex items-center gap-1 rounded-md border bg-card/55 p-1 text-sm text-muted-foreground backdrop-blur">
              <Link href={`/${locale}/#about`} className="rounded-sm px-3 py-1.5 transition hover:bg-muted hover:text-foreground">
                {t.navigation.about}
              </Link>
              <Link href={`/${locale}/#projects`} className="rounded-sm px-3 py-1.5 transition hover:bg-muted hover:text-foreground">
                {t.navigation.work}
              </Link>
              <Link href={`/${locale}/#contact`} className="rounded-sm px-3 py-1.5 transition hover:bg-muted hover:text-foreground">
                {t.navigation.contact}
              </Link>
            </div>
          </nav>

          <div className="flex items-center gap-2">
            <LanguageSwitcher className="hidden sm:inline-flex" />
            <ThemeToggle />
          </div>
        </Container>
      </header>

      <div className="relative z-10 flex min-h-[calc(100vh-4rem)] flex-col">
        <div className="flex-1">{children}</div>
        <Footer locale={locale} translations={translations} profile={profile} />
      </div>
    </div>
  );
}
