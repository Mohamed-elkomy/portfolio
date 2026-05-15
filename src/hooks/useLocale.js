import { useCallback } from 'react'
import { useTranslation } from 'react-i18next'

/**
 * Hook for language switching with RTL/LTR direction handling.
 */
export function useLocale() {
  const { i18n, t } = useTranslation()
  const lang = i18n.language?.startsWith('ar') ? 'ar' : 'en'
  const isRTL = lang === 'ar'

  const changeLanguage = useCallback(
    (next) => {
      i18n.changeLanguage(next)
    },
    [i18n],
  )

  const toggleLanguage = useCallback(() => {
    changeLanguage(lang === 'ar' ? 'en' : 'ar')
  }, [lang, changeLanguage])

  return { lang, isRTL, changeLanguage, toggleLanguage, t }
}
