import { useLang } from '../context/LanguageContext.jsx'
import { Label } from './ui.jsx'

export default function StatsBand() {
  const { t } = useLang()
  return (
    <section className="bg-navy">
      <div className="container-site grid grid-cols-2 gap-x-4 gap-y-6 sm:gap-x-6 py-[22px] lg:grid-cols-4">
        {t.stats.map((s) => (
          <div key={s.label} className="min-w-0 break-words border-l-2 border-orange pl-[16px]">
            <Label text={s.label} className="block text-[12px] leading-[20px] text-white/70" />
            <p className="mt-[2px] text-[16px] font-bold leading-[28px] text-white sm:text-[18px]">{s.value}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
