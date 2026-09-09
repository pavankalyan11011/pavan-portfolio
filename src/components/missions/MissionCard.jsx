import { motion } from 'framer-motion'
import Badge from '../common/Badge'
import Button from '../common/Button'

const statusVariant = {
  active: 'cyan',
  completed: 'success',
}

export default function MissionCard({ project, onInspect, highlighted }) {
  return (
    <motion.article
      layout
      whileHover={{ y: -2 }}
      className={`panel panel-hover flex flex-col overflow-hidden ${highlighted ? 'ring-1 ring-cyan/50' : ''}`}
    >
      <div className="relative h-32 bg-bg-secondary">
        {project.image ? (
          <img src={project.image} alt="" className="h-full w-full object-cover" loading="lazy" />
        ) : (
          <div className="flex h-full items-center justify-center bg-gradient-to-br from-bg-secondary to-bg-card">
            <span className="font-display text-4xl font-bold text-border">M{project.number}</span>
          </div>
        )}
        <div className="absolute left-3 top-3">
          <Badge variant={statusVariant[project.status] || 'default'}>
            {project.status.toUpperCase()}
          </Badge>
        </div>
      </div>
      <div className="flex flex-1 flex-col p-4">
        <p className="font-mono text-[10px] text-muted/80">#{project.number}</p>
        <h3 className="font-display mt-1 text-base font-semibold text-white">{project.title}</h3>
        <p className="mt-2 line-clamp-2 flex-1 text-xs text-muted">{project.description}</p>
        <div className="mt-3 flex flex-wrap gap-1">
          {project.technologies.slice(0, 4).map((t) => (
            <Badge key={t} className="!text-[9px]">{t}</Badge>
          ))}
        </div>
        <Button className="mt-4 w-full" variant="primary" onClick={() => onInspect(project)}>
          Open brief →
        </Button>
      </div>
    </motion.article>
  )
}
