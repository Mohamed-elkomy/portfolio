import { useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { motion } from 'framer-motion'

import Seo from '@/components/common/Seo'
import PageTransition from '@/components/common/PageTransition'
import SectionHeading from '@/components/common/SectionHeading'
import ProjectCard from '@/components/common/ProjectCard'
import { projects } from '@/data/projects'
import { useLocale } from '@/hooks/useLocale'
import { cn } from '@/lib/utils'

export default function ProjectsGallery() {
  const { t } = useLocale()
  const [searchParams, setSearchParams] = useSearchParams()

  const categories = useMemo(() => {
    const set = new Set(projects.map((p) => p.category))
    return ['all', ...Array.from(set)]
  }, [])
  const TYPES = ['all', 'website', 'landing']

  // Filters are driven by URL params (?category= & ?type=) so the Navbar
  // dropdown links land on the right filter and the view is shareable.
  const requestedCat = searchParams.get('category')
  const filter = requestedCat && categories.includes(requestedCat) ? requestedCat : 'all'
  const requestedType = searchParams.get('type')
  const typeFilter = TYPES.includes(requestedType) ? requestedType : 'all'

  // Merge a single param into the URL, dropping it when set back to 'all'.
  const setParam = (key, value) => {
    const next = new URLSearchParams(searchParams)
    if (!value || value === 'all') next.delete(key)
    else next.set(key, value)
    setSearchParams(next, { replace: true })
  }
  const setFilter = (cat) => setParam('category', cat)
  const setTypeFilter = (type) => setParam('type', type)

  const matches = (p) =>
    (filter === 'all' || p.category === filter) &&
    (typeFilter === 'all' || p.type === typeFilter)

  const filtered = useMemo(
    () => projects.filter(matches),
    [filter, typeFilter],
  )

  const countFor = (type) =>
    projects.filter((p) => type === 'all' || p.type === type).length

  return (
    <PageTransition>
      <Seo
        title={`${t('projects.title')} — Mohamed Elkomy`}
        description="Selected React work — e-commerce, SaaS, editorial, and B2B products shipped for clients across MENA."
        path="/work"
      />

      <div className="pt-28">
        <div className="container-base">
          <SectionHeading
            eyebrow={t('projects.eyebrow')}
            title={t('projects.title')}
            subtitle={t('projects.subtitle', { total: projects.length })}
          />

          {/* Type segmented control — Landing pages vs full Websites */}
          <div className="mb-4 inline-flex rounded-lg border border-fg/10 bg-card/40 p-1">
            {TYPES.map((type) => (
              <button
                key={type}
                type="button"
                onClick={() => setTypeFilter(type)}
                className={cn(
                  'rounded-md px-3 py-1.5 text-xs font-medium transition-all',
                  typeFilter === type
                    ? 'bg-brass-500/15 text-brass-700 dark:text-brass-300'
                    : 'text-muted hover:text-fg',
                )}
              >
                {t(`projects.filterType.${type}`, { defaultValue: type })}
                <span className="ms-1.5 text-[10px] opacity-60">({countFor(type)})</span>
              </button>
            ))}
          </div>

          {/* Category filter chips */}
          <div className="mb-8 flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setFilter(cat)}
                className={cn(
                  'rounded-md border px-3 py-1.5 text-xs font-medium transition-all',
                  filter === cat
                    ? 'border-brass-500 bg-brass-500/12 text-brass-700 dark:text-brass-300'
                    : 'border-fg/8 bg-transparent text-muted hover:border-fg/20 hover:text-fg',
                )}
              >
                {cat === 'all' ? t('projects.filterType.all') : t(`projects.category.${cat}`, { defaultValue: cat })}
                <span className="ms-1.5 text-[10px] opacity-60">
                  ({projects.filter((p) => (cat === 'all' || p.category === cat) && (typeFilter === 'all' || p.type === typeFilter)).length})
                </span>
              </button>
            ))}
          </div>

          {/* Project list */}
          <motion.div layout className="border-t border-fg/8 pb-20">
            {filtered.map((project, i) => (
              <ProjectCard key={project.slug} project={project} index={i} variant="featured" />
            ))}
            {filtered.length === 0 && (
              <p className="py-12 text-center text-sm text-muted">{t('projects.empty', { defaultValue: 'No projects match these filters.' })}</p>
            )}
          </motion.div>
        </div>
      </div>
    </PageTransition>
  )
}
