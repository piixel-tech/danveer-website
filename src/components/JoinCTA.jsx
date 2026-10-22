import { useLang } from '../context/LanguageContext.jsx'
import { waLink } from '../config.js'
import { external } from './ui.jsx'

export default function JoinCTA() {
  const { t } = useLang()
  const j = t.join
  return (
    <section id="join" className="bg-white pb-[90px]">
      <div className="container-site">
        <div className="grid items-center gap-8 rounded-[20px] bg-navy p-6 sm:p-[50px] lg:grid-cols-2 lg:gap-10">
          <div>
            <h2 className="text-[30px] leading-[40px] text-white sm:text-[38px] sm:leading-[48px]">
              {j.title}
            </h2>
            <p className="mt-3 text-[17px] leading-[27px] text-white/90">{j.text}</p>
          </div>
          <div className="flex flex-col gap-[14px]">
            <a
              href={waLink(j.volunteerText)}
              className="flex h-[57px] items-center justify-center rounded-full bg-orange px-5 sm:px-6 text-center text-[17px] font-extrabold text-white transition duration-200 hover:-translate-y-px hover:shadow-lg"
              {...external}
            >
              {j.volunteer}
            </a>
            <a
              href={waLink(j.suggestText)}
              className="flex h-[57px] items-center justify-center rounded-full border-2 border-white px-5 sm:px-6 text-center text-[17px] font-bold text-white transition-colors hover:bg-white/10"
              {...external}
            >
              {j.suggest}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
