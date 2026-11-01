import { getCertifications } from "@/content/certifications";
import { achievements } from "@/content/profile/achievements";
import { getProfile } from "@/content/profile";
import { skills } from "@/content/profile/skills";
import { getProjects } from "@/content/projects";
import { defaultLocale, isLocale, type Locale } from "@/lib/constants/locales";
import type { LocaleContent } from "@/types/portfolio";

export function getLocaleContent(locale: string | Locale): LocaleContent {
  const resolvedLocale = isLocale(locale) ? locale : defaultLocale;

  return {
    locale: resolvedLocale,
    profile: getProfile(resolvedLocale),
    skills,
    projects: getProjects(resolvedLocale),
    achievements,
    certifications: getCertifications(resolvedLocale),
  };
}
