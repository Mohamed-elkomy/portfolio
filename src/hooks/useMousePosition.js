import { useEffect, useState, useRef } from 'react'

/**
 * Track mouse position globally. Returns { x, y }.
 * Returns null on touch-only devices to avoid jank.
 */
export function useMousePosition() {
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const rafRef = useRef(0)
  const lastEventRef = useRef({ x: 0, y: 0 })

  useEffect(() => {
    if (typeof window === 'undefined') return
    if (!window.matchMedia('(pointer: fine)').matches) return // skip on touch devices

    const onMove = (e) => {
      lastEventRef.current = { x: e.clientX, y: e.clientY }
      if (rafRef.current) return
      rafRef.current = requestAnimationFrame(() => {
        setPos(lastEventRef.current)
        rafRef.current = 0
      })
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    return () => {
      window.removeEventListener('mousemove', onMove)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return pos
}
