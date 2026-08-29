import type { UiKey } from './ui';

/**
 * One CV line. `zh` is optional and falls back to `en`, which is the normal
 * house style for a Taiwanese artist CV — proper nouns stay in their original
 * form and only the role and place are translated.
 *
 * To add a line, drop a new object at the top of the relevant section.
 */
export type CvEntry = {
  year: string;
  en: string;
  zh?: string;
};

export type CvSection = {
  /** Heading, resolved through src/data/ui.ts. */
  title: UiKey;
  /** Lines beyond this stay collapsed until the reader expands the section. */
  collapseAfter?: number;
  entries: CvEntry[];
};

export const cv: CvSection[] = [
  {
    title: 'cv.education',
    entries: [
      {
        year: '2022',
        en: 'Taipei National University of the Arts — Department of New Media Art',
        zh: '國立臺北藝術大學 新媒體藝術研究所',
      },
      {
        year: '2021',
        en: 'National Yang Ming Chiao Tung University — Department of Music',
        zh: '國立陽明交通大學 音樂研究所，多媒體新音樂主修',
      },
      {
        year: '2019',
        en: 'Aletheia University — Department of Applied Music, BA in Composition',
        zh: '真理大學 音樂應用學系，作曲主修',
      },
    ],
  },

  {
    title: 'cv.residency',
    entries: [
      {
        year: '2025',
        en: 'Yamaguchi Center for Arts and Media — Artist Residency',
        zh: '山口情報藝術中心 YCAM — 駐村藝術家',
      },
      {
        year: '2025',
        en: 'IRCAM: Sound Off at Taiwan Sound Lab — Artist Residency',
        zh: 'IRCAM: Sound Off，臺灣聲響實驗室 — 駐村藝術家',
      },
      {
        year: '2024',
        en: 'House of Art and Technology — Artist Residency',
      },
      {
        year: '2023–2024',
        en: 'Taipei Digital Art Center — XTRUX Artist Residency',
        zh: 'XTRUX 臺北數位藝術中心 — 駐館藝術家',
      },
      {
        year: '2023',
        en: '《The Space Warriors and the Digigrave》Videoclub, Videotage BOTH SIDES NOW 8 X LEAVE YOUR — Online Artist Residency',
        zh: '《太空戰士 The Space Warriors and the Digigrave》蘇匯宇 & XTRUX，Videoclub, Videotage BOTH SIDES NOW 8 X LEAVE YOUR — 線上駐村',
      },
    ],
  },

  {
    title: 'cv.production',
    collapseAfter: 8,
    entries: [
      {
        year: '2026',
        en: '《Ignorance Online》NONTECH — Live AudioVisual Cinema, music composition, Europe',
        zh: '《Ignorance Online》NONTECH — 音像現場電影，音樂創作，歐洲',
      },
      {
        year: '2026',
        en: '《I already call them》DAFAKIE — album mixing and mastering, Taipei, Taiwan',
        zh: '《I already call them》DAFAKIE — 專輯混音與母帶後期，臺北，臺灣',
      },
      {
        year: '2026',
        en: '《WONDE1AND》E1and special showcase concert — technical assistant and autotune executor, Taipei, Taiwan',
        zh: '《WONDE1AND》E1and 特別演唱會 — 技術協力與 Autotune 執行，臺北，臺灣',
      },
      {
        year: '2025',
        en: '《Hologram Utopia》NSTC Chip-based Industrial Innovation Program — technical coordinator and sound designer, Taipei, Taiwan',
        zh: '《Hologram Utopia》國科會晶片產業創新方案 — 技術統籌與聲音設計，臺北，臺灣',
      },
      {
        year: '2025',
        en: '《Big Fat Bug》WAY remix album — remix artist and mastering engineer',
        zh: '《Big Fat Bug》WAY 混音合輯 — Remix 創作與母帶後期工程',
      },
      {
        year: '2025',
        en: '《Boulder》Taiwan Sound Art Festival — Emerging Contemporary Music and Sound Art Joint Performance, Taipei, Taiwan',
        zh: '《Boulder》臺灣聲響藝術節 — 當代新銳音樂與聲音藝術聯合展演，臺北，臺灣',
      },
      {
        year: '2025',
        en: '《Sunset Town》Virtual Online Music Festival, Naxs Studio × Sunset Music — sound designer',
        zh: '《Sunset Town》虛擬線上音樂節，Naxs Studio × Sunset Music — 聲音設計',
      },
      {
        year: '2025',
        en: '《Don’t Worry, Baby》Xindian Boys — sound designer, New Taipei City Art Museum, New Taipei City, Taiwan',
        zh: '《Don’t Worry, Baby》新店男孩 — 聲音設計，新北市美術館，新北，臺灣',
      },
      {
        year: '2025',
        en: '《The Strange Tale of the Bridal Fan》Shakespeare’s Wild Sisters Group — VR engineer, Taipei, Taiwan',
        zh: '《嫁妝一扇奇譚》莎士比亞的妹妹們的劇團 — VR 技術開發，臺北，臺灣',
      },
      {
        year: '2024',
        en: '《DREAM PERCEPT》immersive media performance by Cheng-Ju Wu — technical support, Taipei, Taiwan',
        zh: '《DREAM PERCEPT》吳承儒 沉浸式媒體演出 — 技術支援，臺北，臺灣',
      },
      {
        year: '2024',
        en: '《Seeking for Absent Forms in Forests》Yu-Ting Tsai solo exhibition — sound designer, Taipei, Taiwan',
        zh: '《Seeking for Absent Forms in Forests》蔡宇庭個展 — 聲音設計，臺北，臺灣',
      },
      {
        year: '2024',
        en: '《In the Abyss, Once Again as a Perceiver》Yen-Tzu Chang — technical support, Hsinchu, Taiwan',
        zh: '《In the Abyss, Once Again as a Perceiver》張晏慈 — 技術支援，新竹，臺灣',
      },
      {
        year: '2024',
        en: 'Product animation music design for ASE Group, Taipei, Taiwan',
        zh: '日月光集團 產品動畫音樂設計，臺北，臺灣',
      },
      {
        year: '2023',
        en: '《Wasted u》Edison Song — graphic design and projection execute, Taipei, Taiwan',
        zh: '《Wasted u》宋柏緯 — MV 投影製作與投影執行，臺北，臺灣',
      },
      {
        year: '2023',
        en: '《Current/y VR Version》Chen Yi — VR content production, Taipei, Taiwan',
        zh: '《鎏 Current/y — VR 放映版》陳乂 — VR 影像製作，C-LAB，臺北，臺灣',
      },
      {
        year: '2023',
        en: '《Current/y》Chen Yi — mocap and game engine developer, NTSEC, Taipei, Taiwan',
        zh: '《鎏 Current/y》陳乂 — 動捕與遊戲引擎技術開發，士林科教館，臺北，臺灣',
      },
      {
        year: '2023',
        en: '《DAO》Chen Yi — CGI, NTSEC, Taipei, Taiwan',
        zh: '《道》陳乂 — 動畫製作，國美館，臺中，臺灣',
      },
      {
        year: '2023',
        en: '《The Space Warriors and the Digigrave》Su Hui-Yu — video composition and CGI, South Korea',
        zh: '《太空戰士 The Space Warriors and the Digigrave》蘇匯宇 — 影像合成製作，南韓',
      },
      {
        year: '2023',
        en: '《Li Yi-Fan Solo Exhibition》Li Yi-Fan — game engine developer and VR production, Taipei, Taiwan',
        zh: '《李亦凡個展》李亦凡 — 遊戲引擎技術製作協力，VA Hub，臺北，臺灣',
      },
      {
        year: '2023',
        en: '《The Method of Entry》Chuang Pei-Xin — CGI environment artist, Taipei Art Award, Taipei, Taiwan',
        zh: '《進入的方法》莊培鑫 — 動畫場景設計協力，臺北美術獎，臺北市立美術館，臺北，臺灣',
      },
      {
        year: '2022',
        en: '《Invisible General》Meuko! Meuko! and NONEYE — CGI environment artist, Europe tour',
        zh: '《無形將軍 Invisible General》Meuko! Meuko! and NONEYE — 美術設計，歐洲巡演',
      },
      {
        year: '2022',
        en: '《National Performing Arts Center 5G Build Project》Solid Memory — 3D scan file rebuild, Taipei, Taiwan',
        zh: '《兩廳院 5G 建置專案》固態記憶 — 3D 掃描模型重建，國家兩廳院，臺北，臺灣',
      },
      {
        year: '2022',
        en: '《Meeting of Styles Taiwan》— lighting design and execute, Taipei, Taiwan',
        zh: '《Meeting of Styles Taiwan》— 燈光設計與執行，新北，臺灣',
      },
      {
        year: '2021',
        en: '《Future Shock 2》Su Hui-Yu — virtual production developer, Taipei, Taiwan',
        zh: '《未來的衝擊 2》蘇匯宇 — 虛擬攝影棚技術執行／動畫場景設計，臺北，臺灣',
      },
      {
        year: '2019',
        en: '《Flowing Feast》Luxury Logico, NL Interactive — music program and execute, Tainan, Taiwan',
        zh: '《府城流水席》豪華朗機工，涅所開發 — 聲音編程執行，臺南，臺灣',
      },
      {
        year: '2019',
        en: '《Spectrum66》Noise Kitchen, NL Interactive — music program and execute, Shanghai, China',
        zh: '《光譜六六》噪咖藝術工作室，涅所開發 — 音樂會聲音編程執行，上海，中國',
      },
    ],
  },

  {
    title: 'cv.exhibition',
    entries: [
      {
        year: '2025',
        en: '《Infoxication》Taipei Technical Art House Achievement Exhibition, Taipei, Taiwan',
      },
      {
        year: '2024',
        en: '《VIVIDO : re-Action》XTRUX exhibition, Taipei Digital Art Center, Taipei, Taiwan',
        zh: '《VIVIDO : re-Action》XTRUX 展覽，臺北數位藝術中心，臺北，臺灣',
      },
      {
        year: '2023',
        en: '《Smooth Gradation Band: Bruh! World is Flat》XTRUX and Nienwei Chang, Orogeny Art, Kaohsiung, Taiwan',
        zh: '《平滑漸層帶：bruh! 世界更平了》XTRUX 與張乃文，噪山藝文空間，高雄，臺灣',
      },
      {
        year: '2022',
        en: '《Insight》XTRUX and SHENG — dome 180 immersive video and spatial audio, Future Vision Lab, Taipei, Taiwan',
        zh: '《觀》XTRUX × 晟 SHENG — Dome 影像製作，Future Vision Lab，臺灣當代文化實驗場 C-LAB，臺北，臺灣',
      },
      {
        year: '2022',
        en: '《Future Port》XTRUX — video installation, YueJin Lantern Festival, Tainan, Taiwan',
        zh: '《FUTURE PORT》XTRUX — 影像裝置，月津港鹽水藝術節「序」，臺南，臺灣',
      },
      {
        year: '2021',
        en: '《Reincarnate Island》XTRUX — dome 180 immersive video and spatial audio, Future Vision Lab, Taipei, Taiwan',
        zh: '《Reincarnate Island》XTRUX — Dome 影像與空間音訊，Future Vision Lab，臺灣當代文化實驗場 C-LAB，臺北，臺灣',
      },
      {
        year: '2020',
        en: '《圍聲：音像展》digital audio, Lacking Sound Festival, Venue, Taipei, Taiwan',
        zh: '《失聲祭 圍聲：音像展》數位聲響，濕地 Venue，臺北，臺灣',
      },
    ],
  },

  {
    title: 'cv.performance',
    collapseAfter: 8,
    entries: [
      {
        year: '2026',
        en: '《Ignorance Online》NONTECH — Live AudioVisual Cinema, An8xCore, Berlin, Germany',
        zh: '《Ignorance Online》NONTECH — 音像現場電影，An8xCore，柏林，德國',
      },
      {
        year: '2026',
        en: '《Ignorance Online》NONTECH — Live AudioVisual Cinema, L.E.V. Festival, Spain',
        zh: '《Ignorance Online》NONTECH — 音像現場電影，L.E.V. Festival，西班牙',
      },
      {
        year: '2025',
        en: '《Boulder》A/V Live, C-LAB Sound Festival — Cutting-Edge Contemporary Music & Sounds, Taipei, Taiwan',
        zh: '《Boulder》音像現場，C-LAB 聲響藝術節 — 當代前沿音樂與聲響，臺北，臺灣',
      },
      {
        year: '2025',
        en: '《The Poetry of Hyperlink》Taiwan Sound Lab residency project final presentation, Taipei, Taiwan',
        zh: '《超連結的詩》臺灣聲響實驗室駐村計畫成果發表，臺北，臺灣',
      },
      {
        year: '2025',
        en: '《Boulder》A/V Live, Ars Electronica Polyphony Concert, Linz, Austria',
        zh: '《Boulder》音像現場，Ars Electronica Polyphony Concert，林茲，奧地利',
      },
      {
        year: '2024',
        en: '《VIVIDO : re-Action》XTRUX A/V Live, Taipei Digital Art Center, Taipei, Taiwan',
        zh: '《VIVIDO : re-Action》XTRUX 音像現場，臺北數位藝術中心，臺北，臺灣',
      },
      {
        year: '2023',
        en: '《XTRUX × LUDU A/V Live》L project — Immersive Media Theater × AudioVisual Performance, Taipei Digital Art Festival, NTSEC, Taipei, Taiwan',
        zh: '《XTRUX × LUDU A/V Live》L project — 沉浸式媒體劇場 × 音像表演，第 18 屆數位藝術節平行活動，士林科教館小黑盒，臺北，臺灣',
      },
      {
        year: '2023',
        en: '《The Great Bremen Show》Bremen Entertainment Inc. feat. XTRUX A/V Live, Legacy Taipei, Taipei, Taiwan',
        zh: '《TGBS》布萊梅 Bremen Entertainment Inc. feat. XTRUX 音像現場，Legacy Taipei，臺北，臺灣',
      },
      {
        year: '2023',
        en: 'Venus Ex Machina & XTRUX Audio Visual Live, L.E.V. Festival, Matadero, Madrid, Spain',
        zh: 'Venus Ex Machina & XTRUX 音像現場，L.E.V Festival，Matadero，馬德里，西班牙',
      },
      {
        year: '2023',
        en: 'MONGTONG & XTRUX A/V Live, FINAL, Taipei, Taiwan',
        zh: 'MONGTONG × XTRUX 音像現場，PSEUDO & NAXS FUTURE 主辦，FINAL，臺北，臺灣',
      },
      {
        year: '2023',
        en: '《VIVIDO : Movement》XTRUX new media performance, Taipei Digital Art Center, Taipei, Taiwan',
        zh: '《VIVIDO : Movement》XTRUX 新媒體跨域表演，臺北數位藝術中心，臺北，臺灣',
      },
      {
        year: '2023',
        en: '《VIVIDO》XTRUX new media performance, FINAL, Taipei, Taiwan',
        zh: '《VIVIDO》XTRUX 新媒體跨域表演，FINAL，臺北，臺灣',
      },
      {
        year: '2022',
        en: '《Reincarnate》A/V Live, Jelly Baby, Taipei Digital Art Center, Taipei, Taiwan',
        zh: '《Reincarnate》音像演出，Jelly Baby，臺北數位藝術中心，臺北，臺灣',
      },
      {
        year: '2022',
        en: 'XTRUX × B E N N × SOWUT A/V performance, SYNERGY FESTIVAL, Taipei, Taiwan',
        zh: 'XTRUX × B E N N × SOWUT《新能祭 SYNERGY FESTIVAL》作品演出，松山文創園區，臺北，臺灣',
      },
      {
        year: '2022',
        en: 'XTRUX A/V Live, Phantom Noise, Taipei Digital Art Center, Taipei, Taiwan',
        zh: '《躁幻 I — XTRUX》音像現場，聲音設計／互動程式設計，第 17 屆臺北數位藝術節，臺北，臺灣',
      },
      {
        year: '2022',
        en: 'ANKR: Sensory Plexus, Over My Body — VJ, Venue, Taipei, Taiwan',
        zh: '泊人 ANKR《Sensory Plexus 感官叢生》跨我身體 Over My Body — VJ 演出／技術美術／互動程式設計，濕地 Venue，臺北，臺灣',
      },
      {
        year: '2022',
        en: '《Lujiachi —「Mantis」Release Party》A/V Live, FINAL, Taipei, Taiwan',
        zh: '《Lujiachi —「Mantis」Release Party》音像現場，FINAL，臺北，臺灣',
      },
      {
        year: '2022',
        en: '《Lotus》A/V Live, TTDAC, Taichung, Taiwan',
        zh: '《蓮 Lotus》臺中市屯區藝文中心「2022 科技劇場」音像現場，聲音設計／互動程式設計，臺中，臺灣',
      },
      {
        year: '2022',
        en: 'MONGTONG × XTRUX A/V Live, Taiwan Creative Content Fest, Taipei, Taiwan',
        zh: 'MONGTONG × XTRUX，2022 TCCF 創意內容大會跨域展演，技術美術／互動程式設計，松山文創園區，臺北，臺灣',
      },
      {
        year: '2021',
        en: '《live’spawn》C-LAB Sound Art Festival: DIVERSONICS, Taipei, Taiwan',
        zh: '《live’spawn》臺灣聲響實驗室 聲響藝術節 DIVERSONICS，臺北，臺灣',
      },
      {
        year: '2020',
        en: '《Feedback and Synthesis》A/V Live, Lacking Sound Festival #115 Newcomers, Venue, Taipei, Taiwan',
        zh: '《Feedback and Synthesis》失聲祭 #115 Newcomers 演出，濕地 Venue，臺北，臺灣',
      },
      {
        year: '2020',
        en: 'Sound art performance, liáu liáu Art Space, Taipei, Taiwan',
        zh: '《失聲祭 MicroSonic 微音域 #2》演出，了了空間，臺北，臺灣',
      },
    ],
  },
];
