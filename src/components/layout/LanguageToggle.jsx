import { useLocale } from '@/hooks/useLocale'
import { cn } from '@/lib/utils'

export default function LanguageToggle({ className }) {
  const { lang, toggleLanguage, t } = useLocale()

  return (
    <button
      type="button"
      onClick={toggleLanguage}
      className={cn(
        'relative inline-flex h-9 min-w-[44px] items-center justify-center rounded-md px-2.5',
        'font-serif text-sm text-fg/80 transition-colors duration-300 hover:text-fg',
        'hover:bg-fg/4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass-500',
        className,
      )}
      aria-label={t('common.switchLanguage')}
      title={t('common.switchLanguage')}
    >
      <span className={cn(lang === 'en' ? 'opacity-100' : 'opacity-50')}>EN</span>
      <span className="mx-1.5 opacity-30">/</span>
      <span className={cn('font-arabic text-base leading-none', lang === 'ar' ? 'opacity-100' : 'opacity-50')}>
        ع
      </span>
    </button>
  )
}
