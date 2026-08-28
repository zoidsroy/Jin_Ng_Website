import { getCollection, type CollectionEntry } from 'astro:content';

/** Published works, newest first — the one ordering the whole site uses. */
export async function getSortedWorks(): Promise<CollectionEntry<'works'>[]> {
  const works = await getCollection('works', ({ data }) => !data.draft);
  return works.sort((a, b) => b.data.order - a.data.order);
}

/**
 * Static paths for a work detail route, carrying the neighbouring works so the
 * page can render its own prev/next pager without re-querying.
 */
export async function getWorkPaths() {
  const works = await getSortedWorks();

  return works.map((work, index) => ({
    params: { slug: work.id },
    props: {
      work,
      prev: works[index - 1] ?? null,
      next: works[index + 1] ?? null,
    },
  }));
}
