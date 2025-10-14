"use client"

import HobbiesCard from "./HobbiesCard"
import SkillsCard from "./SkillsCard"
import IntroAbout from "./IntroAbout"
import AboutPhoto from "./AboutPhoto"

export default function About() {
  return (
    <main className="relative mx-auto max-w-6xl px-4 py-10 md:px-6 mt-11" id="about">
      <AboutPhoto />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(900px circle at 20% 10%, var(--color-primary) / 0.06, transparent 60%), radial-gradient(900px circle at 80% 20%, var(--color-accent) / 0.06, transparent 60%)",
        }}
      />

      <section className="grid grid-cols-1 items-start gap-6 md:grid-cols-2">
        {/* Left: Intro */}
        <IntroAbout />

        {/* Right: Cards */}
        <div className="flex flex-col gap-6">
          
          <SkillsCard />
          <HobbiesCard />

        </div>
      </section>
    </main>
  )
}
