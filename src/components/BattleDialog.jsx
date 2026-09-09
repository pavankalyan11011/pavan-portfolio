import { useEffect, useState } from 'react'
import { profile } from '../data/site'

const lines = [
  '▶ A wild FULL STACK DEV appeared!',
  `▶ ${profile.trainerName} — Level ${profile.level} World Builder`,
  '▶ Special move: REACT.js — It\'s super effective!',
  '▶ Currently raiding Amealio SaaS World...',
  '▶ Status: OPEN FOR NEW QUESTS!',
]

export default function BattleDialog() {
  const [lineIndex, setLineIndex] = useState(0)
  const [text, setText] = useState('')
  const [charIndex, setCharIndex] = useState(0)

  useEffect(() => {
    const current = lines[lineIndex]
    if (charIndex < current.length) {
      const timer = setTimeout(() => {
        setText(current.slice(0, charIndex + 1))
        setCharIndex((c) => c + 1)
      }, 28)
      return () => clearTimeout(timer)
    }

    const pause = setTimeout(() => {
      setLineIndex((i) => (i + 1) % lines.length)
      setCharIndex(0)
      setText('')
    }, 2200)
    return () => clearTimeout(pause)
  }, [lineIndex, charIndex])

  return (
    <div className="battle-dialog" role="status" aria-live="polite">
      <div className="battle-dialog__arrow" aria-hidden="true" />
      <p className="battle-dialog__text">
        {text}
        <span className="battle-dialog__cursor">▌</span>
      </p>
      <span className="battle-dialog__hint" aria-hidden="true">▼</span>
    </div>
  )
}
