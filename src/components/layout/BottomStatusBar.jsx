import { useEffect, useState } from 'react'
import { profile } from '../../data/profile'
import { useSystem } from '../../context/SystemContext'

export default function BottomStatusBar() {
  const { debugMode, systemLog } = useSystem()
  const [quipIndex, setQuipIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setQuipIndex((i) => (i + 1) % profile.footerQuips.length)
    }, 8000)
    return () => clearInterval(id)
  }, [])

  return (
    <footer className="shrink-0 border-t border-border bg-bg-secondary px-3 py-2 md:px-4">
      <div className="flex flex-wrap items-center justify-between gap-2 text-[10px] text-muted md:text-xs">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
          <span>{profile.footerQuips[quipIndex]}</span>
          <span className="hidden sm:inline text-border">|</span>
          <span className="hidden sm:inline font-mono">{profile.version}</span>
        </div>
        {debugMode && systemLog.length > 0 && (
          <span className="truncate font-mono text-[9px] text-warning max-w-[45%]">
            {systemLog[systemLog.length - 1]}
          </span>
        )}
      </div>
      {debugMode && (
        <div className="mt-2 hidden max-h-20 overflow-y-auto border-t border-border pt-2 md:block">
          <ul className="space-y-0.5 font-mono text-[10px] text-muted">
            {systemLog.map((entry) => (
              <li key={entry}>{entry}</li>
            ))}
          </ul>
        </div>
      )}
    </footer>
  )
}
