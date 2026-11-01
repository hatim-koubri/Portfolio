import { profileEn } from "@/content/profile/profile.en";
import { profileFr } from "@/content/profile/profile.fr";
import { defaultLocale, isLocale, type Locale } from "@/lib/constants/locales";

export const profiles = {
  fr: profileFr,
  en: profileEn,
} as const;

export function getProfile(locale: string | Locale) {
  return profiles[isLocale(locale) ? locale : defaultLocale];
}
