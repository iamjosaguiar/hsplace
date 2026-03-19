import SEO from '../components/SEO'
import Services from '../components/Services'
import Testimonials from '../components/Testimonials'
import { breadcrumbSchema } from '../schema'

const servicesPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Hair Services — H's Place Hair Studio Melton",
  "description": "Professional hair services in Melton including cut & styling, hair colour, balayage, and hair extensions by Keune master colourists.",
  "url": "https://hsplace.com.au/services",
  "mainEntity": { "@id": "https://hsplace.com.au/#hairsalon" }
}

export default function ServicesPage() {
  const crumbs = breadcrumbSchema([
    { name: 'Home', url: 'https://hsplace.com.au' },
    { name: 'Services', url: 'https://hsplace.com.au/services' },
  ])

  return (
    <>
      <SEO
        title="Hair Services — Cut, Colour, Balayage & Extensions in Melton"
        description="Professional hair services at H's Place Melton. Cut & styling, hair colour by Keune master colourists, balayage specialists, and premium hair extensions. Book online today."
        path="/services"
        schema={[servicesPageSchema, crumbs]}
      />
      <div className="hero-gradient pt-36 pb-20 text-center relative">
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <p className="font-sans text-white/40 text-xs tracking-[0.2em] uppercase mb-4">What We Offer</p>
          <h1 className="font-display text-5xl md:text-6xl text-white mb-3">
            Our <span className="italic text-sage-300">Services</span>
          </h1>
          <div className="accent-line" />
          <p className="font-sans text-white/40 max-w-md mx-auto mt-4 text-sm">
            From precision cuts to stunning colour transformations, our team delivers exceptional results every time.
          </p>
        </div>
      </div>
      <Services />
      <Testimonials />
    </>
  )
}
