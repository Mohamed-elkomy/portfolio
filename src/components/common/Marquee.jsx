import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

/**
 * Infinite marquee — repeats children twice and animates from 0 to -50%.
 * Use for a brand strip between sections.
 *
 * @param {string} variant - 'ink' (default, dark on cream) | 'brass' (brass background)
 * @param {number} duration - seconds for one full loop
 */
export default function Marquee({
  items = [],
  separator = '·',
  duration = 35,
  variant = 'ink',
  className,
}) {
  const variants = {
    ink: 'bg-ink-800 text-cream-200 dark:bg-cream-200 dark:text-ink-800',
    brass: 'bg-brass-500 text-ink-800',
    subtle: 'bg-card text-fg/80 border-y border-fg/8',
  }

  return (
    <div
      className={cn(
        'relative overflow-hidden py-4 select-none',
        variants[variant],
        className,
      )}
      aria-hidden="true"
    >
      <motion.div
        className="flex shrink-0 gap-8 whitespace-nowrap"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ ease: 'linear', duration, repeat: Infinity }}
      >
        {[...items, ...items, ...items, ...items].map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-8 font-serif text-3xl italic md:text-5xl"
          >
            <span>{item}</span>
            <span className="font-sans not-italic text-brass-500/80">{separator}</span>
          </span>
        ))}
      </motion.div>
    </div>
  )
}
