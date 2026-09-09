import PlayerProfile from '../components/profile/PlayerProfile'
import PlayerStats from '../components/profile/PlayerStats'
import PersonalTerminal from '../components/profile/PersonalTerminal'
import NowBuilding from '../components/profile/NowBuilding'
import { StickyNotesRow } from '../components/profile/StickyNote'
import { useSystem } from '../context/SystemContext'

export default function Home() {
  const { debugMode } = useSystem()

  return (
    <div className="space-y-8 md:space-y-10">
      {debugMode && <p className="font-mono text-[10px] text-warning">&lt;Home /&gt;</p>}
      <PlayerProfile />

      <StickyNotesRow />

      <div className="grid gap-6 lg:grid-cols-5 lg:gap-8">
        <div className="lg:col-span-3">
          <PlayerStats />
        </div>
        <div className="space-y-6 lg:col-span-2">
          <NowBuilding />
          <PersonalTerminal />
        </div>
      </div>
    </div>
  )
}
