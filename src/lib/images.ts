/**
 * Every source image in this project is 800px wide or smaller. Asking Astro
 * for a variant wider than the source makes sharp upscale it and then re-encode
 * the result — the image is degraded twice and the file is bigger for it.
 *
 * `widthsUpTo` keeps only the candidates the source can actually satisfy, and
 * always ends at the native width so the largest variant is a true 1:1 render.
 */
export function widthsUpTo(image: ImageMetadata, wanted: number[]): number[] {
  const usable = wanted.filter((width) => width < image.width);
  return [...usable, image.width];
}

/**
 * Encoding quality for artwork images, passed per-`<Image>`.
 *
 * It has to go on the component: `image.service.config.webp.quality` in
 * astro.config is silently ignored (verified by building at 86 and 95 and
 * getting byte-identical output), whereas a per-image `quality` reaches sharp.
 *
 * 86 rather than the default because there is no resolution headroom here —
 * the largest render of an 800px source is 1:1, so compression artefacts have
 * nowhere to hide.
 */
export const IMAGE_QUALITY = 86;
