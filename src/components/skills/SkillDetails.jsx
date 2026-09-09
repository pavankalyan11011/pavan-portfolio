import Badge from '../common/Badge'

export default function SkillDetails({ skill }) {
  if (!skill) {
    return (
      <div className="panel p-4 text-sm text-muted">
        Select a skill node to view details, related projects, and connected technologies.
      </div>
    )
  }

  return (
    <div className="panel p-4">
      <p className="font-pixel text-[10px] text-cyan">TECHNOLOGY</p>
      <h3 className="font-display mt-1 text-lg font-semibold text-white">{skill.label}</h3>
      <Badge variant="violet" className="mt-2">{skill.category}</Badge>
      <p className="mt-3 text-sm text-muted">{skill.description}</p>

      {skill.relatedSkills?.length > 0 && (
        <div className="mt-4">
          <p className="font-pixel mb-2 text-[9px] text-muted">RELATED TECH</p>
          <div className="flex flex-wrap gap-1">
            {skill.relatedSkills.map((id) => (
              <Badge key={id} variant="cyan">{id.replace(/-/g, ' ').toUpperCase()}</Badge>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
