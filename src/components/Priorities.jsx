import { useState } from 'react'
import { useLang } from '../context/LanguageContext.jsx'
import { SectionHeading } from './ui.jsx'

export default function Priorities() {
  const { t } = useLang()
  const p = t.priorities
  const [open, setOpen] = useState(null)
  return (
    <section id="priorities" className="section-pad bg-white">
      <div className="container-site">
        <SectionHeading eyebrow={p.eyebrow} title={p.title} />
        {/* Outer border; each cell outside the first row gets a top border = one horizontal divider */}
        <div className="mt-8 grid overflow-hidden rounded-[16px] border border-grey/25 bg-white sm:grid-cols-2 lg:grid-cols-3">
          {p.items.map((it, i) => {
            const isOpen = open === i
            return (
            <article
              key={it.title}
              className={`border-t border-grey/25 px-[20px] py-[16px] transition-colors duration-200 first:border-t-0 sm:bg-transparent sm:px-[27px] sm:pt-[36px] sm:pb-[34px] sm:[&:nth-child(2)]:border-t-0 lg:[&:nth-child(3)]:border-t-0 ${isOpen ? 'bg-orange/5' : ''}`}
            >
              {/* Phone: heading is a toggle; sm and up: plain heading, text always shown */}
              <h3 className="text-[20px] leading-[28px] text-black sm:text-[24px] sm:leading-[30px]">
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 text-left sm:pointer-events-none"
                >
                  <span className={`transition-colors duration-200 ${isOpen ? 'text-orange' : ''} sm:text-black`}>{it.title}</span>
                  <span
                    aria-hidden="true"
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300 sm:hidden ${
                      isOpen ? 'rotate-180 border-orange bg-orange text-white' : 'border-grey/30 text-orange'
                    }`}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </span>
                </button>
              </h3>
              {/* Phone: animate height via grid rows; sm and up: always visible */}
              <div className={`grid transition-[grid-template-rows] duration-300 ease-out sm:block ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                <div className="overflow-hidden sm:overflow-visible">
                  <p className="pt-[12px] text-[16px] leading-[26px] text-grey">{it.text}</p>
                </div>
              </div>
            </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
