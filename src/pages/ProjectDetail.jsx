import { useMemo } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { ArrowLeft, Calendar, User, Briefcase } from 'lucide-react'

import ProjectPreview from '@/components/common/ProjectPreview'
import ProjectCard from '@/components/common/ProjectCard'
import { projects } from '@/data/projects'
import { useLocale } from '@/hooks/useLocale'

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

  if (!project) return <Navigate to="/projects" replace />

  const name = project.name[lang] || project.name.en
  const description = project.description[lang] || project.description.en
  const tagline = project.tagline[lang] || project.tagline.en

  return (
    <>
      <Helmet>
        <title>{name} — Mohamed Elkomy</title>
        <meta name="description" content={tagline} />
      </Helmet>

      <article className="pt-28 pb-20" data-protected="true">
        <div className="container-base max-w-5xl">
          {/* Back link */}
          <Link
            to="/projects"
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
            <h1 className="font-serif text-display-lg text-fg">{name}</h1>
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
            <ProjectPreview url={project.links.live} title={`${name} live preview`} />
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
    </>
  )
}
