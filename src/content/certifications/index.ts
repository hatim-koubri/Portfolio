import { certificationsEn } from "@/content/certifications/certifications.en";
import { certificationsFr } from "@/content/certifications/certifications.fr";
import { defaultLocale, isLocale, type Locale } from "@/lib/constants/locales";

export const certifications = {
  fr: certificationsFr,
  en: certificationsEn,
} as const;

export function getCertifications(locale: string | Locale) {
  return certifications[isLocale(locale) ? locale : defaultLocale];
}
