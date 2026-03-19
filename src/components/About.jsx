export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-neutral-50 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 md:gap-20 items-center">
          {/* Left content */}
          <div className="reveal-left">
            <p className="font-sans text-sage-600 text-xs tracking-[0.2em] uppercase mb-4">Experience the Art of Caring</p>
            <h2 className="font-display text-4xl md:text-5xl text-neutral-900 mb-6 leading-tight">
              Melton's Award-Winning<br />
              <span className="italic">Hair Salon Since 2004</span>
            </h2>
            <div className="accent-line-left" />
            <p className="font-sans text-neutral-500 leading-relaxed mb-5">
              H's Place Hair Studio first opened in 2004 and since then has only ever strived to provide the best possible standard of personal services at all times, using the finest quality products available. We are Melton's most sought after and award winning salon for hair services.
            </p>
            <p className="font-sans text-neutral-500 leading-relaxed mb-5">
              Our salon vision is to provide the highest quality in customer service, products, treatments and equipment to ensure the comfort, safety and maximum benefits from our treatments and services for every single person who walks through the door.
            </p>
            <p className="font-sans text-neutral-500 leading-relaxed mb-8">
              Our team are all advanced trained and highly skilled in their area of expertise, so you can be rest assured you are receiving the best service. At H's Place Hair Studio we deliver an excellent level of service to make sure you look and feel amazing after every single visit.
            </p>
            <p className="font-display text-2xl italic text-neutral-700 mb-8">
              "It's all about you!"
            </p>
            <a
              href="https://apps.kitomba.com/bookings/hsplace"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary font-sans font-medium text-xs tracking-[0.12em] uppercase px-7 py-3 rounded-sm"
            >
              Book a Consultation
            </a>
          </div>

          {/* Right - decorative */}
          <div className="reveal-right">
            <div className="relative">
              <div className="aspect-[3/4] bg-sage-50 rounded-sm overflow-hidden flex items-center justify-center">
                <div className="text-center">
                  <svg className="w-12 h-12 mx-auto mb-3 text-sage-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                    <circle cx="6" cy="6" r="3" />
                    <circle cx="6" cy="18" r="3" />
                    <line x1="20" y1="4" x2="8.12" y2="15.88" />
                    <line x1="14.47" y1="14.48" x2="20" y2="20" />
                    <line x1="8.12" y1="8.12" x2="12" y2="12" />
                  </svg>
                  <p className="font-display italic text-sage-400 text-lg">Est. 2004</p>
                </div>
              </div>
              <div className="absolute -top-3 -right-3 w-full h-full border border-sage-200 rounded-sm -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
