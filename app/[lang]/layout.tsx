import type { Metadata } from "next";
import { notFound } from "next/navigation";
import "../globals.css";
import { vazirmatn } from "../fonts";
import { LoadingScreen } from "@/components/loading-screen";
import { SiteNav } from "@/components/site-nav";
import { getDictionary } from "@/lib/dictionaries";
import { dir, isLocale, locales } from "@/lib/i18n";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const dict = getDictionary(lang);
  return { title: dict.meta.title, description: dict.meta.description };
}

// Runs before first paint: applies a stored dark theme without a flash, and marks
// the document as scripted so scroll-reveal start states are safe to apply.
const bootScript = [
  `document.documentElement.classList.add('js');`,
  `try{if(localStorage.getItem('theme')==='dark')document.documentElement.classList.add('dark')}catch(e){}`,
  // Mark repeat visits so the intro loader is skipped — otherwise every locale
  // switch, which is a full page load, would replay it.
  `try{if(sessionStorage.getItem('seen'))document.documentElement.classList.add('loader-seen');else sessionStorage.setItem('seen','1')}catch(e){}`,
].join("");

export default async function RootLayout({ children, params }: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const dict = getDictionary(lang);

  return (
    <html
      lang={lang}
      dir={dir[lang]}
      data-scroll-behavior="smooth"
      className={`site ${vazirmatn.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        {/*
          A raw inline script, deliberately. It must execute during HTML parse to
          set the theme before first paint; next/script defers it into a queue.
          React would warn about a script element on a *client* render, so the
          language switch is a full navigation (see LangToggle) and this layout
          never re-renders on the client.
        */}
        <script dangerouslySetInnerHTML={{ __html: bootScript }} />
        {/* Without JS the overlay would never clear, so hide it outright. */}
        <noscript>
          <style>{`#loading-screen{display:none}`}</style>
        </noscript>
      </head>
      <body className="site__body min-h-full flex flex-col font-sans bg-background text-foreground">
        <LoadingScreen label={dict.ui.loading} />
        <SiteNav lang={lang} dict={dict} />
        {children}
      </body>
    </html>
  );
}
