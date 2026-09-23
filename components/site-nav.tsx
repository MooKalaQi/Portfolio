"use client";

import { useActiveSection } from "@/lib/use-active-section";
import type { Dict } from "@/lib/dictionaries";
import { sectionIds, type Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import { LangToggle } from "./lang-toggle";
import { ThemeToggle } from "./theme-toggle";

export function SiteNav({ lang, dict }: { lang: Locale; dict: Dict }) {
  const active = useActiveSection();

  return (
    <header
      id="site-nav"
      className="site-nav sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur-md"
    >
      <nav className="site-nav__inner mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-6 py-3">
        <a href="#home" className="site-nav__logo hidden text-sm font-bold tracking-tight sm:block">
          MooKalaQi
        </a>
        {/* On desktop the side timeline is the section nav, so these would duplicate it. */}
        <ul className="site-nav__list flex items-center gap-1 text-sm lg:hidden">
          {sectionIds.map((id) => (
            <li key={id} className={`site-nav__item site-nav__item--${id}`}>
              <a
                href={`#${id}`}
                aria-current={active === id ? "true" : undefined}
                className={cn(
                  "site-nav__link rounded-md px-2 py-1.5 text-xs transition-colors sm:px-2.5 sm:text-sm",
                  active === id
                    ? "site-nav__link--active font-semibold text-brand-ink"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {dict.sections[id]}
              </a>
            </li>
          ))}
        </ul>
        <div className="site-nav__actions flex items-center gap-2">
          <LangToggle lang={lang} dict={dict} />
          <ThemeToggle label={dict.ui.themeToggle} />
        </div>
      </nav>
    </header>
  );
}
