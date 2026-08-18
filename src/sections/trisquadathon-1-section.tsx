'use client';

import { motion } from 'framer-motion';
import { Award, Users, Trophy, Image as ImageIcon } from 'lucide-react';

const PlaceholderImage = ({ title }) => (
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.6 }}
    className="h-full rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900/50 to-slate-800/30 flex flex-col items-center justify-center gap-4 backdrop-blur-sm"
  >
    <ImageIcon size={48} className="text-slate-500" />
    <p className="text-sm text-slate-400 font-semibold">{title}</p>
  </motion.div>
);

const StatCard = ({ icon: Icon, value, label, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.5, delay: index * 0.06 }}
    className="glass rounded-2xl border border-white/10 p-6 text-center"
  >
    <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-300/35 bg-cyan-400/12 text-cyan-200 shadow-[0_0_20px_rgba(34,211,238,0.25)] mb-3">
      <Icon size={24} />
    </div>
    <div className="text-3xl font-black text-gradient mb-2">{value}</div>
    <p className="text-sm font-semibold text-slate-300">{label}</p>
  </motion.div>
);

export function Trisquadathon1Section() {
  const stats = [
    { icon: Users, value: '200+', label: 'Participants' },
    { icon: Trophy, value: '15', label: 'Teams' },
    { icon: Award, value: '8', label: 'Hours' },
    { icon: Users, value: '50+', label: 'Community Reach' },
  ];

  return (
    <section id="trisquadathon-1" className="relative mx-auto max-w-7xl px-4 pb-24 pt-8 md:px-8 md:pt-10">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[520px] bg-[radial-gradient(circle_at_30%_10%,_rgba(139,92,246,0.2),_transparent_40%),radial-gradient(circle_at_75%_15%,_rgba(34,211,238,0.15),_transparent_35%)]" />

      <motion.div
        initial={{ opacity: 0, y: 26 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.72 }}
        className="relative z-10 mb-14"
      >
        <div className="inline-flex items-center gap-2 rounded-full border border-violet-300/35 bg-violet-500/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-violet-100">
          <Trophy size={12} />
          Flagship Event
        </div>

        <h2 className="mt-5 text-3xl font-black tracking-[-0.04em] text-white sm:text-5xl">
          Trisquadathon 1.0
          <span className="block text-gradient">A Landmark Success</span>
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
          Our inaugural flagship hackathon brought together innovators, builders, and dreamers to collaborate on cutting-edge technical challenges in an intensive sprint of creation and innovation.
        </p>
      </motion.div>

      {/* Statistics */}
      <div className="relative z-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-16">
        {stats.map((stat, idx) => (
          <StatCard key={stat.label} {...stat} index={idx} />
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="relative z-10 grid gap-4 md:grid-cols-2 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="aspect-video"
        >
          <PlaceholderImage title="Event Banner" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="aspect-video"
        >
          <PlaceholderImage title="Event Highlights" />
        </motion.div>
      </div>

      {/* Sections */}
      <div className="relative z-10 space-y-8">
        {['Winners Showcase', 'Runner-Ups', 'Organizing Team', 'Event Moments'].map((title, idx) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: idx * 0.08 }}
            className="glass rounded-2xl border border-white/10 p-8"
          >
            <h3 className="text-2xl font-black text-white mb-6">{title}</h3>
            <div className="grid gap-4 sm:grid-cols-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="aspect-square">
                  <PlaceholderImage title={`Photo ${i}`} />
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
