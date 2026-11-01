import { en } from "@/content/translations/en";
import { fr } from "@/content/translations/fr";
import type { Locale } from "@/lib/constants/locales";

export const translations = {
  fr,
  en,
} as const satisfies Record<Locale, typeof fr>;

export type Translations = typeof fr;
