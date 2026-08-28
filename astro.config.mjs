// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://jin-ng.com',
  trailingSlash: 'ignore',

  // English lives at the root (/), Chinese under /zh/.
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh'],
    routing: {
      prefixDefaultLocale: false,
      redirectToDefaultLocale: false,
    },
  },

  /**
   * The old site was a flat pile of .html files at the root. Anything already
   * shared or indexed still points there, so every old path is kept alive as a
   * generated redirect page rather than turning into a 404.
   */
  redirects: {
    '/index-zh.html': '/zh',

    '/portfolio-details1.html': '/works/vivido',
    '/portfolio-details2.html': '/works/insight',
    '/portfolio-details3.html': '/works/future-port',
    '/portfolio-details4.html': '/works/reincarnate-island',
    '/portfolio-details5.html': '/works/live-spawn',
    '/portfolio-details6.html': '/works/feedback-and-synthesis',
    '/portfolio-details7.html': '/works/sail-away',
    '/portfolio-details8.html': '/works/tshue-li',
    '/portfolio-details9.html': '/works/right-field-bleachers',
    '/portfolio-details10.html': '/works/poetry-of-hyperlink',
    '/portfolio-details11.html': '/works/boulder',
    '/portfolio-details12.html': '/works/i-already-call-them',
    '/portfolio-details13.html': '/works/meditation-moment',
    '/portfolio-details14.html': '/works/ignorance-online',

    '/portfolio-details1_zh.html': '/zh/works/vivido',
    '/portfolio-details2_zh.html': '/zh/works/insight',
    '/portfolio-details3_zh.html': '/zh/works/future-port',
    '/portfolio-details4_zh.html': '/zh/works/reincarnate-island',
    '/portfolio-details5_zh.html': '/zh/works/live-spawn',
    '/portfolio-details6_zh.html': '/zh/works/feedback-and-synthesis',
    '/portfolio-details7_zh.html': '/zh/works/sail-away',
    '/portfolio-details8_zh.html': '/zh/works/tshue-li',
    '/portfolio-details9_zh.html': '/zh/works/right-field-bleachers',
  },

  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: { en: 'en', zh: 'zh-Hant-TW' },
      },
    }),
  ],

  image: {
    // Gallery stills are large; cap the work Astro asks sharp to do.
    responsiveStyles: true,
  },

  build: {
    inlineStylesheets: 'auto',
  },
});
