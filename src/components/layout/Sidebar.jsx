import { NavLink } from 'react-router-dom'
import { useSystem } from '../../context/SystemContext'

const links = [
  { to: '/', label: 'Me', sub: 'profile', icon: '◉' },
  { to: '/missions', label: 'Builds', sub: 'missions', icon: '◆' },
  { to: '/skills', label: 'Stack', sub: 'skills', icon: '⬡' },
  { to: '/journey', label: 'Path', sub: 'journey', icon: '◎' },
  { to: '/achievements', label: 'Wins', sub: 'badges', icon: '★' },
  { to: '/contact', label: 'Ping', sub: 'contact', icon: '✉' },
]

export default function Sidebar({ mobile = false, onNavigate }) {
  const { playSound, debugMode } = useSystem()

  return (
    <aside
      className={`${mobile ? 'w-full' : 'hidden w-52 shrink-0 border-r border-border bg-bg-secondary lg:block xl:w-56'}`}
      aria-label="Navigation"
    >
      {!mobile && (
        <div className="border-b border-border px-4 py-3">
          <p className="font-hand text-lg text-amber">hey, explore →</p>
          <p className="mt-0.5 text-[11px] text-muted">everything&apos;s clickable</p>
        </div>
      )}
      <nav className={`flex ${mobile ? 'flex-row flex-wrap justify-center gap-1 p-2' : 'flex-col gap-0.5 p-3'}`}>
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            end={link.to === '/'}
            onClick={() => {
              playSound('select')
              onNavigate?.()
            }}
            className={({ isActive }) =>
              `group flex min-h-[44px] items-center gap-2.5 rounded-lg border px-3 py-2.5 transition-colors ${
                mobile ? 'flex-1 min-w-[calc(50%-4px)] justify-center sm:min-w-0 sm:flex-none' : ''
              } ${
                isActive
                  ? 'border-cyan/50 bg-gradient-to-r from-cyan/15 to-violet/10 text-white shadow-[0_0_16px_rgba(0,234,255,0.12)]'
                  : 'border-transparent text-muted hover:border-violet/30 hover:bg-bg-card hover:text-white'
              }`
            }
          >
            <span className={`text-sm ${mobile ? '' : 'opacity-70 group-hover:opacity-100'}`} aria-hidden="true">
              {link.icon}
            </span>
            <span className="flex flex-col leading-tight">
              <span className="text-sm font-medium">{link.label}</span>
              {!mobile && (
                <span className="font-pixel text-[8px] uppercase tracking-wider text-muted/70">{link.sub}</span>
              )}
            </span>
          </NavLink>
        ))}
      </nav>
      {debugMode && !mobile && (
        <div className="mt-4 border-t border-border p-3 font-mono text-[10px] text-muted">
          <p className="text-warning">debug</p>
          <p className="mt-1">&lt;Sidebar /&gt;</p>
        </div>
      )}
    </aside>
  )
}

export { links as navLinks }
