export const locales = ["fa", "en"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "fa";

/** Writing direction per locale. Driving `dir` off this is what mirrors the whole layout. */
export const dir: Record<Locale, "rtl" | "ltr"> = { fa: "rtl", en: "ltr" };

/** The other locale — what the language button switches to. */
export const other: Record<Locale, Locale> = { fa: "en", en: "fa" };

export const isLocale = (v: string): v is Locale => (locales as readonly string[]).includes(v);

/** Section ids stay constant across locales; only their labels are translated. */
export const sectionIds = ["home", "about", "contact", "coffee"] as const;
export type SectionId = (typeof sectionIds)[number];
