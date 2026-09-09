import Badge from '../common/Badge'

export default function ExperienceDetails({ region }) {
  if (!region) {
    return (
      <div className="panel p-4 text-sm text-muted">
        Select a region on the map to view role, responsibilities, technologies, and achievements.
      </div>
    )
  }

  return (
    <div className="panel scrollbar-thin max-h-[60dvh] overflow-y-auto p-4 md:max-h-none">
      <p className="font-pixel text-[10px] text-violet">{region.subtitle}</p>
      <h3 className="font-display mt-1 text-lg font-semibold text-white">{region.label}</h3>
      <p className="mt-1 text-sm font-medium text-cyan">{region.role}</p>
      <p className="text-xs text-muted">{region.period} · {region.company}</p>
      <p className="text-xs text-muted">{region.location}</p>

      <div className="mt-4">
        <p className="font-pixel mb-2 text-[9px] text-cyan">RESPONSIBILITIES</p>
        <ul className="space-y-1.5 text-sm text-muted">
          {region.responsibilities.map((r) => (
            <li key={r}>• {r}</li>
          ))}
        </ul>
      </div>

      <div className="mt-4">
        <p className="font-pixel mb-2 text-[9px] text-cyan">TECHNOLOGIES</p>
        <div className="flex flex-wrap gap-1">
          {region.technologies.map((t) => (
            <Badge key={t} variant="cyan">{t}</Badge>
          ))}
        </div>
      </div>

      <div className="mt-4">
        <p className="font-pixel mb-2 text-[9px] text-cyan">KEY WORK</p>
        <ul className="space-y-1 text-sm text-muted">
          {region.keyWork.map((k) => (
            <li key={k}>• {k}</li>
          ))}
        </ul>
      </div>

      <div className="mt-4">
        <p className="font-pixel mb-2 text-[9px] text-success">ACHIEVEMENTS</p>
        <ul className="space-y-1 text-sm text-muted">
          {region.achievements.map((a) => (
            <li key={a}>• {a}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}
