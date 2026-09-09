import { useEffect, useState } from 'react'
import { MAP, worldZones } from '../../data/worldZones'

function Tree({ x, y, s = 1 }) {
  return (
    <div className="world-tree" style={{ left: x, top: y, transform: `scale(${s})` }} aria-hidden="true">
      <div className="world-tree__top" />
      <div className="world-tree__trunk" />
    </div>
  )
}

function Rock({ x, y }) {
  return <div className="world-rock" style={{ left: x, top: y }} aria-hidden="true" />
}

export default function GameWorld({ player, facing, caught, nearZone, onInteract }) {
  const [cam, setCam] = useState({ x: 0, y: 0 })

  useEffect(() => {
    function updateCam() {
      const vw = window.innerWidth
      const vh = window.innerHeight - 88
      const cx = player.x - vw / 2
      const cy = player.y - vh / 2
      setCam({
        x: Math.max(0, Math.min(MAP.width - vw, cx)),
        y: Math.max(0, Math.min(MAP.height - vh, cy)),
      })
    }
    updateCam()
    window.addEventListener('resize', updateCam)
    return () => window.removeEventListener('resize', updateCam)
  }, [player])

  return (
    <div className="game-viewport">
      <div
        className="game-map"
        style={{
          width: MAP.width,
          height: MAP.height,
          transform: `translate(${-cam.x}px, ${-cam.y}px)`,
        }}
      >
        <div className="game-map__grass" />

        <div className="game-path game-path--h" style={{ left: 100, top: MAP.height / 2 - 20, width: MAP.width - 200 }} />
        <div className="game-path game-path--v" style={{ left: MAP.width / 2 - 20, top: 80, height: MAP.height - 160 }} />

        <Tree x={400} y={300} />
        <Tree x={1000} y={400} s={0.8} />
        <Tree x={500} y={700} s={1.1} />
        <Tree x={1100} y={650} />
        <Rock x={600} y={500} />
        <Rock x={900} y={350} />
        <Rock x={350} y={550} />

        <div className="game-spawn" style={{ left: MAP.width / 2 - 60, top: MAP.height / 2 - 40 }}>
          <span>SPAWN</span>
        </div>

        {worldZones.map((zone) => {
          const isCaught = caught.includes(zone.id)
          const isNear = nearZone?.id === zone.id
          return (
            <button
              key={zone.id}
              type="button"
              className={`world-zone ${isCaught ? 'world-zone--caught' : ''} ${isNear ? 'world-zone--near' : ''}`}
              style={{
                left: zone.x,
                top: zone.y,
                width: zone.w,
                height: zone.h,
                '--zone-color': zone.color,
              }}
              onClick={() => isNear && onInteract()}
              aria-label={`${zone.label}${isCaught ? ' — unlocked' : ' — catch Pokémon to enter'}`}
            >
              <div className="world-zone__roof" />
              <div className="world-zone__body">
                <span className="world-zone__icon">{zone.pokemon.emoji}</span>
                <span className="world-zone__label">{zone.label}</span>
                {isCaught ? (
                  <span className="world-zone__status">✓ OPEN</span>
                ) : (
                  <span className="world-zone__status world-zone__status--locked">🔒</span>
                )}
              </div>
            </button>
          )
        })}

        <div className={`game-player game-player--${facing}`} style={{ left: player.x - 20, top: player.y - 36 }}>
          <div className="game-player__shadow" />
          <div className="game-player__sprite">
            <div className="game-player__head" />
            <div className="game-player__torso" />
            <div className="game-player__legs">
              <span /><span />
            </div>
          </div>
        </div>
      </div>

      {nearZone && (
        <button type="button" className="game-prompt" onClick={onInteract}>
          <kbd>SPACE</kbd> or tap here —{' '}
          {caught.includes(nearZone.id) ? `Enter ${nearZone.label}` : `Catch ${nearZone.pokemon.name}!`}
        </button>
      )}
    </div>
  )
}
