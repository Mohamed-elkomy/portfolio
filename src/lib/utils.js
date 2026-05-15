import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Conditionally combine class names and resolve Tailwind conflicts.
 * @example cn('px-2 py-1', condition && 'px-4') -> 'py-1 px-4'
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

/**
 * Smoothly scroll an in-page anchor (#section) into view.
 */
export function scrollToAnchor(id, behavior = 'smooth') {
  if (typeof window === 'undefined') return
  const el = document.getElementById(id.replace(/^#/, ''))
  if (el) el.scrollIntoView({ behavior, block: 'start' })
}

/**
 * Format a phone number to international display: +20 127 278 2474.
 */
export function formatPhone(value) {
  const digits = String(value).replace(/\D/g, '')
  if (digits.startsWith('20')) {
    return `+${digits.slice(0, 2)} ${digits.slice(2, 5)} ${digits.slice(5, 8)} ${digits.slice(8)}`
  }
  return value
}
