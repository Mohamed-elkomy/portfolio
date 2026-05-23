import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'

import PageTransition from '@/components/common/PageTransition'
import { useLocale } from '@/hooks/useLocale'

export default function NotFound() {
  const { t, isRTL } = useLocale()

  return (
    <PageTransition>
      <Helmet>
        <title>404 — Page not found</title>
      </Helmet>

      <div className="grain flex min-h-[80vh] items-center justify-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="container-base text-center"
        >
          <p className="eyebrow mb-3">404</p>
          <h1 className="font-serif text-display-xl text-fg">Page not found</h1>
          <p className="mt-4 max-w-md mx-auto text-muted">
            The page you're looking for doesn't exist, was moved, or never existed at all.
          </p>
          <Link to="/" className="btn-brass mt-8 group">
            <ArrowLeft size={14} className={isRTL ? 'rotate-180' : ''} />
            Back home
          </Link>
        </motion.div>
      </div>
    </PageTransition>
  )
}
