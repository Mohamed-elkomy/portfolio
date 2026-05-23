import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

import SectionHeading from '@/components/common/SectionHeading'
import { featuredProjects, projects } from '@/data/projects'
import { useLocale } from '@/hooks/useLocale'
import { cn } from '@/lib/utils'

/**
 * Featured Projects on home — only 3 most impressive cards with hero treatment.
 * Each card is a Link to /work/:slug. Includes a stylized device mockup placeholder.
 */
export default function FeaturedProjects() {
  const { t, lang, isRTL } = useLocale()
  // Show top 3 featured on home
  const top = featuredProjects.slice(0, 3)

  return (
    <section id="work" className="section" aria-labelledby="work-title">
      <div className="container-base">
        <SectionHeading
          eyebrow={t('projects.eyebrow')}
          title={t('projects.title')}
          subtitle={t('projects.subtitle', { total: projects.length })}
          action={
            <Link to="/work" className="btn-secondary group !text-sm">
              {t('projects.viewAll')}
              <ArrowUpRight
                size={14}
                strokeWidth={1.75}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          }
        />

        <div className="grid gap-6 md:gap-10">
          {top.map((project, i) => {
            const name = project.name[lang] || project.name.en
            const tagline = project.tagline[lang] || project.tagline.en
            const isAlt = i % 2 === 1

            return (
              <motion.article
                key={project.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="group relative"
              >
                <Link
                  to={`/work/${project.slug}`}
                  className={cn(
                    'block overflow-hidden rounded-2xl border border-fg/8 bg-card',
                    'transition-all duration-500 hover:border-brass-500/40',
                    'hover:shadow-[0_30px_80px_-30px_rgba(28,25,23,0.25)]',
                    'dark:hover:shadow-[0_30px_80px_-30px_rgba(200,160,85,0.3)]',
                  )}
                  aria-label={`View ${name} case study`}
                >
                  <div className={cn(
                    'grid md:grid-cols-2',
                    isAlt && 'md:[direction:rtl]',
                  )}>
                    {/* Stylized preview area — device mockup placeholder */}
                    <div className="relative aspect-[4/3] overflow-hidden bg-ink-800 md:aspect-auto md:min-h-[420px] md:[direction:ltr]">
                      <DeviceMockupPlaceholder
                        index={i}
                        category={project.category}
                        url={project.links.live.replace(/^https?:\/\//, '')}
                      />
                    </div>

                    {/* Text content */}
                    <div className="p-7 md:p-10 lg:p-12 md:[direction:ltr]">
                      <div className="flex flex-wrap items-baseline gap-2">
                        <span className="font-serif text-3xl font-medium text-brass-500 md:text-4xl">
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        <span className="tech-tag uppercase">
                          {t(`projects.category.${project.category}`, { defaultValue: project.category })}
                        </span>
                        <span className="text-xs text-muted">· {project.year}</span>
                      </div>

                      <h3 className="mt-3 font-serif text-display-md text-fg transition-colors group-hover:text-brass-600 dark:group-hover:text-brass-400">
                        {name}
                      </h3>

                      <p className="mt-4 max-w-md text-sm leading-relaxed text-fg/80 md:text-base">
                        {tagline}
                      </p>

                      <div className="mt-5 flex flex-wrap gap-1.5">
                        {project.tech.slice(0, 5).map((tag) => (
                          <span key={tag} className="tech-tag font-normal">{tag}</span>
                        ))}
                        {project.tech.length > 5 && (
                          <span className="text-xs text-muted self-center">+{project.tech.length - 5}</span>
                        )}
                      </div>

                      <span className="mt-7 inline-flex items-center gap-1.5 text-sm font-medium text-brass-600 dark:text-brass-400">
                        {t('projects.viewCase')}
                        <ArrowUpRight
                          size={14}
                          strokeWidth={2}
                          className={cn(
                            'transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5',
                            isRTL && 'group-hover:-translate-x-0.5',
                          )}
                        />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/**
 * A stylized SVG device mockup as a placeholder for project screenshots.
 * Different patterns based on project index/category. Uses brass + ink palette.
 */
function DeviceMockupPlaceholder({ index, category, url }) {
  // Different angular patterns per index for variety
  const patternId = `pattern-${index}`
  const palettes = [
    { bg: '#1C1917', accent: '#C8A055', dim: '#44403C' },
    { bg: '#0C0A09', accent: '#C8A055', dim: '#292524' },
    { bg: '#1C1917', accent: '#DCC287', dim: '#57534E' },
  ]
  const p = palettes[index % palettes.length]

  return (
    <div className="relative h-full w-full">
      <svg
        viewBox="0 0 800 600"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 h-full w-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id={patternId} x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
            <path d="M0 80 L80 0" stroke={p.accent} strokeWidth="0.5" opacity="0.15" />
          </pattern>
          <radialGradient id={`glow-${index}`} cx="50%" cy="50%">
            <stop offset="0%" stopColor={p.accent} stopOpacity="0.18" />
            <stop offset="100%" stopColor={p.accent} stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Background */}
        <rect width="800" height="600" fill={p.bg} />
        <rect width="800" height="600" fill={`url(#${patternId})`} />
        <circle cx="600" cy="200" r="200" fill={`url(#glow-${index})`} />

        {/* Stylized browser window */}
        <g transform="translate(120, 130)">
          <rect width="560" height="340" rx="12" fill={p.dim} opacity="0.5" stroke={p.accent} strokeOpacity="0.25" />
          {/* Browser bar */}
          <rect width="560" height="28" rx="12" fill={p.bg} />
          <rect y="14" width="560" height="14" fill={p.bg} />
          <circle cx="14" cy="14" r="4" fill="#ef4444" opacity="0.6" />
          <circle cx="30" cy="14" r="4" fill="#eab308" opacity="0.6" />
          <circle cx="46" cy="14" r="4" fill="#22c55e" opacity="0.6" />
          {/* URL pill */}
          <rect x="100" y="6" width="360" height="16" rx="8" fill={p.dim} opacity="0.4" />
          <text x="116" y="18" fontFamily="monospace" fontSize="10" fill={p.accent} opacity="0.7">
            {url.length > 50 ? url.slice(0, 47) + '…' : url}
          </text>

          {/* Content lines suggesting a layout */}
          <rect x="40" y="60" width="180" height="28" rx="4" fill={p.accent} opacity="0.2" />
          <rect x="40" y="100" width="320" height="8" rx="2" fill={p.accent} opacity="0.15" />
          <rect x="40" y="116" width="260" height="8" rx="2" fill={p.accent} opacity="0.12" />
          <rect x="40" y="132" width="200" height="8" rx="2" fill={p.accent} opacity="0.1" />

          {/* Card grid */}
          <rect x="40" y="170" width="150" height="120" rx="6" fill={p.accent} opacity="0.08" />
          <rect x="205" y="170" width="150" height="120" rx="6" fill={p.accent} opacity="0.12" />
          <rect x="370" y="170" width="150" height="120" rx="6" fill={p.accent} opacity="0.08" />
        </g>

        {/* Floating category tag */}
        <g transform="translate(40, 40)">
          <rect width="120" height="28" rx="14" fill={p.accent} opacity="0.18" />
          <text x="60" y="18" fontFamily="monospace" fontSize="10" fill={p.accent} textAnchor="middle" letterSpacing="1">
            {category.toUpperCase()}
          </text>
        </g>

        {/* Index number watermark */}
        <text
          x="700"
          y="540"
          fontFamily="Fraunces, serif"
          fontSize="120"
          fill={p.accent}
          opacity="0.08"
          textAnchor="end"
          fontWeight="500"
        >
          {String(index + 1).padStart(2, '0')}
        </text>
      </svg>
    </div>
  )
}
