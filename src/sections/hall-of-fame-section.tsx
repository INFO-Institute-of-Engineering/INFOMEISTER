'use client';

import { motion } from 'framer-motion';
import { Trophy, Star, Zap, Heart, Image as ImageIcon } from 'lucide-react';

const HallOfFameCard = ({ category, icon: Icon, count, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.5, delay: index * 0.08 }}
    className="group glass rounded-2xl border border-white/10 p-6 hover:border-cyan-300/40 transition duration-300 hover:shadow-[0_0_35px_rgba(34,211,238,0.16)]"
  >
    <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-300/35 bg-cyan-400/12 text-cyan-200 shadow-[0_0_20px_rgba(34,211,238,0.25)] group-hover:shadow-[0_0_40px_rgba(34,211,238,0.4)] mb-4 transition-all duration-300">
      <Icon size={24} />
    </div>
    <h3 className="text-lg font-black text-white mb-2">{category}</h3>
    <p className="text-2xl font-black text-gradient">{count}</p>
  </motion.div>
);

const PlaceholderImage = ({ title }) => (
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.6 }}
    className="h-full rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900/50 to-slate-800/30 flex flex-col items-center justify-center gap-4 backdrop-blur-sm hover:border-cyan-300/40 transition"
  >
    <ImageIcon size={48} className="text-slate-500" />
    <p className="text-sm text-slate-400 font-semibold">{title}</p>
  </motion.div>
);

export function HallOfFameSection() {
  const categories = [
    { category: 'Grand Winners', icon: Trophy, count: 3 },
    { category: 'Runner-Ups', icon: Star, count: 6 },
    { category: 'Best Innovation Award', icon: Zap, count: 2 },
    { category: 'Special Recognition', icon: Heart, count: 5 },
  ];

  return (
    <section id="hall-of-fame" className="relative mx-auto max-w-7xl px-4 pb-24 pt-8 md:px-8 md:pt-10">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[520px] bg-[radial-gradient(circle_at_25%_20%,_rgba(34,211,238,0.2),_transparent_44%),radial-gradient(circle_at_85%_10%,_rgba(139,92,246,0.15),_transparent_36%)]" />

      <motion.div
        initial={{ opacity: 0, y: 26 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.72 }}
        className="relative z-10 mb-14"
      >
        <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/35 bg-cyan-500/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-100">
          <Trophy size={12} />
          Recognition
        </div>

        <h2 className="mt-5 text-3xl font-black tracking-[-0.04em] text-white sm:text-5xl">
          Hall Of Fame
          <span className="block text-gradient">Celebrating Excellence</span>
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
          Honoring the exceptional talents, innovations, and contributions of individuals who have excelled at INFOMEISTER events.
        </p>
      </motion.div>

      {/* Categories Overview */}
      <div className="relative z-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-16">
        {categories.map((cat, idx) => (
          <HallOfFameCard key={cat.category} {...cat} index={idx} />
        ))}
      </div>

      {/* Detailed Sections */}
      <div className="relative z-10 space-y-12">
        {categories.map((category, categoryIdx) => (
          <motion.div
            key={category.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: categoryIdx * 0.08 }}
            className="glass rounded-2xl border border-white/10 p-8"
          >
            <h3 className="text-2xl font-black text-white mb-6 flex items-center gap-3">
              <category.icon size={28} className="text-cyan-300" />
              {category.category}
            </h3>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3].map((i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  className="aspect-square"
                >
                  <PlaceholderImage title={`Award ${i}`} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
