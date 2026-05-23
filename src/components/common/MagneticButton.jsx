import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

/**
 * MagneticButton — children subtly attract toward the cursor on hover.
 * Wrap any clickable element. Skips effect on touch devices.
 *
 * @param {number} strength - 0..1, amount of magnetic pull. Default 0.25.
 */
export default function MagneticButton({ children, className, strength = 0.25, ...rest }) {
  const ref = useRef(null)
  const [offset, setOffset] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e) => {
    if (typeof window === 'undefined') return
    if (!window.matchMedia('(pointer: fine)').matches) return
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    const dx = (e.clientX - cx) * strength
    const dy = (e.clientY - cy) * strength
    setOffset({ x: dx, y: dy })
  }

  const handleMouseLeave = () => setOffset({ x: 0, y: 0 })

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: offset.x, y: offset.y }}
      transition={{ type: 'spring', stiffness: 200, damping: 18, mass: 0.4 }}
      className={cn('inline-block', className)}
      {...rest}
    >
      {children}
    </motion.div>
  )
}
