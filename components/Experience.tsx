"use client"

import { motion, useReducedMotion } from "framer-motion"
import { useMemo } from "react"
import { SiReact } from "react-icons/si" 

type ExperienceItem = {
  company: string
  role: string
  period: string
  description: string
  logoSrc?: string
}

const EXPERIENCE: ExperienceItem[] = [
  {
    company: "Final Assiggment School ",
    role: "Front-End Developer",
    period: "2025",
    description:
      "Create Website Full Responsive and Fetch api with",
  },
  {
    company: "Freelance Projects",
    role: "UI Engineer",
    period: "2023 - 2024",
    description:
      "Delivered product UIs for startups, implementing component systems and micro-interactions with Framer Motion.",
  },
  {
    company: "Open Source",
    role: "Contributor",
    period: "2023",
    description:
      "Contributed to libraries and templates. Improved documentation and fixed visual bugs across component ecosystems.",
  },
]

export default function ExperienceSection() {
  const prefersReduced = useReducedMotion()

  const particles = useMemo(
    () =>
      Array.from({ length: 10 }).map((_, i) => ({
        id: i,
        size: 6 + ((i * 7) % 6),
        x: (i * 137) % 100,
        delay: (i * 0.35) % 3,
        duration: 6 + (i % 4),
      })),
    [],
  )

  return (
    <section id="experience" aria-label="Experience and professional journey timeline" className="relative py-20 px-4 md:px-6">
      {/* Backgrounds */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          backgroundImage: `
            radial-gradient(60% 40% at 50% 0%, hsl(var(--primary) / 0.10) 0%, transparent 60%),
            radial-gradient(30% 20% at 90% 10%, hsl(var(--accent) / 0.10) 0%, transparent 70%)
          `,
        }}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.08] [mask-image:radial-gradient(60%_60%_at_50%_50%,black,transparent)]"
        style={{
          backgroundImage:
            "linear-gradient(to right, hsl(var(--foreground)/0.35) 1px, transparent 1px), linear-gradient(to bottom, hsl(var(--foreground)/0.35) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      {!prefersReduced && (
        <div aria-hidden="true" className="absolute inset-0 -z-10 overflow-hidden">
          {particles.map((p) => (
            <motion.span
              key={p.id}
              className="absolute rounded-full bg-foreground/10"
              style={{
                width: p.size,
                height: p.size,
                left: `${p.x}%`,
                top: `${(p.id * 19) % 100}%`,
                filter: "blur(1px)",
              }}
              initial={{ y: 0, opacity: 0.25 }}
              animate={{ y: -20, opacity: 0.5 }}
              transition={{
                duration: p.duration,
                delay: p.delay,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "mirror",
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      )}

      <div className="mx-auto max-w-5xl">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-12"
        >
          <h2 className="text-balance text-3xl md:text-4xl font-semibold tracking-tight">
            <span className="bg-gradient-to-br from-[hsl(var(--foreground))] via-[hsl(var(--primary))] to-[hsl(var(--muted-foreground))] bg-clip-text text-transparent">
              Experience & Journey
            </span>
          </h2>
        </motion.div>

        <div className="relative">
          <div aria-hidden="true" className="absolute left-4 md:left-6 top-0 h-full w-px bg-border" />

          <ol className="space-y-6 md:space-y-8">
            {EXPERIENCE.map((item, idx) => (
              <motion.li
                key={item.company + idx}
                className="relative pl-10 md:pl-12"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: idx * 0.08 }}
              >
                <span
                  aria-hidden="true"
                  className="absolute left-3.5 md:left-5 top-2.5 size-3 rounded-full bg-primary ring-2 ring-background shadow-[0_0_0_4px_hsl(var(--primary)/0.2)]"
                />

                <article
                  className="group rounded-xl border border-border bg-card/60 backdrop-blur-sm transition
                             hover:shadow-xl hover:shadow-primary/5 hover:bg-card/70
                             ring-1 ring-transparent hover:ring-primary/20"
                >
                  <div className="p-4 md:p-6 flex items-start gap-4">
                    {/* ⬇️ Ganti placeholder dengan logo React */}
                    <div className="hidden sm:flex size-10 shrink-0 items-center justify-center rounded-lg border border-border bg-muted/50 text-primary">
                      <SiReact className="size-5 md:size-6" />
                    </div>

                    <div className="min-w-0">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                        <h3 className="text-base md:text-lg font-medium text-foreground">{item.company}</h3>
                        <span className="text-xs md:text-sm text-muted-foreground">{item.period}</span>
                      </div>
                      <p className="mt-0.5 text-sm md:text-base text-muted-foreground">
                        <span className="font-medium text-foreground">{item.role}</span>
                        {" — "}
                        {item.description}
                      </p>
                    </div>
                  </div>

                  <div className="mx-4 md:mx-6 h-px bg-gradient-to-r from-transparent via-border to-transparent transition group-hover:via-primary/40" />
                </article>
              </motion.li>
            ))}
          </ol>
        </div>

        <div className="mt-12 flex justify-end">
          <motion.a
            href="/CV_Rojabby.pdf"
            download
            aria-label="Download CV (PDF)"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.03, boxShadow: "0 12px 30px -8px hsl(var(--primary)/0.3)" }}
            whileTap={{ scale: 0.98 }}
            viewport={{ once: true, amount: 0.2 }}
            className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 font-medium text-primary-foreground transition
                       ring-1 ring-primary/30 hover:ring-primary/50"
          >
            <svg
              aria-hidden="true"
              className="size-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M12 3v12" />
              <path d="m7 10 5 5 5-5" />
              <path d="M5 21h14" />
            </svg>
            <span>Download CV</span>
          </motion.a>
        </div>
      </div>
    </section>
  )
}
