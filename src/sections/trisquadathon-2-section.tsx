'use client';

import { motion } from 'framer-motion';
import { Zap, Trophy, Clock, Rocket } from 'lucide-react';

const FloatingParticle = ({ delay, duration }) => (
  <motion.div
    animate={{
      y: [0, -30, 0],
      x: [0, 20, 0],
      opacity: [0, 1, 0],
    }}
    transition={{ duration, delay, repeat: Infinity }}
    className="absolute w-2 h-2 bg-cyan-400 rounded-full blur-sm"
  />
);

export function Trisquadathon2Section() {
  return (
    <section id="trisquadathon-2" className="relative mx-auto max-w-7xl px-4 pb-24 pt-8 md:px-8 md:pt-10 overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[620px] bg-[radial-gradient(circle_at_50%_0%,_rgba(34,211,238,0.3),_transparent_50%),radial-gradient(circle_at_0%_100%,_rgba(139,92,246,0.2),_transparent_40%)]" />

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <FloatingParticle
            key={i}
            delay={i * 0.2}
            duration={3 + Math.random() * 2}
          />
        ))}
      </div>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center"
      >
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-cyan-400/50 bg-cyan-400/10 mb-8"
        >
          <Rocket size={18} className="text-cyan-300" />
          <span className="text-sm font-black text-cyan-200 uppercase tracking-[0.1em]">Coming Soon</span>
        </motion.div>

        <h1 className="text-5xl md:text-7xl font-black mb-6">
          <span className="block text-white">Trisquadathon 2.0</span>
          <span className="text-gradient block">The Next Evolution</span>
        </h1>

        {/* Feature Cards */}
        <div className="grid gap-4 md:grid-cols-3 mt-12 mb-12 max-w-3xl mx-auto">
          {[
            { icon: Trophy, text: 'Bigger' },
            { icon: Zap, text: 'Better' },
            { icon: Rocket, text: 'More Innovative' },
          ].map((item, idx) => (
            <motion.div
              key={item.text}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="neon-border glass rounded-2xl p-6 hover:shadow-[0_0_40px_rgba(34,211,238,0.3)] transition"
            >
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, delay: idx * 0.3, repeat: Infinity }}
                className="text-cyan-300 mb-3 flex justify-center"
              >
                <item.icon size={32} />
              </motion.div>
              <h3 className="font-black text-white text-xl">{item.text}</h3>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.button
          whileHover={{ scale: 1.05, boxShadow: '0 0 50px rgba(34,211,238,0.6)' }}
          whileTap={{ scale: 0.95 }}
          className="px-10 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-black rounded-2xl text-lg hover:shadow-[0_0_50px_rgba(34,211,238,0.5)] transition duration-300 mb-12 neon-border"
        >
          Stay Tuned For Updates
        </motion.button>

        {/* Countdown Placeholder */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="glass rounded-3xl border border-cyan-300/40 p-8 neon-border"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Clock size={20} className="text-cyan-300" />
            <span className="font-black text-cyan-200 uppercase tracking-[0.1em] text-sm">Event Countdown</span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { num: 'XX', label: 'Days' },
              { num: 'XX', label: 'Hours' },
              { num: 'XX', label: 'Minutes' },
              { num: 'XX', label: 'Seconds' },
            ].map((item, idx) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-black text-gradient mb-2">{item.num}</div>
                <div className="text-xs font-semibold text-slate-400 uppercase tracking-[0.08em]">{item.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Details Coming Soon */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 space-y-4"
        >
          <p className="text-slate-300 text-lg">
            Prize Pool • Event Themes • Sponsorships • Registration Details
          </p>
          <p className="text-slate-400 text-sm">
            More details coming soon. Be the first to know about Trisquadathon 2.0!
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
