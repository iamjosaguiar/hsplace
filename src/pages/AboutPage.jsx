import SEO from '../components/SEO'
import About from '../components/About'
import Services from '../components/Services'
import Testimonials from '../components/Testimonials'
import { aboutPageSchema, breadcrumbSchema } from '../schema'

export default function AboutPage() {
  const crumbs = breadcrumbSchema([
    { name: 'Home', url: 'https://hsplace.com.au' },
    { name: 'About', url: 'https://hsplace.com.au/about' },
  ])

  return (
    <>
      <SEO
        title="About Us — Award-Winning Hair Salon in Melton Since 2004"
        description="H's Place Hair Studio has been Melton's most sought-after hair salon since 2004. Our Keune master colourists and advanced cutting specialists are dedicated to making your hair dreams come true."
        path="/about"
        schema={[aboutPageSchema, crumbs]}
      />
      <div className="hero-gradient pt-36 pb-20 text-center relative">
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <p className="font-sans text-white/40 text-xs tracking-[0.2em] uppercase mb-4">Our Story</p>
          <h1 className="font-display text-5xl md:text-6xl text-white mb-3">
            About <span className="italic text-sage-300">H's Place</span>
          </h1>
          <div className="accent-line" />
        </div>
      </div>
      <About />
      <Services />
      <Testimonials />
    </>
  )
}
