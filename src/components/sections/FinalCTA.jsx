import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

import MagneticButton from '@/components/common/MagneticButton'
import { contact } from '@/data/profile'
import { useLocale } from '@/hooks/useLocale'

const EASE = [0.16, 1, 0.3, 1]

/**
 * Big closing CTA for the home page. Edge-to-edge typography.
 */
export default function FinalCTA() {
  const { t } = useLocale()

  return (
    <section className="section relative overflow-hidden" aria-labelledby="final-cta-title">
      {/* Brass ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
      >
        <div className="h-[300px] w-[600px] rounded-full bg-brass-500/8 blur-[100px]" />
      </div>

      <div className="container-base relative z-10 text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="eyebrow mb-5"
        >
          {t('contact.eyebrow')}
        </motion.p>

        <motion.h2
          id="final-cta-title"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: EASE }}
          className="font-serif text-display-xl text-fg"
        >
          {t('contact.title')}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto mt-5 max-w-lg text-base text-muted md:text-lg"
        >
          {t('contact.subtitle')}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10"
        >
          <MagneticButton strength={0.18}>
            <a
              href={`mailto:${contact.email}`}
              className="group inline-flex items-center gap-3 rounded-full bg-ink-800 px-6 py-4 text-sm font-medium text-cream-200 transition-all duration-300 hover:bg-brass-500 hover:text-ink-800 dark:bg-cream-200 dark:text-ink-800 dark:hover:bg-brass-500"
            >
              <span className="break-all">{contact.email}</span>
              <ArrowUpRight
                size={16}
                strokeWidth={1.75}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </MagneticButton>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-6 text-xs text-muted"
        >
          {t('contact.or')} <a href={`tel:${contact.phone}`} dir="ltr" className="link-underline text-fg inline-block">{contact.phoneDisplay}</a>
        </motion.p>
      </div>
    </section>
  )
}
