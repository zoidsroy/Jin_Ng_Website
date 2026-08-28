import type { Localized } from '../lib/i18n';

import fb from '../assets/social/fb.png';
import x from '../assets/social/x.png';
import ig from '../assets/social/ig.png';
import github from '../assets/social/github.png';
import yt from '../assets/social/yt.png';
import mail from '../assets/social/mail.png';
import soundcloud from '../assets/social/SoundCloud.png';
import streetvoice from '../assets/social/SV.png';
import spotify from '../assets/social/Spotify.png';

export const site = {
  /** Must match public/CNAME. */
  url: 'https://jin-ng.com',
  brand: 'Jin Ng',
  email: 'zoidsya@gmail.com',
};

export const profile = {
  name: {
    en: 'Jin Ng',
    zh: '黃詠仁',
  } satisfies Localized,

  /** Also used as the meta description and OG description. */
  tagline: {
    en: 'Media Art Artist · Music Producer · Creative Coder',
    zh: '新媒體藝術創作者 · 音樂製作人 · 創意編程',
  } satisfies Localized,

  /** Alias used for the music project. */
  alias: 'Gouty Stone',

  bio: {
    en: `Jin Ng, also known as Gouty Stone, was born in 1997 in Kaohsiung, Taiwan. He graduated from the Department of Applied Music, Aletheia University in 2019, majoring in composition, and is currently studying at the New Media Art graduate program, Taipei National University of the Arts.

He has been thinking about New Music-Theater and musique concrète. Recently he has also paid more attention to the relationship between sound culture and sound symbols in contemporary society, and tries to reflect an East Asian perspective on the information generation through his work.

In 2020 he joined the XTRUX new media art team, where he is responsible for sound design and the development of game engines and interactive technologies. He has previously been involved in content production for Taiwanese artists Su Hui-Yu, Chen Yi and Li Yi-Fan, and collaborated with XTRUX for live audio/visual performances at Ars Electronica Linz and L.E.V Festival (Matadero Madrid, Spain).`,

    zh: `1997 年出生於高雄，2019 年畢業於真理大學音樂應用學系，主修理論作曲，目前就讀於國立臺北藝術大學新媒體藝術研究所。

創作脈絡從作曲家 Mauricio Kagel 的新音樂劇場與具象音樂的脈絡進行思考，嘗試將其延伸至網路文化與數位媒材在創作中發展。近年亦關注當代社會中聲音文化與聲音符號的關係，試圖在作品中反映資訊世代的東亞視角。

於 2020 年加入 XTRUX 新媒體藝術團隊，在團隊中擔任聲音設計與遊戲引擎、互動技術開發。曾參與蘇匯宇、陳乂、李亦凡等藝術家的內容製作，並與 XTRUX 於林茲電子藝術節（Ars Electronica）及西班牙 L.E.V Festival（Matadero Madrid）演出音像現場。`,
  } satisfies Localized,
};

export type SocialLink = {
  name: string;
  href: string;
  icon: ImageMetadata;
};

export const socials: SocialLink[] = [
  { name: 'Instagram', href: 'https://www.instagram.com/jin_ng.tw/', icon: ig },
  { name: 'YouTube', href: 'https://www.youtube.com/@jin-ng_tw', icon: yt },
  {
    name: 'Spotify',
    href: 'https://open.spotify.com/artist/19xLIDlKwD9dLVkNOCYkFl',
    icon: spotify,
  },
  { name: 'SoundCloud', href: 'https://soundcloud.com/goutystone', icon: soundcloud },
  { name: 'StreetVoice', href: 'https://streetvoice.com/zoidsroy/', icon: streetvoice },
  { name: 'GitHub', href: 'https://github.com/zoidsroy', icon: github },
  { name: 'Facebook', href: 'https://www.facebook.com/zoidsroy', icon: fb },
  { name: 'X', href: 'https://twitter.com/lisso_triton', icon: x },
  { name: 'Email', href: `mailto:${site.email}`, icon: mail },
];
