const symbols = ['{}', '()', '=>', 'if', 'fn', '0x', '++', '&&', '||', '[]', 'git', 'npm', 'jsx', 'api', 'sql']

export default function CodeRain() {
  const columns = Array.from({ length: 18 }, (_, i) => ({
    id: i,
    left: `${(i / 18) * 100 + 2}%`,
    delay: `${Math.random() * 8}s`,
    duration: `${6 + Math.random() * 8}s`,
    chars: Array.from({ length: 12 }, () => symbols[Math.floor(Math.random() * symbols.length)]),
  }))

  return (
    <div className="code-rain" aria-hidden="true">
      {columns.map((col) => (
        <div
          key={col.id}
          className="code-rain__col"
          style={{ left: col.left, animationDelay: col.delay, animationDuration: col.duration }}
        >
          {col.chars.map((char, i) => (
            <span key={i}>{char}</span>
          ))}
        </div>
      ))}
    </div>
  )
}
