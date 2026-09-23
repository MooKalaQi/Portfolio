import type { Locale } from "../i18n";
import { en } from "./en";
import { fa, type Dict } from "./fa";

const dictionaries: Record<Locale, Dict> = { fa, en };

export const getDictionary = (locale: Locale): Dict => dictionaries[locale];
export type { Dict };
