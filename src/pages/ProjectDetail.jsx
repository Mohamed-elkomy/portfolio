import { useMemo } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { ArrowLeft, Calendar, User, Briefcase, ExternalLink } from 'lucide-react'

import ProjectPreview from '@/components/common/ProjectPreview'
import ProjectCard from '@/components/common/ProjectCard'
import PageTransition from '@/components/common/PageTransition'
import { projects } from '@/data/projects'
import { useLocale } from '@/hooks/useLocale'
import { cn } from '@/lib/utils'

export default function ProjectDetail() {
  const { slug } = useParams()
  const { t, lang, isRTL } = useLocale()

  const project = useMemo(() => projects.find((p) => p.slug === slug), [slug])

  // Pick 3 related projects (same category, excluding current)
  const related = useMemo(() => {
    if (!project) return []
    const sameCategory = projects.filter((p) => p.slug !== project.slug && p.category === project.category)
    const fillers = projects.filter((p) => p.slug !== project.slug && p.category !== project.category)
    return [...sameCategory, ...fillers].slice(0, 3)
  }, [project])

  if (!project) return <Navigate to="/work" replace />

  const name = project.name[lang] || project.name.en
  const description = project.description[lang] || project.description.en
  const tagline = project.tagline[lang] || project.tagline.en

  return (
    <PageTransition>
      <Helmet>
        <title>{name} — Mohamed Elkomy</title>
        <meta name="description" content={tagline} />
      </Helmet>

      <article className="pt-28 pb-20">
        <div className="container-base max-w-5xl">
          {/* Back link */}
          <Link
            to="/work"
            className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-brass-600 dark:hover:text-brass-400"
          >
            <ArrowLeft size={14} className={isRTL ? 'rotate-180' : ''} />
            {t('projects.viewAll')}
          </Link>

          {/* Header */}
          <motion.header
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 border-b border-fg/8 pb-10"
          >
            <p className="eyebrow mb-3">
              {t(`projects.category.${project.category}`, { defaultValue: project.category })}
              <span className="mx-2 opacity-40">·</span>
              {project.year}
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <h1 className="font-serif text-display-lg text-fg">{name}</h1>
              {project.type && (
                <span
                  className={cn(
                    'rounded-full border px-2.5 py-1 text-[11px] font-medium uppercase tracking-wide',
                    project.type === 'website'
                      ? 'border-brass-500/40 bg-brass-500/12 text-brass-700 dark:text-brass-300'
                      : 'border-fg/15 text-muted',
                  )}
                >
                  {t(`projects.type.${project.type}`, { defaultValue: project.type })}
                </span>
              )}
            </div>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-fg/80">{tagline}</p>

            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs text-muted">
              <span className="inline-flex items-center gap-1.5">
                <Briefcase size={12} strokeWidth={1.75} /> {project.role}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Calendar size={12} strokeWidth={1.75} /> {project.year}
              </span>
            </div>
          </motion.header>

          {/* Live preview iframe */}
          <section className="mt-10" aria-labelledby="preview-title">
            <div className="mb-4 flex items-center justify-between">
              <h2 id="preview-title" className="eyebrow">Live preview</h2>
            </div>
            <ProjectPreview slug={project.slug} url={project.links.live} title={name} />

            {project.links.mirrors?.length > 0 && (
              <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2">
                <span className="eyebrow">{t('projects.otherVersions')}</span>
                {project.links.mirrors.map((mirror) => (
                  <a
                    key={mirror}
                    href={mirror}
                    target="_blank"
                    rel="noreferrer noopener"
                    dir="ltr"
                    className="inline-flex items-center gap-1 font-mono text-xs text-muted transition-colors hover:text-brass-600 dark:hover:text-brass-400"
                  >
                    <ExternalLink size={11} strokeWidth={1.75} />
                    {mirror.replace(/^https?:\/\//, '').replace(/\/$/, '')}
                  </a>
                ))}
              </div>
            )}
          </section>

          {/* Description */}
          <motion.section
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="mt-14 grid gap-10 md:grid-cols-[1.6fr_1fr]"
          >
            <div>
              <h2 className="eyebrow mb-4">About this project</h2>
              <p className="text-base leading-loose text-fg/85 md:text-lg">{description}</p>
            </div>
            <aside className="card-base p-6">
              <h2 className="eyebrow mb-4">Project details</h2>
              <dl className="space-y-3 text-sm">
                <div className="flex items-baseline justify-between gap-3 border-b border-fg/6 pb-2.5">
                  <dt className="text-muted">Role</dt>
                  <dd className="font-medium text-fg">{project.role}</dd>
                </div>
                <div className="flex items-baseline justify-between gap-3 border-b border-fg/6 pb-2.5">
                  <dt className="text-muted">Year</dt>
                  <dd className="font-medium text-fg">{project.year}</dd>
                </div>
                <div className="flex items-baseline justify-between gap-3">
                  <dt className="text-muted">Category</dt>
                  <dd className="font-medium text-fg">
                    {t(`projects.category.${project.category}`, { defaultValue: project.category })}
                  </dd>
                </div>
              </dl>
            </aside>
          </motion.section>

          {/* Tech stack */}
          <motion.section
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-12 border-t border-fg/8 pt-8"
          >
            <h2 className="eyebrow mb-4">Tech stack</h2>
            <div className="flex flex-wrap gap-1.5">
              {project.tech.map((tag) => (
                <span key={tag} className="tech-tag">{tag}</span>
              ))}
            </div>
          </motion.section>

          {/* Related projects */}
          {related.length > 0 && (
            <motion.section
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mt-16 border-t border-fg/8 pt-12"
            >
              <h2 className="font-serif text-display-md text-fg mb-2">More work</h2>
              <p className="text-sm text-muted mb-6">Related projects you might find interesting.</p>
              <div className="border-t border-fg/8">
                {related.map((p, i) => (
                  <ProjectCard key={p.slug} project={p} index={i} variant="featured" />
                ))}
              </div>
            </motion.section>
          )}
        </div>
      </article>
    </PageTransition>
  )
}
