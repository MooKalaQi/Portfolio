import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * ظهور ماسکی — each line wipes in from the right behind a mask, one after another.
 * Adapted from vibefarsi's text-reveal; takes ReactNode lines so a line can carry
 * its own markup. Needs the `wipe-in` keyframes in globals.css.
 */
export function TextReveal({
  lines,
  label,
  stagger = 140,
  duration = 900,
  delay = 0,
  className,
  lineClassName,
}: {
  lines: ReactNode[];
  label: string;
  stagger?: number;
  duration?: number;
  delay?: number;
  className?: string;
  lineClassName?: string;
}) {
  return (
    <span className={cn("text-reveal inline-block", className)} aria-label={label}>
      {lines.map((line, i) => (
        <span
          key={i}
          aria-hidden
          className={cn("text-reveal__line wipe-line block", lineClassName)}
          style={{
            animationDuration: `${duration}ms`,
            // Offset from --reveal-start so a skipped intro reveals immediately.
            animationDelay: `calc(var(--reveal-start) + ${delay + i * stagger}ms)`,
          }}
        >
          {line}
        </span>
      ))}
    </span>
  );
}
