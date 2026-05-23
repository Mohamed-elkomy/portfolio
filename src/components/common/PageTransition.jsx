import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

const EASE = [0.16, 1, 0.3, 1]

/**
 * Wrap any page in this for a smooth fade-slide-in animation on mount.
 * Respects prefers-reduced-motion via Framer Motion defaults.
 */
export default function PageTransition({ children, className }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.55, ease: EASE }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  )
}
