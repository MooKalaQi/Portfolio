import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { ScrollMorph } from "./animations/scroll-morph";

export function Section({
  id,
  label,
  title,
  children,
}: {
  id: string;
  label: string;
  title?: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className={cn("section", `section--${id}`, "scroll-mt-24 border-t border-border py-20 sm:py-28")}
    >
      <ScrollMorph className="section__head">
        <p className="section__label mb-3 text-xs tracking-[0.2em] text-muted-foreground">
          [ {label} ]
        </p>
        {title ? (
          <h2 className="section__title text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
        ) : null}
      </ScrollMorph>
      <ScrollMorph delay={90} className={cn("section__body", title ? "mt-10" : "mt-6")}>
        {children}
      </ScrollMorph>
    </section>
  );
}
