export const supportedLocales = ["fr", "en"] as const;

export type Locale = (typeof supportedLocales)[number];

export const defaultLocale: Locale = "fr";

export const localeLabels: Record<Locale, string> = {
  fr: "FR",
  en: "EN",
};

export function isLocale(locale: string): locale is Locale {
  return supportedLocales.includes(locale as Locale);
}
