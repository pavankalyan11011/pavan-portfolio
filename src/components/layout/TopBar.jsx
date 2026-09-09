import { profile } from '../../data/profile'
import Badge from '../common/Badge'
import { useSystem } from '../../context/SystemContext'

export default function TopBar({ onMenuToggle }) {
  const { soundOn, toggleSound, toggleDebug, debugMode, developerMode, playSound } = useSystem()

  return (
    <header className="flex h-14 shrink-0 items-center justify-between gap-3 border-b border-border bg-bg-secondary/95 px-3 backdrop-blur-sm md:px-4">
      <div className="flex min-w-0 items-center gap-3">
        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-lg border border-border text-muted lg:hidden"
          onClick={onMenuToggle}
          aria-label="Toggle navigation"
        >
          ☰
        </button>
        <div className="min-w-0">
          <p className="font-display truncate text-sm font-semibold md:text-base">
            <span className="text-white">{profile.systemName}</span>
            <span className="text-muted/60"> / portfolio</span>
          </p>
          <div className="flex items-center gap-2">
            <Badge variant="success" className="!text-[9px] !normal-case !tracking-normal">
              <span className="mr-1 inline-block h-1.5 w-1.5 rounded-full bg-success" />
              {profile.location} · live
            </Badge>
            {developerMode && (
              <Badge variant="warning" className="!text-[9px]">dev mode</Badge>
            )}
          </div>
        </div>
      </div>

      <div className="flex shrink-0 items-center gap-2">
        <button
          type="button"
          onClick={() => { toggleSound(); playSound('click') }}
          className="hidden min-h-[44px] rounded-lg border border-border px-3 text-xs text-muted transition hover:text-white sm:inline-flex sm:items-center"
          aria-pressed={soundOn}
        >
          {soundOn ? '🔊' : '🔇'}
        </button>
        <button
          type="button"
          onClick={toggleDebug}
          className={`hidden min-h-[44px] rounded-lg border px-3 text-xs transition sm:inline-flex sm:items-center ${debugMode ? 'border-warning/40 text-warning' : 'border-border text-muted hover:text-white'}`}
          aria-pressed={debugMode}
          title="Debug mode"
        >
          dbg
        </button>
        <a
          href={profile.resume}
          download
          onClick={() => playSound('click')}
          className="inline-flex min-h-[44px] items-center rounded-lg border border-amber/60 bg-gradient-to-r from-amber/25 to-orange/20 px-3 text-xs font-bold text-amber transition hover:shadow-[0_0_20px_rgba(255,204,0,0.35)]"
        >
          Resume ↓
        </a>
      </div>
    </header>
  )
}
