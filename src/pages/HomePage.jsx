import SEO from '../components/SEO'
import Hero from '../components/Hero'
import About from '../components/About'
import Services from '../components/Services'
import Gallery from '../components/Gallery'
import Testimonials from '../components/Testimonials'
import Contact from '../components/Contact'
import { localBusinessSchema, webSiteSchema, breadcrumbSchema } from '../schema'

export default function HomePage() {
  const crumbs = breadcrumbSchema([
    { name: 'Home', url: 'https://hsplace.com.au' },
  ])

  return (
    <>
      <SEO
        title="H's Place Hair Studio Melton | Blonde & Balayage Specialists Since 2004"
        description="H's Place Hair Studio — Melton's award-winning blonde and balayage specialists since 2004. Keune master colourists, precision cutting & hair extensions at 41 McKenzie St, Melton VIC 3337. Book online today."
        path="/"
        schema={[localBusinessSchema, webSiteSchema, crumbs]}
      />
      <Hero />
      <About />
      <Services />
      <Gallery preview />
      <Testimonials />
      <Contact />
    </>
  )
}
