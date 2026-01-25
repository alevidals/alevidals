import { cache } from "react";
import "server-only";

const dictionaries = {
  es: () => import("./dictionaries/es.json").then((mod) => mod.default),
  en: () => import("./dictionaries/en.json").then((mod) => mod.default),
};

export type Locale = keyof typeof dictionaries;

export function hasLocale(locale: string): locale is Locale {
  return locale in dictionaries;
}

export const getDictionary = cache(async (locale: Locale) => {
  return dictionaries[locale]();
});
