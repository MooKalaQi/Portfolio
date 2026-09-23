"use client";

import { useEffect, useRef, useState } from "react";
import { Check, Copy } from "lucide-react";

/**
 * A read-only number with a copy button. `display` is the grouped, readable form;
 * `value` is what actually reaches the clipboard — separators would break a paste
 * into a banking app.
 */
export function CopyField({
  label,
  display,
  value,
  hint,
  copyLabel,
  copiedLabel,
  copyAria,
  copiedAria,
}: {
  label: string;
  display: string;
  value: string;
  hint?: string;
  copyLabel: string;
  copiedLabel: string;
  copyAria: string;
  copiedAria: string;
}) {
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => () => { if (timer.current) clearTimeout(timer.current); }, []);

  async function copy() {
    try {
      await navigator.clipboard.writeText(value);
    } catch {
      // Clipboard API needs a secure context and can be blocked; fall back to
      // a throwaway textarea so http:// and older browsers still work.
      const ta = document.createElement("textarea");
      ta.value = value;
      ta.setAttribute("readonly", "");
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      try {
        document.execCommand("copy");
      } catch {
        return;
      } finally {
        ta.remove();
      }
    }
    setCopied(true);
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setCopied(false), 1800);
  }

  return (
    <div className="copy-field">
      <div className="copy-field__head mb-1.5 flex items-baseline justify-between gap-2">
        <span className="copy-field__label text-xs font-medium text-muted-foreground">{label}</span>
        {hint ? <span className="copy-field__hint text-[11px] text-muted-foreground">{hint}</span> : null}
      </div>
      <div className="copy-field__row flex items-center gap-2 rounded-lg border border-input bg-background/60 p-1.5 ps-3">
        {/* No truncate: a clipped IBAN is useless. It wraps instead, and steps down a
            size on narrow screens so it usually still fits one line. */}
        <code dir="ltr" className="copy-field__value min-w-0 flex-1 font-mono text-xs leading-relaxed tabular-nums sm:text-sm">
          {display}
        </code>
        <button
          type="button"
          onClick={copy}
          aria-label={copyAria}
          className="copy-field__button inline-flex shrink-0 items-center gap-1.5 rounded-md bg-secondary px-2.5 py-1.5 text-xs font-semibold text-secondary-foreground transition-colors hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          {copied ? (
            <>
              <Check className="size-3.5 text-success" />
              {copiedLabel}
            </>
          ) : (
            <>
              <Copy className="size-3.5" />
              {copyLabel}
            </>
          )}
        </button>
      </div>
      <span aria-live="polite" className="sr-only">
        {copied ? copiedAria : ""}
      </span>
    </div>
  );
}
