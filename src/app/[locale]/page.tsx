import type { Metadata } from "next";
import { About } from "@/components/sections/about";
import { Achievements } from "@/components/sections/achievements";
import { Contact } from "@/components/sections/contact";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import { Hero } from "@/components/sections/hero";
import { Skills } from "@/components/sections/skills";
import { SiteShell } from "@/components/layout/site-shell";
import { getLocaleContent } from "@/content";
import { defaultLocale, isLocale, type Locale } from "@/lib/constants/locales";
import { getTranslations } from "@/lib/utils/get-translations";
import { createMetadata, siteMetadata } from "@/lib/seo/site-metadata";

type LocalePageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export async function generateMetadata({
  params,
}: LocalePageProps): Promise<Metadata> {
  const { locale: requestedLocale } = await params;
  const locale = isLocale(requestedLocale) ? requestedLocale : defaultLocale;
  const t = getTranslations(locale);

  return createMetadata({
    title: siteMetadata.title,
    description: t.seo.description,
    alternates: {
      canonical: `/${locale}`,
      languages: {
        fr: "/fr",
        en: "/en",
      },
    },
    openGraph: {
      title: siteMetadata.title,
      description: t.seo.description,
      url: `${siteMetadata.url}/${locale}`,
      locale,
    },
    twitter: {
      title: siteMetadata.title,
      description: t.seo.description,
    },
  });
}

export default async function Home({ params }: LocalePageProps) {
  const { locale: requestedLocale } = await params;
  const locale: Locale = isLocale(requestedLocale)
    ? requestedLocale
    : defaultLocale;
  const translations = getTranslations(locale);
  const { profile, projects, skills, achievements } = getLocaleContent(locale);

  return (
    <SiteShell locale={locale} translations={translations} profile={profile}>
      <main>
        <Hero profile={profile} locale={locale} />
        <FeaturedProjects projects={projects} locale={locale} />
        <Skills skills={skills} locale={locale} />
        <About profile={profile} locale={locale} />
        <Achievements achievements={achievements} locale={locale} />
        <Contact profile={profile} locale={locale} />
      </main>
    </SiteShell>
  );
}
