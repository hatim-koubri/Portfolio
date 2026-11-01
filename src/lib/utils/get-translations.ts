import { defaultLocale, isLocale, type Locale } from "@/lib/constants/locales";
import { translations } from "@/content/translations";

export function getTranslations(locale: string | Locale) {
  return translations[isLocale(locale) ? locale : defaultLocale];
}
