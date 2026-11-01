import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { RootProvider } from "@/providers/root-provider";
import { createMetadata } from "@/lib/seo/site-metadata";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = createMetadata({
  title: {
    default: "Software Engineer Portfolio",
    template: "%s | Software Engineer Portfolio",
  },
  description: "A premium software engineer portfolio foundation.",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-background text-foreground">
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
