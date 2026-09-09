import { skillGroups } from '../data/site'

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="section__label">04 — Skills</div>
      <h2 className="section__title">Stack I work with</h2>
      <div className="skills">
        {skillGroups.map((group) => (
          <div key={group.title} className="skills__group">
            <h3>{group.title}</h3>
            <p>{group.items.join(' · ')}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
