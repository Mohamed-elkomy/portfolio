import { motion } from 'framer-motion'
import SectionHeading from '@/components/common/SectionHeading'
import { coreSkills, tools, languages } from '@/data/skills'
import { useLocale } from '@/hooks/useLocale'

export default function Skills() {
  const { t } = useLocale()

  return (
    <section id="skills" className="section bg-card/30" aria-labelledby="skills-title">
      <div className="container-base">
        <SectionHeading eyebrow={t('skills.eyebrow')} title={t('skills.title')} />

        <div className="grid gap-12 md:grid-cols-[2fr_1fr]">
          {/* Core competencies */}
          <div>
            <p className="eyebrow mb-5">{t('skills.core')}</p>
            <div className="flex flex-wrap gap-2">
              {coreSkills.map((skill, i) => (
                <motion.span
                  key={skill.name}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.02 }}
                  className="group inline-flex items-baseline gap-1.5 rounded-md border border-fg/10 bg-card px-3 py-1.5 text-sm transition-colors hover:border-brass-500/40 hover:bg-brass-500/8"
                >
                  <span className="font-medium text-fg">{skill.name}</span>
                  <span className="text-[10px] uppercase tracking-wider text-brass-600 dark:text-brass-400">
                    {skill.level}
                  </span>
                </motion.span>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div>
            <p className="eyebrow mb-5">{t('skills.tools')}</p>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-fg/85">
              {tools.map((tool) => (
                <li key={tool} className="font-mono text-xs">
                  · {tool}
                </li>
              ))}
            </ul>

            <div className="mt-8 border-t border-fg/8 pt-6">
              <p className="eyebrow mb-3">Languages</p>
              <ul className="space-y-2">
                {languages.map((lang) => (
                  <li key={lang.name} className="flex items-baseline justify-between gap-3 text-sm">
                    <span className="font-medium text-fg">{lang.native}</span>
                    <span className="text-xs text-muted">{lang.level}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
