import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Award, ExternalLink } from 'lucide-react'

import SectionHeading from '@/components/common/SectionHeading'
import { certifications } from '@/data/certifications'
import { useLocale } from '@/hooks/useLocale'

export default function CertificationsPage() {
  const { t, lang } = useLocale()

  return (
    <>
      <Helmet>
        <title>{`${t('certifications.title')} — Mohamed Elkomy`}</title>
      </Helmet>

      <div className="pt-28 pb-20">
        <div className="container-base">
          <SectionHeading
            eyebrow={t('certifications.eyebrow')}
            title={t('certifications.title')}
            subtitle={t('certifications.subtitle')}
          />

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {certifications.map((cert, i) => (
              <motion.a
                key={cert.id}
                href={cert.file}
                target="_blank"
                rel="noreferrer noopener"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.04, ease: [0.16, 1, 0.3, 1] }}
                className="card-base group p-5 transition-all hover:border-brass-500/40 hover:shadow-[0_4px_20px_-12px_rgba(200,160,85,0.3)]"
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
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
