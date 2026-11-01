"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Languages } from "lucide-react";
import { cn } from "@/lib/utils/cn";
import {
  defaultLocale,
  isLocale,
  localeLabels,
  supportedLocales,
  type Locale,
} from "@/lib/constants/locales";

type LanguageSwitcherProps = {
  className?: string;
};

export function LanguageSwitcher({ className }: LanguageSwitcherProps) {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);
  const currentLocale: Locale = isLocale(segments[0])
    ? segments[0]
    : defaultLocale;
  const pathWithoutLocale = isLocale(segments[0])
    ? segments.slice(1).join("/")
    : segments.join("/");

  function getLocalePath(locale: Locale) {
    return pathWithoutLocale ? `/${locale}/${pathWithoutLocale}` : `/${locale}`;
  }

  return (
    <div
      aria-label="Language switcher"
      role="group"
      className={cn(
        "inline-flex h-10 items-center gap-1 rounded-md border bg-card/70 p-1 text-sm font-medium text-muted-foreground backdrop-blur",
        className,
      )}
    >
      <Languages className="ml-2 size-4" />
      {supportedLocales.map((locale) => (
        <Link
          key={locale}
          href={getLocalePath(locale)}
          hrefLang={locale}
          aria-label={`Switch language to ${localeLabels[locale]}`}
          aria-current={currentLocale === locale ? "true" : undefined}
          className={cn(
            "rounded-sm px-2 py-1 transition hover:bg-muted hover:text-foreground",
            currentLocale === locale && "bg-background text-foreground shadow-sm",
          )}
        >
          {localeLabels[locale]}
        </Link>
      ))}
    </div>
  );
}
