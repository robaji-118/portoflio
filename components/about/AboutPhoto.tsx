"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function AboutPhoto() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -12, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      className="absolute left- bottom-1 z-10 hidden md:block"
      aria-hidden="true"
    >
      <motion.div
        // gentle idle float for a modern, premium feel
        animate={{ y: [0, -6, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        className="relative group"
      >
        {/* Accent glow behind the photo (uses design tokens) */}
        <div
          className="pointer-events-none absolute -inset-4 -z-20 rounded-3xl opacity-40 blur-2xl"
          style={{
            background:
              "radial-gradient(60% 60% at 30% 30%, var(--accent) 0%, transparent 60%), radial-gradient(60% 60% at 80% 20%, var(--foreground) 0%, transparent 60%)",
          }}
        />

        {/* Subtle gradient halo ring */}
        <div
          className="pointer-events-none absolute inset-0 -z-10 rounded-3xl"
          style={{
            background:
              "",
            opacity: 0.15,
            filter: "blur(6px)",
          }}
        />

        {/* Card frame for image */}
        <motion.div
          whileHover={{ scale: 1.02, rotateX: 2, rotateY: -2 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="relative overflow rounded-2xl "
        >
          <Image
            src="/assets/me_photos.png"
            alt="Profile photo"
            width={400}
            height={400}
            sizes="(min-width: 1024px) 384px, 256px"
            className="object-cover
              md:h-64 md:w-64
              lg:h-96 lg:w-96"
            priority
          />

          {/* Soft top highlight */}
          <div
            className="pointer-events-none absolute inset-x-0 top-0 h-16"
            style={{
              background: "",
            }}
          />
        </motion.div>

        {/* Nametag pill */}
        <div className="absolute bottom-3 right-3 inline-flex items-center gap-2 rounded-full border border-border px-3 py-1 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-background/70"  style={{ color: "var(--accent)", background:"var(--accent-foreground)" }} >
          <span aria-hidden="true" className="h-2.5 w-2.5 rounded-full" style={{ background: "var(--accent)" }} />
          <span className="font-semibold tracking-tight">rojabby</span>
        </div>
      </motion.div>
    </motion.div>
  )
}
