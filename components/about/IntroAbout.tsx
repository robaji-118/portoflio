"use client"

import { motion } from "framer-motion"

export default function IntroAbout() {
  return (
    <motion.section
      initial={{ y: 16, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      className="rounded-xl ring-1 ring-border bg-background/60 p-6 shadow-sm backdrop-blur-md"
    >
      <h2 className="text-xl font-semibold">Hi, I’m Rojabby — Front‑end Developer</h2>
      <p className="mt-3 leading-relaxed text-foreground">
        I craft fast, accessible interfaces with React, Next.js, and Tailwind. I love turning complex problems into
        elegant, interactive experiences, with a focus on performance, UX, and detail.
      </p>

    </motion.section>
  )
}
