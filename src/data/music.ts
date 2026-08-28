import type { Localized } from '../lib/i18n';

export type Platform = 'spotify' | 'soundcloud' | 'bandcamp';

export type MusicEmbed = {
  platform: Platform;
  title: Localized;
  /** Where "open on <platform>" sends a visitor who'd rather use the app. */
  href: string;
  /** iframe src — only fetched after the visitor asks for the player. */
  embed: string;
  /** The player's natural height in px; each platform has its own. */
  height: number;
};

/** Brand colour used for the platform label. Kept muted — the page has one accent. */
export const PLATFORM_LABEL: Record<Platform, string> = {
  spotify: 'Spotify',
  soundcloud: 'SoundCloud',
  bandcamp: 'Bandcamp',
};

/**
 * To add a release, append an entry here.
 *
 * - **Spotify** — open the album/track/artist, Share → Copy link, then use
 *   `https://open.spotify.com/embed/<type>/<id>?theme=0`.
 * - **SoundCloud** — any track, set or profile URL works; put it in the
 *   `url=` parameter, URL-encoded.
 * - **Bandcamp** — the only one that can't be derived from a page URL. Open the
 *   release, Share/Embed → copy the embed code, and lift the `album=<digits>`
 *   (or `track=<digits>`) out of the iframe src.
 */
export const music: MusicEmbed[] = [
  {
    platform: 'spotify',
    title: {
      en: 'Gouty Stone on Spotify',
      zh: 'Gouty Stone — Spotify',
    },
    href: 'https://open.spotify.com/artist/19xLIDlKwD9dLVkNOCYkFl',
    embed:
      'https://open.spotify.com/embed/artist/19xLIDlKwD9dLVkNOCYkFl?utm_source=generator&theme=0',
    height: 352,
  },
  {
    platform: 'soundcloud',
    title: {
      en: 'Gouty Stone on SoundCloud',
      zh: 'Gouty Stone — SoundCloud',
    },
    href: 'https://soundcloud.com/goutystone',
    embed:
      'https://w.soundcloud.com/player/?url=' +
      encodeURIComponent('https://soundcloud.com/goutystone') +
      '&color=%23ff4b35&auto_play=true&hide_related=true&show_comments=false' +
      '&show_user=true&show_reposts=false&show_teaser=false&visual=false',
    height: 340,
  },
  // Bandcamp needs the numeric release id from its own embed code — there is no
  // way to build this from a profile URL. See the note above, then uncomment:
  //
  // {
  //   platform: 'bandcamp',
  //   title: { en: 'Album Title', zh: '專輯名稱' },
  //   href: 'https://goutystone.bandcamp.com/album/album-title',
  //   embed:
  //     'https://bandcamp.com/EmbeddedPlayer/album=1234567890/size=large/' +
  //     'bgcol=333333/linkcol=ff4b35/artwork=small/transparent=true/',
  //   height: 472,
  // },
];
