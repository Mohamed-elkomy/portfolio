import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, MessageCircle, ArrowUpRight } from 'lucide-react'

import Seo from '@/components/common/Seo'
import PageTransition from '@/components/common/PageTransition'
import SectionHeading from '@/components/common/SectionHeading'
import { contact, social } from '@/data/profile'
import { useLocale } from '@/hooks/useLocale'

const ICONS = { Github, Linkedin, Mail, MessageCircle }

export default function ContactPage() {
  const { t } = useLocale()

  return (
    <PageTransition>
      <Seo
        title={`${t('nav.contact')} — Mohamed Elkomy`}
        description="Get in touch — open to roles, collaborations, and freelance projects. My inbox is open."
        path="/contact"
      />

      <div className="pt-28 pb-20">
        <div className="container-base max-w-5xl">
          <SectionHeading
            eyebrow={t('contact.eyebrow')}
            title={t('contact.title')}
            subtitle={t('contact.subtitle')}
          />

          {/* Big email CTA */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16 border-b border-fg/8 pb-12"
          >
            <p className="eyebrow mb-4">{t('contact.emailMe')}</p>
            <a
              href={`mailto:${contact.email}`}
              className="group inline-block max-w-full"
            >
              <p className="font-serif text-display-md text-fg break-all md:text-display-lg">
                <span className="transition-colors group-hover:text-brass-600 dark:group-hover:text-brass-400">
                  {contact.email}
                </span>
                <ArrowUpRight
                  size={28}
                  strokeWidth={1.5}
                  className="ms-2 inline-block opacity-40 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100 group-hover:text-brass-600 dark:group-hover:text-brass-400"
                />
              </p>
            </a>

            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
              <a
                href={`tel:${contact.phone}`}
                dir="ltr"
                className="inline-block font-mono text-fg/80 transition-colors hover:text-brass-600 dark:hover:text-brass-400"
              >
                {contact.phoneDisplay}
              </a>
              <span className="text-muted/40">·</span>
              <a
                href="https://wa.me/201272782474"
                target="_blank"
                rel="noreferrer noopener"
                className="text-fg/80 transition-colors hover:text-brass-600 dark:hover:text-brass-400"
              >
                WhatsApp
              </a>
            </div>
          </motion.div>

          <div className="grid gap-12 md:grid-cols-2">
            {/* Social grid */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <p className="eyebrow mb-5">{t('contact.social')}</p>
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
                          <Icon
                            size={16}
                            strokeWidth={1.5}
                            className="text-muted transition-colors group-hover:text-brass-600 dark:group-hover:text-brass-400"
                          />
                          <span className="text-sm font-medium text-fg">{s.label}</span>
                        </span>
                        <ArrowUpRight
                          size={12}
                          strokeWidth={2}
                          className="text-muted opacity-50 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                        />
                      </a>
                    </li>
                  )
                })}
              </ul>
            </motion.div>

            {/* Response time */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <div className="rounded-lg border border-fg/8 bg-card p-5">
                <p className="eyebrow mb-2">Response time</p>
                <p className="text-sm text-fg/80">Usually within 24 hours, Cairo time (UTC+2).</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </PageTransition>
  )
}
