"use client";

import type { Dict } from "@/lib/dictionaries";
import { other, type Locale } from "@/lib/i18n";

/**
 * Switches locale by navigating to the same page under the other language.
 *
 * A plain <a>, not next/link: a full document load keeps the root layout from
 * ever client-rendering, which is what made React warn about the inline theme
 * script, and a dir/lang change is cleaner as a fresh document anyway.
 *
 * Clearing `seen` re-arms the intro loader for that load, so switching language
 * plays it. The boot script sets the flag again on the way in, so an ordinary
 * refresh still skips it. No preventDefault — the href does the navigating.
 */
export function LangToggle({ lang, dict }: { lang: Locale; dict: Dict }) {
  return (
    <a
      id="lang-toggle"
      href={`/${other[lang]}`}
      onClick={() => {
        try {
          sessionStorage.removeItem("seen");
        } catch {
          // Private mode can throw; the switch still works, just without the intro.
        }
      }}
      aria-label={dict.langToggle.aria}
      className="lang-toggle inline-flex h-10 shrink-0 items-center justify-center rounded-lg border border-border bg-card px-3 text-xs font-bold text-foreground transition-colors hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
    >
      {dict.langToggle.label}
    </a>
  );
}
