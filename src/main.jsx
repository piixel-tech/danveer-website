import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// Self-hosted fonts (no Google Fonts request needed)
import '@fontsource/noto-sans-devanagari/400.css'
import '@fontsource/noto-sans-devanagari/500.css'
import '@fontsource/noto-sans-devanagari/600.css'
import '@fontsource/noto-sans-devanagari/700.css'
import '@fontsource/inter/400.css'
import '@fontsource/inter/500.css'
import '@fontsource/inter/600.css'
import '@fontsource/inter/700.css'
import '@fontsource/inter/800.css'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import { LanguageProvider } from './context/LanguageContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </BrowserRouter>
  </StrictMode>,
)
