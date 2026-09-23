"use client";

import type { Dict } from "@/lib/dictionaries";
import { sectionIds } from "@/lib/i18n";
import { useActiveSection } from "@/lib/use-active-section";
import { cn } from "@/lib/utils";

/**
 * Section navigation as a timeline. Rail sits at the inline-start, following the
 * vibefarsi timeline pattern — logical properties, so it mirrors with `dir`.
 */
export function SectionTimeline({ dict }: { dict: Dict }) {
  const active = useActiveSection();

  return (
    <nav id="section-timeline" className="timeline" aria-label={dict.ui.sectionsNav}>
      <p className="timeline__label mb-4 text-xs tracking-[0.2em] text-muted-foreground">
        [ {dict.ui.sectionsLabel} ]
      </p>
      <ol className="timeline__list relative space-y-4 border-s border-border ps-5">
        {sectionIds.map((id) => {
          const on = id === active;
          return (
            <li
              key={id}
              className={cn("timeline__item relative", `timeline__item--${id}`, on && "timeline__item--active")}
            >
              <span
                aria-hidden
                className={cn(
                  "timeline__dot absolute -start-[25px] top-1.5 size-2.5 rounded-full border-2 border-background transition-colors",
                  on ? "timeline__dot--active bg-brand" : "bg-muted-foreground/50",
                )}
              />
              <a
                href={`#${id}`}
                aria-current={on ? "true" : undefined}
                className={cn(
                  "timeline__link text-sm leading-5 transition-colors",
                  on ? "timeline__link--active font-semibold text-foreground" : "text-muted-foreground hover:text-foreground",
                )}
              >
                {dict.sections[id]}
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
