import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { useRevealAll } from './hooks/useReveal'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import GalleryPage from './pages/GalleryPage'
import ServicesPage from './pages/ServicesPage'
import ContactPage from './pages/ContactPage'

function Layout() {
  useRevealAll()

  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </HelmetProvider>
  )
}
