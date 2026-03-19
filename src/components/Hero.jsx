export default function Hero() {
  return (
    <section id="home" className="hero-gradient min-h-[100svh] flex items-center justify-center relative overflow-hidden">
      <div className="relative z-10 text-center px-6 max-w-2xl mx-auto pt-24 pb-20">
        <p className="font-sans text-white/40 text-[11px] tracking-[0.3em] uppercase mb-8 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          Est. 2004 &mdash; Melton, Victoria
        </p>

        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl text-white font-normal leading-[1.15] mb-5 animate-fade-up" style={{ animationDelay: '0.6s' }}>
          Blonde &amp; Balayage<br />
          <span className="italic text-sage-300">Specialists</span>
        </h1>

        <div className="accent-line animate-fade-in" style={{ animationDelay: '0.8s' }} />

        <p className="font-sans text-white/50 text-[15px] leading-relaxed max-w-lg mx-auto mt-6 mb-12 animate-fade-up" style={{ animationDelay: '1s' }}>
          Seamless colour blends, gorgeous bright blondes, precision cutting and so much more. Relax with 100% confidence in our Keune master colourists and advanced cutting specialists.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: '1.2s' }}>
          <a
            href="https://apps.kitomba.com/bookings/hsplace"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-neutral-900 font-sans font-medium text-[13px] tracking-[0.1em] uppercase px-8 py-3.5 rounded-sm hover:bg-white/90 transition-all duration-300 hover:translate-y-[-1px] hover:shadow-lg"
          >
            Book Appointment
          </a>
          <a
            href="tel:0397469001"
            className="text-white/40 font-sans text-[13px] tracking-[0.1em] uppercase hover:text-white transition-colors duration-300"
          >
            (03) 9746 9001
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-fade-in" style={{ animationDelay: '1.8s' }}>
        <div className="w-[1px] h-8 bg-gradient-to-b from-white/20 to-transparent mx-auto" />
      </div>
    </section>
  )
}
