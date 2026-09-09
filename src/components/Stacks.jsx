import { stacks } from '../data/site'

const typeColors = {
  fire: { bg: '#F08030', label: 'FIRE' },
  electric: { bg: '#F8D030', label: 'ELECTRIC' },
}

export default function Stacks() {
  return (
    <section className="section" id="stacks">
      <div className="section__head">
        <p className="section__index">02</p>
        <div>
          <h2>Dual Type Loadout</h2>
          <p className="section__lede">
            Two powerful type combinations — pick your stack, I ship both.
          </p>
        </div>
      </div>
      <div className="stack-grid">
        {stacks.map((stack) => (
          <article className={`stack-card stack-card--${stack.accent} rbx-panel`} key={stack.id}>
            <div className="stack-card__top">
              <p className="stack-card__label">{stack.label}</p>
              <span
                className="type-badge"
                style={{ background: typeColors[stack.accent]?.bg || '#888' }}
              >
                {stack.type}
              </span>
            </div>
            <h3>{stack.title}</h3>
            <p>{stack.blurb}</p>
            <ul>
              {stack.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}
