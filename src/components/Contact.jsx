import { useState } from 'react'

const hours = [
  { day: 'Monday', time: '9:00am – 5:30pm' },
  { day: 'Tuesday', time: '9:00am – 5:30pm' },
  { day: 'Wednesday', time: '9:00am – 5:30pm' },
  { day: 'Thursday', time: '9:00am – 9:00pm' },
  { day: 'Friday', time: '9:00am – 9:00pm' },
  { day: 'Saturday', time: '9:00am – 5:00pm' },
  { day: 'Sunday', time: 'Closed' },
]

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' })

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Enquiry from ${formData.name}`)
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`
    )
    window.location.href = `mailto:hsplace@outlook.com?subject=${subject}&body=${body}`
  }

  return (
    <section id="contact" className="py-24 md:py-32 bg-neutral-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <p className="font-sans text-sage-600 text-xs tracking-[0.2em] uppercase mb-4">Get In Touch</p>
          <h2 className="font-display text-4xl md:text-5xl text-neutral-900 mb-3">
            Contact <span className="italic">Us</span>
          </h2>
          <div className="accent-line" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left - Info */}
          <div className="reveal-left space-y-10">
            <div className="space-y-5">
              <a href="tel:0397469001" className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-full bg-sage-50 border border-sage-200 flex items-center justify-center flex-shrink-0 group-hover:bg-sage-100 transition-colors duration-300">
                  <svg className="w-4 h-4 text-sage-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                  </svg>
                </div>
                <div>
                  <p className="font-sans text-neutral-400 text-xs tracking-[0.1em] uppercase mb-1">Phone</p>
                  <p className="font-sans text-neutral-900 group-hover:text-sage-600 transition-colors">(03) 9746 9001</p>
                </div>
              </a>

              <a href="mailto:hsplace@outlook.com" className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-full bg-sage-50 border border-sage-200 flex items-center justify-center flex-shrink-0 group-hover:bg-sage-100 transition-colors duration-300">
                  <svg className="w-4 h-4 text-sage-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <path d="M22 6l-10 7L2 6" />
                  </svg>
                </div>
                <div>
                  <p className="font-sans text-neutral-400 text-xs tracking-[0.1em] uppercase mb-1">Email</p>
                  <p className="font-sans text-neutral-900 group-hover:text-sage-600 transition-colors">hsplace@outlook.com</p>
                </div>
              </a>

              <a href="https://maps.google.com/?q=41+McKenzie+St+Melton+VIC+3337" target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-full bg-sage-50 border border-sage-200 flex items-center justify-center flex-shrink-0 group-hover:bg-sage-100 transition-colors duration-300">
                  <svg className="w-4 h-4 text-sage-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <p className="font-sans text-neutral-400 text-xs tracking-[0.1em] uppercase mb-1">Address</p>
                  <p className="font-sans text-neutral-900 group-hover:text-sage-600 transition-colors">41 McKenzie St, Melton VIC 3337</p>
                </div>
              </a>
            </div>

            {/* Hours */}
            <div>
              <h3 className="font-display text-xl text-neutral-900 mb-4">Opening Hours</h3>
              <div className="space-y-2">
                {hours.map((h) => (
                  <div key={h.day} className="flex justify-between font-sans text-sm border-b border-neutral-100 pb-2">
                    <span className="text-neutral-500">{h.day}</span>
                    <span className={h.time === 'Closed' ? 'text-neutral-400' : 'text-neutral-900'}>{h.time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Payment */}
            <div>
              <p className="font-sans text-neutral-400 text-xs tracking-[0.1em] uppercase mb-3">Payment Options</p>
              <div className="flex items-center gap-4">
                <img src="/images/afterpay.png" alt="Afterpay" className="h-5 w-auto opacity-50" />
                <img src="/images/zippay.png" alt="Zippay" className="h-5 w-auto opacity-50" />
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <div className="reveal-right">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block font-sans text-neutral-400 text-xs tracking-[0.1em] uppercase mb-2" htmlFor="name">Your Name</label>
                <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} className="form-input w-full px-4 py-3 rounded-sm font-sans text-neutral-900 text-sm" placeholder="Jane Smith" />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-sans text-neutral-400 text-xs tracking-[0.1em] uppercase mb-2" htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} className="form-input w-full px-4 py-3 rounded-sm font-sans text-neutral-900 text-sm" placeholder="jane@email.com" />
                </div>
                <div>
                  <label className="block font-sans text-neutral-400 text-xs tracking-[0.1em] uppercase mb-2" htmlFor="phone">Phone</label>
                  <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="form-input w-full px-4 py-3 rounded-sm font-sans text-neutral-900 text-sm" placeholder="0400 000 000" />
                </div>
              </div>
              <div>
                <label className="block font-sans text-neutral-400 text-xs tracking-[0.1em] uppercase mb-2" htmlFor="message">Message</label>
                <textarea id="message" name="message" required rows={5} value={formData.message} onChange={handleChange} className="form-input w-full px-4 py-3 rounded-sm font-sans text-neutral-900 text-sm resize-none" placeholder="Tell us about your hair goals..." />
              </div>
              <button type="submit" className="btn-primary w-full font-sans font-medium text-sm tracking-[0.1em] uppercase px-8 py-3.5 rounded-sm">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
