import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Button from './Button'
import { useSystem } from '../../context/SystemContext'
import { profile } from '../../data/profile'

const lines = [
  { text: `${profile.systemName} — hyderabad build`, delay: 0, style: 'title' },
  { text: 'loading amealio context...', delay: 300 },
  { text: 'spring-boot .......... ok', delay: 550 },
  { text: 'react + redux ......... ok', delay: 750 },
  { text: 'figma → css pipeline .. ok', delay: 950 },
  { text: 'cursor --assist ....... on (shh)', delay: 1150 },
  { text: 'ok you\'re in. yes the UI is intentional.', delay: 1400, style: 'ready' },
]

export default function BootScreen() {
  const { completeBoot, skipBoot } = useSystem()
  const [visible, setVisible] = useState(0)
  const [ready, setReady] = useState(false)
  const reduced = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

  useEffect(() => {
    if (reduced) {
      setVisible(lines.length)
      setReady(true)
      return
    }
    const timers = lines.map((line, i) =>
      setTimeout(() => {
        setVisible(i + 1)
        if (i === lines.length - 1) setReady(true)
      }, line.delay),
    )
    return () => timers.forEach(clearTimeout)
  }, [reduced])

  return (
    <div className="grain fixed inset-0 z-[100] flex items-center justify-center bg-bg-primary p-4">
      <div className="panel-cut w-full max-w-md p-6 md:p-8">
        <div className="font-mono space-y-2 text-sm">
          {lines.slice(0, visible).map((line) => (
            <motion.p
              key={line.text}
              initial={reduced ? false : { opacity: 0, x: -6 }}
              animate={{ opacity: 1, x: 0 }}
              className={
                line.style === 'title'
                  ? 'font-display text-base text-cyan'
                  : line.style === 'ready'
                    ? 'font-hand text-lg text-amber'
                    : 'text-muted'
              }
            >
              {line.text}
            </motion.p>
          ))}
        </div>

        {ready && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <Button variant="solid" className="flex-1" onClick={completeBoot}>
              Let me in
            </Button>
            <Button variant="ghost" onClick={skipBoot}>
              Skip (boring but fine)
            </Button>
          </motion.div>
        )}
      </div>
    </div>
  )
}
