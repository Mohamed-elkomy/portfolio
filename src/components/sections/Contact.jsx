import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, MessageCircle, ArrowUpRight } from 'lucide-react'

import SectionHeading from '@/components/common/SectionHeading'
import { contact, social } from '@/data/profile'
import { useLocale } from '@/hooks/useLocale'

const ICONS = { Github, Linkedin, Mail, MessageCircle }

export default function Contact() {
  const { t } = useLocale()

  return (
    <section id="contact" className="section" aria-labelledby="contact-title">
      <div className="container-base">
        <SectionHeading
          eyebrow={t('contact.eyebrow')}
          title={t('contact.title')}
          subtitle={t('contact.subtitle')}
        />

        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr]">
          {/* Left — primary CTA */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
          >
            <a
              href={`mailto:${contact.email}`}
              className="group block"
            >
              <p className="eyebrow mb-3">{t('contact.emailMe')}</p>
              <p className="font-serif text-2xl text-fg md:text-4xl break-all">
                <span className="transition-colors group-hover:text-brass-600 dark:group-hover:text-brass-400">
                  {contact.email}
                </span>
                <ArrowUpRight
                  size={20}
                  strokeWidth={1.5}
                  className="ms-2 inline-block opacity-50 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100 group-hover:text-brass-600 dark:group-hover:text-brass-400"
                />
              </p>
            </a>

            <div className="mt-8 border-t border-fg/8 pt-6">
              <p className="text-sm text-muted">{t('contact.or')}</p>
              <a
                href={`tel:${contact.phone}`}
                dir="ltr"
                className="mt-2 inline-block font-mono text-base text-fg transition-colors hover:text-brass-600 dark:hover:text-brass-400"
              >
                {contact.phoneDisplay}
              </a>
            </div>
          </motion.div>

          {/* Right — social grid */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className="eyebrow mb-4">{t('contact.social')}</p>
            <ul className="space-y-3">
              {social.map((s) => {
                const Icon = ICONS[s.icon] || Mail
                return (
                  <li key={s.id}>
                    <a
                      href={s.url}
                      target={s.url.startsWith('http') ? '_blank' : undefined}
                      rel="noreferrer noopener"
                      className="group flex items-center justify-between gap-3 border-b border-fg/8 py-3 transition-colors hover:border-brass-500/40"
                    >
                      <span className="flex items-center gap-3">
                        <Icon size={16} strokeWidth={1.5} className="text-muted transition-colors group-hover:text-brass-600 dark:group-hover:text-brass-400" />
                        <span className="text-sm font-medium text-fg">{s.label}</span>
                      </span>
                      <span className="flex items-center gap-2 text-xs text-muted">
                        <span className="font-mono">@{s.handle.split(/[@/]/).pop()}</span>
                        <ArrowUpRight size={11} strokeWidth={2} className="opacity-50 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
                      </span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
