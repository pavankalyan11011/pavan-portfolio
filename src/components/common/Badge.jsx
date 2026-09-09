export default function Badge({ children, variant = 'default', className = '' }) {
  const styles = {
    default: 'bg-bg-secondary text-muted border-border',
    cyan: 'bg-cyan/20 text-cyan border-cyan/50 shadow-[0_0_12px_rgba(0,234,255,0.15)]',
    violet: 'bg-violet/20 text-violet border-violet/50 shadow-[0_0_12px_rgba(180,77,255,0.15)]',
    magenta: 'bg-violet/20 text-violet border-violet/50 shadow-[0_0_12px_rgba(139,92,246,0.15)]',
    success: 'bg-success/15 text-success border-success/50',
    warning: 'bg-warning/15 text-warning border-warning/50',
  }
  return (
    <span className={`inline-flex items-center rounded-md border px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide ${styles[variant]} ${className}`}>
      {children}
    </span>
  )
}
