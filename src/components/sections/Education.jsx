import { motion } from 'framer-motion'
import { GraduationCap } from 'lucide-react'

import SectionHeading from '@/components/common/SectionHeading'
import { education } from '@/data/education'
import { useLocale } from '@/hooks/useLocale'

export default function Education() {
  const { t, lang } = useLocale()
  const edu = education[0]
  const gp = edu.graduationProject

  return (
    <section id="education" className="section bg-card/30" aria-labelledby="education-title">
      <div className="container-base">
        <SectionHeading eyebrow={t('education.eyebrow')} title={t('education.title')} />

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="card-base overflow-hidden md:p-8 p-6"
        >
          <div className="flex items-start gap-4">
            <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brass-500/12">
              <GraduationCap size={20} strokeWidth={1.5} className="text-brass-600 dark:text-brass-400" />
            </span>
            <div className="flex-1 min-w-0">
              <h3 className="font-serif text-xl text-fg md:text-2xl">
                {edu.institution[lang] || edu.institution.en}
              </h3>
              <p className="mt-1 text-sm font-medium text-brass-600 dark:text-brass-400">
                {edu.degree[lang] || edu.degree.en}
              </p>
              <p className="mt-1 text-xs text-muted">
                {edu.period.start} — {edu.period.end} · {edu.location}
              </p>
            </div>
          </div>

          <div className="mt-8 border-t border-fg/8 pt-6">
            <p className="eyebrow mb-3">Graduation project</p>
            <h4 className="font-serif text-lg text-fg">{gp.title[lang] || gp.title.en}</h4>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-fg/80">
              {gp.description[lang] || gp.description.en}
            </p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {gp.stack.map((s) => (
                <span key={s} className="tech-tag">{s}</span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
