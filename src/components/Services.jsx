const services = [
  {
    title: 'Cut & Styling',
    description: 'From precision cuts to luxurious blow-dries and special occasion styling, our advanced cutting specialists craft the perfect shape for your hair type and face shape.',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
        <circle cx="6" cy="6" r="3" />
        <circle cx="6" cy="18" r="3" />
        <line x1="20" y1="4" x2="8.12" y2="15.88" />
        <line x1="14.47" y1="14.48" x2="20" y2="20" />
        <line x1="8.12" y1="8.12" x2="12" y2="12" />
      </svg>
    ),
  },
  {
    title: 'Hair Colour',
    description: 'As Keune master colourists, we specialise in seamless blends, gorgeous blondes, balayage, foils, toning and creative colour. Your hair colour dreams are our expertise.',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2c-2.5 4-2.5 8 0 12s2.5 8 0 10" />
        <path d="M2 12h20" />
      </svg>
    ),
  },
  {
    title: 'Hair Extensions',
    description: 'Add length, volume and dimension with our premium hair extension services. We offer a range of application methods to suit your lifestyle and hair goals.',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M12 3c-1 0-3 1.5-3 5s1 7 3 13c2-6 3-9.5 3-13s-2-5-3-5z" />
        <path d="M8 8c-2 0-4 1-4 3s2 5 4 8" />
        <path d="M16 8c2 0 4 1 4 3s-2 5-4 8" />
      </svg>
    ),
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-neutral-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <p className="font-sans text-sage-600 text-xs tracking-[0.2em] uppercase mb-4">What We Do</p>
          <h2 className="font-display text-4xl md:text-5xl text-neutral-900 mb-3">
            Our <span className="italic">Services</span>
          </h2>
          <div className="accent-line" />
          <p className="font-sans text-neutral-400 max-w-md mx-auto mt-4 text-sm">
            Whether you're after a fresh new look or maintaining your signature style, our team delivers exceptional results every time.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 stagger-children">
          {services.map((service) => (
            <div key={service.title} className="service-card rounded-sm p-10 text-center group">
              <div className="text-sage-500 group-hover:text-sage-600 transition-colors duration-300 flex justify-center mb-5">
                {service.icon}
              </div>
              <h3 className="font-display text-xl text-neutral-900 mb-3">
                {service.title}
              </h3>
              <p className="font-sans text-neutral-400 text-sm leading-relaxed mb-6">
                {service.description}
              </p>
              <a
                href="https://apps.kitomba.com/bookings/hsplace"
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-neutral-900 text-xs tracking-[0.12em] uppercase hover:text-sage-600 transition-colors duration-300 inline-flex items-center gap-2"
              >
                Book Now
                <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
