export const LANGS = ['en', 'zh'] as const;
export type Lang = (typeof LANGS)[number];

export const DEFAULT_LANG: Lang = 'en';

/** `<html lang>` values — BCP 47, not our internal keys. */
export const HTML_LANG: Record<Lang, string> = {
  en: 'en',
  zh: 'zh-Hant-TW',
};

export type Localized = { en: string; zh?: string };

/**
 * Read a localized field. Chinese falls back to English so a work stays
 * publishable before it has been translated.
 */
export function t(value: Localized, lang: Lang): string {
  if (lang === 'en') return value.en;
  return value.zh?.trim() || value.en;
}

/** True when `lang` has its own text rather than the English fallback. */
export function isTranslated(value: Localized, lang: Lang): boolean {
  return lang === 'en' || Boolean(value.zh?.trim());
}

/** Prefix a root-relative path with the locale segment. `/works` -> `/zh/works`. */
export function localePath(path: string, lang: Lang): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  if (lang === DEFAULT_LANG) return clean === '/' ? '/' : clean;
  return clean === '/' ? '/zh' : `/zh${clean}`;
}

/** The locale a URL belongs to, derived from its first path segment. */
export function langFromUrl(url: URL): Lang {
  const [, first] = url.pathname.split('/');
  return LANGS.includes(first as Lang) ? (first as Lang) : DEFAULT_LANG;
}

/** Strip the locale prefix, giving the shared path used to build hreflang pairs. */
export function stripLocale(pathname: string): string {
  const withoutZh = pathname.replace(/^\/zh(?=\/|$)/, '');
  return withoutZh === '' ? '/' : withoutZh;
}
