import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Contact', to: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    window.scrollTo(0, 0)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const handleClick = (e, link) => {
    e.preventDefault()
    setMobileOpen(false)
    navigate(link.to)
  }

  const isActive = (link) => {
    if (link.to === '/') return location.pathname === '/'
    return location.pathname.startsWith(link.to)
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md shadow-sm py-3'
          : 'bg-transparent py-5'
      }`}
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <img
            src="/logo.png"
            alt="H's Place Hair Studio"
            className={`h-11 w-auto transition-all duration-300 group-hover:scale-105 ${
              scrolled ? '' : 'brightness-0 invert'
            }`}
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.to}
              href={link.to}
              onClick={(e) => handleClick(e, link)}
              className={`font-sans text-[13px] tracking-[0.08em] uppercase transition-colors duration-300 relative after:absolute after:bottom-[-4px] after:left-0 after:h-[1px] after:transition-all after:duration-300 hover:after:w-full ${
                scrolled
                  ? isActive(link)
                    ? 'text-sage-600 after:w-full after:bg-sage-500'
                    : 'text-neutral-600 hover:text-neutral-900 after:w-0 after:bg-sage-500'
                  : isActive(link)
                    ? 'text-white after:w-full after:bg-white'
                    : 'text-white/70 hover:text-white after:w-0 after:bg-white'
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://apps.kitomba.com/bookings/hsplace"
            target="_blank"
            rel="noopener noreferrer"
            className={`font-sans font-medium text-[13px] tracking-[0.06em] uppercase px-5 py-2 rounded-sm transition-all duration-300 ${
              scrolled
                ? 'bg-neutral-900 text-white hover:bg-neutral-700'
                : 'bg-white text-neutral-900 hover:bg-white/90'
            }`}
          >
            Book Online
          </a>
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`lg:hidden flex flex-col gap-1.5 w-8 p-1 z-50 ${mobileOpen ? 'hamburger-open' : ''}`}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          <span className={`hamburger-line block w-full h-[2px] origin-center ${scrolled && !mobileOpen ? 'bg-neutral-900' : 'bg-white'}`} />
          <span className={`hamburger-line block w-full h-[2px] origin-center ${scrolled && !mobileOpen ? 'bg-neutral-900' : 'bg-white'}`} />
          <span className={`hamburger-line block w-full h-[2px] origin-center ${scrolled && !mobileOpen ? 'bg-neutral-900' : 'bg-white'}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-0 bg-neutral-900/98 backdrop-blur-lg z-40 flex flex-col items-center justify-center gap-7 transition-all duration-500 ${
          mobileOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        {navLinks.map((link, i) => (
          <a
            key={link.to}
            href={link.to}
            onClick={(e) => handleClick(e, link)}
            className={`font-display text-2xl tracking-wide transition-all duration-300 ${
              isActive(link) ? 'text-sage-300' : 'text-white/80 hover:text-white'
            }`}
            style={{ transitionDelay: mobileOpen ? `${i * 60}ms` : '0ms' }}
          >
            {link.label}
          </a>
        ))}
        <a
          href="https://apps.kitomba.com/bookings/hsplace"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-neutral-900 font-sans font-medium text-[13px] tracking-[0.06em] uppercase px-7 py-3 rounded-sm mt-4 hover:bg-white/90 transition-colors"
        >
          Book Online
        </a>
      </div>
    </nav>
  )
}
