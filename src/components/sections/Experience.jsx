import { motion } from 'framer-motion'
import { MapPin, Calendar } from 'lucide-react'

import SectionHeading from '@/components/common/SectionHeading'
import { experience } from '@/data/experience'
import { useLocale } from '@/hooks/useLocale'

export default function Experience() {
  const { t, lang } = useLocale()

  return (
    <section id="experience" className="section" aria-labelledby="experience-title">
      <div className="container-base">
        <SectionHeading eyebrow={t('experience.eyebrow')} title={t('experience.title')} />

        <div className="relative">
          {/* Vertical brass line */}
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-fg/8 md:left-[11px]" aria-hidden="true" />

          <ol className="space-y-12">
            {experience.map((exp, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                className="relative pl-8 md:pl-12"
              >
                {/* Dot */}
                <span
                  className="absolute left-0 top-2 inline-flex h-3.5 w-3.5 items-center justify-center rounded-full border-2 border-brass-500 bg-bg md:h-[22px] md:w-[22px]"
                  aria-hidden="true"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-brass-500" />
                </span>

                <div className="flex flex-wrap items-baseline gap-2">
                  <h3 className="font-serif text-xl text-fg md:text-2xl">{exp.company}</h3>
                  <span className="rounded bg-brass-500/12 px-2 py-0.5 text-[11px] font-medium text-brass-700 dark:text-brass-300">
                    {exp.type}
                  </span>
                </div>

                <p className="mt-1 text-sm font-medium text-brass-600 dark:text-brass-400">
                  {exp.role[lang] || exp.role.en}
                </p>

                <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted">
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar size={12} strokeWidth={1.75} />
                    {exp.period.start} — {exp.period.end === 'Present' ? t('experience.present') : exp.period.end}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin size={12} strokeWidth={1.75} />
                    {exp.location}
                  </span>
                </div>

                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-fg/80 md:text-base">
                  {exp.description[lang] || exp.description.en}
                </p>

                {exp.highlights.length > 0 && (
                  <ul className="mt-3 space-y-1.5 text-sm text-fg/75">
                    {exp.highlights.map((h, hi) => (
                      <li key={hi} className="flex gap-2">
                        <span className="text-brass-500">▸</span>
                        <span>{h[lang] || h.en}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
