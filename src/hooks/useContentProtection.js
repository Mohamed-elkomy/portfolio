import { useEffect, useState, useCallback } from 'react'

/**
 * Apply content protection to the entire app:
 *  - Block right-click context menu on images and protected zones
 *  - Block common save/print/copy shortcuts
 *  - Block image dragging
 *  - Show a friendly toast when a blocked action is attempted
 *
 * Returns { showToast, dismissToast, toastMessage } so the caller can render a toast UI.
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

    // -----------------------------------------------------------------
    // Right-click — allow on form inputs and on elements that opt-in
    // -----------------------------------------------------------------
    const onContextMenu = (e) => {
      const tag = e.target?.tagName
      const isProtectedZone = e.target?.closest?.('[data-protected="true"]') ||
                              e.target?.closest?.('img, picture, video')

      // Always allow on inputs/textareas/contenteditables
      if (tag === 'INPUT' || tag === 'TEXTAREA' || e.target?.isContentEditable) {
        return
      }

      // Block on images and protected zones
      if (isProtectedZone) {
        e.preventDefault()
        flash('Content protected · © Mohamed Elkomy')
      }
    }

    // -----------------------------------------------------------------
    // Drag — block image dragging globally
    // -----------------------------------------------------------------
    const onDragStart = (e) => {
      if (e.target?.tagName === 'IMG' || e.target?.closest?.('img, picture')) {
        e.preventDefault()
        flash('Content protected · © Mohamed Elkomy')
      }
    }

    // -----------------------------------------------------------------
    // Keyboard — block Ctrl+S / Ctrl+P / Ctrl+Shift+S
    //   (Do NOT block Ctrl+C — copying text is legitimate.
    //    Do NOT block F12/DevTools — these are intrusive to devs and easy to bypass.)
    // -----------------------------------------------------------------
    const onKeyDown = (e) => {
      const ctrl = e.ctrlKey || e.metaKey
      const key = e.key?.toLowerCase()

      // Ctrl+S — Save page
      if (ctrl && key === 's') {
        e.preventDefault()
        flash('This content is protected — saving disabled.')
        return
      }
      // Ctrl+P — Print
      if (ctrl && key === 'p') {
        e.preventDefault()
        flash('Printing disabled · © Mohamed Elkomy')
        return
      }
      // Ctrl+Shift+S — Take screenshot in some browsers
      if (ctrl && e.shiftKey && key === 's') {
        e.preventDefault()
        flash('Screenshot tools blocked')
        return
      }
    }

    document.addEventListener('contextmenu', onContextMenu)
    document.addEventListener('dragstart', onDragStart)
    document.addEventListener('keydown', onKeyDown)

    return () => {
      document.removeEventListener('contextmenu', onContextMenu)
      document.removeEventListener('dragstart', onDragStart)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [flash])

  return { toast, dismiss }
}
