import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useSystem } from '../../context/SystemContext'

export default function Modal({ open, onClose, title, children, wide = false }) {
  const { playSound } = useSystem()

  useEffect(() => {
    if (!open) return
    playSound('open')
    const onKey = (e) => e.key === 'Escape' && onClose()
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [open, onClose, playSound])

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-end justify-center p-0 sm:items-center sm:p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="dialog"
          aria-modal="true"
          aria-label={title}
        >
          <button
            type="button"
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            aria-label="Close dialog"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 24 }}
            transition={{ duration: 0.25 }}
            className={`relative z-10 flex max-h-[90dvh] w-full flex-col overflow-hidden border border-border bg-bg-card shadow-2xl sm:rounded-xl ${wide ? 'max-w-4xl' : 'max-w-2xl'}`}
          >
            <div className="flex items-center justify-between border-b border-border px-4 py-3 md:px-6">
              <h2 className="font-display text-lg font-semibold text-white">{title}</h2>
              <button
                type="button"
                onClick={onClose}
                className="flex h-11 w-11 items-center justify-center rounded-lg border border-border text-muted transition hover:border-cyan/40 hover:text-white"
                aria-label="Close"
              >
                ✕
              </button>
            </div>
            <div className="scrollbar-thin overflow-y-auto px-4 py-4 md:px-6 md:py-5">{children}</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
