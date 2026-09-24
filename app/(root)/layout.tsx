import type { Metadata } from "next";
import { defaultLocale } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "MooKalaQi",
  robots: { index: false, follow: true },
};

// The site lives under /fa and /en. A static host can't redirect, so the bare `/`
// forwards to Farsi before first paint: script first (keeps a #section hash), meta
// refresh for no-JS. The background matches the theme so the hop doesn't flash.
const forward = [
  `var d=document.documentElement;d.style.background='#f8f8ff';`,
  `try{if(localStorage.getItem('theme')==='dark')d.style.background='#090a0b'}catch(e){}`,
  `location.replace('/${defaultLocale}'+location.hash);`,
].join("");

export default function ForwardLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang={defaultLocale} dir="rtl" suppressHydrationWarning>
      <head>
        <meta httpEquiv="refresh" content={`0; url=/${defaultLocale}`} />
        <script dangerouslySetInnerHTML={{ __html: forward }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
