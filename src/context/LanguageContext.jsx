import { createContext, useContext, useEffect, useState } from 'react'
import en from '../content/en.js'
import hi from '../content/hi.js'

const dictionaries = { en, hi }
const LanguageContext = createContext(null)

// Start language: ?lang=hi in URL → saved choice → English
function initialLang() {
  try {
    const fromUrl = new URLSearchParams(window.location.search).get('lang')
    if (fromUrl === 'hi' || fromUrl === 'en') return fromUrl
    const saved = localStorage.getItem('lang')
    if (saved === 'hi' || saved === 'en') return saved
  } catch {
    /* storage blocked — fall through */
  }
  return 'en'
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(initialLang)
  const t = dictionaries[lang]

  useEffect(() => {
    document.documentElement.lang = lang
    document.title = t.meta.title
    try {
      localStorage.setItem('lang', lang)
    } catch {
      /* ignore */
    }
  }, [lang, t])

  const toggle = () => setLang((l) => (l === 'en' ? 'hi' : 'en'))

  return (
    <LanguageContext.Provider value={{ lang, t, toggle }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLang = () => useContext(LanguageContext)
