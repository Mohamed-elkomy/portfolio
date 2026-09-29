import { motion } from 'framer-motion'
import { Github, Linkedin, Instagram, Facebook, Download } from 'lucide-react'

import { officialProfiles } from '@/data/profile'
import { useLocale } from '@/hooks/useLocale'

function TikTok({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16.6 5.82A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6 0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64 0 3.33 2.76 5.7 5.69 5.7 3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88.09-3.24-1.48Z" />
    </svg>
  )
}

const ICONS = { Github, Linkedin, Instagram, Facebook, TikTok }

export default function OfficialProfiles() {
  const { t } = useLocale()

  return (
    <motion.section
      aria-labelledby="official-profiles-title"
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6 }}
      className="mt-16 rounded-2xl border border-fg/8 bg-card/50 p-6 sm:p-10"
    >
      <div className="flex flex-col gap-4 border-b border-fg/8 pb-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="eyebrow">{t('profiles.eyebrow')}</p>
          <h2 id="official-profiles-title" className="mt-1 font-serif text-2xl text-fg">
            {t('profiles.title')}
          </h2>
        </div>
        <a
          href="/Mohamed_Elkomy_CV.pdf"
          download="Mohamed_Elkomy_CV.pdf"
          target="_blank"
          rel="noreferrer"
          className="btn-brass self-start rounded-full sm:self-auto"
        >
          <Download size={15} strokeWidth={1.75} />
          {t('profiles.cv')}
        </a>
      </div>

      <ul className="mt-8 grid gap-4 md:grid-cols-2">
        {officialProfiles.map((p) => {
          const Icon = ICONS[p.icon]
          return (
            <li key={p.id} className="min-w-0">
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full items-center justify-between gap-3 rounded-xl border border-fg/10 bg-card p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-brass-500/60 hover:shadow-md"
              >
                <span className="flex min-w-0 items-center gap-3.5">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-fg/5 text-fg transition-colors duration-300 group-hover:bg-brass-500 group-hover:text-ink-800">
                    <Icon size={18} strokeWidth={1.75} />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[13px] font-medium leading-snug text-fg transition-colors group-hover:text-brass-600 dark:group-hover:text-brass-400">
                      <bdi>{p.name}</bdi>
                    </span>
                    <span className="block truncate text-[11px] text-muted">
                      <bdi>{p.handle}</bdi>
                    </span>
                  </span>
                </span>
                <span className="shrink-0 rounded-full bg-fg/5 px-2.5 py-1 text-[10px] font-medium text-muted">
                  {t(`profiles.tags.${p.tag}`)}
                </span>
              </a>
            </li>
          )
        })}
      </ul>
    </motion.section>
  )
}
