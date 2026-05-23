import Seo from '@/components/common/Seo'
import Hero from '@/components/sections/Hero'
import StatsBar from '@/components/sections/StatsBar'
import FeaturedProjects from '@/components/sections/FeaturedProjects'
import FinalCTA from '@/components/sections/FinalCTA'
import Marquee from '@/components/common/Marquee'
import PageTransition from '@/components/common/PageTransition'

import { useLocale } from '@/hooks/useLocale'

const MARQUEE_ITEMS = [
  'Front-End Developer',
  'React · Vite · TypeScript',
  'Available for hire',
  'Based in Cairo',
  'Building at Brmja Tech',
]

export default function Home() {
  const { t } = useLocale()

  return (
    <PageTransition>
      <Seo title={t('meta.title')} description={t('meta.description')} path="/" />

      <Hero />
      <StatsBar />
      <Marquee items={MARQUEE_ITEMS} variant="ink" duration={40} />
      <FeaturedProjects />
      <FinalCTA />
    </PageTransition>
  )
}
