import SEO from '../components/SEO'
import Contact from '../components/Contact'
import { contactPageSchema, breadcrumbSchema } from '../schema'

export default function ContactPage() {
  const crumbs = breadcrumbSchema([
    { name: 'Home', url: 'https://hsplace.com.au' },
    { name: 'Contact', url: 'https://hsplace.com.au/contact' },
  ])

  return (
    <>
      <SEO
        title="Contact Us — Hair Salon Melton | (03) 9746 9001"
        description="Contact H's Place Hair Studio at 41 McKenzie St, Melton VIC 3337. Call (03) 9746 9001 or book online. Open Mon-Sat with late nights Thursday & Friday."
        path="/contact"
        schema={[contactPageSchema, crumbs]}
      />
      <div className="hero-gradient pt-36 pb-20 text-center relative">
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <p className="font-sans text-white/40 text-xs tracking-[0.2em] uppercase mb-4">Get In Touch</p>
          <h1 className="font-display text-5xl md:text-6xl text-white mb-3">
            Contact <span className="italic text-sage-300">Us</span>
          </h1>
          <div className="accent-line" />
        </div>
      </div>
      <Contact />
    </>
  )
}
