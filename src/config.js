// ─────────────────────────────────────────────────────────────
//  EDIT THIS FILE to update links, phone and images.
//  Text for each language lives in src/content/en.js and hi.js
// ─────────────────────────────────────────────────────────────

export const site = {
  phoneDisplay: '+91 90707 04545',
  phoneRaw: '+919070704545',
  whatsapp: '919070704545', // country code + number, no "+" or spaces
  email: 'info@danveerkarankhariya.com',

  // Social profiles
  instagram: 'https://www.instagram.com/danveerkarankhariya/',
  facebook: 'https://www.facebook.com/danveerkarankhariya',
  x: 'https://x.com/danveerkhariya',

  // Full-width hero banner (includes the "WARD 12" badge baked into the image).
  // One wide image (2000×878) serves desktop and mobile. Files live in /public/images/
  banner: {
    desktop: '/images/hero-banner-wide.jpg',
    mobile: '/images/hero-banner-wide.jpg',
  },
}

export const waLink = (text = '') =>
  `https://wa.me/${site.whatsapp}${text ? `?text=${encodeURIComponent(text)}` : ''}`
