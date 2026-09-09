import Badge from '../common/Badge'

export default function SkillNode({ node, selected, highlighted, onSelect }) {
  return (
    <button
      type="button"
      onClick={onSelect}
            className={`mb-1 flex min-h-[44px] w-full items-center gap-2 rounded-lg border px-3 py-2 text-left transition-all duration-200 ${
        selected
          ? 'border-cyan bg-gradient-to-r from-cyan/20 to-violet/10 text-cyan shadow-[0_0_16px_rgba(0,234,255,0.2)]'
          : highlighted
            ? 'border-violet/40 bg-violet/10 text-white'
            : 'border-border bg-bg-secondary text-muted hover:border-violet/40 hover:text-white'
      }`}
    >
      <span className="h-2 w-2 shrink-0 rounded-full bg-current opacity-60" />
      <span className="text-sm font-medium">{node.label}</span>
      {node.category && (
        <Badge className="ml-auto !text-[8px]">{node.category}</Badge>
      )}
    </button>
  )
}
