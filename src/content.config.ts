import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
// Not `astro:content` — that re-export is deprecated and goes away in Astro 8.
import { z } from 'astro/zod';

/**
 * A string that may differ per language. `en` is required and acts as the
 * fallback whenever `zh` has not been written yet, so a work is always
 * publishable in both languages even before it has been translated.
 */
const localized = z.object({
  en: z.string(),
  zh: z.string().optional(),
});

const works = defineCollection({
  loader: glob({ base: './src/content/works', pattern: '**/*.md' }),
  schema: ({ image }) =>
    z.object({
      /** Higher sorts first on the works grid. Usually just the year. */
      order: z.number(),
      title: localized,
      /** Coarse bucket, drives the filter row above the works grid. */
      type: z.enum(['audiovisual', 'installation', 'music', 'curation']),
      /** Descriptive line under the title, e.g. "Live AudioVisual Cinema". */
      category: localized,
      /** Who it was made with / released under, e.g. "XTRUX — Boulder". */
      credit: localized.optional(),
      /** Free text so ranges like "2023-2024" work. */
      year: z.string(),
      /** Grid thumbnail and social preview image. */
      cover: image(),
      /** Gallery on the detail page. Omit to fall back to the cover alone. */
      gallery: z.array(image()).default([]),
      /** External link (video, album, stream). Shown as a button. */
      link: z.url().optional(),
      linkLabel: localized.optional(),
      description: localized,
      /** Hide from the site without deleting the file. */
      draft: z.boolean().default(false),
    }),
});

export const collections = { works };
