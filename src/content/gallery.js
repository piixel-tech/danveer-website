// ─────────────────────────────────────────────────────────────
//  Gallery events. The homepage shows these in this order (the first is the
//  big tile); the /gallery page lists them newest first by date.
//
//  To add photos: put the files in /public/images/gallery/<event-folder>/ and
//  raise the count passed to g() (files are named 01.jpg, 02.jpg, ...).
// ─────────────────────────────────────────────────────────────

const g = (folder, n) =>
  Array.from({ length: n }, (_, i) => `/images/gallery/${folder}/${String(i + 1).padStart(2, '0')}.jpg`)

export const events = [
  {
    id: 'nomination-rally',
    title: { en: 'Nomination rally · 16 October', hi: 'नामांकन रैली · 16 अक्टूबर' },
    date: '2026-10-16',
    cover: '/images/gallery/nomination-rally/06.jpg',
    photos: g('nomination-rally', 8),
  },
  {
    id: 'ward-12',
    title: { en: 'Ward 12 · 22 October', hi: 'वार्ड 12 · 22 अक्टूबर' },
    date: '2026-10-22',
    cover: '/images/gallery/ward-12/03.jpg',
    photos: g('ward-12', 4),
  },
  {
    id: 'swami-achalanand-giri-darshan',
    title: {
      en: 'Darshan of Sainacharya Swami Achalanand Giri Ji · 21 October',
      hi: 'सैनाचार्य स्वामी अचलानंद गिरि जी के दर्शन · 21 अक्टूबर',
    },
    date: '2026-10-21',
    cover: '/images/gallery/swami-achalanand-giri-darshan/02.jpg',
    photos: g('swami-achalanand-giri-darshan', 3),
  },
  {
    id: 'village-elders-meeting',
    title: { en: 'Meeting village elders · 19 October', hi: 'गांव के बुज़ुर्गों से मुलाकात · 19 अक्टूबर' },
    date: '2026-10-19',
    cover: '/images/gallery/village-elders-meeting/02.jpg',
    photos: g('village-elders-meeting', 4),
  },
  {
    id: 'mla-arjunlal-garg-blessings',
    title: {
      en: 'Blessings from MLA Arjunlal Garg · 17 October',
      hi: 'विधायक अर्जुनलाल गर्ग जी का आशीर्वाद · 17 अक्टूबर',
    },
    date: '2026-10-17',
    cover: '/images/gallery/mla-arjunlal-garg-blessings/01.jpg',
    photos: g('mla-arjunlal-garg-blessings', 6),
  },
]

export default events
