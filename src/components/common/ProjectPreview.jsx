import { useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, ImageOff } from 'lucide-react'

import { cn } from '@/lib/utils'

/**
 * Renders a static screenshot of the live project inside a desktop browser–style
 * frame (traffic lights + URL bar), with a prominent "Open Live →" CTA. A phone
 * mockup with the mobile screenshot is overlaid in the corner so the responsive
 * work is shown off — desktop + mobile at a glance.
 *
 * Screenshots live at /projects/{slug}.jpg (desktop) and
 * /projects/{slug}-mobile.jpg (mobile), produced by
 * scripts/capture-screenshots.mjs. Missing images fall back gracefully:
 * the desktop falls back to a placeholder, the phone simply hides.
 */
export default function ProjectPreview({ slug, url, title = 'Project preview', className }) {
  const [loaded, setLoaded] = useState(false)
  const [errored, setErrored] = useState(false)
  const [mobileLoaded, setMobileLoaded] = useState(false)
  const [mobileErrored, setMobileErrored] = useState(false)

  // Display the URL nicely (no protocol)
  const displayUrl = url.replace(/^https?:\/\//, '')
  const imgSrc = slug ? `/projects/${slug}.jpg` : null
  const mobileSrc = slug ? `/projects/${slug}-mobile.jpg` : null
  const showDesktop = imgSrc && !errored
  const showPhone = showDesktop && mobileSrc && !mobileErrored

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        'overflow-hidden rounded-xl border border-fg/10 bg-card shadow-[0_10px_40px_-20px_rgba(0,0,0,0.25)]',
        className,
      )}
    >
      {/* Browser chrome */}
      <div className="flex items-center gap-3 border-b border-fg/8 bg-card/60 px-4 py-3">
        {/* Traffic lights */}
        <div className="flex gap-1.5">
          <span className="h-3 w-3 rounded-full bg-red-400/70" />
          <span className="h-3 w-3 rounded-full bg-yellow-400/70" />
          <span className="h-3 w-3 rounded-full bg-green-400/70" />
        </div>

        {/* URL bar */}
        <div className="flex flex-1 items-center gap-2 rounded-md border border-fg/8 bg-bg/60 px-3 py-1.5 text-xs">
          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" aria-hidden="true" />
          <span className="truncate font-mono text-fg/70" dir="ltr">{displayUrl}</span>
        </div>
      </div>

      {/* Screenshot (or placeholder) */}
      <div className="group relative overflow-hidden bg-bg" style={{ aspectRatio: '16 / 10' }}>
        {!showDesktop ? (
          // Fallback placeholder — no screenshot available
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-card/40 px-6 text-center">
            <ImageOff size={22} strokeWidth={1.5} className="text-muted" />
            <p className="text-sm font-medium text-fg">{title}</p>
            <a
              href={url}
              target="_blank"
              rel="noreferrer noopener"
              className="btn-brass !px-4 !py-2 !text-xs"
            >
              {'Open Live →'}
            </a>
          </div>
        ) : (
          <>
            {/* Shimmer skeleton until the desktop image loads */}
            {!loaded && (
              <div className="absolute inset-0 animate-pulse bg-gradient-to-br from-fg/5 via-fg/10 to-fg/5" />
            )}
            <img
              src={imgSrc}
              alt={`${title} — desktop`}
              loading="lazy"
              decoding="async"
              onLoad={() => setLoaded(true)}
              onError={() => setErrored(true)}
              className={cn(
                'h-full w-full object-cover object-top transition-[transform,opacity] duration-500 ease-out group-hover:scale-[1.02]',
                loaded ? 'opacity-100' : 'opacity-0',
              )}
            />

            {/* Phone mockup with the mobile screenshot — proof of responsive work */}
            {showPhone && (
              <div
                className="absolute bottom-3 right-3 w-[22%] min-w-[78px] max-w-[120px]"
                style={{ aspectRatio: '9 / 19' }}
                aria-hidden="true"
              >
                <div className="relative h-full w-full rounded-[0.9rem] border-[3px] border-ink-900 bg-ink-900 shadow-[0_12px_30px_-10px_rgba(0,0,0,0.55)]">
                  {/* Notch */}
                  <span className="absolute left-1/2 top-1 z-10 h-1 w-7 -translate-x-1/2 rounded-full bg-white/25" />
                  <div className="h-full w-full overflow-hidden rounded-[0.65rem] bg-bg">
                    <img
                      src={mobileSrc}
                      alt={`${title} — mobile`}
                      loading="lazy"
                      decoding="async"
                      onLoad={() => setMobileLoaded(true)}
                      onError={() => setMobileErrored(true)}
                      className={cn(
                        'h-full w-full object-cover object-top transition-opacity duration-500',
                        mobileLoaded ? 'opacity-100' : 'opacity-0',
                      )}
                    />
                  </div>
                </div>
              </div>
            )}
          </>
        )}
      </div>

      {/* Open Live CTA */}
      <div className="border-t border-fg/8 bg-card/40 px-4 py-3">
        <a
          href={url}
          target="_blank"
          rel="noreferrer noopener"
          className="btn-brass w-full justify-center !py-2.5"
        >
          <ExternalLink size={14} strokeWidth={1.75} />
          <span>{'Open Live →'}</span>
        </a>
      </div>
    </motion.div>
  )
}
