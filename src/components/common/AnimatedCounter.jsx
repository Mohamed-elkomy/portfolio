import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

/**
 * Animated number counter — counts from 0 to `value` over `duration` ms
 * when the element scrolls into view.
 */
export default function AnimatedCounter({ value = 0, duration = 1400, suffix = '', className }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!inView) return

    const start = performance.now()
    const target = Number(value) || 0
    let raf = 0

    const tick = (t) => {
      const elapsed = t - start
      const progress = Math.min(1, elapsed / duration)
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      setDisplay(Math.round(target * eased))
      if (progress < 1) {
        raf = requestAnimationFrame(tick)
      }
    }

    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, value, duration])

  return (
    <span ref={ref} className={className}>
      {display}
      {suffix}
    </span>
  )
}
