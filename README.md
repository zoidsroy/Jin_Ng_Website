# jin-ng.com

Jin Ng 的個人網站 — 以 [Astro](https://astro.build) 建置的雙語靜態站，部署於 GitHub Pages。

英文版在 `/`，中文版在 `/zh/`。**所有內容都寫在資料檔裡，版面只寫一次。**

---

## 日常維護：我要改什麼？

| 我想…            | 改這個檔案                        |
| ---------------- | --------------------------------- |
| 新增／修改一件作品 | `src/content/works/<名稱>.md`     |
| 新增一筆 CV 條目   | `src/data/cv.ts`                  |
| 改自我介紹、社群連結 | `src/data/site.ts`                |
| 改介面文字（按鈕、標題） | `src/data/ui.ts`             |
| 改配色、字級、間距   | `src/styles/global.css`（最上方的 `:root`）|

改完存檔 → `git push` → GitHub Actions 自動建置並上線，約 1–2 分鐘。

---

## 新增一件作品

在 `src/content/works/` 建立一個 `.md` 檔，檔名就是網址
（`boulder.md` → `jin-ng.com/works/boulder`）。

```yaml
---
order: 150 # 數字越大越前面。用來排序作品牆
type: audiovisual # audiovisual / installation / music / curation
year: '2026'
title:
  en: Work Title
  zh: 作品名稱 # 可省略，省略時中文版顯示英文
category:
  en: AudioVisual Performance
  zh: 音像演出
credit:
  en: XTRUX & Jin Ng — Work Title
  zh: XTRUX & Jin Ng — 作品名稱
cover: ../../assets/works/portfolio-15.jpg # 作品牆縮圖 + 社群分享圖
gallery: # 內頁圖輯，可省略
  - ../../assets/works/15-1.jpg
  - ../../assets/works/15-2.jpg
link: https://youtu.be/xxxx # 外部連結，可省略
description:
  en: |
    第一段。

    第二段。用 *星號* 包住的字會變成斜體。
  zh: |
    中文版描述。省略時會顯示英文，並在頁面上標註「此作品尚無中文版描述」。
---
```

圖片放在 `src/assets/works/`。**不要**放 `public/` —
放在 `src/assets/` 才會被自動壓縮成 WebP 並產生多種尺寸。

原始圖越大越好（建議長邊 ≥ 1600px），Astro 會自己縮小；
目前圖輯來源多半只有 800px，燈箱放大後會受限於此。

`draft: true` 可以讓一件作品暫時不出現在網站上，但檔案留著。

---

## 新增一筆 CV 條目

打開 `src/data/cv.ts`，找到對應的區塊，在陣列**最上面**加一筆：

```ts
{
  year: '2026',
  en: '《Work》Organisation — role, City, Country',
  zh: '《Work》單位 — 角色，城市，國家', // 可省略，省略時顯示英文
},
```

`collapseAfter: 8` 表示該區塊預設只顯示 8 筆，其餘收在「顯示全部」後面。

---

## 開發

```bash
npm install
npm run dev
```

其他指令：

```bash
npm run build    # 產出到 dist/
npm run preview  # 預覽 build 結果
npm run check    # 型別檢查
```

---

## 架構

```
src/
  content/works/     每件作品一個 .md（中英文寫在同一個檔案裡）
  content.config.ts  作品的資料結構定義（欄位、型別、必填與否）
  data/
    site.ts          個人資料、社群連結
    cv.ts            CV 條目
    ui.ts            介面文字（中英對照）
  lib/
    i18n.ts          語言切換、路徑前綴、中文缺漏時回退英文
    works.ts         作品排序與路由
    text.ts          描述文字的段落與斜體處理
  components/        版面元件
  layouts/Base.astro <head>、SEO、hreflang、JSON-LD
  pages/             路由（每個檔案只有幾行，實際版面在 components/pages/）
  styles/global.css  設計 token 與共用樣式
public/
  CNAME              自訂網域，不要刪
  video/             背景影片（已壓縮）與 poster
scripts/
  prune-unused-assets.mjs  build 後清掉 Astro 多輸出的未使用原圖
```

### 幾個刻意的決定

**背景影片不會在手機上載入。** 首屏先畫 30KB 的 poster 圖，只有在
桌機、非省流量模式、使用者沒有開啟「減少動態效果」時，才會在頁面載入完成後
才去抓影片。原始影片 97.7MB → 現在 1080p 11MB／720p 4MB。

**中文缺漏時自動回退英文。** `zh` 欄位可以留空，網站不會壞；作品內頁會
標註該篇尚無中文版。這讓你可以先發布英文，中文之後再補。

**舊網址都還活著。** `astro.config.mjs` 的 `redirects` 把
`portfolio-details1.html` 之類的舊路徑都導到新網址，之前分享出去的連結不會斷。

**沒有 CSS/JS 框架。** Bootstrap、jQuery、Isotope、Swiper、GLightbox、
Waypoints、PureCounter 全部移除。CSS 約 20KB，JS 只有幾個小元件腳本。

---

## 部署

推到 `main` 就會觸發 `.github/workflows/deploy.yml`。

GitHub 上需要設定一次：**Settings → Pages → Source 選 “GitHub Actions”**
（不是 “Deploy from a branch”）。
