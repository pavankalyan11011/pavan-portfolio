import { useMemo, useState } from 'react'
import { projects } from '../data/projects'
import SectionHeader from '../components/common/SectionHeader'
import MissionCard from '../components/missions/MissionCard'
import Modal from '../components/common/Modal'
import MissionDetails from '../components/missions/MissionDetails'
import Button from '../components/common/Button'
import { useSystem } from '../context/SystemContext'

const filters = ['all', 'active', 'completed']

export default function Missions() {
  const [filter, setFilter] = useState('all')
  const [selected, setSelected] = useState(null)
  const { playSound, debugMode } = useSystem()

  const filtered = useMemo(() => {
    if (filter === 'all') return projects
    return projects.filter((p) => p.status === filter)
  }, [filter])

  return (
    <div>
      {debugMode && <p className="mb-4 font-mono text-[10px] text-warning">&lt;MissionGrid /&gt;</p>}
      <SectionHeader
        label="things i've shipped"
        title="Builds"
        description="Real projects — Amealio production work, Spring Boot apps, and side builds. No filler repos."
      />

      <div className="mb-6 flex flex-wrap gap-2">
        {filters.map((f) => (
          <Button
            key={f}
            variant={filter === f ? 'solid' : 'ghost'}
            size="sm"
            onClick={() => { setFilter(f); playSound('click') }}
          >
            {f.toUpperCase()}
          </Button>
        ))}
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {filtered.map((project) => (
          <MissionCard
            key={project.id}
            project={project}
            onInspect={(p) => { setSelected(p); playSound('open') }}
          />
        ))}
      </div>

      <Modal open={!!selected} onClose={() => setSelected(null)} title={selected?.title || 'Mission'} wide>
        <MissionDetails project={selected} />
      </Modal>
    </div>
  )
}
