import { profile } from '../data/site'

export default function GameHUD({ progress, caught = 0, total = 6 }) {
  const xpPercent = Math.round((profile.xp / profile.xpMax) * 100)

  return (
    <div className="game-hud">
      <div className="game-hud__left">
        <div className="game-hud__level">
          <span>Lv</span>
          <strong>{profile.level}</strong>
        </div>
        <div className="game-hud__bars">
          <div className="stat-bar stat-bar--hp">
            <label>MAP</label>
            <div className="stat-bar__track">
              <div className="stat-bar__fill" style={{ width: `${progress}%` }} />
            </div>
          </div>
          <div className="stat-bar stat-bar--xp">
            <label>XP</label>
            <div className="stat-bar__track">
              <div className="stat-bar__fill" style={{ width: `${xpPercent}%` }} />
            </div>
          </div>
        </div>
      </div>
      <div className="game-hud__center">
        <span className="game-hud__title">🎮 {profile.trainerName}</span>
      </div>
      <div className="game-hud__right">
        <div className="game-hud__badge">
          <span>⚡</span>
          <span>{caught}/{total} Caught</span>
        </div>
      </div>
    </div>
  )
}
