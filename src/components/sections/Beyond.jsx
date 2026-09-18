import { motion } from 'framer-motion'
import { Camera, Palette, BookOpen, Gamepad2, Headphones, ShieldCheck, Sparkles } from 'lucide-react'
import SectionHeading from '@/components/common/SectionHeading'
import { learning, interests } from '@/data/skills'
import { useLocale } from '@/hooks/useLocale'

const ICONS = { Camera, Palette, BookOpen, Gamepad2, Headphones, ShieldCheck }
const EASE = [0.16, 1, 0.3, 1]

/**
 * "Currently learning" + "Hobbies & interests".
 * Learning items (e.g. Node.js) live on the website only — they are intentionally not on the CV.
 */
export default function Beyond() {
  const { t, lang } = useLocale()

  return (
    <>
      <section id="learning" className="section" aria-labelledby="learning-title">
        <div className="container-base">
          <SectionHeading eyebrow={t('extras.learningEyebrow')} title={t('extras.learningTitle')} />
          <p className="-mt-6 mb-8 max-w-2xl text-muted">{t('extras.learningSubtitle')}</p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {learning.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06, ease: EASE }}
                className="card-base p-5"
              >
                <div className="mb-2 flex items-center gap-2">
                  <Sparkles size={15} strokeWidth={1.75} className="text-brass-600 dark:text-brass-400" />
                  <span className="font-medium text-fg">{item.name}</span>
                </div>
                <p className="text-sm text-muted">{item.note[lang]}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="interests" className="section bg-card/30" aria-labelledby="interests-title">
        <div className="container-base">
          <SectionHeading eyebrow={t('extras.interestsEyebrow')} title={t('extras.interestsTitle')} />
          <p className="-mt-6 mb-8 max-w-2xl text-muted">{t('extras.interestsSubtitle')}</p>
          <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {interests.map((it, i) => {
              const Icon = ICONS[it.icon] || Sparkles
              return (
                <motion.li
                  key={it.id}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.05, ease: EASE }}
                  className="card-base flex flex-col items-center gap-3 p-5 text-center"
                >
                  <Icon size={22} strokeWidth={1.5} className="text-brass-600 dark:text-brass-400" />
                  <span className="text-sm font-medium text-fg">{it[lang]}</span>
                </motion.li>
              )
            })}
          </ul>
        </div>
      </section>
    </>
  )
}
