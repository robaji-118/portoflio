'use client'


import { useEffect, useState } from "react"
import styles from "./Clock.module.css"

export default function Clock() {
  const [now, setNow] = useState<string | null>(null)

  useEffect(() => {
    const formatNow = () => {
      const formatter = new Intl.DateTimeFormat("id-ID", {
        timeZone: "Asia/Jakarta",
        hour: "2-digit",
        minute: "2-digit",
      })
      const dateFormatter = new Intl.DateTimeFormat("id-ID", {
        timeZone: "Asia/Jakarta",
        weekday: "short",
        day: "2-digit",
        month: "short",
      })
      const time = formatter.format(new Date())
      const date = dateFormatter.format(new Date())
      return `${time} • ${date}`
    }

    // set langsung waktu pertama
    setNow(formatNow())

    const tick = () => setNow(formatNow())
    const interval = setInterval(tick, 1000)

    const handleVisibility = () => {
      if (document.hidden) clearInterval(interval)
    }
    document.addEventListener("visibilitychange", handleVisibility)

    return () => {
      clearInterval(interval)
      document.removeEventListener("visibilitychange", handleVisibility)
    }
  }, [])

  return (
    <div
      className={`${styles.clockModule} fixed bottom-4 right-4 z-50 pointer-events-auto`}
      aria-live="polite"
      aria-label={`Waktu Indonesia: ${now ?? "--:--"}`}
      suppressHydrationWarning
    >
      <div
        className="flex items-center gap-3 rounded-lg px-4 py-2 text-sm md:text-base font-semibold
        bg-gradient-to-r from-blue-500/10 to-purple-500/10 
        dark:from-blue-400/15 dark:to-purple-400/15
        text-foreground dark:text-slate-100
        backdrop-blur-xl border border-blue-400/20 dark:border-blue-300/20"
      >
        <svg
          aria-hidden="true"
          className={`${styles.clockIcon} w-4 h-4 text-blue-500 dark:text-blue-400 flex-shrink-0`}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v6l4 2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span className={styles.timeDisplay} suppressHydrationWarning>
          {now ?? "--:--"}
        </span>
      </div>
    </div>
  )
}
