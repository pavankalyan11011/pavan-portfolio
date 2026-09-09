import { useState } from 'react'
import { motion } from 'framer-motion'
import { journeyRegions } from '../../data/experience'
import ExperienceDetails from './ExperienceDetails'
import SectionHeader from '../common/SectionHeader'
import { useSystem } from '../../context/SystemContext'

export default function WorldMap() {
  const [selected, setSelected] = useState(null)
  const { playSound } = useSystem()

  return (
    <div>
      <SectionHeader
        label="how i got here"
        title="Path"
        description="Hyderabad → Websoft training → Amealio intern. Click a pin on the map."
      />

      <div className="grid gap-6 lg:grid-cols-[1fr_340px]">
        <div className="panel relative aspect-[4/3] min-h-[280px] overflow-hidden bg-bg-secondary sm:min-h-[360px]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(34,211,238,0.06),transparent_50%),radial-gradient(circle_at_70%_60%,rgba(139,92,246,0.06),transparent_50%)]" />
          <svg className="absolute inset-0 h-full w-full opacity-20" aria-hidden="true">
            <pattern id="grid" width="32" height="32" patternUnits="userSpaceOnUse">
              <path d="M32 0H0V32" fill="none" stroke="#1e2935" strokeWidth="0.5" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>

          {/* connection lines */}
          <svg className="absolute inset-0 h-full w-full" aria-hidden="true">
            {/* Education (Developer Hub) -> Websoft training (Backend City) -> Amealio intern (Frontend District) */}
            <line x1="50%" y1="78%" x2="22%" y2="42%" stroke="#1e2935" strokeWidth="2" strokeDasharray="4 4" />
            <line x1="22%" y1="42%" x2="78%" y2="38%" stroke="#1e2935" strokeWidth="2" strokeDasharray="4 4" />
          </svg>

          {journeyRegions.map((region) => (
            <motion.button
              key={region.id}
              type="button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => { setSelected(region); playSound('select') }}
              className={`absolute flex min-h-[44px] min-w-[44px] -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1 rounded-lg border px-2 py-2 transition-all ${
                selected?.id === region.id
                  ? 'border-cyan bg-gradient-to-b from-cyan/25 to-violet/15 text-cyan shadow-[0_0_20px_rgba(0,234,255,0.3)]'
                  : 'border-border bg-bg-card text-white hover:border-violet/50 hover:shadow-[0_0_16px_rgba(139,92,246,0.22)]'
              }`}
              style={{ left: `${region.x}%`, top: `${region.y}%` }}
              aria-label={`${region.label} — ${region.subtitle}`}
            >
              <span className="h-3 w-3 rounded-full bg-cyan shadow-[0_0_10px_rgba(0,234,255,0.8)]" />
              <span className="max-w-[88px] text-center text-[10px] font-medium leading-tight">{region.label}</span>
            </motion.button>
          ))}
        </div>

        <ExperienceDetails region={selected} />
      </div>
    </div>
  )
}
