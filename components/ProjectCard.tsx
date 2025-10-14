"use client"

import Image from "next/image"
import { motion } from "framer-motion"

type Project = {
  id: number
  title: string
  imageAlt: string
  imageSrc: string
}

const projects: Project[] = [
  {
    id: 1,
    title: "Natours Project",
    imageAlt: "Natours",
    imageSrc: "/assets/Natours.png",
  },
  {
    id: 2,
    title: "Trillo",
    imageAlt: "Trillo project",
    imageSrc: "/assets/Trillo.png",
  },
  {
    id: 3,
    title: "Nexter",
    imageAlt: "Nexter",
    imageSrc: "/assets/Nexter.png",
  },
  {
    id: 4,
    title: "First Portfolio Website using react",
    imageAlt: "Portfolio website screenshot",
    imageSrc: "/assets/Portofolio-react.png",
  },
  {
    id: 5,
    title: "Biomainten",
    imageAlt: "Biomainten",
    imageSrc: "/assets/Biomainten.png",
  },
  {
    id: 6,
    title: "UI TrandyWalk",
    imageAlt: "TrandyWalk",
    imageSrc: "/assets/TrandyWalk-dekstop.png",
  },

  {
    id: 7,
    title: "UI TrandyWalk Mobile",
    imageAlt: "TrandyWalk",
    imageSrc: "/assets/TrandyWalk-mobile.png",
  },
]

function ProjectCard({ project }: { project: Project }) {
  return (
    <div id="project"
      className="w-56 md:w-60 shrink-0 rounded-xl bg-card/60 ring-1 ring-border backdrop-blur supports-[backdrop-filter]:bg-card/60 hover:bg-card transition-colors"
      role="group"
      aria-label={project.title}
    >
      <div className="relative aspect-[4/3] overflow-hidden rounded-t-xl">
        <Image
          src={project.imageSrc || "/placeholder.svg"}
          alt={project.imageAlt}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          sizes="(max-width: 768px) 224px, 240px"
          priority={false}
        />
      </div>
      <div className="p-3">
        <p className="text-sm font-medium text-foreground text-pretty">{project.title}</p>
        <p className="mt-1 text-xs text-muted-foreground">Case study coming soon</p>
      </div>
    </div>
  )
}

function AutoRow({
  items,
  reverse = false,
  duration = 24,
}: {
  items: Project[]
  reverse?: boolean
  duration?: number
}) {
  const animateFrom = reverse ? "-50%" : "0%"
  const animateTo = reverse ? "0%" : "-50%"

  return (
    <div className="overflow-hidden">
      <motion.div
        className="flex gap-4 md:gap-6"
        aria-label="Automatic project slider row"
        animate={{ x: [animateFrom, animateTo] }}
        transition={{ duration, ease: "linear", repeat: Number.POSITIVE_INFINITY }}
      >
        <div className="flex gap-4 md:gap-6 shrink-0">
          {items.map((p) => (
            <ProjectCard key={`row-a-${p.id}`} project={p} />
          ))}
        </div>
        <div className="flex gap-4 md:gap-6 shrink-0" aria-hidden="true">
          {items.map((p) => (
            <ProjectCard key={`row-b-${p.id}`} project={p} />
          ))}
        </div>
      </motion.div>
    </div>
  )
}

export default function ProjectsSection() {
  return (
    <section aria-labelledby="projects-heading" className="relative py-8 md:py-12 lg:py-16">
      <div className="px-6 md:px-10">
        <header className="flex items-end justify-between">
          <div>
            <h2 id="projects-heading" className="text-pretty text-xl md:text-2xl font-semibold">
              Projects
            </h2>
            <p className="mt-2 text-sm md:text-base text-muted-foreground">
            </p>
          </div>
        </header>

        <div className="mt-6 md:mt-8 space-y-4 md:space-y-6">
          <AutoRow items={projects} duration={26}  />
          <AutoRow items={[...projects].reverse()} reverse duration={30} />
        </div>
      </div>
    </section>
  )
}
