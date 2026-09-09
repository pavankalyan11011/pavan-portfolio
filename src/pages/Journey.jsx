import WorldMap from '../components/journey/WorldMap'
import { useSystem } from '../context/SystemContext'

export default function Journey() {
  const { debugMode } = useSystem()
  return (
    <div>
      {debugMode && <p className="mb-4 font-mono text-[10px] text-warning">&lt;WorldMap /&gt;</p>}
      <WorldMap />
    </div>
  )
}
