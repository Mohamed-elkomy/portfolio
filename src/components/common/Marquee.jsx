import { cn } from '@/lib/utils'

/**
 * Infinite marquee — duplicates the items once (2× total) and scrolls the row
 * from translateX(0) to translateX(-50%) via the CSS `animate-marquee` keyframe,
 * so the second copy lines up seamlessly with the first. CSS-driven (not JS) so
 * it runs reliably and stays GPU-cheap. Each item carries its own trailing
 * spacing (pe-8) so every cell is equal width and the -50% wrap is seamless.
 *
 * @param {string} variant - 'ink' (default, dark on cream) | 'brass' | 'subtle'
 * @param {number} duration - seconds for one full loop
 */
export default function Marquee({
  items = [],
  separator = '·',
  duration = 40,
  variant = 'ink',
  className,
}) {
  const variants = {
    ink: 'bg-ink-800 text-cream-200 dark:bg-cream-200 dark:text-ink-800',
    brass: 'bg-brass-500 text-ink-800',
    subtle: 'bg-card text-fg/80 border-y border-fg/8',
  }

  // Duplicate once so a -50% scroll wraps back onto an identical copy.
  const loop = [...items, ...items]

  return (
    <div
      className={cn(
        'relative overflow-hidden py-4 select-none',
        variants[variant],
        className,
      )}
      aria-hidden="true"
    >
      <div
        className="flex w-max animate-marquee whitespace-nowrap"
        style={{ animationDuration: `${duration}s` }}
      >
        {loop.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-8 pe-8 font-serif text-3xl italic md:text-5xl"
          >
            <span>{item}</span>
            <span className="font-sans not-italic text-brass-500/80">{separator}</span>
          </span>
        ))}
      </div>
    </div>
  )
}
