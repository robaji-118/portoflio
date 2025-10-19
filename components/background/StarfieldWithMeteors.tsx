"use client";

import React, { useMemo } from "react";
import { motion } from "framer-motion";
import styles from "./Starfield.module.css";

type Props = {
  meteorCount?: number;
  starDensity?: number; // higher -> more stars
};

function rand(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

export default function StarfieldWithMeteors({
  meteorCount = 3,
  starDensity = 120,
}: Props) {
  // precompute arrays so DOM stable between renders
  const stars = useMemo(() => {
    const arr = new Array(starDensity).fill(0).map(() => ({
      // relative position in vw/vh
      left: `${rand(0, 100).toFixed(2)}%`,
      top: `${rand(0, 100).toFixed(2)}%`,
      size: `${rand(0.5, 2.2).toFixed(2)}px`,
      opacity: rand(0.1, 0.95).toFixed(2),
      // subtle twinkle offset
      delay: rand(0, 6).toFixed(2),
    }));
    return arr;
  }, [starDensity]);

  const meteors = useMemo(() => {
    return new Array(meteorCount).fill(0).map(() => ({
      // start off-screen: x,y in vw/vh negative so they come from top-left
      startX: rand(-30, 10),
      startY: rand(-40, -10),
      // end somewhere bottom-right beyond viewport
      endX: rand(110, 160),
      endY: rand(110, 160),
      // rotation for streak visual
      angle: rand(-25, 25),
      delay: rand(0, 8),
      duration: rand(1.2, 2.5),
      width: rand(80, 240),
    }));
  }, [meteorCount]);

  return (
    <div className={`relative w-full h-full ${styles.starfield}`}>
      {/* Stars layer */}
      <div className={`${styles.starsLayer} pointer-events-none`}>
        {stars.map((s, i) => (
          <motion.span
            key={i}
            className={styles.star}
            style={{
              left: s.left,
              top: s.top,
              width: s.size,
              height: s.size,
              opacity: parseFloat(s.opacity),
            }}
            initial={{ opacity: 0.0, scale: 0.9 }}
            animate={{ opacity: [0.0, parseFloat(s.opacity), 0.0], scale: [0.9, 1, 0.9] }}
            transition={{
              repeat: Infinity,
              repeatType: "mirror",
              duration: 6 + Math.random() * 6,
              delay: parseFloat(s.delay),
            }}
          />
        ))}
      </div>

      {/* Meteors layer */}
      <div className={`${styles.meteorLayer} pointer-events-none`}>
        {meteors.map((m, i) => (
          <motion.div
            key={i}
            className={styles.meteor}
            initial={{
              x: `${m.startX}vw`,
              y: `${m.startY}vh`,
              rotate: m.angle,
              opacity: 0,
            }}
            animate={{
              x: [`${m.startX}vw`, `${m.endX}vw`],
              y: [`${m.startY}vh`, `${m.endY}vh`],
              opacity: [0, 1, 0],
            }}
            transition={{
              delay: m.delay,
              duration: m.duration,
              ease: "linear",
              repeat: Infinity,
              repeatDelay: 6 + Math.random() * 10,
            }}
            style={{
              // visual: long thin streak using gradient via CSS module background
              width: m.width,
            }}
          />
        ))}
      </div>

      {/* Optional children would go on top */}
      <div className="relative z-10">
        {/* place page content here or pass children via props if desired */}
      </div>
    </div>
  );
}
