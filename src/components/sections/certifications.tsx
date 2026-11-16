"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, ChevronUp, FileText } from "lucide-react";
import { Container } from "@/components/shared/container";
import { SectionHeader } from "@/components/shared/section-header";
import { Reveal } from "@/components/motion/reveal";
import type { Locale } from "@/lib/constants/locales";

type Certificate = {
  title: string;
  file: string;
};

const certificates: Certificate[] = [
  { title: "Java Programming for Beginners", file: "Java Programming for Beginners.pdf" },
  { title: "Agile Project Management", file: "Agile Project Management.pdf" },
  { title: "Introduction to Python", file: "In python 365.pdf" },
  { title: "Introduction to Cloud Computing", file: "Introduction to Cloud Computing.pdf" },
  { title: "Introduction to Machine Learning", file: "Introduction to Machine Learning.pdf" },
  { title: "Introduction to Big Data", file: "Introduction to Big Data.pdf" },
  { title: "Introduction to NoSQL Databases", file: "Introduction to NoSQL Databases.pdf" },
  { title: "Introduction to Java Enterprise Edition (EE)", file: "Introduction to Java Enterprise Edition (EE).pdf" },
  { title: "Intermediate Java", file: "intermediate java.pdf" },
  { title: "Introduction to C++", file: "In C++.pdf" },
  { title: "Introduction to HTML", file: "In Html.pdf" },
  { title: "Introduction to SQL", file: "In SQL.pdf" },
  { title: "1 Million Prompters Initiative - Certificate of Completion", file: "hatim-koubri-certificate.pdf" },
  { title: "Linux Fundamentals", file: "Linux Fundamentals.pdf" },
];

const copy = {
  fr: {
    eyebrow: "Certifications",
    title: "Des compétences validées par des certificats.",
    description: "Consultez les certificats de formation et les compétences acquises.",
    view: "Voir le certificat",
    more: "Voir toutes les certifications",
    less: "Voir moins",
  },
  en: {
    eyebrow: "Certifications",
    title: "Skills backed by certificates.",
    description: "Browse training certificates and the skills covered.",
    view: "View certificate",
    more: "See all certifications",
    less: "Show fewer",
  },
} as const;

export function Certifications({ locale }: { locale: Locale }) {
  const [showAll, setShowAll] = useState(false);
  const t = copy[locale];
  const visibleCertificates = showAll ? certificates : certificates.slice(0, 3);
  const previewPath = (file: string) => {
    const slug = file.replace(/\.pdf$/i, "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
    return `/certificat/previews/${slug}-1.jpg`;
  };

  return (
    <section id="certifications" aria-label={t.eyebrow} className="pb-16 pt-8 sm:pb-24 sm:pt-10">
      <Container className="space-y-8">
        <Reveal>
          <SectionHeader eyebrow={t.eyebrow} title={t.title} description={t.description} />
        </Reveal>

        <div id="certifications-list" className="grid items-stretch gap-5 md:grid-cols-2 xl:grid-cols-3">
          {visibleCertificates.map((certificate) => (
            <Reveal key={certificate.file} className="h-full">
              <article className="flex h-full flex-col overflow-hidden rounded-xl border bg-card shadow-sm">
                <div className="relative aspect-[16/10] border-b bg-muted/40 p-3">
                  <Image
                    src={previewPath(certificate.file)}
                    alt={`${certificate.title} certificate preview`}
                    fill
                    sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-contain p-3"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-lg font-semibold">{certificate.title}</h3>
                  <p className="mt-2 flex-1 text-sm text-muted-foreground">PDF</p>
                  <a
                    href={`/certificat/${encodeURIComponent(certificate.file)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 inline-flex h-10 items-center justify-center gap-2 self-start rounded-md border bg-background px-4 text-sm font-medium transition hover:border-accent hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
                  >
                    <FileText className="size-4" aria-hidden="true" />
                    {t.view}
                    <ArrowUpRight className="size-4" aria-hidden="true" />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {certificates.length > 3 ? (
          <div className="flex justify-center">
            <button
              type="button"
              onClick={() => setShowAll((current) => !current)}
              aria-expanded={showAll}
              aria-controls="certifications-list"
              className="inline-flex items-center gap-2 rounded-full border bg-card px-5 py-2.5 text-sm font-semibold transition hover:border-accent hover:text-accent"
            >
              {showAll ? t.less : t.more}
              {showAll ? <ChevronUp className="size-4" aria-hidden="true" /> : <ArrowUpRight className="size-4" aria-hidden="true" />}
            </button>
          </div>
        ) : null}
      </Container>
    </section>
  );
}
