# Danveer Karan Khariya · Campaign Website

One-page bilingual (English + हिंदी) site. Vite + React + Tailwind CSS v4. Frontend only, no backend.

## Run it

```bash
npm install
npm run dev       # local preview at http://localhost:5173
npm run build     # production files in /dist
```

## Where to edit

| What | File |
|---|---|
| Phone, email, WhatsApp, social links, banner and gallery photos | `src/config.js` |
| All English text | `src/content/en.js` |
| All Hindi text | `src/content/hi.js` |
| Colours and fonts | `src/index.css` (`@theme` block) |
| Link preview (WhatsApp/Facebook share) title, description, image | `index.html` |

## Images

- **Banner:** put `hero-banner.jpg` (about 2400×1200, keep Danveer on the right side, left side plain) and `hero-banner-mobile.jpg` (about 1080×1080) in `public/images/`, then update the paths in `src/config.js`. Keep text out of the banner; all text is coded.
- **Gallery:** put photos in `public/images/gallery/` and set them in `site.gallery` in `src/config.js` (order: rally, door-to-door, elders, workers' meeting, farmers).
- **Share image:** `public/images/og-image.jpg` at 1200×630.
- Export photos as WebP or compressed JPG (under 300 KB each).

## Language

The हिंदी / English button switches the whole page and remembers the choice. Link straight to Hindi with `?lang=hi`.

## Deploy (Netlify)

Build command `npm run build`, publish directory `dist`.
