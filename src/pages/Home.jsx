import { Helmet } from 'react-helmet-async'

import Hero from '@/components/sections/Hero'
import StatsBar from '@/components/sections/StatsBar'
import About from '@/components/sections/About'
import FeaturedProjects from '@/components/sections/FeaturedProjects'
import Skills from '@/components/sections/Skills'
import Experience from '@/components/sections/Experience'
import Education from '@/components/sections/Education'
import Certifications from '@/components/sections/Certifications'
import Services from '@/components/sections/Services'
import Contact from '@/components/sections/Contact'
import { useLocale } from '@/hooks/useLocale'

export default function Home() {
  const { t } = useLocale()

  return (
    <>
      <Helmet>
        <title>{t('meta.title')}</title>
        <meta name="description" content={t('meta.description')} />
      </Helmet>

      <Hero />
      <StatsBar />
      <About />
      <FeaturedProjects />
      <Skills />
      <Experience />
      <Education />
      <Certifications />
      <Services />
      <Contact />
    </>
  )
}
