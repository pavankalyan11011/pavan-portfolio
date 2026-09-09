import About from '../About'
import Stacks from '../Stacks'
import Skills from '../Skills'
import Experience from '../Experience'
import Work from '../Work'
import Contact from '../Contact'
import { worldZones } from '../../data/worldZones'

const SECTIONS = {
  about: About,
  stacks: Stacks,
  skills: Skills,
  experience: Experience,
  work: Work,
  contact: Contact,
}

export default function SectionPanel({ sectionId, onClose }) {
  const zone = worldZones.find((z) => z.id === sectionId)
  const Section = SECTIONS[sectionId]
  if (!Section || !zone) return null

  return (
    <div className="section-overlay" role="dialog" aria-modal="true" aria-label={zone.label}>
      <div className="section-panel">
        <header className="section-panel__head">
          <div>
            <span className="section-panel__badge">{zone.pokemon.emoji} CAUGHT</span>
            <h2>{zone.label}</h2>
            <p>{zone.pokemon.name} · {zone.pokemon.type} type</p>
          </div>
          <button type="button" className="section-panel__close" onClick={onClose} aria-label="Close">
            ✕
          </button>
        </header>
        <div className="section-panel__body">
          <Section embedded />
        </div>
      </div>
    </div>
  )
}
