import { useLang } from '../context/LanguageContext.jsx'
import { Label, SectionHeading } from './ui.jsx'

export default function Legacy() {
  const { t } = useLang()
  const l = t.legacy
  return (
    <section id="legacy" className="section-pad bg-orange/[0.06]">
      <div className="container-site">
        <SectionHeading eyebrow={l.eyebrow} title={l.title} />
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {l.items.map((it) => (
            <article key={it.gen} className="last:md:col-span-2 last:lg:col-span-1 rounded-[14px] bg-white px-[26px] pt-[30px] pb-[34px]">
              <Label text={it.gen} className="block text-[12px] font-bold leading-[20px] text-navy" />
              <h3 className="mt-[14px] text-[23px] leading-[37px] text-black">{it.name}</h3>
              <p className="mt-[6px] text-[16px] leading-[25px] text-grey">{it.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
