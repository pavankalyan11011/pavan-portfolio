import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react'

const SystemContext = createContext(null)

const BOOT_KEY = 'pavan-system-booted'
const SOUND_KEY = 'pavan-system-sound'
const DEBUG_KEY = 'pavan-system-debug'

function load(key, fallback) {
  try {
    const v = localStorage.getItem(key)
    return v === null ? fallback : JSON.parse(v)
  } catch {
    return fallback
  }
}

export function SystemProvider({ children }) {
  const [bootComplete, setBootComplete] = useState(() => load(BOOT_KEY, false))
  const [soundOn, setSoundOn] = useState(() => load(SOUND_KEY, false))
  const [debugMode, setDebugMode] = useState(() => load(DEBUG_KEY, false))
  const [developerMode, setDeveloperMode] = useState(false)
  const [systemLog, setSystemLog] = useState([])
  const audioCtx = useRef(null)
  const profileClickCount = useRef(0)

  const log = useCallback((message) => {
    const entry = `[${new Date().toLocaleTimeString('en-GB', { hour12: false })}] ${message}`
    setSystemLog((prev) => [...prev.slice(-20), entry])
  }, [])

  useEffect(() => {
    log('Portfolio kernel initialized')
    log('Project database mounted')
    log('Skill matrix ready')
  }, [log])

  const playSound = useCallback(
    (type = 'click') => {
      if (!soundOn) return
      try {
        if (!audioCtx.current) audioCtx.current = new (window.AudioContext || window.webkitAudioContext)()
        const ctx = audioCtx.current
        const osc = ctx.createOscillator()
        const gain = ctx.createGain()
        osc.connect(gain)
        gain.connect(ctx.destination)
        const freqs = { click: 880, open: 660, unlock: 523, select: 740 }
        osc.frequency.value = freqs[type] || 880
        osc.type = 'sine'
        gain.gain.setValueAtTime(0.04, ctx.currentTime)
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.08)
        osc.start(ctx.currentTime)
        osc.stop(ctx.currentTime + 0.08)
      } catch {
        /* silent fail */
      }
    },
    [soundOn],
  )

  const completeBoot = useCallback(() => {
    setBootComplete(true)
    localStorage.setItem(BOOT_KEY, 'true')
    log('System ready — user entered')
    playSound('open')
  }, [log, playSound])

  const skipBoot = useCallback(() => {
    completeBoot()
  }, [completeBoot])

  const toggleSound = useCallback(() => {
    setSoundOn((v) => {
      localStorage.setItem(SOUND_KEY, JSON.stringify(!v))
      return !v
    })
  }, [])

  const toggleDebug = useCallback(() => {
    setDebugMode((v) => {
      localStorage.setItem(DEBUG_KEY, JSON.stringify(!v))
      log(!v ? 'Debug mode enabled' : 'Debug mode disabled')
      return !v
    })
  }, [log])

  const handleProfileClick = useCallback(() => {
    profileClickCount.current += 1
    if (profileClickCount.current >= 5) {
      setDeveloperMode(true)
      log('DEVELOPER MODE unlocked')
      playSound('unlock')
      profileClickCount.current = 0
    }
  }, [log, playSound])

  // Konami code
  useEffect(() => {
    const sequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a']
    let index = 0
    const onKey = (e) => {
      if (e.key === sequence[index]) {
        index += 1
        if (index === sequence.length) {
          setDeveloperMode(true)
          log('Konami sequence detected — DEVELOPER MODE')
          playSound('unlock')
          index = 0
        }
      } else {
        index = 0
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [log, playSound])

  const value = useMemo(
    () => ({
      bootComplete,
      completeBoot,
      skipBoot,
      soundOn,
      toggleSound,
      debugMode,
      toggleDebug,
      developerMode,
      systemLog,
      log,
      playSound,
      handleProfileClick,
    }),
    [bootComplete, completeBoot, skipBoot, soundOn, toggleSound, debugMode, toggleDebug, developerMode, systemLog, log, playSound, handleProfileClick],
  )

  return <SystemContext.Provider value={value}>{children}</SystemContext.Provider>
}

export function useSystem() {
  const ctx = useContext(SystemContext)
  if (!ctx) throw new Error('useSystem must be used within SystemProvider')
  return ctx
}
