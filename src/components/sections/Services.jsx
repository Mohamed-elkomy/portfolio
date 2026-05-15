import { motion } from 'framer-motion'
import { LayoutTemplate, AppWindow, LayoutDashboard, Languages, ArrowUpRight } from 'lucide-react'

import SectionHeading from '@/components/common/SectionHeading'
import { services } from '@/data/services'
import { useLocale } from '@/hooks/useLocale'
import { contact } from '@/data/profile'

const ICONS = { LayoutTemplate, AppWindow, LayoutDashboard, Languages }

export default function Services() {
  const { t, lang } = useLocale()

  return (
    <section id="services" className="section bg-card/30" aria-labelledby="services-title">
      <div className="container-base">
        <SectionHeading
          eyebrow={t('services.eyebrow')}
          title={t('services.title')}
          subtitle={t('services.subtitle')}
        />

        <div className="grid gap-4 md:grid-cols-2">
          {services.map((service, i) => {
            const Icon = ICONS[service.icon] || LayoutTemplate
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                className="card-base group relative p-6 transition-colors hover:border-brass-500/30"
              >
                <div className="mb-4 flex items-center justify-between">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-md bg-brass-500/12 text-brass-600 dark:text-brass-400">
                    <Icon size={18} strokeWidth={1.5} />
                  </span>
                  <span className="font-mono text-xs text-muted">{service.timeline}</span>
                </div>
                <h3 className="font-serif text-xl text-fg">{service.title[lang] || service.title.en}</h3>
                <p className="mt-2 text-sm leading-relaxed text-fg/80">
                  {service.description[lang] || service.description.en}
                </p>
                <div className="mt-5 flex items-center justify-between border-t border-fg/6 pt-4">
                  <span className="text-sm text-muted">
                    Starts at <span className="font-medium text-fg">{service.starts}</span>
                  </span>
                  <a
                    href={`mailto:${contact.email}?subject=Quote: ${service.title.en}`}
                    className="inline-flex items-center gap-1 text-xs font-medium text-brass-600 transition-colors hover:text-brass-700 dark:text-brass-400"
                  >
                    {t('services.getQuote')}
                    <ArrowUpRight size={12} strokeWidth={2} />
                  </a>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
