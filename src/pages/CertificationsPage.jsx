import { motion } from 'framer-motion'
import { Award, ExternalLink } from 'lucide-react'

import Seo from '@/components/common/Seo'
import PageTransition from '@/components/common/PageTransition'
import SectionHeading from '@/components/common/SectionHeading'
import { majorCertifications, continuousCertifications } from '@/data/certifications'
import { useLocale } from '@/hooks/useLocale'

function CertCard({ cert, index, lang }) {
  return (
    <motion.a
      href={cert.file}
      target="_blank"
      rel="noreferrer noopener"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.04, ease: [0.16, 1, 0.3, 1] }}
      className="card-base group block p-5 transition-all hover:border-brass-500/40 hover:shadow-[0_4px_20px_-12px_rgba(200,160,85,0.3)]"
    >
      <div className="flex items-start justify-between gap-3">
        <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-brass-500/12">
          <Award size={16} strokeWidth={1.5} className="text-brass-600 dark:text-brass-400" />
        </span>
        <ExternalLink size={12} strokeWidth={1.75} className="text-muted opacity-0 transition-opacity group-hover:opacity-100" />
      </div>
      <h4 className="mt-4 font-serif text-base text-fg leading-snug">
        {cert.title[lang] || cert.title.en}
      </h4>
      <p className="mt-1 text-xs font-medium text-brass-600 dark:text-brass-400">
        {cert.issuer}
      </p>
      <div className="mt-3 space-y-1 text-[11px] text-muted">
        <p>{cert.date}{cert.hours ? ` · ${cert.hours}` : ''}</p>
        {cert.code && <p className="font-mono opacity-60">{cert.code}</p>}
      </div>
    </motion.a>
  )
}

export default function CertificationsPage() {
  const { t, lang } = useLocale()
  const hasContinuous = continuousCertifications.length > 0

  return (
    <PageTransition>
      <Seo
        title={`${t('certifications.title')} — Mohamed Elkomy`}
        description="Diplomas and continuous-learning certificates in front-end development and software engineering."
        path="/certifications"
      />

      <div className="pt-28 pb-20">
        <div className="container-base">
          <SectionHeading
            eyebrow={t('certifications.eyebrow')}
            title={t('certifications.title')}
            subtitle={t('certifications.subtitle')}
          />

          {/* Major — diplomas & serious programs */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {majorCertifications.map((cert, i) => (
              <CertCard key={cert.id} cert={cert} index={i} lang={lang} />
            ))}
          </div>

          {/* Continuous learning — shorter courses */}
          {hasContinuous && (
            <section className="mt-16 border-t border-fg/8 pt-12">
              <h2 className="eyebrow mb-1">{t('certifications.continuous')}</h2>
              <p className="mb-6 text-sm text-muted">{t('certifications.continuousSubtitle')}</p>
              <div
                className={
                  continuousCertifications.length === 1
                    ? 'max-w-sm'
                    : 'grid gap-4 md:grid-cols-2 lg:grid-cols-3'
                }
              >
                {continuousCertifications.map((cert, i) => (
                  <CertCard key={cert.id} cert={cert} index={i} lang={lang} />
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </PageTransition>
  )
}
