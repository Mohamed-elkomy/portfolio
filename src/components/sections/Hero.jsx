import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, ArrowUpRight, Clock } from 'lucide-react'
import { Trans } from 'react-i18next'
import { Link } from 'react-router-dom'

import MagneticButton from '@/components/common/MagneticButton'
import { useLocale } from '@/hooks/useLocale'
import { contact } from '@/data/profile'
import { cn } from '@/lib/utils'

const EASE = [0.16, 1, 0.3, 1]

/** Time-of-day greeting from Cairo (UTC+2). */
function useCairoTime() {
  const [state, setState] = useState({ time: '', greeting: '', greetingAr: '' })

  useEffect(() => {
    const update = () => {
      const now = new Date()
      const cairoTime = new Date(
        now.toLocaleString('en-US', { timeZone: 'Africa/Cairo' }),
      )
      const hours = cairoTime.getHours()
      const minutes = String(cairoTime.getMinutes()).padStart(2, '0')
      const hh = String(hours).padStart(2, '0')

      let greeting = 'Hello'
      let greetingAr = 'مرحباً'
      if (hours >= 5 && hours < 12) { greeting = 'Good morning'; greetingAr = 'صباح الخير' }
      else if (hours >= 12 && hours < 17) { greeting = 'Good afternoon'; greetingAr = 'مساء النور' }
      else if (hours >= 17 && hours < 22) { greeting = 'Good evening'; greetingAr = 'مساء الخير' }
      else { greeting = 'Working late'; greetingAr = 'سهرانة معاكم' }

      setState({ time: `${hh}:${minutes}`, greeting, greetingAr })
    }
    update()
    const interval = setInterval(update, 60_000)
    return () => clearInterval(interval)
  }, [])

  return state
}

export default function Hero() {
  const { t, lang, isRTL } = useLocale()
  const { time, greeting, greetingAr } = useCairoTime()

  const primaryName = t('hero.name')
  const secondaryName = t('hero.nameArabic')

  // Split by word — never split Arabic by character (breaks letter joining)
  const words = primaryName.split(' ')
  const greetingText = lang === 'ar' ? greetingAr : greeting

  return (
    <section
      id="hero"
      className="relative grain overflow-hidden"
      style={{ minHeight: '100vh' }}
      aria-labelledby="hero-name"
    >
      {/* Ambient background */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -right-32 top-1/3 h-px w-[520px] -translate-y-1/2 rotate-[28deg] bg-gradient-to-r from-transparent via-brass-500/30 to-transparent" />
        <div className="absolute -left-32 bottom-32 h-px w-[420px] -rotate-[22deg] bg-gradient-to-r from-transparent via-brass-500/22 to-transparent" />
        <div className="absolute right-[10%] top-[30%] h-[400px] w-[400px] rounded-full bg-brass-500/8 blur-[120px] dark:bg-brass-500/12" />
        <div className="absolute left-[5%] bottom-[10%] h-[300px] w-[300px] rounded-full bg-brass-500/5 blur-[100px] dark:bg-brass-500/8" />
      </div>

      <div className="container-base relative z-10 flex min-h-screen flex-col justify-center pt-32 pb-20">

        {/* Top row */}
        <div className="mb-10 flex flex-wrap items-center gap-3">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE }}
          >
            <span className="status-pill">
              <span className="status-dot" aria-hidden="true" />
              {t('hero.available')}
            </span>
          </motion.div>

          {time && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 text-xs text-muted"
            >
              <Clock size={11} strokeWidth={1.75} className="text-brass-500" />
              <span className="font-mono" dir="ltr">
                {greetingText} · {time} Cairo
              </span>
            </motion.div>
          )}
        </div>

        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.12, ease: EASE }}
          className="eyebrow mb-6"
        >
          {t('hero.role')}
        </motion.p>

        {/* Display name — word-by-word stagger (safe for Arabic and English) */}
        <h1
          id="hero-name"
          className="font-serif text-display-2xl text-fg"
          aria-label={primaryName}
        >
          {words.map((word, wi) => (
            <span
              key={wi}
              className="inline-block whitespace-nowrap overflow-hidden align-baseline"
              style={{ marginInlineEnd: '0.3em', paddingBottom: '0.1em' }}
            >
              <motion.span
                className="inline-block"
                initial={{ y: '110%', opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.85,
                  delay: 0.22 + wi * 0.12,
                  ease: EASE,
                }}
              >
                {word}
              </motion.span>
            </span>
          ))}
        </h1>

        {/* Secondary name in other language */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6, ease: EASE }}
          className={cn(
            'mt-3 font-serif text-2xl italic text-muted md:text-4xl',
            lang === 'ar' ? '' : 'font-arabic not-italic',
          )}
          dir={lang === 'ar' ? 'ltr' : 'rtl'}
        >
          {secondaryName}
        </motion.p>

        {/* Brass animated underline */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 0.8, ease: EASE }}
          className="mt-8 h-px w-32 origin-left bg-brass-500"
          aria-hidden="true"
        />

        {/* Bio paragraph — business-focused */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7, ease: EASE }}
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
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.82, ease: EASE }}
          className="mt-10 flex flex-wrap items-center gap-3"
        >
          <MagneticButton strength={0.2}>
            <Link to="/work" className="btn-primary group !px-6 !py-3">
              {t('hero.viewWork')}
              <ArrowRight
                size={15}
                strokeWidth={1.75}
                className={cn(
                  'transition-transform duration-300 ease-out-expo group-hover:translate-x-0.5',
                  isRTL && 'rotate-180 group-hover:-translate-x-0.5',
                )}
              />
            </Link>
          </MagneticButton>
          <MagneticButton strength={0.2}>
            <a href={`mailto:${contact.email}`} className="btn-secondary !px-6 !py-3">
              {t('hero.getInTouch')}
              <ArrowUpRight size={14} strokeWidth={1.75} />
            </a>
          </MagneticButton>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 1.1 }}
          className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 md:block"
        >
          <div className="flex flex-col items-center gap-2 text-xs text-muted">
            <span className="uppercase tracking-mega">{t('hero.scroll')}</span>
            <motion.span
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
              className="text-brass-500"
            >
              ↓
            </motion.span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
