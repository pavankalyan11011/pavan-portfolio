export default function MobileControls({ onNudge }) {
  return (
    <div className="mobile-controls" aria-label="Movement controls">
      <button type="button" className="mobile-controls__btn mobile-controls__btn--up" onClick={() => onNudge('up')} aria-label="Move up">▲</button>
      <button type="button" className="mobile-controls__btn mobile-controls__btn--left" onClick={() => onNudge('left')} aria-label="Move left">◀</button>
      <button type="button" className="mobile-controls__btn mobile-controls__btn--down" onClick={() => onNudge('down')} aria-label="Move down">▼</button>
      <button type="button" className="mobile-controls__btn mobile-controls__btn--right" onClick={() => onNudge('right')} aria-label="Move right">▶</button>
    </div>
  )
}
