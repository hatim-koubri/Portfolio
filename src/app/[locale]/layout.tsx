import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  defaultLocale,
  isLocale,
  supportedLocales,
} from "@/lib/constants/locales";
import { getTranslations } from "@/lib/utils/get-translations";
import { createMetadata, siteMetadata } from "@/lib/seo/site-metadata";

type LocaleLayoutProps = {
  children: React.ReactNode;
  params: Promise<{
    locale: string;
  }>;
};

export function generateStaticParams() {
  return supportedLocales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: LocaleLayoutProps): Promise<Metadata> {
  const { locale: requestedLocale } = await params;
  const locale = isLocale(requestedLocale) ? requestedLocale : defaultLocale;
  const t = getTranslations(locale);

  return createMetadata({
    title: {
      default: t.seo.title,
      template: t.seo.template,
    },
    description: t.seo.description,
    alternates: {
      canonical: `/${locale}`,
      languages: {
        fr: "/fr",
        en: "/en",
      },
    },
    openGraph: {
      title: t.seo.title,
      description: t.seo.description,
      url: `${siteMetadata.url}/${locale}`,
      locale,
      alternateLocale: supportedLocales.filter(
        (supportedLocale) => supportedLocale !== locale,
      ),
    },
  });
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  return children;
}
