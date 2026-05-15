import { cn } from '@/lib/utils'

/**
 * Personal brand mark: M·K with a brass dot between the letters.
 * Sizes: sm (24px), md (32px), lg (48px), xl (96px)
 */
export default function Logo({ size = 'md', className, withWordmark = false, ...rest }) {
  const sizeMap = {
    sm: { letter: 'text-2xl', dot: 'h-1 w-1' },
    md: { letter: 'text-[28px]', dot: 'h-1.5 w-1.5' },
    lg: { letter: 'text-5xl', dot: 'h-2 w-2' },
    xl: { letter: 'text-[96px]', dot: 'h-3 w-3' },
  }
  const s = sizeMap[size] || sizeMap.md

  return (
    <div
      className={cn('inline-flex items-center gap-1.5 select-none', className)}
      aria-label="Mohamed Magdy Elkomy — M·K logo"
      {...rest}
    >
      <span className={cn('font-serif font-medium leading-none tracking-tightest text-fg', s.letter)}>
        M
      </span>
      <span
        className={cn('rounded-full bg-brass-500', s.dot)}
        aria-hidden="true"
      />
      <span className={cn('font-serif font-medium leading-none tracking-tightest text-fg', s.letter)}>
        K
      </span>
      {withWordmark && (
        <span className="ms-3 hidden font-sans text-xs uppercase tracking-mega text-muted sm:inline">
          Mohamed Elkomy
        </span>
      )}
    </div>
  )
}

/**
 * Compact square version for favicon-like contexts.
 */
export function LogoMark({ size = 32, className }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('inline-block', className)}
      aria-label="M·K"
    >
      <rect width="32" height="32" rx="6" fill="currentColor" opacity="0.06" />
      <text
        x="6"
        y="22"
        fontFamily="Fraunces, serif"
        fontSize="18"
        fontWeight="500"
        fill="currentColor"
      >
        M
      </text>
      <circle cx="16" cy="17" r="1.2" fill="#C8A055" />
      <text
        x="20"
        y="22"
        fontFamily="Fraunces, serif"
        fontSize="18"
        fontWeight="500"
        fill="currentColor"
      >
        K
      </text>
    </svg>
  )
}
