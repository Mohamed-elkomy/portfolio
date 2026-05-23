import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown, Github, ExternalLink, Briefcase, User, Award, MessageSquare } from 'lucide-react'

import Logo from './Logo'
import ThemeToggle from './ThemeToggle'
import LanguageToggle from './LanguageToggle'
import MagneticButton from '@/components/common/MagneticButton'
import { useLocale } from '@/hooks/useLocale'
import { githubStats } from '@/data/profile'
import { projects } from '@/data/projects'
import { cn } from '@/lib/utils'

const NAV_LINKS = [
  { to: '/work', key: 'nav.work', icon: Briefcase, hasDropdown: true },
  { to: '/about', key: 'nav.about', icon: User },
  { to: '/certifications', key: 'nav.certifications', icon: Award },
  { to: '/contact', key: 'nav.contact', icon: MessageSquare },
]

// Derived from the actual project data so the dropdown never drifts out of sync
// with the categories that exist. 'all' first, then each unique category.
const WORK_CATEGORIES = ['all', ...Array.from(new Set(projects.map((p) => p.category)))]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [workOpen, setWorkOpen] = useState(false)
  const workTimerRef = useRef(null)
  const { t, isRTL, lang } = useLocale()
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setWorkOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  // Dropdown hover handling with small delay to prevent flicker
  const openWork = () => {
    if (workTimerRef.current) clearTimeout(workTimerRef.current)
    setWorkOpen(true)
  }
  const closeWork = () => {
    if (workTimerRef.current) clearTimeout(workTimerRef.current)
    workTimerRef.current = setTimeout(() => setWorkOpen(false), 120)
  }

  // Latest 3 projects for dropdown preview
  const recentProjects = projects.filter(p => p.featured).slice(0, 3)

  return (
    <>
      <header
        className={cn(
          'fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-out-expo',
          scrolled
            ? 'border-b border-fg/8 bg-bg/85 backdrop-blur-md'
            : 'border-b border-transparent bg-transparent',
        )}
      >
        <div className="container-base flex h-16 items-center justify-between gap-3">
          {/* Logo + tagline */}
          <Link to="/" className="flex items-center gap-3" aria-label="Home">
            <Logo size="md" />
            <span className="hidden h-4 w-px bg-fg/15 lg:block" aria-hidden="true" />
            <span className="hidden font-mono text-[10px] uppercase tracking-mega text-muted lg:inline">
              Front-End · Cairo
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-0.5 md:flex" aria-label="Primary">
            {NAV_LINKS.map((link) => {
              const isWork = link.to === '/work'
              const isActive = pathname === link.to || (isWork && pathname.startsWith('/work')) || (isWork && pathname.startsWith('/projects'))

              if (link.hasDropdown) {
                return (
                  <div
                    key={link.to}
                    className="relative"
                    onMouseEnter={openWork}
                    onMouseLeave={closeWork}
                  >
                    <NavLink
                      to={link.to}
                      className={cn(
                        'relative inline-flex items-center gap-1 rounded-md px-3 py-1.5 text-sm font-medium transition-colors',
                        isActive ? 'text-fg' : 'text-muted hover:text-fg',
                      )}
                    >
                      {t(link.key)}
                      <ChevronDown
                        size={11}
                        strokeWidth={2}
                        className={cn('transition-transform duration-200', workOpen && 'rotate-180')}
                      />
                      {isActive && (
                        <motion.span
                          layoutId="nav-active"
                          className="absolute inset-x-3 -bottom-px h-[2px] rounded-full bg-brass-500"
                          transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                        />
                      )}
                    </NavLink>

                    {/* Dropdown panel */}
                    <AnimatePresence>
                      {workOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 8 }}
                          transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                          className={cn(
                            'absolute top-full mt-2 w-[460px] rounded-xl border border-fg/8 bg-bg/95 p-2 shadow-xl backdrop-blur-md',
                            isRTL ? 'right-0' : 'left-0',
                          )}
                        >
                          <div className="grid grid-cols-[1fr_1.4fr] gap-2">
                            {/* Categories */}
                            <div className="border-e border-fg/8 pe-2 py-2">
                              <p className="px-3 pb-2 text-[10px] uppercase tracking-mega text-muted">
                                {t('nav.byCategory')}
                              </p>
                              <ul className="space-y-0.5">
                                {WORK_CATEGORIES.map((cat) => (
                                  <li key={cat}>
                                    <Link
                                      to={`/work${cat !== 'all' ? `?category=${cat}` : ''}`}
                                      className="block rounded-md px-3 py-1.5 text-sm text-fg/80 transition-colors hover:bg-brass-500/8 hover:text-brass-600 dark:hover:text-brass-400"
                                    >
                                      {cat === 'all' ? t('nav.workAll') : t(`projects.category.${cat}`, { defaultValue: cat })}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            {/* Recent work preview */}
                            <div className="ps-2 py-2">
                              <p className="px-3 pb-2 text-[10px] uppercase tracking-mega text-muted">
                                {t('nav.viewWork')}
                              </p>
                              <ul className="space-y-0.5">
                                {recentProjects.map((p) => (
                                  <li key={p.slug}>
                                    <Link
                                      to={`/work/${p.slug}`}
                                      className="group flex items-center justify-between rounded-md px-3 py-1.5 transition-colors hover:bg-brass-500/8"
                                    >
                                      <span className="min-w-0 flex-1 text-start">
                                        <span className="block truncate text-sm font-medium text-fg group-hover:text-brass-600 dark:group-hover:text-brass-400">
                                          {p.name[lang] || p.name.en}
                                        </span>
                                        <span className="block truncate text-[11px] text-muted">
                                          {p.tagline[lang] || p.tagline.en}
                                        </span>
                                      </span>
                                      <ExternalLink size={11} strokeWidth={1.75} className="ms-2 shrink-0 text-muted opacity-0 transition-opacity group-hover:opacity-100" />
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )
              }

              // Regular nav link
              return (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) =>
                    cn(
                      'relative rounded-md px-3 py-1.5 text-sm font-medium transition-colors',
                      isActive ? 'text-fg' : 'text-muted hover:text-fg',
                    )
                  }
                >
                  {({ isActive }) => (
                    <>
                      {t(link.key)}
                      {isActive && (
                        <motion.span
                          layoutId="nav-active"
                          className="absolute inset-x-3 -bottom-px h-[2px] rounded-full bg-brass-500"
                          transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                        />
                      )}
                    </>
                  )}
                </NavLink>
              )
            })}
          </nav>

          {/* Right cluster */}
          <div className="flex items-center gap-1">
            {/* GitHub badge — desktop only */}
            <a
              href={githubStats.url}
              target="_blank"
              rel="noreferrer noopener"
              className="hidden items-center gap-1.5 rounded-md border border-fg/8 px-2.5 py-1.5 text-xs text-fg/80 transition-colors hover:border-brass-500/40 hover:bg-brass-500/8 hover:text-brass-600 dark:hover:text-brass-400 lg:inline-flex"
              aria-label="GitHub profile"
              title="GitHub"
            >
              <Github size={12} strokeWidth={1.75} />
              <span className="font-mono">{githubStats.publicRepos}</span>
              <span className="text-muted">repos</span>
            </a>

            <LanguageToggle />
            <ThemeToggle />

            <MagneticButton strength={0.15} className="hidden md:inline-block">
              <a
                href="/Mohamed_Elkomy_CV.pdf"
                download="Mohamed_Elkomy_CV.pdf"
                target="_blank"
                rel="noreferrer"
                className="btn-brass !px-3 !py-1.5 !text-xs"
              >
                {t('nav.resume')}
              </a>
            </MagneticButton>

            <button
              type="button"
              onClick={() => setMobileOpen((v) => !v)}
              className="inline-flex h-9 w-9 items-center justify-center rounded-md text-fg/80 hover:bg-fg/4 hover:text-fg md:hidden"
              aria-label={mobileOpen ? t('common.close') : t('common.menu')}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={18} strokeWidth={1.75} /> : <Menu size={18} strokeWidth={1.75} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-bg pt-16 md:hidden"
          >
            <div className="container-base flex h-full flex-col py-8">
              {/* Status pill */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="mb-6"
              >
                <span className="status-pill">
                  <span className="status-dot" />
                  {t('nav.available')}
                </span>
              </motion.div>

              <nav className="flex-1 space-y-1" aria-label="Mobile">
                {NAV_LINKS.map((link, i) => {
                  const Icon = link.icon
                  return (
                    <motion.div
                      key={link.to}
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.05 + i * 0.04, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <NavLink
                        to={link.to}
                        className={({ isActive }) =>
                          cn(
                            'group flex items-center justify-between border-b border-fg/8 py-4',
                            isActive ? 'text-brass-600 dark:text-brass-400' : 'text-fg',
                          )
                        }
                      >
                        <span className="flex items-center gap-3">
                          <Icon size={14} strokeWidth={1.5} className="text-muted group-hover:text-brass-500" />
                          <span className="font-serif text-2xl">{t(link.key)}</span>
                        </span>
                        <ChevronDown
                          size={14}
                          strokeWidth={1.75}
                          className={cn('text-muted', isRTL ? 'rotate-90' : '-rotate-90')}
                        />
                      </NavLink>
                    </motion.div>
                  )
                })}
              </nav>

              {/* Bottom — GitHub + resume */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.4 }}
                className="mt-8 space-y-3 border-t border-fg/8 pt-6"
              >
                <a
                  href={githubStats.url}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex items-center justify-between rounded-md border border-fg/8 px-4 py-3 text-sm"
                >
                  <span className="flex items-center gap-2">
                    <Github size={14} strokeWidth={1.5} />
                    <span className="text-fg">GitHub</span>
                  </span>
                  <span className="font-mono text-xs text-muted">{githubStats.publicRepos} repos</span>
                </a>

                <a href="/Mohamed_Elkomy_CV.pdf" download="Mohamed_Elkomy_CV.pdf" target="_blank" rel="noreferrer" className="btn-brass w-full justify-center">
                  {t('nav.resume')}
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
