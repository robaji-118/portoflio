"use client";

import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiLaravel,
  SiJavascript,
  SiSass,
  SiVuedotjs,
  SiTailwindcss
} from "react-icons/si";

import { FiArrowUpRight } from "react-icons/fi";

import { motion } from "framer-motion";

const skills = [
  { name: "React", abbr: "Re", icon: <SiReact className="h-5 w-5" /> },
  { name: "Next.js", abbr: "Nx", icon: <SiNextdotjs className="h-5 w-5" /> },
  { name: "Sass", abbr: "Sa", icon: <SiSass className="h-5 w-5" /> }, 
  { name: "TypeScript", abbr: "Ts", icon: <SiTypescript className="h-5 w-5" /> },
  { name: "JavaScript", abbr: "Js", icon: <SiJavascript className="h-5 w-5" /> },
  { name: "Laravel", abbr: "Lv", icon: <SiLaravel className="h-5 w-5" /> },
  { name: "Vue.js", abbr: "Vu", icon: <SiVuedotjs className="h-5 w-5" /> },
  { name: "Tailwind", abbr: "Tw", icon: <SiTailwindcss className="h-5 w-5" /> },
];

const container = {
  hidden: { opacity: 0, y: 8 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 28,
      staggerChildren: 0.06,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 8 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
};

export default function SkillsCard() {
  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      className="rounded-xl border border-border/60 bg-background/60 p-6 shadow-sm backdrop-blur-md"
    >
      <h3 className="text-lg font-semibold">Skills</h3>
      <motion.ul
        className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-2"
      >
        {skills.map((s) => (
          <motion.li
            key={s.name}
            className="flex items-center justify-between gap-3 rounded-lg border border-border/50 bg-muted/30 p-3 transition-colors hover:bg-accent"
          >
            <div className="flex items-center gap-3">
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-primary/10 text-xs font-semibold text-primary">
                {s.icon || s.abbr}
              </span>
              <span className="text-sm font-medium">{s.name}</span>
            </div>
            <FiArrowUpRight className="h-4 w-4 text-primary" />
          </motion.li>
        ))}
      </motion.ul>
    </motion.section>
  );
}
