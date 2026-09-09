import { useState } from 'react'
import { skillTree, skillMap } from '../../data/skills'
import { projects } from '../../data/projects'
import SkillNode from './SkillNode'
import SkillDetails from './SkillDetails'
import Modal from '../common/Modal'
import MissionDetails from '../missions/MissionDetails'
import SectionHeader from '../common/SectionHeader'
import { useSystem } from '../../context/SystemContext'

function renderBranch(node, depth = 0, selectedId, onSelect, highlightSet) {
  const isBranch = node.children?.length > 0
  const info = skillMap[node.id]
  const isHighlighted = highlightSet.has(node.id)

  return (
    <li key={node.id || node.label} className={depth === 0 ? '' : 'ml-4 border-l border-border pl-4'}>
      {node.id ? (
        <SkillNode
          node={info || node}
          selected={selectedId === node.id}
          highlighted={isHighlighted}
          onSelect={() => onSelect(node.id)}
        />
      ) : (
        <p className="font-pixel mb-2 text-[10px] text-violet">{node.label}</p>
      )}
      {isBranch && (
        <ul className="mt-2 space-y-2">
          {node.children.map((child) => renderBranch(child, depth + 1, selectedId, onSelect, highlightSet))}
        </ul>
      )}
    </li>
  )
}

export default function SkillTreeView() {
  const [selectedId, setSelectedId] = useState(null)
  const [inspectProject, setInspectProject] = useState(null)
  const { playSound, log } = useSystem()

  const selected = selectedId ? skillMap[selectedId] : null

  const highlightSet = new Set()
  if (selected) {
    highlightSet.add(selected.id)
    selected.relatedSkills?.forEach((id) => highlightSet.add(id))
    selected.relatedProjects?.forEach((id) => highlightSet.add(`proj-${id}`))
  }

  const relatedProjects = selected
    ? projects.filter((p) => selected.relatedProjects?.includes(p.id))
    : []

  function handleSelect(id) {
    setSelectedId(id)
    playSound('select')
    log(`Skill node selected: ${id}`)
  }

  return (
    <div>
      <SectionHeader
        label="what i actually use"
        title="Stack"
        description="Click a node — see how technologies connect to real projects. No buzzword bingo."
      />

      <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
        <div className="panel scrollbar-thin max-h-[60dvh] overflow-y-auto p-4 md:max-h-none md:p-5">
          <ul>{renderBranch(skillTree, 0, selectedId, handleSelect, highlightSet)}</ul>
        </div>

        <div className="space-y-4">
          <SkillDetails skill={selected} />

          {relatedProjects.length > 0 && (
            <div>
              <p className="font-pixel mb-3 text-[10px] text-cyan">RELATED MISSIONS</p>
              <div className="space-y-3">
                {relatedProjects.map((p) => (
                  <button
                    key={p.id}
                    type="button"
                    className="panel panel-hover w-full p-3 text-left"
                    onClick={() => { setInspectProject(p); playSound('open') }}
                  >
                    <p className="font-pixel text-[9px] text-muted">MISSION {p.number}</p>
                    <p className="text-sm font-medium text-white">{p.title}</p>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <Modal
        open={!!inspectProject}
        onClose={() => setInspectProject(null)}
        title={inspectProject?.title || 'Mission'}
        wide
      >
        <MissionDetails project={inspectProject} />
      </Modal>
    </div>
  )
}
