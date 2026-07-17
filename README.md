# ScanBeast — website

Static promo site + devlog for **ScanBeast**, the barcode monster-battler.
No build step, no framework — plain HTML/CSS/JS, safe to host on GitHub Pages. The only external request is a privacy-first, cookieless Cloudflare Web Analytics beacon (visitor counts; no cookies, no personal data).

## Structure

```
scanbeast-web/
├── index.html            Landing page (hero, features, gallery, download)
├── news.html             Devlog / release notes
├── .nojekyll             Tells GitHub Pages to serve files as-is (skip Jekyll)
└── assets/
    ├── css/style.css     All styling (palette matches the game's Theme.qml)
    ├── js/
    │   ├── news-data.js  ← EDIT THIS to publish a new devlog entry
    │   └── news.js       Renderer (no need to touch)
    └── img/
        ├── logo.webp     App logo / favicon
        ├── cover.jpg     Social preview image
        └── shot-1..7.webp  Phone screenshots
```

## Local preview

Open `index.html` directly, or serve the folder:

```bash
python3 -m http.server 8080
# then open http://localhost:8080
```

## Publish a news update

Edit `assets/js/news-data.js` — copy the top object, bump `ver`/`date`, change the text. That's it.

## Update screenshots

Drop new images in `assets/img/` as `shot-1.webp` … `shot-7.webp` (or add more and reference them in `index.html`). Keep them small — resize to ~720px wide WebP.

## Deploy (GitHub Pages)

1. Push this folder to a **public** repo (Pages is free only on public repos).
2. Repo → Settings → Pages → Source: `main` branch, `/ (root)`.
3. Site goes live at `https://<user>.github.io/<repo>/`.

## Notes

- The **Google Play** button links to `com.fugush.scanbeast`; it 404s until the app is published on Play.
- The **App Store** badge is a disabled "Soon" placeholder (iOS port in progress).
- A **privacy policy** page is not included yet — Google Play requires one at publish time.
