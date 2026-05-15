import { Helmet } from 'react-helmet-async'

import Contact from '@/components/sections/Contact'
import Services from '@/components/sections/Services'
import { useLocale } from '@/hooks/useLocale'

export default function ContactPage() {
  const { t } = useLocale()

  return (
    <>
      <Helmet>
        <title>{`${t('nav.contact')} — Mohamed Elkomy`}</title>
      </Helmet>

      <div className="pt-20">
        <Contact />
        <Services />
      </div>
    </>
  )
}
