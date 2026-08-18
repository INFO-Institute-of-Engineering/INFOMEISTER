'use client';

import { motion } from 'framer-motion';
import { Mic, Users, Image as ImageIcon } from 'lucide-react';

const PlaceholderImage = ({ title, size = 'default' }) => (
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.6 }}
    className={`rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900/50 to-slate-800/30 flex flex-col items-center justify-center gap-4 backdrop-blur-sm hover:border-cyan-300/40 transition ${
      size === 'large' ? 'aspect-video' : 'aspect-square'
    }`}
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

export function TechTalksSection() {
  const stats = [
    { icon: Mic, value: '20+', label: 'Tech Talks' },
    { icon: Users, value: '1000+', label: 'Attendees' },
    { icon: Mic, value: '50+', label: 'Industry Speakers' },
  ];

  return (
    <section id="tech-talks" className="relative mx-auto max-w-7xl px-4 pb-24 pt-8 md:px-8 md:pt-10">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[520px] bg-[radial-gradient(circle_at_30%_10%,_rgba(139,92,246,0.2),_transparent_40%),radial-gradient(circle_at_75%_15%,_rgba(34,211,238,0.15),_transparent_35%)]" />

      <motion.div
        initial={{ opacity: 0, y: 26 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.72 }}
        className="relative z-10 mb-14"
      >
        <div className="inline-flex items-center gap-2 rounded-full border border-violet-300/35 bg-violet-500/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-violet-100">
          <Mic size={12} />
          Industry Connect
        </div>

        <h2 className="mt-5 text-3xl font-black tracking-[-0.04em] text-white sm:text-5xl">
          Tech Talks & Seminars
          <span className="block text-gradient">Learning From Experts</span>
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
          Interactive sessions and presentations from industry experts, tech leaders, and innovators sharing insights on cutting-edge technologies, trends, and best practices.
        </p>
      </motion.div>

      {/* Statistics */}
      <div className="relative z-10 grid gap-4 sm:grid-cols-3 mb-16">
        {stats.map((stat, idx) => (
          <StatCard key={stat.label} {...stat} index={idx} />
        ))}
      </div>

      {/* Featured Banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 mb-12"
      >
        <div className="aspect-video">
          <PlaceholderImage title="Featured Tech Talk Banner" size="large" />
        </div>
      </motion.div>

      {/* Highlights */}
      <div className="relative z-10 space-y-8 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="glass rounded-2xl border border-white/10 p-8"
        >
          <h3 className="text-2xl font-black text-white mb-6">Event Highlights</h3>
          <div className="grid gap-4 sm:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="aspect-square">
                <PlaceholderImage title={`Highlight ${i}`} />
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="glass rounded-2xl border border-white/10 p-8"
        >
          <h3 className="text-2xl font-black text-white mb-6">Speaker Highlights</h3>
          <div className="grid gap-4 sm:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                className="glass rounded-2xl border border-white/10 p-6 text-center"
              >
                <div className="h-20 w-20 rounded-full border-2 border-cyan-300/35 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 flex items-center justify-center text-2xl font-black text-cyan-200 mx-auto mb-3">
                  S{i}
                </div>
                <h4 className="font-black text-white">Speaker Name</h4>
                <p className="text-xs text-cyan-200/80 mt-2">Expert Area</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass rounded-2xl border border-white/10 p-8"
        >
          <h3 className="text-2xl font-black text-white mb-6">Event Gallery</h3>
          <div className="grid gap-4 sm:grid-cols-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="aspect-square">
                <PlaceholderImage title={`Photo ${i}`} />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
