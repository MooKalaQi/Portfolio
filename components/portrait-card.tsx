"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

/**
 * کارت برگردان for the profile photo. Adapted from vibefarsi's flip-card:
 * perspective on the outer box, preserve-3d on the rotating inner, both faces
 * backface-hidden with the back pre-rotated 180deg.
 *
 * The flip is state-driven rather than CSS-only `group-hover`, so `aria-pressed`
 * and the per-face `aria-hidden` stay truthful — otherwise a screen reader would
 * read both faces at once.
 */
export function PortraitCard({
  alt,
  caption,
  showLabel,
  backLabel,
  className,
}: {
  alt: string;
  caption: string;
  showLabel: string;
  backLabel: string;
  className?: string;
}) {
  const [flipped, setFlipped] = useState(false);
  const toggle = () => setFlipped((f) => !f);
  const canHover = () =>
    typeof window !== "undefined" && window.matchMedia("(hover: hover)").matches;

  return (
    <div
      className={cn("portrait__frame group [perspective:1200px]", className)}
      role="button"
      tabIndex={0}
      aria-pressed={flipped}
      aria-label={flipped ? backLabel : showLabel}
      onClick={toggle}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          toggle();
        }
      }}
      /*
        Hover only on devices that actually hover. A tap on a touchscreen fires
        mouseenter and then click, which would set true and immediately toggle
        back to false — the card would never flip on a phone.
      */
      onMouseEnter={() => canHover() && setFlipped(true)}
      onMouseLeave={() => canHover() && setFlipped(false)}
    >
      <div
        className={cn(
          "portrait__card relative h-full w-full cursor-pointer rounded-2xl transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] [transform-style:preserve-3d] motion-reduce:transition-none",
          "group-focus-visible:ring-2 group-focus-visible:ring-ring group-focus-visible:ring-offset-2 group-focus-visible:ring-offset-background",
          flipped && "[transform:rotateY(180deg)]",
        )}
      >
        <div
          aria-hidden={flipped}
          className="portrait__face portrait__face--front absolute inset-0 overflow-hidden rounded-2xl border border-border bg-card shadow-sm [backface-visibility:hidden]"
        >
          <Image
            src="/profile.jpg"
            alt={alt}
            width={1140}
            height={1425}
            priority
            sizes="(max-width: 1279px) 14rem, 17rem"
            className="portrait__image h-full w-full object-cover object-[50%_15%]"
          />
        </div>

        {/*
          bg-card resolves to pure white in light and near-black in dark, so the
          back follows the theme. The heavier shadow lifts it off the page.
        */}
        <div
          aria-hidden={!flipped}
          className="portrait__face portrait__face--back absolute inset-0 flex items-center justify-center overflow-hidden rounded-2xl border border-border bg-card p-6 text-card-foreground [backface-visibility:hidden] [transform:rotateY(180deg)]"
        >
          <p className="portrait__caption text-center text-sm leading-loose">{caption}</p>
        </div>
      </div>
    </div>
  );
}
