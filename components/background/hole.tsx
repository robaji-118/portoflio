"use client"
import { motion } from "framer-motion"

type HoleBackgroundProps = {
  opacity?: number
  gap?: number
  dot?: number
  centerMask?: boolean
}

export function HoleBackground({ opacity = 0.08, gap = 24, dot = 1.25, centerMask = false }: HoleBackgroundProps) {
  return (
    <motion.div
      aria-hidden="true"
      className="absolute inset-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      style={{
        // Use tokens instead of raw black; the mask (if used) remains black for alpha channel math.
        backgroundImage: `radial-gradient(hsl(var(--foreground) / ${opacity}) ${dot}px, transparent ${dot}px)`,
        backgroundSize: `${gap}px ${gap}px`,
        maskImage: centerMask ? "radial-gradient(circle at center, rgba(0,0,0,1) 70%, transparent 100%)" : undefined,
        WebkitMaskImage: centerMask
          ? "radial-gradient(circle at center, rgba(0,0,0,1) 70%, transparent 100%)"
          : undefined,
      }}
    />
  )
}
