import type { Metadata } from "next";

export const siteMetadata = {
  title: "Hatim Koubri | Software Engineering Portfolio",
  description:
    "Professional portfolio of Hatim Koubri, software engineering student specializing in Java, Spring Boot, Next.js, TypeScript, software quality, and full-stack development.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://hatimkoubri.dev",
  author: "Hatim Koubri",
  keywords: [
    "Hatim Koubri",
    "Software Engineering Portfolio",
    "Java",
    "Spring Boot",
    "Next.js",
    "TypeScript",
    "Software Quality",
    "Full-stack Development",
  ],
} as const;

export function createMetadata(metadata: Metadata = {}): Metadata {
  const { openGraph, twitter, ...rest } = metadata;
  const title = typeof metadata.title === "string" ? metadata.title : siteMetadata.title;
  const description =
    typeof metadata.description === "string"
      ? metadata.description
      : siteMetadata.description;

  return {
    metadataBase: new URL(siteMetadata.url),
    title: metadata.title ?? siteMetadata.title,
    description,
    keywords: [...siteMetadata.keywords],
    authors: [{ name: siteMetadata.author }],
    creator: siteMetadata.author,
    publisher: siteMetadata.author,
    openGraph: {
      type: "website",
      siteName: siteMetadata.title,
      title,
      description,
      url: siteMetadata.url,
      ...openGraph,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      ...twitter,
    },
    ...rest,
  };
}
