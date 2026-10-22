import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useLang } from '../context/LanguageContext.jsx'
import { site, waLink } from '../config.js'
import { external } from './ui.jsx'
import { InstagramIcon, FacebookIcon, XIcon, MenuIcon } from './Icons.jsx'

export default function Navbar() {
  const { t, toggle } = useLang()
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  const socials = [
    { href: site.instagram, Icon: InstagramIcon, label: 'Instagram' },
    { href: site.facebook, Icon: FacebookIcon, label: 'Facebook' },
    { href: site.x, Icon: XIcon, label: 'X' },
  ]

  const joinHref = waLink(t.nav.joinText)
  const close = () => setOpen(false)

  // Section links always go through the router so they also work from /gallery
  // The Gallery link opens the full /gallery page instead
  const sectionTo = (id) => (id === 'gallery' ? '/gallery' : { pathname: '/', hash: `#${id}` })

  // Close the menu on route change and when the layout switches to desktop
  useEffect(() => setOpen(false), [pathname])
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px)')
    const onChange = (e) => e.matches && setOpen(false)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  // Stop the page behind the open menu from scrolling
  useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prev
    }
  }, [open])

  return (
    <header className="sticky top-0 z-50 border-b border-grey/25 bg-white/95 backdrop-blur">
      <nav className="container-site flex h-[72px] items-center justify-between gap-3 sm:gap-6">
        <Link to={sectionTo('top')} className="flex min-w-0 items-center max-lg:flex-1">
          <img
            src="/images/logo.png"
            alt="दानवीर कर्ण खारिया"
            width="296"
            height="36"
            className="block h-[30px] w-auto max-w-full object-contain object-left sm:h-[36px]"
          />
        </Link>

        <ul className="hidden items-center gap-[25px] lg:flex">
          {t.nav.links.map((l) => (
            <li key={l.id}>
              <Link
                to={sectionTo(l.id)}
                className="text-[15px] font-medium text-grey transition-colors hover:text-orange"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex shrink-0 items-center gap-2 sm:gap-[18px]">
          <button
            type="button"
            onClick={toggle}
            className="h-10 rounded-full border border-grey/25 bg-white px-[13px] text-[14px] font-bold text-black transition-colors hover:border-orange"
            aria-label="Change language"
          >
            {t.nav.switchLabel}
          </button>

          <div className="hidden items-center gap-[22px] text-black lg:flex">
            {socials.map(({ href, Icon, label }) => (
              <a key={label} href={href} aria-label={label} className="hover:text-orange" {...external}>
                <Icon size={21} />
              </a>
            ))}
          </div>

          <a
            href={joinHref}
            className="hidden h-[46px] items-center whitespace-nowrap rounded-full bg-orange px-[19px] text-[15px] font-bold text-white transition duration-200 hover:-translate-y-px hover:shadow-lg sm:inline-flex"
            {...external}
          >
            {t.nav.join}
          </a>

          <button
            type="button"
            className="flex h-12 w-10 items-center justify-center text-black lg:hidden"
            onClick={() => setOpen((o) => !o)}
            aria-label="Menu"
            aria-expanded={open}
          >
            <MenuIcon open={open} />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="max-h-[calc(100dvh-72px)] overflow-y-auto overscroll-contain border-t border-grey/25 bg-white lg:hidden">
          <ul className="container-site flex flex-col py-3">
            {t.nav.links.map((l) => (
              <li key={l.id}>
                <Link to={sectionTo(l.id)} onClick={close} className="block py-3 text-[17px] font-medium text-black">
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <a href={joinHref} onClick={close} className="block py-3 text-[17px] font-medium text-black" {...external}>
                {t.nav.join}
              </a>
            </li>
            <li className="flex gap-6 py-3 text-black">
              {socials.map(({ href, Icon, label }) => (
                <a key={label} href={href} aria-label={label} onClick={close} {...external}>
                  <Icon size={22} />
                </a>
              ))}
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
