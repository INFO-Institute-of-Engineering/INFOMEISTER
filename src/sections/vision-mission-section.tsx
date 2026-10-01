'use client';

import { motion } from 'framer-motion';
import { Eye, Flag, Orbit, Target } from 'lucide-react';

const missionPoints = [
  'Deliver deep technical exposure through practical projects, labs, and collaborative execution.',
  'Build innovation confidence with mentorship, hack culture, and real-world problem solving.',
  'Create a future-ready community where discipline, ethics, and excellence drive every outcome.',
];

const focusCards = [
  {
    title: 'Strategic Vision',
    detail: 'Shape a next-generation tech community that transforms students into creators, leaders, and innovators.',
    icon: Eye,
  },
  {
    title: 'Mission Execution',
    detail: 'Turn ambition into measurable impact through structured learning pathways and engineering-first culture.',
    icon: Flag,
  },
  {
    title: 'Long-Term Orbit',
    detail: 'Sustain momentum with continuous experimentation, cross-domain exposure, and high-quality collaboration.',
    icon: Orbit,
  },
  {
    title: 'Outcome Target',
    detail: 'Produce students who can design, build, present, and scale meaningful technical solutions.',
    icon: Target,
  },
];

export function VisionMissionSection() {
  return (
    <section id="vision" className="relative mx-auto max-w-7xl px-4 pb-20 pt-8 md:px-8 md:pt-10">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[460px] bg-[radial-gradient(circle_at_82%_0%,_rgba(59,130,246,0.22),_transparent_34%),radial-gradient(circle_at_20%_30%,_rgba(124,58,237,0.18),_transparent_40%)]" />

      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.75 }}
        className="relative z-10"
      >
        <div className="inline-flex items-center rounded-full border border-blue-300/30 bg-blue-500/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-blue-100">
          Vision & Mission
        </div>

        <div className="mt-5 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="glass neon-border rounded-3xl p-5 sm:p-6">
            <h2 className="text-3xl font-black tracking-[-0.04em] text-white sm:text-5xl">
              Vision That Inspires.
              <span className="block text-gradient">Mission That Delivers.</span>
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-300 sm:text-base">
              INFOMEISTER envisions a bold ecosystem where students become technically strong, creatively fearless,
              and professionally ready to solve meaningful challenges.
            </p>
            <div className="mt-5 h-px w-full bg-gradient-to-r from-transparent via-blue-300/35 to-transparent" />
            <p className="mt-5 text-sm leading-relaxed text-slate-300 sm:text-base">
              United by passion, Driven by Excellence.
            </p>
          </div>

          <div className="glass rounded-3xl p-5 sm:p-6">
            <div className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-200">Mission Priorities</div>
            <ul className="mt-4 space-y-3">
              {missionPoints.map((point) => (
                <li
                  key={point}
                  className="rounded-2xl border border-white/10 bg-slate-900/55 px-4 py-3 text-sm leading-relaxed text-slate-300"
                >
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>

      <div className="relative z-10 mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {focusCards.map((card, index) => {
          const Icon = card.icon;
          return (
            <motion.article
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: index * 0.06 }}
              className="group glass rounded-3xl p-5 transition duration-300 hover:-translate-y-1 hover:border-blue-300/40 hover:shadow-[0_0_35px_rgba(96,165,250,0.16)]"
            >
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-blue-300/35 bg-blue-400/12 text-blue-200 shadow-[0_0_24px_rgba(96,165,250,0.28)]">
                <Icon size={20} />
              </div>
              <h3 className="mt-4 text-lg font-extrabold tracking-[-0.01em] text-white">{card.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">{card.detail}</p>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
