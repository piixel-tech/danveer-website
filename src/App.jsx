import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import StatsBand from './components/StatsBand.jsx'
import About from './components/About.jsx'
import Legacy from './components/Legacy.jsx'
import Priorities from './components/Priorities.jsx'
import Gallery from './components/Gallery.jsx'
import Updates from './components/Updates.jsx'
import JoinCTA from './components/JoinCTA.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import WhatsAppFloat from './components/WhatsAppFloat.jsx'
import ScrollManager from './components/ScrollManager.jsx'
import GalleryPage from './pages/GalleryPage.jsx'

function Home() {
  return (
    <main>
      <Hero />
      <StatsBand />
      <About />
      <Legacy />
      <Priorities />
      <Gallery />
      <Updates />
      <JoinCTA />
      <Contact />
    </main>
  )
}

export default function App() {
  return (
    <>
      <ScrollManager />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
