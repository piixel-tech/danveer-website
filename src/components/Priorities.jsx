import { useLang } from '../context/LanguageContext.jsx'
import { SectionHeading } from './ui.jsx'

export default function Priorities() {
  const { t } = useLang()
  const p = t.priorities
  return (
    <section id="priorities" className="section-pad bg-white">
      <div className="container-site">
        <SectionHeading eyebrow={p.eyebrow} title={p.title} />
        {/* Outer border; each cell outside the first row gets a top border = one horizontal divider */}
        <div className="mt-8 grid overflow-hidden rounded-[16px] border border-grey/25 bg-white sm:grid-cols-2 lg:grid-cols-3">
          {p.items.map((it) => (
            <article key={it.title} className="border-t border-grey/25 px-[27px] pt-[36px] pb-[34px] first:border-t-0 sm:[&:nth-child(2)]:border-t-0 lg:[&:nth-child(3)]:border-t-0">
              <h3 className="text-[24px] leading-[30px] text-black">{it.title}</h3>
              <p className="mt-[12px] text-[16px] leading-[26px] text-grey">{it.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
