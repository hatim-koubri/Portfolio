"use client";

import type { MouseEvent } from "react";

type TocItem = {
  id: string;
  label: string;
};

type CaseStudyTocProps = {
  title: string;
  items: TocItem[];
};

export function CaseStudyToc({ title, items }: CaseStudyTocProps) {
  return (
    <aside className="hidden lg:block">
      <div className="sticky top-24 rounded-xl border bg-card/70 p-4 text-sm shadow-sm backdrop-blur">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
          {title}
        </p>
        <nav aria-label={title}>
          <ol className="space-y-1">
            {items.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={(event: MouseEvent<HTMLAnchorElement>) => {
                    event.preventDefault();
                    window.history.replaceState(
                      window.history.state,
                      "",
                      `${window.location.pathname}${window.location.search}#${item.id}`,
                    );
                    document.getElementById(item.id)?.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                  }}
                  className="block rounded-md px-3 py-2 text-muted-foreground transition hover:bg-muted hover:text-foreground focus-visible:bg-muted focus-visible:text-foreground"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ol>
        </nav>
      </div>
    </aside>
  );
}
