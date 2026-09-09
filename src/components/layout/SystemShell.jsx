import { useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import TopBar from './TopBar'
import Sidebar from './Sidebar'
import BottomStatusBar from './BottomStatusBar'
import MobileDock from './MobileDock'
import { useSystem } from '../../context/SystemContext'

export default function SystemShell() {
  const [mobileNav, setMobileNav] = useState(false)
  const location = useLocation()
  const { debugMode } = useSystem()

  return (
    <div className="grain ambient-bg flex h-dvh flex-col overflow-hidden bg-bg-primary">
      <TopBar onMenuToggle={() => setMobileNav((v) => !v)} />

      <div className="flex min-h-0 flex-1">
        <Sidebar />

        {/* Mobile nav panel */}
        {mobileNav && (
          <div className="fixed inset-0 top-14 z-40 lg:hidden">
            <button
              type="button"
              className="absolute inset-0 bg-black/60"
              aria-label="Close navigation"
              onClick={() => setMobileNav(false)}
            />
            <div className="absolute bottom-0 left-0 right-0 max-h-[50dvh] overflow-y-auto border-t border-border bg-bg-secondary">
              <Sidebar mobile onNavigate={() => setMobileNav(false)} />
            </div>
          </div>
        )}

        <main className="flex min-w-0 flex-1 flex-col overflow-hidden">
          <div className="scrollbar-thin flex-1 overflow-y-auto overflow-x-hidden p-4 md:p-6 lg:p-8">
            {debugMode && (
              <p className="mb-4 font-mono text-[10px] text-warning">&lt;SystemShell /&gt; route: {location.pathname}</p>
            )}
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.18 }}
              className="mx-auto max-w-6xl"
            >
              <Outlet />
            </motion.div>
          </div>
          <MobileDock />
          <BottomStatusBar />
        </main>
      </div>
    </div>
  )
}
