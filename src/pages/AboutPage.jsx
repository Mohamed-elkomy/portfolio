import { motion } from 'framer-motion'
import { Download } from 'lucide-react'

import Seo from '@/components/common/Seo'
import PageTransition from '@/components/common/PageTransition'
import SectionHeading from '@/components/common/SectionHeading'
import Skills from '@/components/sections/Skills'
import Experience from '@/components/sections/Experience'
import Education from '@/components/sections/Education'
import MagneticButton from '@/components/common/MagneticButton'
import { useLocale } from '@/hooks/useLocale'

const EASE = [0.16, 1, 0.3, 1]

export default function AboutPage() {
  const { t } = useLocale()

  return (
    <PageTransition>
      <Seo
        title={`${t('nav.about')} — Mohamed Elkomy`}
        description="Front-End Developer based in Cairo — React, internationalization, RTL interfaces, and performance."
        path="/about"
      />

      <div className="pt-28 pb-12">
        <div className="container-base max-w-4xl">
          <SectionHeading
            eyebrow={t('about.eyebrow')}
            title={t('about.title')}
          />

          <div className="grid gap-10 md:grid-cols-[2fr_1fr]">
            <div className="space-y-6">
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: EASE }}
                className="text-base leading-loose text-fg/85 md:text-lg"
              >
                {t('about.p1')}
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
                className="text-base leading-loose text-fg/85 md:text-lg"
              >
                I care about clean code, smooth interactions, and the small details that make a product feel{' '}
                <em className="font-serif italic text-brass-600 dark:text-brass-400">production-grade</em>. Architecture that scales, performance that holds up under real traffic, and accessibility that isn't an afterthought.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2, ease: EASE }}
                className="text-base leading-loose text-fg/85 md:text-lg"
              >
                {t('about.p3')}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-wrap items-center gap-3 pt-4"
              >
                <MagneticButton strength={0.18}>
                  <a href="/Mohamed_Elkomy_CV.pdf" download="Mohamed_Elkomy_CV.pdf" target="_blank" rel="noreferrer" className="btn-brass">
                    <Download size={15} strokeWidth={1.75} />
                    {t('about.downloadCV')}
                  </a>
                </MagneticButton>
              </motion.div>
            </div>

            <motion.aside
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2, ease: EASE }}
              className="card-base self-start p-6"
              aria-label="Quick facts"
            >
              <p className="eyebrow mb-4">Quick facts</p>
              <dl className="space-y-3 text-sm">
                <div className="flex items-baseline justify-between gap-3 border-b border-fg/6 pb-2.5">
                  <dt className="text-muted">Now</dt>
                  <dd className="font-medium text-fg">Brmja Tech</dd>
                </div>
                <div className="flex items-baseline justify-between gap-3 border-b border-fg/6 pb-2.5">
                  <dt className="text-muted">Role</dt>
                  <dd className="font-medium text-fg">Front-End Dev</dd>
                </div>
                <div className="flex items-baseline justify-between gap-3 border-b border-fg/6 pb-2.5">
                  <dt className="text-muted">Stack</dt>
                  <dd className="font-medium text-fg">React · Vite</dd>
                </div>
                <div className="flex items-baseline justify-between gap-3 border-b border-fg/6 pb-2.5">
                  <dt className="text-muted">Grad</dt>
                  <dd className="font-medium text-fg">MTI · 2024</dd>
                </div>
                <div className="flex items-baseline justify-between gap-3 border-b border-fg/6 pb-2.5">
                  <dt className="text-muted">Base</dt>
                  <dd className="font-medium text-fg">Cairo, EG</dd>
                </div>
                <div className="flex items-baseline justify-between gap-3">
                  <dt className="text-muted">Lang</dt>
                  <dd className="font-medium text-fg">عربي · EN</dd>
                </div>
              </dl>
            </motion.aside>
          </div>
        </div>
      </div>

      {/* Skills */}
      <Skills />

      {/* Experience */}
      <Experience />

      {/* Education */}
      <Education />
    </PageTransition>
  )
}
