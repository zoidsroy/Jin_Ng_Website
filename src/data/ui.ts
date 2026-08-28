import type { Lang } from '../lib/i18n';

/** Every string the chrome renders, in both languages. */
const strings = {
  'nav.works': { en: 'Works', zh: '作品' },
  'nav.cv': { en: 'CV', zh: '簡歷' },
  'nav.contact': { en: 'Contact', zh: '聯絡' },
  'nav.menu': { en: 'Menu', zh: '選單' },
  'nav.close': { en: 'Close', zh: '關閉' },

  'hero.scroll': { en: 'Scroll', zh: '向下捲動' },

  'works.title': { en: 'Selected Works', zh: '作品選輯' },
  'works.all': { en: 'All', zh: '全部' },
  'works.filterLabel': { en: 'Filter works by type', zh: '依類型篩選作品' },
  'works.empty': { en: 'Nothing here yet.', zh: '目前沒有作品。' },

  'type.audiovisual': { en: 'AudioVisual', zh: '音像' },
  'type.installation': { en: 'Installation', zh: '裝置與沉浸' },
  'type.music': { en: 'Music', zh: '音樂製作' },
  'type.curation': { en: 'Curation', zh: '策展' },

  'work.back': { en: 'All works', zh: '返回作品列表' },
  'work.year': { en: 'Year', zh: '年份' },
  'work.role': { en: 'Type', zh: '類型' },
  'work.credit': { en: 'Credit', zh: '製作' },
  'work.watch': { en: 'Watch / Listen', zh: '觀看／聆聽' },
  'work.next': { en: 'Next', zh: '下一件' },
  'work.prev': { en: 'Previous', zh: '上一件' },
  'work.gallery': { en: 'Gallery', zh: '圖輯' },
  'work.untranslated': {
    en: '',
    zh: '此作品尚無中文版描述，以下為英文原文。',
  },

  'cv.title': { en: 'CV', zh: '簡歷' },
  'cv.education': { en: 'Education', zh: '學歷' },
  'cv.residency': { en: 'Art Residency', zh: '駐村' },
  'cv.production': { en: 'Production', zh: '製作協力' },
  'cv.exhibition': { en: 'Exhibition', zh: '展覽' },
  'cv.performance': { en: 'Performance', zh: '表演' },
  'cv.showMore': { en: 'Show all', zh: '顯示全部' },
  'cv.showLess': { en: 'Show less', zh: '收合' },

  'about.title': { en: 'Biography', zh: '簡介' },

  'contact.title': { en: 'Contact', zh: '聯絡' },
  'contact.email': { en: 'Email', zh: '電子郵件' },
  'contact.elsewhere': { en: 'Elsewhere', zh: '社群連結' },

  'lightbox.close': { en: 'Close', zh: '關閉' },
  'lightbox.next': { en: 'Next image', zh: '下一張' },
  'lightbox.prev': { en: 'Previous image', zh: '上一張' },

  'a11y.skip': { en: 'Skip to content', zh: '跳到主要內容' },
  'lang.switch': { en: '中文', zh: 'EN' },
  'lang.switchLabel': { en: 'Switch to Chinese', zh: 'Switch to English' },

  '404.title': { en: 'Page not found', zh: '找不到頁面' },
  '404.body': {
    en: 'That page does not exist — it may have moved.',
    zh: '這個頁面不存在，可能已經移動位置。',
  },
  '404.home': { en: 'Back home', zh: '回首頁' },
} as const;

export type UiKey = keyof typeof strings;

export function useTranslations(lang: Lang) {
  return (key: UiKey): string => {
    const entry = strings[key];
    return lang === 'zh' ? entry.zh : entry.en;
  };
}
