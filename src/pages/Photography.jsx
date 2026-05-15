import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Camera, ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

import { useLocale } from '@/hooks/useLocale'

export default function Photography() {
  const { t, isRTL } = useLocale()

  return (
    <>
      <Helmet>
        <title>{`${t('nav.photography')} — Mohamed Elkomy`}</title>
      </Helmet>

      <div className="pt-28 pb-20" data-protected="true">
        <div className="container-base max-w-3xl">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-brass-600 dark:hover:text-brass-400"
          >
            <ArrowLeft size={14} className={isRTL ? 'rotate-180' : ''} />
            Home
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10"
          >
            <p className="eyebrow mb-3">Personal · Hobby</p>
            <h1 className="font-serif text-display-lg text-fg">{t('nav.photography')}</h1>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-muted md:text-lg">
              Photography is a hobby — not the focus of this portfolio. The day job is front-end engineering.
              The same care that goes into a well-framed photograph belongs in software too.
            </p>

            <div className="mt-12 flex flex-col items-center justify-center rounded-lg border border-dashed border-fg/15 py-20 text-center">
              <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-brass-500/12">
                <Camera size={18} strokeWidth={1.25} className="text-brass-600 dark:text-brass-400" />
              </span>
              <p className="eyebrow mb-1">{t('common.soon')}</p>
              <p className="max-w-sm text-xs text-muted">
                A small selection will appear here over time.
              </p>
            </div>

            <div className="mt-12 border-t border-fg/8 pt-6">
              <p className="text-sm text-muted">
                For the front-end work this portfolio actually exists to show,{' '}
                <Link to="/projects" className="link-underline text-fg">
                  see the projects →
                </Link>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  )
}
