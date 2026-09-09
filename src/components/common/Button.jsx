import { motion } from 'framer-motion'

const sizes = {
  sm: 'px-3 py-1.5 text-xs min-h-[44px]',
  md: 'px-4 py-2.5 text-sm min-h-[44px]',
  lg: 'px-6 py-3 text-sm min-h-[44px]',
}

const variants = {
  primary:
    'bg-cyan/15 text-cyan border-cyan/50 hover:bg-cyan/25 hover:border-cyan hover:shadow-[0_0_20px_rgba(0,234,255,0.25)]',
  solid:
    'bg-gradient-to-r from-cyan to-cyan-dim text-bg-primary border-cyan font-semibold hover:shadow-[0_0_28px_rgba(0,234,255,0.45)]',
  ghost:
    'bg-transparent text-muted border-border hover:text-white hover:border-violet/40 hover:bg-violet/5',
  danger:
    'bg-violet/10 text-violet border-violet/40 hover:bg-violet/20',
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  ...props
}) {
  return (
    <motion.button
      type="button"
      whileTap={{ scale: 0.98 }}
      className={`inline-flex items-center justify-center gap-2 rounded-lg border font-medium transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan ${sizes[size]} ${variants[variant]} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </motion.button>
  )
}
