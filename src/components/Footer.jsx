import { Link } from 'react-router-dom'

const footerLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Contact', to: '/contact' },
]

const hours = [
  { day: 'Mon–Wed', time: '9:00am – 5:30pm' },
  { day: 'Thu–Fri', time: '9:00am – 9:00pm' },
  { day: 'Saturday', time: '9:00am – 5:00pm' },
]

export default function Footer() {
  return (
    <footer className="bg-neutral-900 relative" itemScope itemType="https://schema.org/HairSalon">
      {/* Main footer */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8">

          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/">
              <img
                src="/logo.png"
                alt="H's Place Hair Studio - Hair Salon in Melton VIC"
                className="h-14 w-auto brightness-0 invert opacity-60 mb-5"
                itemProp="logo"
              />
            </Link>
            <p className="font-sans text-neutral-500 text-sm leading-relaxed mb-5">
              Melton's blonde &amp; balayage specialists since 2004.
            </p>
            <div className="flex items-center gap-3">
              <a href="https://www.facebook.com/HsPlaceHairStudio" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full border border-neutral-700 flex items-center justify-center text-neutral-500 hover:border-neutral-400 hover:text-white transition-all duration-300" aria-label="Facebook">
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" /></svg>
              </a>
              <a href="https://www.instagram.com/hsplacehairskinbeauty" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full border border-neutral-700 flex items-center justify-center text-neutral-500 hover:border-neutral-400 hover:text-white transition-all duration-300" aria-label="Instagram">
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="5" /><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" /></svg>
              </a>
            </div>
          </div>

          {/* Links */}
          <nav aria-label="Footer navigation">
            <h3 className="font-sans text-white text-xs tracking-[0.15em] uppercase mb-4">Navigate</h3>
            <div className="flex flex-col gap-2.5">
              {footerLinks.map((link) => (
                <Link key={link.to} to={link.to} className="font-sans text-neutral-500 text-sm hover:text-white transition-colors duration-300">
                  {link.label}
                </Link>
              ))}
              <a href="https://apps.kitomba.com/bookings/hsplace" target="_blank" rel="noopener noreferrer" className="font-sans text-sage-400 text-sm hover:text-sage-300 transition-colors duration-300">
                Book Online
              </a>
            </div>
          </nav>

          {/* Hours */}
          <div>
            <h3 className="font-sans text-white text-xs tracking-[0.15em] uppercase mb-4">Hours</h3>
            <div className="space-y-2.5">
              {hours.map((h) => (
                <div key={h.day} className="font-sans text-sm">
                  <span className="text-neutral-400 block">{h.day}</span>
                  <span className="text-neutral-500">{h.time}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-sans text-white text-xs tracking-[0.15em] uppercase mb-4">Contact</h3>
            <address className="not-italic space-y-3" itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
              <a href="https://maps.google.com/?q=41+McKenzie+St+Melton+VIC+3337" target="_blank" rel="noopener noreferrer" className="block font-sans text-neutral-500 text-sm hover:text-white transition-colors leading-relaxed">
                <span itemProp="streetAddress">41 McKenzie St</span><br />
                <span itemProp="addressLocality">Melton</span>, <span itemProp="addressRegion">VIC</span> <span itemProp="postalCode">3337</span>
              </a>
              <a href="tel:0397469001" className="block font-sans text-neutral-500 text-sm hover:text-white transition-colors" itemProp="telephone">
                (03) 9746 9001
              </a>
              <a href="mailto:Hsplace0@gmail.com" className="block font-sans text-neutral-500 text-sm hover:text-white transition-colors" itemProp="email">
                Hsplace0@gmail.com
              </a>
            </address>

            <div className="flex items-center gap-4 mt-5">
              <img src="/images/afterpay.png" alt="Afterpay" className="h-5 w-auto brightness-0 invert opacity-40" />
              <img src="/images/zippay.png" alt="Zippay" className="h-5 w-auto brightness-0 invert opacity-40" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-neutral-800">
        <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
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
