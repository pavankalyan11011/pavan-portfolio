import SkillTreeView from '../components/skills/SkillTree'
import { useSystem } from '../context/SystemContext'

export default function Skills() {
  const { debugMode } = useSystem()
  return (
    <div>
      {debugMode && <p className="mb-4 font-mono text-[10px] text-warning">&lt;SkillTree /&gt;</p>}
      <SkillTreeView />
    </div>
  )
}
