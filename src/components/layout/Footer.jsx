import { Link } from 'react-router-dom'
import { Github, Linkedin, Mail, MessageCircle, Heart } from 'lucide-react'

import Logo from './Logo'
import { useLocale } from '@/hooks/useLocale'
import { social, profile } from '@/data/profile'

const ICONS = { Github, Linkedin, Mail, MessageCircle }

const FOOTER_LINKS = [
  [
    { label: 'nav.work', to: '/projects' },
    { label: 'nav.about', to: '/about' },
    { label: 'nav.contact', to: '/contact' },
  ],
  [
    { label: 'certifications.viewAll', to: '/certifications' },
    { label: 'nav.photography', to: '/photography' },
  ],
]

export default function Footer() {
  const { t } = useLocale()
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-fg/8 py-12">
      <div className="container-base">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr_auto]">
          {/* Brand */}
          <div>
            <Logo size="md" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              {profile.role.en} · {t('hero.location')}
            </p>
          </div>

          {/* Link columns */}
          {FOOTER_LINKS.map((column, i) => (
            <div key={i}>
              <h4 className="eyebrow mb-4">{i === 0 ? 'Navigate' : 'More'}</h4>
              <ul className="space-y-2.5">
                {column.map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className="text-sm text-fg/80 transition-colors hover:text-brass-600 dark:hover:text-brass-400"
                    >
                      {t(link.label)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Social */}
          <div>
            <h4 className="eyebrow mb-4">{t('contact.social')}</h4>
            <ul className="flex gap-3">
              {social.map((s) => {
                const Icon = ICONS[s.icon] || Mail
                return (
                  <li key={s.id}>
                    <a
                      href={s.url}
                      target={s.url.startsWith('http') ? '_blank' : undefined}
                      rel="noreferrer noopener"
                      className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-fg/8 text-fg/70 transition-colors hover:border-brass-500/40 hover:bg-brass-500/8 hover:text-brass-600 dark:hover:text-brass-400"
                      aria-label={s.label}
                    >
                      <Icon size={16} strokeWidth={1.5} />
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-fg/6 pt-6 text-xs text-muted md:flex-row md:items-center">
          <p>
            © {year} Mohamed Magdy Elkomy. {t('footer.rights')}{' '}
            <span className="opacity-70">All content is protected.</span>
          </p>
          <p className="inline-flex items-center gap-1.5">
            <span>{t('footer.builtWith')}</span>
            <Heart size={11} className="fill-brass-500 text-brass-500" />
            <span>React · Vite · Tailwind · Framer Motion</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
