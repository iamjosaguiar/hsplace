import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'

const SELECTOR = '.reveal, .reveal-left, .reveal-right, .reveal-scale, .stagger-children'

export function useReveal(threshold = 0.15) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible')
          observer.unobserve(el)
        }
      },
      { threshold, rootMargin: '0px 0px -40px 0px' }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  return ref
}

export function useRevealAll() {
  const location = useLocation()
  const observerRef = useRef(null)

  useEffect(() => {
    // Disconnect previous observer
    if (observerRef.current) {
      observerRef.current.disconnect()
    }

    // Small delay to let React render the new page DOM
    const timeout = setTimeout(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible')
              observer.unobserve(entry.target)
            }
          })
        },
        { threshold: 0.12, rootMargin: '0px 0px -30px 0px' }
      )

      observerRef.current = observer

      const elements = document.querySelectorAll(SELECTOR)
      elements.forEach((el) => observer.observe(el))
    }, 60)

    return () => {
      clearTimeout(timeout)
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, [location.pathname])
}
