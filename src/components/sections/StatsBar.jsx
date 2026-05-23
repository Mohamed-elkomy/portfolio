import { motion } from 'framer-motion'
import AnimatedCounter from '@/components/common/AnimatedCounter'
import { useLocale } from '@/hooks/useLocale'

const STATS = [
  { id: 'projects', value: 25, suffix: '+', key: 'stats.projects', note: 'stats.total' },
  { id: 'repos', value: 97, suffix: '', key: 'stats.repos', note: 'stats.total' },
  { id: 'contributions', value: 370, suffix: '', key: 'stats.contributions', note: 'stats.lastYear' },
  { id: 'certificates', value: 9, suffix: '', key: 'stats.certificates', note: 'stats.total' },
]

export default function StatsBar() {
  const { t } = useLocale()

  return (
    <section
      id="stats"
      className="border-y border-fg/8 bg-card/40 py-10 md:py-14"
      aria-labelledby="stats-title"
    >
      <div className="container-base">
        <h2 id="stats-title" className="sr-only">{t('stats.title')}</h2>
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="group"
            >
              <div className="flex items-baseline gap-1">
                <AnimatedCounter
                  value={stat.value}
                  className="stat-number transition-colors duration-300 group-hover:text-brass-600 dark:group-hover:text-brass-400"
                />
                {stat.suffix && (
                  <span className="font-serif text-2xl text-brass-500">{stat.suffix}</span>
                )}
              </div>
              <p className="mt-2 stat-label">{t(stat.key)}</p>
              <p className="mt-0.5 text-[11px] italic text-muted/70">{t(stat.note)}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
