'use client';

import { motion } from 'framer-motion';
import { Cpu, Radar, Rocket, ShieldCheck } from 'lucide-react';

const pillars = [
  {
    title: 'Hands-On Engineering',
    detail: 'Build-first culture with practical systems, product architecture, and deployment mindset.',
    icon: Cpu,
  },
  {
    title: 'Research + Rapid Prototyping',
    detail: 'From concept to proof-of-value using structured experimentation and iterative testing loops.',
    icon: Radar,
  },
  {
    title: 'Career-Ready Execution',
    detail: 'Team workflows, technical communication, and leadership outcomes tuned for real industry work.',
    icon: Rocket,
  },
  {
    title: 'Ethical Innovation',
    detail: 'Security awareness and responsible development embedded into every technical initiative.',
    icon: ShieldCheck,
  },
];

export function AboutSection() {
  return (
    <section id="about" className="relative mx-auto max-w-7xl px-4 pb-20 pt-8 md:px-8 md:pt-10">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[440px] bg-[radial-gradient(circle_at_15%_20%,_rgba(56,189,248,0.2),_transparent_45%),radial-gradient(circle_at_90%_0%,_rgba(124,58,237,0.18),_transparent_32%)]" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.8 }}
        className="relative z-10"
      >
        <div className="inline-flex items-center rounded-full border border-sky-300/30 bg-sky-500/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-sky-100">
          About INFOMEISTER
        </div>

        <div className="mt-5 grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <div>
            <h2 className="text-3xl font-black tracking-[-0.04em] text-white sm:text-5xl">
              A Technical Ecosystem for
              <span className="block text-gradient">Future-Ready Builders</span>
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
              INFOMEISTER is a high-performance student association focused on building practical technology capability.
              We combine innovation, mentorship, and execution discipline to transform ideas into working impact.
            </p>
          </div>

          <div className="glass neon-border rounded-3xl p-4 sm:p-5">
            <div className="text-xs font-semibold uppercase tracking-[0.16em] text-sky-200/90">Association Signature</div>
            <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-[15px]">
              United by passion, Driven by Excellence.
            </p>
            <div className="mt-4 h-px w-full bg-gradient-to-r from-transparent via-sky-300/30 to-transparent" />
            <div className="mt-4 grid grid-cols-2 gap-3 text-center">
              <div className="rounded-2xl border border-white/10 bg-slate-900/50 p-3">
                <div className="text-xl font-black text-white">500+</div>
                <div className="mt-1 text-[11px] uppercase tracking-[0.12em] text-slate-400">Students</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-slate-900/50 p-3">
                <div className="text-xl font-black text-white">35+</div>
                <div className="mt-1 text-[11px] uppercase tracking-[0.12em] text-slate-400">Events</div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="relative z-10 mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {pillars.map((pillar, index) => {
          const Icon = pillar.icon;
          return (
            <motion.article
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: index * 0.06 }}
              className="group glass rounded-3xl p-5 transition duration-300 hover:-translate-y-1 hover:border-sky-300/40 hover:shadow-[0_0_35px_rgba(56,189,248,0.17)]"
            >
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-sky-300/35 bg-sky-400/12 text-sky-200 shadow-[0_0_24px_rgba(56,189,248,0.28)]">
                <Icon size={20} />
              </div>
              <h3 className="mt-4 text-lg font-extrabold tracking-[-0.01em] text-white">{pillar.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">{pillar.detail}</p>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
