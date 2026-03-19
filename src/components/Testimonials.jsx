import { useState, useEffect, useCallback } from 'react'

const testimonials = [
  { name: 'Nicole', text: 'Walked in feeling rather low... one of the best salon experiences I\'ve ever had! The team made me feel so welcome and I left feeling like a new woman.' },
  { name: 'Maxine', text: 'Great morning in the salon with the girls! Always leave feeling fabulous and ready to take on the world.' },
  { name: 'Michelle Grey', text: 'I finally got what I have been trying to get for years thanks to Hayleigh. She understood exactly what I wanted and delivered perfection.' },
  { name: 'Rachael', text: 'After having a hard week at work I enjoy coming into the salon. It\'s like a little sanctuary where I can unwind and be pampered.' },
  { name: 'Jade Green', text: '5 stars all the way! The most amazing team I have ever seen. Their passion for hair is unmatched and the results speak for themselves.' },
  { name: 'Heather', text: 'My experience was amazing! Came in feeling tired and run down and left feeling absolutely rejuvenated. The transformation was incredible.' },
  { name: 'Emma', text: 'All the girls at H\'s Place are fantastic. They always go above and beyond to make sure you\'re happy with your hair.' },
]

export default function Testimonials() {
  const [active, setActive] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const next = useCallback(() => {
    setActive((prev) => (prev + 1) % testimonials.length)
  }, [])

  const prev = useCallback(() => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }, [])

  useEffect(() => {
    if (isPaused) return
    const interval = setInterval(next, 5000)
    return () => clearInterval(interval)
  }, [isPaused, next])

  return (
    <section id="testimonials" className="py-24 md:py-32 bg-sage-50 overflow-hidden">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <p className="font-sans text-sage-600 text-xs tracking-[0.2em] uppercase mb-4">Kind Words</p>
          <h2 className="font-display text-4xl md:text-5xl text-neutral-900 mb-3">
            Client <span className="italic">Love</span>
          </h2>
          <div className="accent-line" />
        </div>

        <div
          className="relative reveal"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Quote mark */}
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 font-display text-[120px] text-sage-200 select-none leading-none">
            &ldquo;
          </div>

          <div className="relative min-h-[180px] flex items-center justify-center">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className={`absolute inset-0 flex flex-col items-center justify-center text-center transition-all duration-600 ${
                  i === active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6 pointer-events-none'
                }`}
              >
                <p className="font-sans text-lg md:text-xl text-neutral-700 italic leading-relaxed max-w-2xl mb-8">
                  "{t.text}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-[1px] bg-sage-300" />
                  <p className="font-sans text-sage-700 text-sm font-medium tracking-[0.1em] uppercase">
                    {t.name}
                  </p>
                  <div className="w-6 h-[1px] bg-sage-300" />
                </div>
              </div>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-5 mt-10">
            <button
              onClick={prev}
              className="w-9 h-9 rounded-full border border-sage-300 flex items-center justify-center text-sage-500 hover:border-sage-500 hover:text-sage-700 transition-all duration-300"
              aria-label="Previous testimonial"
            >
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
            </button>

            <div className="flex gap-1.5">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`rounded-full transition-all duration-400 ${
                    i === active ? 'w-6 h-1.5 bg-sage-500' : 'w-1.5 h-1.5 bg-sage-300 hover:bg-sage-400'
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-9 h-9 rounded-full border border-sage-300 flex items-center justify-center text-sage-500 hover:border-sage-500 hover:text-sage-700 transition-all duration-300"
              aria-label="Next testimonial"
            >
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
