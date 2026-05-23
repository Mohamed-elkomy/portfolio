import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

/**
 * Premium custom cursor — a brass dot that follows the mouse.
 * Expands on links, buttons, and other interactive elements.
 * Hidden on touch devices.
 */
export default function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const [variant, setVariant] = useState('default') // 'default' | 'hover'
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return
    // Skip on touch / coarse pointers
    if (!window.matchMedia('(pointer: fine)').matches) return

    let raf = 0
    let next = { x: 0, y: 0 }
    const onMove = (e) => {
      next = { x: e.clientX, y: e.clientY }
      if (raf) return
      raf = requestAnimationFrame(() => {
        setPos(next)
        if (!visible) setVisible(true)
        raf = 0
      })
    }

    const onOver = (e) => {
      const t = e.target
      if (!t || !t.closest) return
      if (t.closest('a, button, [role="button"], [data-cursor="hover"]')) {
        setVariant('hover')
      } else {
        setVariant('default')
      }
    }

    const onLeave = () => setVisible(false)
    const onEnter = () => setVisible(true)

    window.addEventListener('mousemove', onMove, { passive: true })
    document.addEventListener('mouseover', onOver, { passive: true })
    document.addEventListener('mouseleave', onLeave)
    document.addEventListener('mouseenter', onEnter)

    return () => {
      window.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseover', onOver)
      document.removeEventListener('mouseleave', onLeave)
      document.removeEventListener('mouseenter', onEnter)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [visible])

  const isTouch = typeof window !== 'undefined' && !window.matchMedia?.('(pointer: fine)').matches
  if (isTouch) return null

  const variants = {
    default: { width: 8, height: 8, opacity: 0.85, backgroundColor: '#C8A055' },
    hover: { width: 36, height: 36, opacity: 0.18, backgroundColor: '#C8A055' },
  }

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[200] hidden md:block"
      style={{
        translateX: pos.x,
        translateY: pos.y,
      }}
    >
      <motion.div
        className="rounded-full"
        style={{ transform: 'translate(-50%, -50%)' }}
        animate={{
          ...variants[variant],
          scale: visible ? 1 : 0,
        }}
        transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
      />
    </motion.div>
  )
}
