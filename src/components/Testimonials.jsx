import { useState, useEffect, useCallback } from 'react'

const testimonials = [
  {
    name: 'Emma',
    text: 'All the girls at H\'s Place are fantastic, very welcoming, helpful, and honest. Couldn\'t ask for a better group of girls. I love going in there not just to get my hair done, but knowing I will be having awesome fun and lots of laughs. Highly recommend the salon, had great experience from day one and wouldn\'t go anywhere else.',
  },
  {
    name: 'Nicole',
    text: 'Walked in feeling rather low and kind of embarrassed by the state of my hair! But the girls were sooooo lovely, kind and inviting. It was one of the best salon experiences I\'ve ever had! I left feeling so confident and proud of my hair! Got some waxing done as well and the results are simply amazing! Massive shoutout to all the girls! A million times thankyou!',
  },
  {
    name: 'Maxine',
    text: 'Great morning in the salon with the girls! Loving my hair colour & had an amazing facial. The girls are AWESOME at H\'s, very professional and friendly.',
  },
  {
    name: 'Michelle Grey',
    text: 'Absolutely love my blonde hair!! I finally got what I have been trying to get for years thanks to Hayleigh. She took the time to chat with me and find out what it was that I wanted to achieve. I was so nervous going to another salon because I had never been happy, but now I\'ve found the salon I\'ve been looking for. I walked away feeling younger and hotter. Do yourself a favour if you want a change and want a clean looking blonde you must go to this salon.',
  },
  {
    name: 'Rachael',
    text: 'After having a hard week at work I enjoy coming into the salon to defuse with the pampering and social engagement with the lovely and professional staff! I will highly recommend H\'s Place to anyone wanting great professional service. Looking forward to my next appointment!',
  },
  {
    name: 'Jade Green',
    text: '5 stars all the way! The most amazing team I\'ve ever seen in a hair salon. The support and team work this salon has is incredible. They really go above and beyond for you. I love the fact I can have my hair and skin treatments in one place. They really take the time to find out what concerns or problems you are having and make it a high priority to help you solve them.',
  },
  {
    name: 'Heather',
    text: 'My experience was amazing! Came into the salon feeling tired and run down, aches and soreness. Walked out feeling like a million dollars thanks to Aimee and her amazing massage!',
  },
  {
    name: 'Nicole B.',
    text: 'I have been looking for a salon for a while now and all I can say is THANK GOD I found H\'s Place. I have had so many issues with my hair in the past and all I wanted was a nice blonde and thanks to Hayleigh I got what I wanted. She was really honest and told me all about shampoos that I should and shouldn\'t be using. I highly recommend this salon, you will be so happy with the end result. I will definitely be back.',
  },
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
    const interval = setInterval(next, 6000)
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

          <div className="relative min-h-[220px] md:min-h-[180px] flex items-center justify-center">
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
