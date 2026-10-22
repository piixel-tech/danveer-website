import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useLang } from '../context/LanguageContext.jsx'
import events from '../content/gallery.js'
import { SectionHeading } from '../components/ui.jsx'
import { ArrowLeftIcon } from '../components/Icons.jsx'
import Lightbox from '../components/Lightbox.jsx'

// Newest event first
const sorted = [...events].sort((a, b) => b.date.localeCompare(a.date))

export default function GalleryPage() {
  const { t, lang } = useLang()
  const g = t.gallery
  const [view, setView] = useState(null) // { eventId, index } | null

  const openEvent = view && events.find((e) => e.id === view.eventId)

  return (
    <main className="section-pad bg-orange/[0.06]">
      <div className="container-site">
        <Link
          to="/"
          className="inline-flex min-h-12 items-center gap-2 text-[17px] font-bold text-black transition-colors hover:text-orange"
        >
          <ArrowLeftIcon /> {g.back}
        </Link>

        <div className="mt-4">
          <SectionHeading eyebrow={g.pageEyebrow} title={g.pageTitle} />
        </div>

        {sorted.map((ev) => {
          const title = ev.title[lang]
          return (
            <section key={ev.id} aria-labelledby={`ev-${ev.id}`} className="mt-12">
              <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                <h2 id={`ev-${ev.id}`} className="text-[24px] leading-[1.3] text-black sm:text-[28px]">
                  {title}
                </h2>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4 lg:grid-cols-4">
                {ev.photos.map((src, i) => (
                  <button
                    key={src}
                    type="button"
                    onClick={() => setView({ eventId: ev.id, index: i })}
                    className="group relative aspect-square overflow-hidden rounded-[16px] bg-black"
                    aria-label={`${title} (${i + 1}/${ev.photos.length})`}
                  >
                    <img
                      src={src}
                      alt={`${title} (${i + 1})`}
                      width="400"
                      height="400"
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </button>
                ))}
              </div>
            </section>
          )
        })}
      </div>

      {openEvent && (
        <Lightbox
          photos={openEvent.photos}
          index={view.index}
          alt={openEvent.title[lang]}
          onIndex={(fn) => setView((v) => ({ ...v, index: fn(v.index) }))}
          onClose={() => setView(null)}
        />
      )}
    </main>
  )
}
