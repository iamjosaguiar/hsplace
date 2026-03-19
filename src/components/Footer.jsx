import { Link } from 'react-router-dom'

const footerLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Contact', to: '/contact' },
]

export default function Footer() {
  return (
    <footer className="bg-neutral-900 py-16 relative" itemScope itemType="https://schema.org/HairSalon">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 md:gap-8 mb-12">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start">
            <Link to="/">
              <img
                src="/logo.png"
                alt="H's Place Hair Studio - Hair Salon in Melton VIC"
                className="h-16 w-auto brightness-0 invert opacity-70 mb-4"
                itemProp="logo"
              />
            </Link>
            <p className="font-sans text-neutral-500 text-sm text-center md:text-left leading-relaxed">
              Melton's blonde &amp; balayage specialists since 2004.
            </p>
          </div>

          {/* Links */}
          <nav className="flex flex-col items-center md:items-start" aria-label="Footer navigation">
            <h3 className="font-sans text-neutral-400 text-xs tracking-[0.15em] uppercase mb-4">Links</h3>
            <div className="flex flex-col gap-2.5">
              {footerLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="font-sans text-neutral-500 text-sm hover:text-white transition-colors duration-300"
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="https://apps.kitomba.com/bookings/hsplace"
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-sage-400 text-sm hover:text-sage-300 transition-colors duration-300"
              >
                Book Online
              </a>
            </div>
          </nav>

          {/* Contact */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-sans text-neutral-400 text-xs tracking-[0.15em] uppercase mb-4">Visit Us</h3>
            <address className="not-italic space-y-2.5" itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
              <p className="font-sans text-neutral-500 text-sm">
                <span itemProp="streetAddress">41 McKenzie St</span><br />
                <span itemProp="addressLocality">Melton</span>, <span itemProp="addressRegion">VIC</span> <span itemProp="postalCode">3337</span>
              </p>
              <a href="tel:0397469001" className="block font-sans text-neutral-500 text-sm hover:text-white transition-colors" itemProp="telephone">
                (03) 9746 9001
              </a>
              <a href="mailto:hsplace@outlook.com" className="block font-sans text-neutral-500 text-sm hover:text-white transition-colors" itemProp="email">
                hsplace@outlook.com
              </a>
            </address>

            <div className="flex items-center gap-3 mt-5">
              <a href="https://www.facebook.com/HsPlaceHairStudio" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full border border-neutral-700 flex items-center justify-center text-neutral-500 hover:border-neutral-500 hover:text-white transition-all duration-300" aria-label="Follow H's Place Hair Studio on Facebook">
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>
              <a href="https://www.instagram.com/hsplacehairskinbeauty" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full border border-neutral-700 flex items-center justify-center text-neutral-500 hover:border-neutral-500 hover:text-white transition-all duration-300" aria-label="Follow H's Place Hair Studio on Instagram">
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="5" />
                  <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="w-full h-[1px] bg-neutral-800 mb-6" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-sans text-neutral-600 text-xs">
            &copy; {new Date().getFullYear()} H's Place Hair Studio. All Rights Reserved.
          </p>
          <p className="font-sans text-neutral-700 text-xs">
            Hair Salon Melton &bull; Balayage Specialists &bull; Melton VIC 3337
          </p>
        </div>
      </div>
    </footer>
  )
}
