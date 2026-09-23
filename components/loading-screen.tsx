"use client";

import { useEffect, useState } from "react";
import { LatticeLoader } from "./lattice-loader";
import { LOADER_FADE as FADE, LOADER_HOLD as HOLD } from "@/lib/timing";

export function LoadingScreen({ label }: { label: string }) {
  const [leaving, setLeaving] = useState(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    // `loader-seen` is set by the boot script before paint, so a repeat visit in
    // the same session (e.g. after switching language) skips the intro entirely.
    const seen = document.documentElement.classList.contains("loader-seen");
    const out = setTimeout(() => setLeaving(true), seen ? 0 : HOLD);
    const done = setTimeout(() => setGone(true), seen ? 0 : HOLD + FADE);
    return () => {
      clearTimeout(out);
      clearTimeout(done);
    };
  }, []);

  // Hold the page still underneath so the reveal doesn't land mid-scroll.
  useEffect(() => {
    if (gone) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [gone]);

  if (gone) return null;

  return (
    <div
      id="loading-screen"
      role="status"
      aria-label={label}
      className={`loader fixed inset-0 z-50 flex items-center justify-center bg-background transition-opacity ease-out ${
        leaving ? "loader--leaving opacity-0" : "opacity-100"
      }`}
      style={{ transitionDuration: `${FADE}ms` }}
    >
      <span className="loader__lattice">
        <LatticeLoader />
      </span>
    </div>
  );
}
