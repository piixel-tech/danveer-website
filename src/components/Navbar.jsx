import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useLang } from '../context/LanguageContext.jsx'
import { site, waLink } from '../config.js'
import { external } from './ui.jsx'
import { InstagramIcon, FacebookIcon, TwitterIcon, MenuIcon } from './Icons.jsx'

export default function Navbar() {
  const { t, toggle } = useLang()
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  const socials = [
    { href: site.instagram, Icon: InstagramIcon, label: 'Instagram' },
    { href: site.facebook, Icon: FacebookIcon, label: 'Facebook' },
    { href: site.x, Icon: TwitterIcon, label: 'Twitter' },
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
    <>
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

    </header>

    {/* Mobile menu: slide-in drawer from the right. Rendered outside <header> because its
        backdrop-blur would otherwise make `fixed` position relative to the header. */}
    <div className={`fixed inset-0 z-[60] lg:hidden ${open ? '' : 'pointer-events-none'}`} aria-hidden={!open}>
      <div
        onClick={close}
        className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${open ? 'opacity-100' : 'opacity-0'}`}
      />
      <aside
        className={`absolute right-0 top-0 flex h-full w-[82%] max-w-[340px] flex-col bg-white shadow-2xl transition-transform duration-300 ease-out ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex h-[72px] shrink-0 items-center justify-between border-b border-grey/25 px-6">
          <span className="text-[13px] font-bold uppercase tracking-wider text-orange">Menu</span>
          <button type="button" onClick={close} aria-label="Close menu" className="flex h-10 w-10 items-center justify-center text-black">
            <MenuIcon open />
          </button>
        </div>
        <ul className="flex-1 overflow-y-auto overscroll-contain px-6 py-3">
          {t.nav.links.map((l) => (
            <li key={l.id} className="border-b border-grey/15">
              <Link to={sectionTo(l.id)} onClick={close} tabIndex={open ? 0 : -1} className="block py-4 text-[17px] font-medium text-black hover:text-orange">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="shrink-0 space-y-5 border-t border-grey/25 px-6 py-5">
          <a
            href={joinHref}
            onClick={close}
            tabIndex={open ? 0 : -1}
            className="flex h-[48px] items-center justify-center rounded-full bg-orange text-[16px] font-bold text-white"
            {...external}
          >
            {t.nav.join}
          </a>
          <div className="flex justify-center gap-7 text-black">
            {socials.map(({ href, Icon, label }) => (
              <a key={label} href={href} aria-label={label} onClick={close} tabIndex={open ? 0 : -1} {...external}>
                <Icon size={22} />
              </a>
            ))}
          </div>
        </div>
      </aside>
    </div>
    </>
  )
}
