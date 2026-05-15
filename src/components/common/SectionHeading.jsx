import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

/**
 * Editorial section heading: eyebrow + display title + optional subtitle + optional action.
 */
export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  action,
  align = 'left',
  className,
}) {
  return (
    <div
      className={cn(
        'mb-12 flex flex-col gap-5 md:flex-row md:items-end md:justify-between md:gap-8',
        align === 'center' && 'items-center text-center md:flex-col md:items-center',
        className,
      )}
    >
      <div className="flex-1">
        {eyebrow && (
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
            className="eyebrow mb-3"
          >
            {eyebrow}
          </motion.p>
        )}

        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-display-md text-fg"
        >
          {title}
        </motion.h2>

        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 max-w-2xl text-base leading-relaxed text-muted"
          >
            {subtitle}
          </motion.p>
        )}
      </div>

      {action && (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="shrink-0"
        >
          {action}
        </motion.div>
      )}
    </div>
  )
}
