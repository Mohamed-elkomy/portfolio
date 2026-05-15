import { useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, RotateCw, Loader2 } from 'lucide-react'

import { cn } from '@/lib/utils'

/**
 * Renders the live project inside a desktop browser–style frame with traffic-light dots
 * and a URL bar. Includes a reload button.
 *
 * Note: If a target site sets X-Frame-Options: DENY, the iframe will be blocked by the browser.
 * In that case the user must allow framing on their deployment or use a fallback screenshot.
 */
export default function ProjectPreview({ url, title = 'Project preview', className }) {
  const [loaded, setLoaded] = useState(false)
  const [reloadKey, setReloadKey] = useState(0)

  // Display the URL nicely (no protocol)
  const displayUrl = url.replace(/^https?:\/\//, '')

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
      data-protected="true"
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

        {/* Reload */}
        <button
          type="button"
          onClick={() => {
            setLoaded(false)
            setReloadKey((k) => k + 1)
          }}
          className="inline-flex h-7 w-7 items-center justify-center rounded-md text-muted hover:bg-fg/4 hover:text-fg"
          aria-label="Reload preview"
          title="Reload"
        >
          <RotateCw size={12} strokeWidth={1.75} />
        </button>
      </div>

      {/* Iframe container with loading state */}
      <div className="relative bg-bg" style={{ aspectRatio: '16 / 10' }}>
        {!loaded && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-card/40">
            <Loader2 size={20} strokeWidth={1.5} className="animate-spin text-brass-500" />
            <p className="text-xs text-muted">Loading preview…</p>
          </div>
        )}

        <iframe
          key={reloadKey}
          src={url}
          title={title}
          loading="lazy"
          onLoad={() => setLoaded(true)}
          className="h-full w-full border-0"
          // Sandbox lets us embed safely; allows scripts but blocks top-level navigation
          sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      {/* Footer note */}
      <div className="flex items-center justify-between gap-3 border-t border-fg/8 bg-card/40 px-4 py-2.5 text-xs">
        <p className="text-muted">
          Live preview — interactions take place inside the frame.
        </p>
        <a
          href={url}
          target="_blank"
          rel="noreferrer noopener"
          className="inline-flex items-center gap-1.5 text-muted/70 hover:text-brass-600 dark:hover:text-brass-400"
        >
          <ExternalLink size={11} strokeWidth={1.75} />
          <span>new tab</span>
        </a>
      </div>
    </motion.div>
  )
}
