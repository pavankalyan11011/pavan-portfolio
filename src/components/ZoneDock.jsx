import { nav } from '../data/site'

export default function ZoneDock() {
  return (
    <nav className="zone-dock" aria-label="World zones">
      <div className="zone-dock__inner">
        {nav.map((item, i) => (
          <a key={item.href} href={item.href} className="zone-dock__slot" title={item.label}>
            <span className="zone-dock__key">{i + 1}</span>
            <span className="zone-dock__icon" aria-hidden="true">{item.icon}</span>
            <span className="zone-dock__label">{item.label}</span>
          </a>
        ))}
      </div>
    </nav>
  )
}
