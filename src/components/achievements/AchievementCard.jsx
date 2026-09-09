import { motion } from 'framer-motion'
import Badge from '../common/Badge'

export default function AchievementCard({ achievement, onSelect, selected }) {
  return (
    <motion.button
      type="button"
      whileHover={{ y: -2 }}
      onClick={() => onSelect(achievement)}
      className={`panel panel-hover w-full p-4 text-left ${selected ? 'border-cyan/40 ring-1 ring-cyan/30' : ''}`}
    >
      <div className="flex items-start gap-3">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-border bg-bg-secondary text-xl">
          {achievement.icon}
        </span>
        <div>
          <p className="font-pixel text-[10px] text-warning">ACHIEVEMENT</p>
          <h3 className="font-display text-sm font-semibold text-white">{achievement.title}</h3>
          <p className="mt-1 line-clamp-2 text-xs text-muted">{achievement.description}</p>
        </div>
      </div>
    </motion.button>
  )
}

export function AchievementDetailsPanel({ achievement, projectTitle }) {
  if (!achievement) {
    return (
      <div className="panel p-4 text-sm text-muted">
        Select an achievement to view evidence and related mission.
      </div>
    )
  }

  return (
    <div className="panel p-4">
      <p className="font-pixel text-[10px] text-warning">ACHIEVEMENT UNLOCKED</p>
      <div className="mt-2 flex items-center gap-3">
        <span className="text-3xl">{achievement.icon}</span>
        <h3 className="font-display text-lg font-semibold text-white">{achievement.title}</h3>
      </div>
      <p className="mt-3 text-sm text-muted">{achievement.description}</p>

      <div className="mt-4">
        <p className="font-pixel mb-1 text-[9px] text-cyan">EVIDENCE</p>
        <p className="text-sm text-muted">{achievement.evidence}</p>
      </div>

      {projectTitle && (
        <div className="mt-4">
          <p className="font-pixel mb-1 text-[9px] text-cyan">RELATED MISSION</p>
          <Badge variant="cyan">{projectTitle}</Badge>
        </div>
      )}
    </div>
  )
}
