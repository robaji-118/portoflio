"use client";

import { motion } from "framer-motion";
import {
  PiGameController,
  PiPaintBrush,
  PiBook,
  PiGuitar,
} from "react-icons/pi";

const hobbies = [
  { icon: PiGameController, label: "Gaming" },
  { icon: PiPaintBrush, label: "Digital Art" },
  { icon: PiBook, label: "Reading" },
  { icon: PiGuitar, label: "Playing guitar" },
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

export default function HobbiesCard() {
  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      className="rounded-xl ring-1 ring-border bg-background/60 p-6 shadow-sm backdrop-blur-md"
    >
      <h3 className="text-lg font-semibold">Hobbies</h3>
      <ul className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-2">
        {hobbies.map((h) => {
          const Icon = h.icon;
          return (
            <motion.li
              key={h.label}
              className="flex items-center gap-3 rounded-lg ring-1 ring-border p-3 transition-colors hover:bg-accent"
            >
              <span aria-hidden className="text-base text-primary">
                <Icon className="h-5 w-5" />
              </span>
              <span className="text-sm font-medium">{h.label}</span>
            </motion.li>
          );
        })}
      </ul>
    </motion.section>
  );
}
