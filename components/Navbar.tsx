"use client"

import Link from "next/link"
import { useEffect, useMemo, useState } from "react"
import { usePathname } from "next/navigation"
import { AnimatePresence, motion } from "framer-motion"

type NavItem = {
  name: string
  href: string
}

const NAV_ITEMS: NavItem[] = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Project", href: "#project" },
  { name: "Contact", href: "#contact" },
]

function useTheme() {
  const [theme, setTheme] = useState<"light" | "dark">("light")

  useEffect(() => {
    try {
      const stored = localStorage.getItem("theme") as "light" | "dark" | null
      const prefersDark =
        typeof window !== "undefined" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches

      const initial: "light" | "dark" = stored ?? (prefersDark ? "dark" : "light")
      setTheme(initial)
      document.documentElement.classList.toggle("dark", initial === "dark")
    } catch {
      // noop
    }
  }, [])

  const toggle = () => {
    setTheme((prev) => {
      const next: "light" | "dark" = prev === "dark" ? "light" : "dark"
      try {
        localStorage.setItem("theme", next)
      } catch {}
      document.documentElement.classList.toggle("dark", next === "dark")
      return next
    })
  }

  return { theme, toggle }
}

export default function Navbar() {
  const pathname = usePathname() || "/"
  const [open, setOpen] = useState(false)
  const { theme, toggle } = useTheme()

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  const activeIndex = useMemo(
    () => NAV_ITEMS.findIndex((i) => i.href === pathname),
    [pathname] 
  )

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/40 px-4 md:px-6">
      {/* Container agar isi center */}
      <div className="mx-auto max-w-6xl ">
        <nav
          className="flex items-center justify-between py-3"
          aria-label="Main navigation"
        >
          <div className="flex items-center gap-2">
            <Logo />  
            <span className="text-sm font-medium text-foreground">
              Raybe Dev.
            </span>
          </div>

          {/* Desktop nav */}
          <div className="relative hidden items-center gap-1 md:flex">
            {NAV_ITEMS.map((item, idx) => {
              const active = idx === activeIndex
              return (
                <div key={item.href} className="relative">
                  <Link
                    href={item.href}
                    className="relative rounded-md px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    {item.name}
                  </Link>
                  {active && (
                    <motion.div
                      layoutId="nav-underline"
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                      className="absolute inset-x-2 -bottom-0.5 h-0.5 rounded bg-primary"
                      aria-hidden="true"
                    />
                  )}
                </div>
              )
            })}
          </div>

          <div className="flex items-center gap-2">
            <ThemeToggle theme={theme} onToggle={toggle} />

            {/* Mobile menu button */}
            <button
              type="button"
              className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border bg-background text-foreground/80 transition-colors hover:bg-accent hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring md:hidden"
              aria-label="Toggle menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              <Burger open={open} />
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 35 }}
            className="border-t border-border bg-secondary md:hidden"
          >
            <ul className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-3 md:px-6">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="block rounded-md px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-accent hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

function Logo() {
  return (
    <div
      className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground"
      aria-hidden="true"
    >
      <motion.span
        initial={{ scale: 0.8, rotate: -10, opacity: 0 }}
        animate={{ scale: 1, rotate: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 400, damping: 20 }}
        className="text-xs font-bold"
      >
        R
      </motion.span>
    </div>
  )
}

function ThemeToggle({
  theme,
  onToggle,
}: {
  theme: "light" | "dark"
  onToggle: () => void
}) {
  const isDark = theme === "dark"
  return (
    <button
      type="button"
      className="inline-flex h-9 items-center gap-2 rounded-md border border-border bg-background px-3 text-sm font-medium text-foreground/80 transition-colors hover:bg-accent hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      onClick={onToggle}
      aria-pressed={isDark}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      <span className="sr-only">
        {isDark ? "Switch to light mode" : "Switch to dark mode"}
      </span>
      <SunIcon className={`h-4 w-4 ${isDark ? "hidden" : "block"}`} />
      <MoonIcon className={`h-4 w-4 ${isDark ? "block" : "hidden"}`} />
      <span className="text-xs">{isDark ? "Dark" : "Light"}</span>
    </button>
  )
}

function Burger({ open }: { open: boolean }) {
  return (
    <span className="relative block h-3.5 w-4">
      <motion.span
        className="absolute left-0 top-0 block h-0.5 w-full rounded bg-foreground"
        animate={open ? { y: 6, rotate: 45 } : { y: 0, rotate: 0 }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
      />
      <motion.span
        className="absolute left-0 top-1.5 block h-0.5 w-full rounded bg-foreground"
        animate={open ? { opacity: 0 } : { opacity: 1 }}
        transition={{ duration: 0.15 }}
      />
      <motion.span
        className="absolute left-0 top-3 block h-0.5 w-full rounded bg-foreground"
        animate={open ? { y: -6, rotate: -45 } : { y: 0, rotate: 0 }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
      />
    </span>
  )
}

function SunIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
      <path
        d="M12 2v2m0 16v2M4 12H2m20 0h-2M5 5l1.5 1.5M17.5 17.5L19 19M19 5l-1.5 1.5M7.5 17.5 6 19"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}

function MoonIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M21 12.5A8.5 8.5 0 1 1 11.5 3a7 7 0 1 0 9.5 9.5Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
