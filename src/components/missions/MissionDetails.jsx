import Badge from '../common/Badge'
import Button from '../common/Button'

export default function MissionDetails({ project }) {
  if (!project) return null

  const sections = [
    { label: 'OBJECTIVE', content: project.objective },
    { label: 'ARCHITECTURE', content: project.architecture },
    { label: 'RESULT', content: project.result },
  ]

  return (
    <div className="space-y-6">
      <div>
        <p className="font-pixel text-[10px] text-muted">MISSION {project.number}</p>
        <h3 className="font-display text-xl font-semibold text-white">{project.title}</h3>
        <Badge variant={project.status === 'active' ? 'cyan' : 'success'} className="mt-2">
          {project.status.toUpperCase()}
        </Badge>
      </div>

      {sections.map((s) => (
        <div key={s.label}>
          <p className="font-pixel mb-2 text-[10px] text-cyan">{s.label}</p>
          <p className="text-sm text-muted">{s.content}</p>
        </div>
      ))}

      <div>
        <p className="font-pixel mb-2 text-[10px] text-cyan">TECH LOADOUT</p>
        <div className="flex flex-wrap gap-1.5">
          {project.technologies.map((t) => (
            <Badge key={t} variant="cyan">{t}</Badge>
          ))}
        </div>
      </div>

      <div>
        <p className="font-pixel mb-2 text-[10px] text-cyan">KEY SYSTEMS</p>
        <ul className="list-inside list-disc space-y-1 text-sm text-muted">
          {project.features.map((f) => (
            <li key={f}>{f}</li>
          ))}
        </ul>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <p className="font-pixel mb-2 text-[10px] text-warning">CHALLENGES</p>
          <ul className="space-y-1 text-sm text-muted">
            {project.challenges.map((c) => (
              <li key={c}>• {c}</li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-pixel mb-2 text-[10px] text-success">SOLUTIONS</p>
          <ul className="space-y-1 text-sm text-muted">
            {project.solutions.map((s) => (
              <li key={s}>• {s}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex flex-wrap gap-3 border-t border-border pt-4">
        {project.github ? (
          <a href={project.github} target="_blank" rel="noreferrer">
            <Button variant="primary">GitHub ↗</Button>
          </a>
        ) : (
          <Button variant="ghost" disabled title="TODO: Add GitHub URL in projects.js">
            GitHub — TODO
          </Button>
        )}
        {project.liveDemo ? (
          <a href={project.liveDemo} target="_blank" rel="noreferrer">
            <Button variant="solid">Live Demo ↗</Button>
          </a>
        ) : (
          <Button variant="ghost" disabled title="TODO: Add live demo URL">
            Live Demo — TODO
          </Button>
        )}
      </div>
    </div>
  )
}
