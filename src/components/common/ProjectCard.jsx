import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowUpRight, ExternalLink } from 'lucide-react'

import { useLocale } from '@/hooks/useLocale'
import { cn } from '@/lib/utils'

/**
 * Editorial-style project card.
 * Click on the card or hover CTA → navigates INTERNALLY to /projects/:slug.
 * Live preview is rendered inside the portfolio via iframe.
 */
export default function ProjectCard({ project, index, variant = 'featured' }) {
  const { t, lang, isRTL } = useLocale()
  const isFeatured = variant === 'featured'

  const name = project.name[lang] || project.name.en
  const tagline = project.tagline[lang] || project.tagline.en
  const liveUrl = project.links?.live
  const displayUrl = liveUrl?.replace(/^https?:\/\//, '').replace(/\/$/, '')

  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: (index || 0) * 0.05, ease: [0.16, 1, 0.3, 1] }}
      className="group relative border-b border-fg/8 first:pt-0 last:border-b-0"
    >
      {/* Full-card link wraps everything for a single click target */}
      <Link
        to={`/work/${project.slug}`}
        aria-label={`View ${name} case study`}
        className="absolute inset-0 z-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass-500 focus-visible:ring-inset"
      />

      <div className="pointer-events-none relative z-10 grid gap-4 py-7 md:grid-cols-[auto_1fr_auto] md:items-start md:gap-8">
        {isFeatured && (
          <span className="font-serif text-2xl font-medium text-brass-600 dark:text-brass-400 md:text-3xl">
            {String((index || 0) + 1).padStart(2, '0')}
          </span>
        )}

        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-baseline gap-3">
            <h3 className="font-serif text-2xl text-fg transition-colors group-hover:text-brass-600 dark:group-hover:text-brass-400 md:text-3xl">
              {name}
            </h3>
            <span className="tech-tag uppercase">
              {t(`projects.category.${project.category}`, { defaultValue: project.category })}
            </span>
            {project.type && (
              <span
                className={cn(
                  'rounded-full border px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide',
                  project.type === 'website'
                    ? 'border-brass-500/40 bg-brass-500/12 text-brass-700 dark:text-brass-300'
                    : 'border-fg/15 text-muted',
                )}
              >
                {t(`projects.type.${project.type}`, { defaultValue: project.type })}
              </span>
            )}
            <span className="text-xs text-muted">· {project.year}</span>
          </div>

          {displayUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noreferrer noopener"
              dir="ltr"
              className="pointer-events-auto relative z-10 mt-1.5 inline-flex items-center gap-1 font-mono text-xs text-muted transition-colors hover:text-brass-600 dark:hover:text-brass-400"
            >
              <ExternalLink size={11} strokeWidth={1.75} />
              {displayUrl}
            </a>
          )}

          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-fg/80 md:text-base">
            {tagline}
          </p>

          <div className="mt-4 flex flex-wrap items-center gap-1.5">
            {project.tech.slice(0, 6).map((tag) => (
              <span key={tag} className="tech-tag font-normal">
                {tag}
              </span>
            ))}
            {project.tech.length > 6 && (
              <span className="text-xs text-muted">+{project.tech.length - 6}</span>
            )}
          </div>
        </div>

        <div className="flex items-center gap-2 self-end md:flex-col md:items-end md:self-start">
          <span
            className={cn(
              'inline-flex items-center gap-1.5 rounded-md border border-fg/8 px-3 py-1.5',
              'text-xs font-medium text-fg/80 transition-all duration-300',
              'group-hover:border-brass-500/40 group-hover:bg-brass-500/8 group-hover:text-brass-600 dark:group-hover:text-brass-400',
            )}
          >
            {t('projects.viewCase')}
            <ArrowUpRight
              size={11}
              strokeWidth={2}
              className={cn(
                'transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5',
                isRTL && 'group-hover:-translate-x-0.5',
              )}
            />
          </span>
        </div>
      </div>

      {/* Brass hover strip on right edge */}
      <span
        aria-hidden="true"
        className={cn(
          'pointer-events-none absolute inset-y-0 right-0 w-[2px] origin-bottom scale-y-0 bg-brass-500',
          'transition-transform duration-500 ease-out-expo group-hover:scale-y-100',
        )}
      />
    </motion.article>
  )
}
