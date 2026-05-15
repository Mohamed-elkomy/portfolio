import { AnimatePresence, motion } from 'framer-motion'
import { ShieldAlert } from 'lucide-react'

/**
 * Friendly toast that appears when a blocked content protection action is attempted.
 */
export default function ProtectionToast({ toast, onDismiss }) {
  return (
    <AnimatePresence>
      {toast && (
        <motion.div
          key={toast.id}
          initial={{ opacity: 0, y: -12, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -12, scale: 0.95 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="fixed top-4 left-1/2 z-[100] -translate-x-1/2 pointer-events-none"
          role="status"
          aria-live="polite"
        >
          <div className="pointer-events-auto inline-flex items-center gap-2.5 rounded-full border border-brass-500/40 bg-ink-800/95 px-4 py-2 shadow-2xl backdrop-blur-md">
            <ShieldAlert size={14} strokeWidth={1.75} className="text-brass-400" />
            <span className="text-xs font-medium text-cream-200">{toast.message}</span>
            <button
              type="button"
              onClick={onDismiss}
              className="ms-1 text-cream-200/50 hover:text-cream-200"
              aria-label="Dismiss"
            >
              ×
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
