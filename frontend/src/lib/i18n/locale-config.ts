export const publishedLocales = ["es"] as const;
export const plannedLocales = ["es", "en", "ca"] as const;

export type PublishedLocale = (typeof publishedLocales)[number];
export type PlannedLocale = (typeof plannedLocales)[number];

export function isPublishedLocale(locale: string): locale is PublishedLocale {
  return publishedLocales.includes(locale as PublishedLocale);
}
