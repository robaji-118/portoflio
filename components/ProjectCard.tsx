"use client";

import Image from "next/image";
import { motion, useMotionValue, useAnimationFrame } from "framer-motion";
import Link from "next/link";
import React, { useState, useRef } from "react";

type Project = {
  id: number;
  title: string;
  imageAlt: string;
  imageSrc: string;
  link?: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "Natours Project",
    imageAlt: "Natours",
    imageSrc: "/assets/Natours.png",
    link: "https://google.com",
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
];

function ProjectCard({ project }: { project: Project }) {
  const cardContent = (
    <div
      id="project"
      className="w-56 md:w-60  bg-card/60  backdrop-blur supports-[backdrop-filter]:bg-card/60 hover:bg-card transition-colors cursor-pointer"
      role="group"
      aria-label={project.title}
    >
      <div className="relative aspect-[5/4] overflow-hidden">
        <Image
          src={project.imageSrc || "/placeholder.svg"}
          alt={project.imageAlt}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-[1.05]"
          sizes="(max-width: 768px) 224px, 240px"
          priority={false}
        />
      </div>
      <div className="p-3">
        <p className="text-sm font-medium text-foreground text-pretty">
          {project.title}
        </p>
        <p className="mt-1 text-xs text-muted-foreground">
          Case study coming soon
        </p>
      </div>
    </div>
  );

  return project.link ? (
    <Link href={project.link} target="_blank" rel="noopener noreferrer">
      {cardContent}
    </Link>
  ) : (
    cardContent
  );
}

function AutoRow({
  items,
  reverse = false,
  speed = 50,
}: {
  items: Project[];
  reverse?: boolean;
  speed?: number;
}) {
  const baseX = useMotionValue(0);
  const [isHovered, setIsHovered] = useState(false);
  const direction = reverse ? -1 : 1;
  const containerRef = useRef<HTMLDivElement>(null);

  useAnimationFrame((_, delta) => {
    if (isHovered) return;

    const moveBy = (direction * speed * delta) / 1000;
    const container = containerRef.current;
    if (!container) return;

    const totalWidth = container.scrollWidth / 2;
    const prev = baseX.get();
    let next = prev - moveBy;

    if (next <= -totalWidth) next += totalWidth;
    if (next >= 0) next -= totalWidth;

    baseX.set(next);
  });

  return (
    <div className="overflow-hidden">
      <motion.div
        ref={containerRef}
        className="flex gap-4 md:gap-6"
        style={{ x: baseX }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
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
  );
}


export default function ProjectsSection() {
  return (
    <section
      aria-labelledby="projects-heading"
      className="relative py-8 md:py-12 lg:py-16"
    >
      <div>
        <header className="flex items-end justify-between">
          <div>
            <h2
              id="projects-heading"
              className="text-pretty text-xl md:text-2xl font-semibold ml-9"
            >
              Projects
            </h2>
          </div>
        </header>

        <div className="mt-6 md:mt-8 space-y-4 md:space-y-6">
          <AutoRow items={projects} speed={50} />
          <AutoRow items={[...projects].reverse()} reverse speed={50} />
        </div>
      </div>
    </section>
  );
}
