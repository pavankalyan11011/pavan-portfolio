import { useState } from 'react'
import { achievements } from '../data/achievements'
import { projects } from '../data/projects'
import SectionHeader from '../components/common/SectionHeader'
import AchievementCard, { AchievementDetailsPanel } from '../components/achievements/AchievementCard'
import Modal from '../components/common/Modal'
import MissionDetails from '../components/missions/MissionDetails'
import Button from '../components/common/Button'
import { useSystem } from '../context/SystemContext'

export default function AchievementsPage() {
  const [selected, setSelected] = useState(achievements[0])
  const [inspectProject, setInspectProject] = useState(null)
  const { playSound, debugMode } = useSystem()

  const relatedProject = selected?.relatedProject
    ? projects.find((p) => p.id === selected.relatedProject)
    : null

  return (
    <div>
      {debugMode && <p className="mb-4 font-mono text-[10px] text-warning">&lt;AchievementCard /&gt;</p>}
      <SectionHeader
        label="real wins only"
        title="Badges"
        description="Achievements tied to actual work — not made-up XP."
      />

      <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
        <div className="grid gap-3 sm:grid-cols-2">
          {achievements.map((a) => (
            <AchievementCard
              key={a.id}
              achievement={a}
              selected={selected?.id === a.id}
              onSelect={(ach) => { setSelected(ach); playSound('unlock') }}
            />
          ))}
        </div>

        <div className="space-y-4">
          <AchievementDetailsPanel
            achievement={selected}
            projectTitle={relatedProject?.title}
          />
          {relatedProject && (
            <Button
              className="w-full"
              variant="primary"
              onClick={() => { setInspectProject(relatedProject); playSound('open') }}
            >
              INSPECT RELATED MISSION
            </Button>
          )}
        </div>
      </div>

      <Modal open={!!inspectProject} onClose={() => setInspectProject(null)} title={inspectProject?.title} wide>
        <MissionDetails project={inspectProject} />
      </Modal>
    </div>
  )
}
