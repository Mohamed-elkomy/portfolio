import { cn } from '@/lib/utils'

/**
 * Image with content-protection guardrails:
 *  - `draggable={false}` to prevent drag-and-save
 *  - `data-protected="true"` so the global hook blocks right-click
 *  - Transparent overlay div to prevent direct image interactions
 *  - Optional diagonal watermark
 *  - CSS user-select disabled
 *
 * NOTE: This deters casual saving. OS-level screenshots and determined users will still succeed.
 */
export default function ProtectedImage({
  src,
  alt = '',
  watermark = '© Mohamed Elkomy',
  showWatermark = true,
  className,
  imgClassName,
  ratio,
  ...rest
}) {
  return (
    <div
      data-protected="true"
      className={cn(
        'relative overflow-hidden select-none',
        ratio && 'w-full',
        className,
      )}
      style={ratio ? { aspectRatio: ratio } : undefined}
      onContextMenu={(e) => e.preventDefault()}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        draggable={false}
        onContextMenu={(e) => e.preventDefault()}
        onDragStart={(e) => e.preventDefault()}
        className={cn(
          'h-full w-full select-none pointer-events-none',
          imgClassName,
        )}
        style={{
          WebkitUserDrag: 'none',
          WebkitTouchCallout: 'none',
          KhtmlUserSelect: 'none',
          MozUserSelect: 'none',
          userSelect: 'none',
        }}
        {...rest}
      />

      {/* Transparent shield — sits above the image, intercepts any pointer interactions */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background: 'transparent',
          pointerEvents: 'auto',
        }}
        onContextMenu={(e) => e.preventDefault()}
        onDragStart={(e) => e.preventDefault()}
      />

      {/* Watermark — repeating, low opacity, diagonal */}
      {showWatermark && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 select-none"
          style={{
            backgroundImage: `repeating-linear-gradient(
              -30deg,
              transparent 0,
              transparent 120px,
              rgba(200, 160, 85, 0.08) 120px,
              rgba(200, 160, 85, 0.08) 121px
            )`,
            mixBlendMode: 'overlay',
          }}
        >
          <span
            className="absolute bottom-3 right-3 font-mono text-[10px] tracking-wider text-white/40 dark:text-white/30"
            style={{ textShadow: '0 1px 2px rgba(0,0,0,0.5)' }}
          >
            {watermark}
          </span>
        </div>
      )}
    </div>
  )
}
