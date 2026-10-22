import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'

// Handles scrolling on route changes: to the #section if there is one, else to the top.
export default function ScrollManager() {
  const { pathname, hash, key } = useLocation()
  const prevPath = useRef(pathname)

  useEffect(() => {
    // Smooth only within the same page; jump instantly between pages
    const behavior = prevPath.current === pathname ? 'smooth' : 'instant'
    prevPath.current = pathname
    const el = hash ? document.getElementById(decodeURIComponent(hash.slice(1))) : null
    if (el) el.scrollIntoView({ behavior })
    else window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname, hash, key])

  return null
}
