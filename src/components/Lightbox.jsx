import { useCallback, useEffect, useRef } from 'react'
import { useLang } from '../context/LanguageContext.jsx'
import { ChevronLeftIcon, ChevronRightIcon, CloseIcon } from './Icons.jsx'

const SWIPE_MIN = 50 // px

/** Simple full-screen photo viewer: prev/next buttons, arrow keys, swipe, Esc to close. */
export default function Lightbox({ photos, index, alt, onIndex, onClose }) {
  const { t } = useLang()
  const g = t.gallery
  const touchStart = useRef(null)
  const closeBtn = useRef(null)
  const count = photos.length

  const go = useCallback((d) => onIndex((i) => (i + d + count) % count), [onIndex, count])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      else if (e.key === 'ArrowLeft') go(-1)
      else if (e.key === 'ArrowRight') go(1)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [go, onClose])

  // Lock page scroll and move focus into the dialog while it is open
  useEffect(() => {
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeBtn.current?.focus()
    return () => {
      document.body.style.overflow = prevOverflow
    }
  }, [])

  const onTouchStart = (e) => {
    touchStart.current = e.touches[0].clientX
  }
  const onTouchEnd = (e) => {
    if (touchStart.current == null) return
    const dx = e.changedTouches[0].clientX - touchStart.current
    touchStart.current = null
    if (Math.abs(dx) >= SWIPE_MIN) go(dx < 0 ? 1 : -1)
  }

  const btn =
    'absolute z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/15 text-white transition-colors hover:bg-white/25'

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={alt}
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90"
      onClick={onClose}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <button ref={closeBtn} type="button" aria-label={g.close} onClick={onClose} className={`${btn} right-3 top-3`}>
        <CloseIcon />
      </button>

      {count > 1 && (
        <>
          <button
            type="button"
            aria-label={g.prev}
            onClick={(e) => (e.stopPropagation(), go(-1))}
            className={`${btn} left-2 top-1/2 -translate-y-1/2 sm:left-4`}
          >
            <ChevronLeftIcon />
          </button>
          <button
            type="button"
            aria-label={g.next}
            onClick={(e) => (e.stopPropagation(), go(1))}
            className={`${btn} right-2 top-1/2 -translate-y-1/2 sm:right-4`}
          >
            <ChevronRightIcon />
          </button>
        </>
      )}

      <img
        src={photos[index]}
        alt={`${alt} (${index + 1}/${count})`}
        className="max-h-[85dvh] max-w-[calc(100%-32px)] select-none object-contain sm:max-w-[calc(100%-144px)]"
        draggable={false}
        onClick={(e) => e.stopPropagation()}
      />

      <p className="absolute inset-x-0 bottom-4 text-center text-[14px] font-bold text-white">
        {index + 1} / {count}
      </p>
    </div>
  )
}
