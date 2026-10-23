import { useLang } from '../context/LanguageContext.jsx'
import { site, waLink } from '../config.js'
import { external } from './ui.jsx'
import { InstagramIcon, FacebookIcon, TwitterIcon, ChatIcon } from './Icons.jsx'

export default function Footer() {
  const { t } = useLang()
  const links = [
    { href: site.instagram, Icon: InstagramIcon, label: 'Instagram' },
    { href: site.facebook, Icon: FacebookIcon, label: 'Facebook' },
    { href: site.x, Icon: TwitterIcon, label: 'Twitter' },
    { href: waLink(), Icon: ChatIcon, label: 'WhatsApp' },
  ]
  return (
    <footer className="bg-navy">
      <div className="container-site flex flex-col items-start justify-between gap-5 py-[38px] max-sm:pb-8 sm:flex-row sm:items-center">
        <p className="text-[14px] leading-[22px] text-white/70">{t.footer.copy}</p>
        <div className="flex items-center gap-[30px] text-white">
          {links.map(({ href, Icon, label }) => (
            <a key={label} href={href} aria-label={label} className="hover:text-orange" {...external}>
              <Icon size={20} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
