"use client";

import React from "react";

export default function Hero() {
  return (
    <section id="home"
      className="relative min-h-[100svh] overflow-hidden bg-background text-foreground"
      aria-label="Hero"
    >
      {/* 🟣 Background titik-titik */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          backgroundColor: "hsl(var(--background))",
          backgroundImage: `radial-gradient(hsl(var(--foreground)) 1.8px, transparent 1.8px)`,
          backgroundSize: "28px 28px",
        }}
      />

      {/* 🟢 Konten utama */}
      <div className="relative z-10 mx-auto flex h-[100svh] max-w-7xl flex-col items-center justify-center px-6 text-center">
        <div className="max-w-3xl">
          <h1 className="text-balance font-sans text-4xl font-semibold tracking-tight md:text-6xl">
            Hello I'am Rojabby as {" "}
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              a Front End Developer
            </span>
          </h1>

          <p className="mt-4 text-pretty font-sans text-base leading-relaxed text-muted-foreground md:mt-6 md:text-lg">
            This is my portfolio, let's collaborate 👌
          </p>

          <div className="mt-8 flex items-center justify-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-all hover:scale-105 hover:bg-primary/90"
            >
              Explore Projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-md border border-input bg-transparent px-5 py-2.5 text-sm font-medium text-foreground/80 transition-all hover:scale-105 hover:bg-accent hover:text-accent-foreground"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>

      {/* Soft vignette overlay biar lebih lembut */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(1200px 600px at 50% -20%, hsl(var(--primary)/0.08), transparent 60%)",
        }}
      />
    </section>
  );
}
