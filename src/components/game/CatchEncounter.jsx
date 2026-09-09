import { useEffect, useState } from 'react'
import { CATCH_RATES } from '../../data/worldZones'

const BALL_LABELS = ['Standard Ball', 'Great Ball', 'Ultra Ball']

export default function CatchEncounter({ zone, onSuccess, onFlee }) {
  const [phase, setPhase] = useState('intro')
  const [activeBall, setActiveBall] = useState(null)
  const [shakeCount, setShakeCount] = useState(0)
  const [message, setMessage] = useState('')
  const [usedBalls, setUsedBalls] = useState([])

  const { pokemon } = zone

  useEffect(() => {
    const t = setTimeout(() => {
      setPhase('battle')
      setMessage(`A wild ${pokemon.name} appeared!`)
    }, 800)
    return () => clearTimeout(t)
  }, [pokemon.name])

  function throwBall(index) {
    if (activeBall !== null || usedBalls.includes(index)) return

    setActiveBall(index)
    setMessage(`You used a ${BALL_LABELS[index]}!`)
    setPhase('throw')

    setTimeout(() => {
      setPhase('shake')
      const caught = Math.random() < CATCH_RATES[index]
      const shakes = caught ? 3 : Math.floor(Math.random() * 2) + 1

      let count = 0
      const shakeInterval = setInterval(() => {
        count += 1
        setShakeCount(count)
        if (count >= shakes) {
          clearInterval(shakeInterval)
          setTimeout(() => {
            if (caught) {
              setPhase('caught')
              setMessage(`Gotcha! ${pokemon.name} was caught!`)
              setTimeout(() => onSuccess(zone.id), 1400)
            } else {
              setPhase('battle')
              setActiveBall(null)
              setShakeCount(0)
              setUsedBalls((b) => [...b, index])
              setMessage(`${pokemon.name} broke free! Try another ball.`)
            }
          }, 500)
        }
      }, 600)
    }, 500)
  }

  return (
    <div className="encounter-overlay" role="dialog" aria-modal="true" aria-label="Pokémon encounter">
      <div className="encounter-flash" data-phase={phase} />

      <div className="encounter-scene">
        <div className="encounter-scene__sky" />

        <div className={`encounter-pokemon ${phase === 'shake' ? 'encounter-pokemon--shake' : ''}`}>
          <div
            className="encounter-pokemon__sprite"
            data-shakes={shakeCount}
            style={{ '--mon-color': zone.color }}
          >
            <span className="encounter-pokemon__emoji">{pokemon.emoji}</span>
          </div>
          {activeBall !== null && phase !== 'caught' && (
            <div className={`encounter-ball encounter-ball--active encounter-ball--shake-${shakeCount}`}>
              <div className="encounter-ball__top" />
              <div className="encounter-ball__mid" />
              <div className="encounter-ball__bot" />
            </div>
          )}
        </div>

        <div className="encounter-grass" />
      </div>

      <div className="encounter-ui">
        <div className="encounter-message rbx-panel">
          <p>{message || `Wild ${pokemon.name} is blocking ${zone.label}!`}</p>
          <p className="encounter-message__sub">{pokemon.desc}</p>
        </div>

        {phase === 'battle' && (
          <div className="encounter-actions">
            <p className="encounter-actions__label">Choose a Poké Ball to catch it!</p>
            <div className="encounter-balls">
              {BALL_LABELS.map((label, i) => (
                <button
                  key={label}
                  type="button"
                  className={`encounter-balls__item ${usedBalls.includes(i) ? 'encounter-balls__item--used' : ''}`}
                  onClick={() => throwBall(i)}
                  disabled={usedBalls.includes(i)}
                  aria-label={`Throw ${label}`}
                >
                  <div className={`pokeball pokeball--tier-${i}`}>
                    <div className="pokeball__top" />
                    <div className="pokeball__button" />
                    <div className="pokeball__bottom" />
                  </div>
                  <span>{label}</span>
                  {i === 2 && <span className="encounter-balls__hint">100%</span>}
                </button>
              ))}
            </div>
            <button type="button" className="btn btn--ghost encounter-flee" onClick={onFlee}>
              Run away
            </button>
          </div>
        )}

        {phase === 'caught' && (
          <div className="encounter-caught">
            <p>🎉 {zone.label} unlocked!</p>
          </div>
        )}

        {(phase === 'throw' || phase === 'shake') && (
          <div className="encounter-wait">
            <div className="encounter-spinner" />
          </div>
        )}
      </div>
    </div>
  )
}
