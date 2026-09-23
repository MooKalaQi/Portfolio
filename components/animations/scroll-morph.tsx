"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Morphs its children into place as they scroll in: blur and scale resolve into
 * a settled block. Fires once. The hidden start state lives behind a `.js` class
 * so content stays visible when scripts don't run.
 */
export function ScrollMorph({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const inView = () => {
      const r = el.getBoundingClientRect();
      return r.top < window.innerHeight * 0.88 && r.bottom > 0;
    };

    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) stop();
      },
      // Wait until the block is a little way up the viewport before morphing.
      { rootMargin: "0px 0px -12% 0px" },
    );
    io.observe(el);

    /*
      IntersectionObserver callbacks only run as part of the rendering lifecycle.
      If the page isn't being rendered — a backgrounded tab, an occluded window —
      the callback never fires, and since the start state is opacity:0 the content
      would be invisible rather than merely un-animated. Timers keep running in
      those cases, so poll as a safety net: the animation is the nice-to-have,
      showing the content is not.
    */
    const timer = setInterval(() => {
      if (inView()) stop();
    }, 400);

    function stop() {
      setShown(true);
      io.disconnect();
      clearInterval(timer);
    }

    return () => {
      io.disconnect();
      clearInterval(timer);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={cn("morph-in", className)}
      data-shown={shown ? "" : undefined}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
