import { projectsEn } from "@/content/projects/projects.en";
import { projectsFr } from "@/content/projects/projects.fr";
import { defaultLocale, isLocale, type Locale } from "@/lib/constants/locales";

export const projects = {
  fr: projectsFr,
  en: projectsEn,
} as const;

export function getProjects(locale: string | Locale) {
  return projects[isLocale(locale) ? locale : defaultLocale];
}
