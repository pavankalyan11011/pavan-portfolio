import { useCallback, useEffect, useRef, useState } from 'react'
import { INTERACT_RADIUS, MAP, PLAYER_SPEED, worldZones } from '../data/worldZones'

const STORAGE_KEY = 'pkv-caught-zones'

export function loadCaught() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : []
  } catch {
    return []
  }
}

function saveCaught(ids) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(ids))
}

export default function useGameState() {
  const [player, setPlayer] = useState({ x: MAP.width / 2, y: MAP.height / 2 })
  const [facing, setFacing] = useState('down')
  const [caught, setCaught] = useState(loadCaught)
  const [nearZone, setNearZone] = useState(null)
  const [encounter, setEncounter] = useState(null)
  const [openSection, setOpenSection] = useState(null)
  const [showIntro, setShowIntro] = useState(true)

  const keys = useRef(new Set())
  const stateRef = useRef({ nearZone: null, caught: [], encounter: null, openSection: null })
  stateRef.current = { nearZone, caught, encounter, openSection }

  const triggerInteract = useCallback(() => {
    const { nearZone: zone, caught: c, encounter: enc, openSection: open } = stateRef.current
    if (enc || open) return
    if (!zone) return
    if (c.includes(zone.id)) {
      setOpenSection(zone.id)
      return
    }
    setEncounter(zone)
  }, [])

  useEffect(() => {
    const onKeyDown = (e) => {
      if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', ' '].includes(e.key)) {
        e.preventDefault()
      }
      keys.current.add(e.key)
      if (e.key === ' ' || e.key === 'Enter') triggerInteract()
      if (e.key === 'Escape') {
        setOpenSection(null)
        setEncounter(null)
      }
    }
    const onKeyUp = (e) => keys.current.delete(e.key)
    window.addEventListener('keydown', onKeyDown)
    window.addEventListener('keyup', onKeyUp)
    return () => {
      window.removeEventListener('keydown', onKeyDown)
      window.removeEventListener('keyup', onKeyUp)
    }
  }, [triggerInteract])

  useEffect(() => {
    let id
    const tick = () => {
      let dx = 0
      let dy = 0
      if (keys.current.has('ArrowUp') || keys.current.has('w') || keys.current.has('W')) dy -= PLAYER_SPEED
      if (keys.current.has('ArrowDown') || keys.current.has('s') || keys.current.has('S')) dy += PLAYER_SPEED
      if (keys.current.has('ArrowLeft') || keys.current.has('a') || keys.current.has('A')) dx -= PLAYER_SPEED
      if (keys.current.has('ArrowRight') || keys.current.has('d') || keys.current.has('D')) dx += PLAYER_SPEED

      if (dx !== 0 || dy !== 0) {
        if (Math.abs(dx) >= Math.abs(dy)) setFacing(dx > 0 ? 'right' : 'left')
        else setFacing(dy > 0 ? 'down' : 'up')

        setPlayer((p) => ({
          x: Math.max(24, Math.min(MAP.width - 24, p.x + dx)),
          y: Math.max(24, Math.min(MAP.height - 24, p.y + dy)),
        }))
      }
      id = requestAnimationFrame(tick)
    }
    id = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(id)
  }, [])

  useEffect(() => {
    let closest = null
    let minDist = INTERACT_RADIUS
    for (const zone of worldZones) {
      const cx = zone.x + zone.w / 2
      const cy = zone.y + zone.h / 2
      const dist = Math.hypot(player.x - cx, player.y - cy)
      if (dist < minDist) {
        minDist = dist
        closest = zone
      }
    }
    setNearZone(closest)
  }, [player])

  function onCatchSuccess(zoneId) {
    setCaught((prev) => {
      const next = prev.includes(zoneId) ? prev : [...prev, zoneId]
      saveCaught(next)
      return next
    })
    setEncounter(null)
    setTimeout(() => setOpenSection(zoneId), 700)
  }

  function nudge(dir) {
    const keyMap = { up: 'w', down: 's', left: 'a', right: 'd' }
    const k = keyMap[dir]
    if (!k) return
    setFacing(dir)
    keys.current.add(k)
    setTimeout(() => keys.current.delete(k), 150)
  }

  return {
    player,
    facing,
    caught,
    nearZone,
    encounter,
    openSection,
    showIntro,
    setShowIntro,
    setEncounter,
    setOpenSection,
    triggerInteract,
    onCatchSuccess,
    nudge,
  }
}
