import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'

import SectionHeading from '@/components/common/SectionHeading'
import ProjectCard from '@/components/common/ProjectCard'
import { featuredProjects, projects } from '@/data/projects'
import { useLocale } from '@/hooks/useLocale'

export default function FeaturedProjects() {
  const { t } = useLocale()

  return (
    <section id="projects" className="section" aria-labelledby="projects-title">
      <div className="container-base">
        <SectionHeading
          eyebrow={t('projects.eyebrow')}
          title={t('projects.title')}
          subtitle={t('projects.subtitle', { total: projects.length })}
          action={
            <Link
              to="/projects"
              className="btn-secondary group !text-sm"
            >
              {t('projects.viewAll')}
              <ArrowUpRight
                size={14}
                strokeWidth={1.75}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          }
        />

        <div className="border-t border-fg/8">
          {featuredProjects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} variant="featured" />
          ))}
        </div>
      </div>
    </section>
  )
}
