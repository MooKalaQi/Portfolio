"use client";

import { useEffect, useState } from "react";
import { sectionIds } from "./i18n";

/** Tracks which section is under the middle of the viewport. */
export function useActiveSection() {
  const [active, setActive] = useState<string>(sectionIds[0]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Nearest the top wins, so a fast scroll can't leave two sections
        // fighting over the highlight.
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-45% 0px -45% 0px" },
    );
    for (const id of sectionIds) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);

  return active;
}
