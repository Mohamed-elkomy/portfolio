import { useEffect, useState, useCallback } from 'react'

/**
 * Lightweight, non-intrusive page guardrail.
 *
 * Right-click, image drag, and printing are all left alone — they're normal
 * browser behavior and blocking them only annoys recruiters and developers.
 * The only thing we intercept is Ctrl/Cmd+S (save page), where we nudge the
 * visitor toward the live demos instead.
 *
 * Returns { toast, dismiss } so the caller can render a toast UI.
 */
export function useContentProtection() {
  const [toast, setToast] = useState(null) // { message, id } | null

  const flash = useCallback((message) => {
    setToast({ message, id: Date.now() })
  }, [])

  const dismiss = useCallback(() => setToast(null), [])

  // Auto-dismiss after 2.5s
  useEffect(() => {
    if (!toast) return
    const tid = setTimeout(() => setToast(null), 2500)
    return () => clearTimeout(tid)
  }, [toast])

  useEffect(() => {
    if (typeof window === 'undefined') return

    // Ctrl/Cmd+S — page save. Redirect intent toward the live demos.
    const onKeyDown = (e) => {
      const ctrl = e.ctrlKey || e.metaKey
      const key = e.key?.toLowerCase()

      if (ctrl && key === 's') {
        e.preventDefault()
        flash('Tip — view the live demos for the best experience')
      }
    }

    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [flash])

  return { toast, dismiss }
}
