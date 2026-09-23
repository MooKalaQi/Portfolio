"use client";

import { Moon, Sun } from "lucide-react";

/**
 * No state: the icon is chosen by the `dark:` variant off the class on <html>,
 * so there's nothing to sync on mount and nothing to mismatch during hydration.
 */
export function ThemeToggle({ label }: { label: string }) {
  function toggle() {
    const next = !document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {
      // Safari private mode throws on write; the toggle still works for this page view.
    }
  }

  return (
    <button
      id="theme-toggle"
      type="button"
      onClick={toggle}
      aria-label={label}
      className="theme-toggle inline-flex size-10 shrink-0 items-center justify-center rounded-lg border border-border bg-card text-foreground transition-colors hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
    >
      <Moon className="theme-toggle__icon theme-toggle__icon--moon size-5 dark:hidden" />
      <Sun className="theme-toggle__icon theme-toggle__icon--sun hidden size-5 dark:block" />
    </button>
  );
}
