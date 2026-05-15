import { Helmet } from 'react-helmet-async'

import About from '@/components/sections/About'
import Skills from '@/components/sections/Skills'
import Experience from '@/components/sections/Experience'
import Education from '@/components/sections/Education'
import { useLocale } from '@/hooks/useLocale'

export default function AboutPage() {
  const { t } = useLocale()

  return (
    <>
      <Helmet>
        <title>{`${t('nav.about')} — Mohamed Elkomy`}</title>
      </Helmet>

      <div className="pt-20">
        <About />
        <Skills />
        <Experience />
        <Education />
      </div>
    </>
  )
}
