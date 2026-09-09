import { NavLink } from 'react-router-dom'
import { navLinks } from './Sidebar'
import { useSystem } from '../../context/SystemContext'

export default function MobileDock() {
  const { playSound } = useSystem()

  return (
    <nav
      className="flex shrink-0 items-stretch justify-around border-t border-border bg-bg-secondary px-1 py-1 lg:hidden"
      aria-label="Quick navigation"
    >
      {navLinks.map((link) => (
        <NavLink
          key={link.to}
          to={link.to}
          end={link.to === '/'}
          onClick={() => playSound('select')}
          className={({ isActive }) =>
            `flex min-h-[44px] min-w-[44px] flex-1 flex-col items-center justify-center gap-0.5 rounded-lg text-[9px] transition-colors ${
              isActive ? 'text-cyan' : 'text-muted'
            }`
          }
        >
          <span className="text-sm" aria-hidden="true">{link.icon}</span>
          <span className="font-pixel truncate px-0.5">{link.label.split(' ')[0]}</span>
        </NavLink>
      ))}
    </nav>
  )
}
