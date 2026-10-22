import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useLang } from '../context/LanguageContext.jsx'
import events from '../content/gallery.js'
import { SectionHeading } from './ui.jsx'
import { ArrowRightIcon } from './Icons.jsx'
import Lightbox from './Lightbox.jsx'

// Homepage layout is designed for 5 events: 1 big tile + 4 small tiles
const HOME_EVENTS = events.slice(0, 5)

export default function Gallery() {
  const { t, lang } = useLang()
  const g = t.gallery
  const [view, setView] = useState(null) // { eventId, index } | null

  const openEvent = view && events.find((e) => e.id === view.eventId)

  const open = (ev) => setView({ eventId: ev.id, index: Math.max(0, ev.photos.indexOf(ev.cover)) })

  return (
    <section id="gallery" className="section-pad bg-orange/[0.06]">
      <div className="container-site">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading eyebrow={g.eyebrow} title={g.title} />
          <Link to="/gallery" className="inline-flex items-center gap-2 pb-2 text-[17px] font-bold text-black hover:text-orange">
            {g.more} <ArrowRightIcon />
          </Link>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-[2fr_1fr_1fr] lg:grid-rows-[250px_250px]">
          {HOME_EVENTS.map((ev, i) => (
            <Tile
              key={ev.id}
              caption={ev.title[lang]}
              src={ev.cover}
              big={i === 0}
              onOpen={() => open(ev)}
            />
          ))}
        </div>
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
    </section>
  )
}

function Tile({ caption, src, big, onOpen }) {
  const span = big
    ? 'col-span-2 aspect-[4/3] lg:col-span-1 lg:row-span-2 lg:aspect-auto'
    : 'aspect-square md:aspect-[4/3] lg:aspect-auto'
  return (
    <button
      type="button"
      onClick={onOpen}
      aria-label={caption}
      className={`group relative m-0 block overflow-hidden rounded-[16px] bg-black p-0 text-left ${span}`}
    >
      <img
        src={src}
        alt=""
        width="800"
        height="600"
        loading={big ? 'eager' : 'lazy'}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0" />
      <span className={`absolute inset-x-0 bottom-0 block p-5`}>
        <span
          className={`font-bold text-white ${
            big
              ? 'block text-[19px] leading-[28px]'
              : 'line-clamp-2 text-[15px] leading-[22px] sm:text-[17px] sm:leading-[24px]'
          }`}
        >
          {caption}
        </span>
      </span>
    </button>
  )
}
