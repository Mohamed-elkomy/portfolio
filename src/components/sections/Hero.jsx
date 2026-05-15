import { motion } from 'framer-motion'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { Trans } from 'react-i18next'

import { useLocale } from '@/hooks/useLocale'
import { profile, contact } from '@/data/profile'
import { cn } from '@/lib/utils'

const EASE = [0.16, 1, 0.3, 1]

export default function Hero() {
  const { t, lang, isRTL } = useLocale()

  // Pick the displayed name based on language; show the other below as "in the other language"
  const primaryName = lang === 'ar' ? t('hero.name') : t('hero.name')
  const secondaryName = t('hero.nameArabic')

  // Split name into words → words into letters for stagger
  const words = primaryName.split(' ')

  return (
    <section
      id="hero"
      className="relative min-h-[88vh] overflow-hidden grain"
      aria-labelledby="hero-name"
    >
      {/* Subtle background ornament — diagonal brass line */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-50"
      >
        <div className="absolute -right-32 top-1/2 h-px w-[420px] -translate-y-1/2 rotate-[35deg] bg-gradient-to-r from-transparent via-brass-500/30 to-transparent" />
        <div className="absolute -left-20 bottom-24 h-px w-[280px] -rotate-[25deg] bg-gradient-to-r from-transparent via-brass-500/20 to-transparent" />
      </div>

      <div className="container-base relative z-10 flex min-h-[88vh] flex-col justify-center pt-28 pb-16 md:pt-32">
        {/* Status pill */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="mb-7"
        >
          <span className="status-pill">
            <span className="status-dot" aria-hidden="true" />
            {t('hero.available')}
          </span>
        </motion.div>

        {/* Eyebrow role */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08, ease: EASE }}
          className="eyebrow mb-5"
        >
          {t('hero.role')}
        </motion.p>

        {/* Display name — staggered word reveal */}
        <h1
          id="hero-name"
          className="font-serif text-display-2xl text-fg"
          aria-label={primaryName}
        >
          {words.map((word, wi) => (
            <span key={wi} className="inline-block whitespace-nowrap" style={{ marginInlineEnd: '0.25em' }}>
              {Array.from(word).map((char, ci) => (
                <motion.span
                  key={ci}
                  className="inline-block"
                  initial={{ y: '110%', opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 0.85,
                    delay: 0.18 + wi * 0.06 + ci * 0.018,
                    ease: EASE,
                  }}
                >
                  {char}
                </motion.span>
              ))}
            </span>
          ))}
        </h1>

        {/* Secondary name (other language) */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55, ease: EASE }}
          className={cn(
            'mt-4 font-serif text-2xl text-muted md:text-3xl',
            lang === 'ar' ? '' : 'font-arabic',
          )}
          style={{ direction: lang === 'ar' ? 'ltr' : 'rtl' }}
        >
          {secondaryName}
        </motion.p>

        {/* Bio paragraph with brass highlight on company name */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.65, ease: EASE }}
          className="mt-8 max-w-2xl text-base leading-relaxed text-fg/80 md:text-lg md:leading-loose"
        >
          <Trans
            i18nKey="hero.intro"
            values={{ company: t('hero.company') }}
            components={{
              1: <span className="font-medium text-fg" />,
            }}
          />
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.78, ease: EASE }}
          className="mt-10 flex flex-wrap items-center gap-3"
        >
          <a href="#projects" className="btn-primary group">
            {t('hero.viewWork')}
            <ArrowRight
              size={15}
              strokeWidth={1.75}
              className={cn(
                'transition-transform duration-300 ease-out-expo group-hover:translate-x-0.5',
                isRTL && 'rotate-180 group-hover:-translate-x-0.5',
              )}
            />
          </a>
          <a href={`mailto:${contact.email}`} className="btn-secondary">
            {t('hero.getInTouch')}
            <ArrowUpRight size={14} strokeWidth={1.75} />
          </a>
        </motion.div>

        {/* Bottom bar — avatar, location, scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 1.0 }}
          className="mt-16 flex items-center gap-4 border-t border-fg/8 pt-6"
        >
          {/* Avatar placeholder — replace with real photo when ready */}
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-ink-800 font-serif text-sm font-medium text-brass-500 dark:bg-brass-500/15">
            {profile.initials}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs text-muted">{t('hero.based')}</p>
            <p className="text-sm font-medium text-fg">{t('hero.location')}</p>
          </div>
          <a
            href="#stats"
            className="group hidden items-center gap-2 text-xs uppercase tracking-mega text-brass-600 transition-colors hover:text-brass-700 dark:text-brass-400 sm:inline-flex"
          >
            <span>{t('hero.scroll')}</span>
            <span className="block animate-scroll-hint">↓</span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
