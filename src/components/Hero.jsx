import { useLang } from '../context/LanguageContext.jsx'
import { site, waLink } from '../config.js'
import { Button, external } from './ui.jsx'
import { ChatIcon } from './Icons.jsx'

/**
 * Full-width banner hero.
 * The banner is a photo only (set in src/config.js → site.banner).
 * All text on top of it is real coded text, so it switches language.
 */
export default function Hero() {
  const { t } = useLang()
  const h = t.hero

  return (
    <section id="top" className="relative overflow-hidden bg-white">
      {/* Banner image: on mobile it sits above the text, on desktop it fills the section */}
      <picture className="block aspect-square w-full lg:absolute lg:inset-0 lg:aspect-auto lg:h-full">
        <source media="(min-width: 1024px)" srcSet={site.banner.desktop} />
        <img
          src={site.banner.mobile}
          alt=""
          className="h-full w-full object-cover object-right"
          fetchPriority="high"
        />
      </picture>

      {/* Soft white fade so the text on the left stays readable (desktop) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 hidden lg:block"
        style={{
          background:
            'linear-gradient(90deg, #fff 0%, rgba(255,255,255,0.96) 34%, rgba(255,255,255,0.6) 50%, rgba(255,255,255,0) 64%)',
        }}
      />

      <div className="container-site relative">
        <div className="max-w-[576px] pt-[40px] pb-14 lg:pt-[68px] lg:pb-[88px] lg:min-h-[694px]">
          <p className="flex items-center gap-[10px] text-[15px] font-bold leading-[24px] text-orange">
            <span className="h-[10px] w-[10px] rounded-full bg-orange ring-[3px] ring-orange/20" />
            {h.badge}
          </p>

          <h1 className="mt-4 text-[clamp(34px,11vw,46px)] leading-[1.1] text-black sm:text-[60px] lg:text-[72px] lg:leading-[78px]">
            {h.nameLines.map((line, i) => (
              <span key={i} className="block">
                {line}
              </span>
            ))}
          </h1>

          <p className="mt-4 text-[clamp(17px,5.4vw,20px)] font-bold leading-[32px] text-grey lg:text-[22px]">{h.altName}</p>

          <p className="mt-5 text-[clamp(22px,6.8vw,26px)] leading-[1.45] lg:leading-[44px] text-orange lg:text-[30px]">
            {h.tagline}
          </p>

          <p className="mt-5 max-w-[530px] text-[17px] leading-[27px] text-black">{h.intro}</p>

          <p className="mt-5 max-w-[530px] text-[15px] leading-[24px] text-grey">{h.meta}</p>

          <div className="mt-8 flex flex-col gap-3 min-[400px]:flex-row min-[400px]:flex-wrap">
            <Button href={waLink(h.whatsappText)} className="h-[55px] w-full px-[26px] text-[17px] min-[400px]:w-auto" {...external}>
              <ChatIcon size={19} />
              {h.whatsapp}
            </Button>
            <Button href="#updates" variant="outline" className="h-[55px] w-full px-[23px] text-[17px] min-[400px]:w-auto">
              {h.follow}
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
