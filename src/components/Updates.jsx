import { useState } from 'react'
import { useLang } from '../context/LanguageContext.jsx'
import { site } from '../config.js'
import { SectionHeading, external } from './ui.jsx'
import { InstagramIcon, FacebookIcon, XIcon } from './Icons.jsx'

const icons = { instagram: InstagramIcon, facebook: FacebookIcon, x: XIcon }
const FALLBACK = '/images/logo.png'

const PROFILE = '/images/social/profile.jpg'

export default function Updates() {
  const { t } = useLang()
  const u = t.updates
  return (
    <section id="updates" className="bg-white pt-[88px] pb-[64px] max-sm:pt-16">
      <div className="container-site">
        <SectionHeading eyebrow={u.eyebrow} title={u.title} subtitle={u.subtitle} />
        <div className="mt-[42px] grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {u.cards.map((c) => {
            const Icon = icons[c.key]
            return (
              // The whole card is one link; the "button" is a span so no <a> is nested
              <a
                key={c.key}
                href={site[c.key]}
                className="group flex min-w-0 flex-col items-start rounded-[16px] border border-grey/25 bg-white p-[27px] text-left transition duration-200 hover:-translate-y-1 hover:border-orange md:last:col-span-2 lg:last:col-span-1"
                {...external}
              >
                <span className="relative block h-24 w-24">
                  <Avatar />
                  <span className="absolute -bottom-1 -right-1 flex h-[34px] w-[34px] items-center justify-center rounded-full bg-orange text-white ring-[3px] ring-white">
                    <Icon size={18} />
                  </span>
                </span>
                <h3 className="mt-[20px] text-[20px] font-bold leading-[30px] text-black">{c.name}</h3>
                <p className="mb-[18px] break-words text-[17px] leading-[28px] text-grey">{c.handle}</p>
                <span className="mt-auto inline-flex h-[51px] items-center justify-center whitespace-nowrap rounded-full bg-orange px-[23px] text-[17px] font-bold text-white transition duration-200 group-hover:-translate-y-px group-hover:shadow-lg">
                  {c.cta}
                </span>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}

// Round profile photo (same picture on every card); falls back to the logo (contained, not cropped) if it fails to load
function Avatar() {
  const [failed, setFailed] = useState(false)
  return (
    <img
      src={failed ? FALLBACK : PROFILE}
      alt=""
      width="96"
      height="96"
      onError={() => setFailed(true)}
      className={`h-24 w-24 rounded-full border border-grey/25 bg-white ${failed ? 'object-contain p-3' : 'object-cover object-top'}`}
    />
  )
}
