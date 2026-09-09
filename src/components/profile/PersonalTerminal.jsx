import { profile } from '../../data/profile'
import { useSystem } from '../../context/SystemContext'

export default function PersonalTerminal() {
  const { debugMode } = useSystem()

  return (
    <div className="panel-cut overflow-hidden font-mono text-[11px] md:text-xs">
      <div className="flex items-center gap-2 border-b border-border bg-bg-secondary px-3 py-2">
        <span className="h-2 w-2 rounded-full bg-[#ff5f57]" />
        <span className="h-2 w-2 rounded-full bg-[#febc2e]" />
        <span className="h-2 w-2 rounded-full bg-[#28c840]" />
        <span className="ml-1 truncate text-muted">{profile.terminal.cwd}</span>
      </div>
      <div className="space-y-0.5 p-3 leading-relaxed">
        {profile.terminal.lines.map((line, i) => (
          <p key={i} className={line.type === 'prompt' ? 'text-cyan' : 'text-muted'}>
            {line.type === 'prompt' ? '$ ' : '  '}
            {line.text}
          </p>
        ))}
        <p className="text-cyan">
          $ <span className="cursor-blink inline-block h-3 w-1.5 bg-cyan align-middle" />
        </p>
      </div>
      {debugMode && (
        <p className="border-t border-border px-3 py-1 text-[9px] text-warning">&lt;PersonalTerminal /&gt;</p>
      )}
    </div>
  )
}
