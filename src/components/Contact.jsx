import { useLang } from '../context/LanguageContext.jsx'
import { site } from '../config.js'
import { Label, SectionHeading } from './ui.jsx'
import { PhoneIcon, MailIcon, PinIcon } from './Icons.jsx'

export default function Contact() {
  const { t } = useLang()
  const c = t.contact

  const items = [
    { Icon: PhoneIcon, label: c.phoneLabel, value: site.phoneDisplay, href: `tel:${site.phoneRaw}`, size: 'text-[20px]' },
    { Icon: MailIcon, label: c.emailLabel, value: site.email, href: `mailto:${site.email}`, size: 'text-[18px]' },
    { Icon: PinIcon, label: c.addressLabel, value: c.address, size: 'text-[18px]' },
  ]

  return (
    <section id="contact" className="section-pad bg-orange/[0.06]">
      <div className="container-site">
        <SectionHeading eyebrow={c.eyebrow} title={c.title} />
        <div className="mt-[42px] grid gap-8 md:grid-cols-2 md:gap-x-5 lg:grid-cols-3">
          {items.map(({ Icon, label, value, href, size }) => (
            <div key={label} className="min-w-0 md:last:col-span-2 lg:last:col-span-1 border-t-[3px] border-black pt-[20px]">
              <p className="flex items-center gap-2 text-[12px] font-bold leading-[20px] text-grey">
                <Icon size={15} />
                <Label text={label} />
              </p>
              {href ? (
                <a href={href} className={`mt-[8px] block font-bold [overflow-wrap:anywhere] leading-[30px] text-black hover:text-orange ${size}`}>
                  {value}
                </a>
              ) : (
                <p className={`mt-[8px] break-words font-bold leading-[30px] text-black ${size}`}>{value}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
