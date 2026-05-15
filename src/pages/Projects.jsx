import { useMemo, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'

import SectionHeading from '@/components/common/SectionHeading'
import ProjectCard from '@/components/common/ProjectCard'
import { projects } from '@/data/projects'
import { useLocale } from '@/hooks/useLocale'
import { cn } from '@/lib/utils'

export default function ProjectsGallery() {
  const { t } = useLocale()
  const [filter, setFilter] = useState('all')

  const categories = useMemo(() => {
    const set = new Set(projects.map((p) => p.category))
    return ['all', ...Array.from(set)]
  }, [])

  const filtered = useMemo(() => {
    if (filter === 'all') return projects
    return projects.filter((p) => p.category === filter)
  }, [filter])

  return (
    <>
      <Helmet>
        <title>{`${t('projects.title')} — Mohamed Elkomy`}</title>
      </Helmet>

      <div className="pt-28">
        <div className="container-base">
          <SectionHeading
            eyebrow={t('projects.eyebrow')}
            title={t('projects.title')}
            subtitle={t('projects.subtitle', { total: projects.length })}
          />

          {/* Filter chips */}
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
                {cat === 'all' ? 'All' : t(`projects.category.${cat}`, { defaultValue: cat })}
                <span className="ms-1.5 text-[10px] opacity-60">
                  ({cat === 'all' ? projects.length : projects.filter((p) => p.category === cat).length})
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
              <p className="py-12 text-center text-sm text-muted">No projects in this category.</p>
            )}
          </motion.div>
        </div>
      </div>
    </>
  )
}
