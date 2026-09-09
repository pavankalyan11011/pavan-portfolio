import { useEffect, useRef, useState } from 'react'
import { profile } from '../data/site'
import { SUGGESTIONS, getCompletions, runCommand } from '../terminal/commands'

const BOOT = [
  { type: 'sys', text: 'Ubuntu 24.04 LTS  pavan-resume  tty1' },
  { type: 'sys', text: '' },
  { type: 'out', text: `${profile.name}  ·  ${profile.role}` },
  { type: 'out', text: 'Interactive CV: type  help  or  cat about.txt' },
  { type: 'out', text: 'Beginners can also click a command chip below.' },
  { type: 'sys', text: '' },
]

function Line({ entry }) {
  if (entry.type === 'cmd') {
    return (
      <div className="term-line term-line--cmd">
        <span className="term-prompt">
          <span className="term-user">pavan</span>
          <span className="term-at">@</span>
          <span className="term-host">ubuntu</span>
          <span className="term-colon">:</span>
          <span className="term-path">~/resume</span>
          <span className="term-dollar">$ </span>
        </span>
        <span>{entry.text}</span>
      </div>
    )
  }

  return (
    <pre className={`term-line term-line--${entry.type}`}>{entry.text}</pre>
  )
}

export default function Terminal() {
  const [lines, setLines] = useState(BOOT)
  const [value, setValue] = useState('')
  const [history, setHistory] = useState([])
  const [histIndex, setHistIndex] = useState(-1)
  const [draft, setDraft] = useState('')
  const bottomRef = useRef(null)
  const inputRef = useRef(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' })
  }, [lines, value])

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  function appendOutput(command, result) {
    if (result.action === 'clear') {
      setLines([])
      return
    }

    const next = [
      { type: 'cmd', text: command },
      ...result.lines.map((text) => ({ type: 'out', text })),
    ]
    setLines((prev) => [...prev, ...next])

    if (result.action === 'open' && result.url) {
      if (result.url.startsWith('mailto:') || result.url.startsWith('http')) {
        window.open(result.url, '_blank', 'noopener,noreferrer')
      } else {
        const a = document.createElement('a')
        a.href = result.url
        a.download = ''
        a.rel = 'noreferrer'
        document.body.appendChild(a)
        a.click()
        a.remove()
      }
    }
  }

  function submit(raw) {
    const command = raw.trim()
    if (!command) return
    const result = runCommand(command)
    appendOutput(command, result)
    setHistory((prev) => [...prev, command])
    setHistIndex(-1)
    setDraft('')
    setValue('')
  }

  function onKeyDown(event) {
    if (event.key === 'Enter') {
      event.preventDefault()
      submit(value)
      return
    }

    if (event.key === 'ArrowUp') {
      event.preventDefault()
      if (!history.length) return
      const nextIndex = histIndex < 0 ? history.length - 1 : Math.max(0, histIndex - 1)
      if (histIndex < 0) setDraft(value)
      setHistIndex(nextIndex)
      setValue(history[nextIndex])
      return
    }

    if (event.key === 'ArrowDown') {
      event.preventDefault()
      if (histIndex < 0) return
      const nextIndex = histIndex + 1
      if (nextIndex >= history.length) {
        setHistIndex(-1)
        setValue(draft)
      } else {
        setHistIndex(nextIndex)
        setValue(history[nextIndex])
      }
      return
    }

    if (event.key === 'Tab') {
      event.preventDefault()
      const matches = getCompletions(value)
      if (matches.length === 1) {
        setValue(matches[0])
      } else if (matches.length > 1) {
        appendOutput(value || 'tab', {
          lines: ['completions:', ...matches.map((m) => `  ${m}`)],
        })
      }
    }

    if (event.key === 'l' && event.ctrlKey) {
      event.preventDefault()
      setLines([])
    }
  }

  return (
    <div className="shell" onClick={() => inputRef.current?.focus()}>
      <header className="shell-bar">
        <div className="shell-dots" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <p className="shell-title">pavan@ubuntu: ~/resume</p>
        <p className="shell-hint">Ctrl+L clear</p>
      </header>

      <div className="shell-body">
        <div className="term-scroll" role="log" aria-live="polite">
          {lines.map((entry, i) => (
            <Line key={`${i}-${entry.type}-${entry.text.slice(0, 24)}`} entry={entry} />
          ))}

          <div className="term-input-row">
            <span className="term-prompt">
              <span className="term-user">pavan</span>
              <span className="term-at">@</span>
              <span className="term-host">ubuntu</span>
              <span className="term-colon">:</span>
              <span className="term-path">~/resume</span>
              <span className="term-dollar">$ </span>
            </span>
            <input
              ref={inputRef}
              className="term-input"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              onKeyDown={onKeyDown}
              aria-label="Terminal command"
              autoCapitalize="off"
              autoCorrect="off"
              spellCheck={false}
              autoComplete="off"
            />
          </div>
          <div ref={bottomRef} />
        </div>

        <div className="shell-chips" aria-label="Suggested commands">
          <p className="shell-chips__label">Try these:</p>
          <div className="shell-chips__row">
            {SUGGESTIONS.map((cmd) => (
              <button
                key={cmd}
                type="button"
                className="chip"
                onClick={() => submit(cmd)}
              >
                {cmd}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
