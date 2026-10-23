import { useLang } from '../context/LanguageContext.jsx'
import { Label } from './ui.jsx'

export default function About() {
  const { t } = useLang()
  const a = t.about
  return (
    <section id="about" className="section-pad bg-white">
      <div className="container-site grid gap-10 lg:grid-cols-2 lg:gap-12">
        <div>
          <Label text={a.eyebrow} className="block text-[13px] font-bold leading-[18px] text-orange" />
          <h2 className="mt-2 text-[32px] leading-[1.25] text-black sm:text-[40px]">{a.title}</h2>
          <p className="mt-2 text-[15px] leading-[24px] text-grey">{a.subtitle}</p>
        </div>

        <div>
          <div className="max-w-prose space-y-4 text-justify">
            {a.paragraphs.map((p, i) => (
              <p key={i} className="text-[17px] leading-relaxed text-black">
                {p}
              </p>
            ))}
          </div>
          <blockquote className="mt-7 border-l-[3px] border-orange pl-[19px] text-justify text-[21px] leading-[31px] text-black sm:text-[24px] sm:leading-[35px]">
            {a.quote}
          </blockquote>
        </div>
      </div>
    </section>
  )
}
