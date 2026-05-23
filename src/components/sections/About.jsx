import { motion } from 'framer-motion'
import { Download, ArrowUpRight } from 'lucide-react'
import { Trans } from 'react-i18next'

import SectionHeading from '@/components/common/SectionHeading'
import { useLocale } from '@/hooks/useLocale'

const EASE = [0.16, 1, 0.3, 1]

export default function About() {
  const { t, isRTL } = useLocale()

  return (
    <section id="about" className="section" aria-labelledby="about-title">
      <div className="container-base">
        <SectionHeading
          eyebrow={t('about.eyebrow')}
          title={t('about.title')}
        />

        <div className="grid gap-12 md:grid-cols-[1.6fr_1fr]">
          {/* Left — paragraphs */}
          <div className="space-y-5">
            {[t('about.p1'), null, t('about.p3')].map((paragraph, i) => {
              if (paragraph === null) {
                // Render p2 with brass highlight via Trans
                return (
                  <motion.p
                    key={i}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.6, delay: i * 0.1, ease: EASE }}
                    className="text-base leading-loose text-fg/85 md:text-lg"
                  >
                    <Trans
                      i18nKey="about.p2"
                      values={{ premium: t('about.p2Highlight') }}
                      components={{
                        1: <em className="font-serif italic text-brass-600 dark:text-brass-400" />,
                      }}
                    />
                  </motion.p>
                )
              }
              return (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.6, delay: i * 0.1, ease: EASE }}
                  className="text-base leading-loose text-fg/85 md:text-lg"
                >
                  {paragraph}
                </motion.p>
              )
            })}

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center gap-3 pt-4"
            >
              <a href="/Mohamed_Elkomy_CV.pdf" download="Mohamed_Elkomy_CV.pdf" target="_blank" rel="noreferrer" className="btn-brass">
                <Download size={15} strokeWidth={1.75} />
                {t('about.downloadCV')}
              </a>
              <a href="/about" className="btn-secondary group">
                {t('about.readMore')}
                <ArrowUpRight
                  size={14}
                  strokeWidth={1.75}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            </motion.div>
          </div>

          {/* Right — quick facts column */}
          <motion.aside
            initial={{ opacity: 0, x: isRTL ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, delay: 0.2, ease: EASE }}
            className="card-base p-6 md:p-7"
            aria-label="Quick facts"
          >
            <p className="eyebrow mb-4">Quick facts</p>

            <dl className="space-y-4 text-sm">
              <div className="flex items-baseline justify-between gap-4 border-b border-fg/6 pb-3">
                <dt className="text-muted">Currently at</dt>
                <dd className="font-medium text-fg">Brmja Tech</dd>
              </div>
              <div className="flex items-baseline justify-between gap-4 border-b border-fg/6 pb-3">
                <dt className="text-muted">Role</dt>
                <dd className="font-medium text-fg">Front-End Dev</dd>
              </div>
              <div className="flex items-baseline justify-between gap-4 border-b border-fg/6 pb-3">
                <dt className="text-muted">Specializing in</dt>
                <dd className="font-medium text-fg">React.js</dd>
              </div>
              <div className="flex items-baseline justify-between gap-4 border-b border-fg/6 pb-3">
                <dt className="text-muted">Graduated</dt>
                <dd className="font-medium text-fg">MTI · 2024</dd>
              </div>
              <div className="flex items-baseline justify-between gap-4 border-b border-fg/6 pb-3">
                <dt className="text-muted">Based in</dt>
                <dd className="font-medium text-fg">Cairo · UTC+2</dd>
              </div>
              <div className="flex items-baseline justify-between gap-4">
                <dt className="text-muted">Languages</dt>
                <dd className="font-medium text-fg">العربية · EN</dd>
              </div>
            </dl>
          </motion.aside>
        </div>
      </div>
    </section>
  )
}
