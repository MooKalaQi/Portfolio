import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export for GitHub Pages: `next build` writes plain HTML/CSS/JS to out/.
  // No server means no redirects() or on-the-fly image resizing, so the bare `/`
  // forwards to /fa from app/(root)/ and public/profile.jpg is pre-sized.
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;
