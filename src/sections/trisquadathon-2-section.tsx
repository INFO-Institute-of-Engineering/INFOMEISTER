'use client';

import { motion } from 'framer-motion';
import { Zap, Trophy, Clock, Rocket } from 'lucide-react';

const FloatingParticle = ({ delay, duration }: { delay: number; duration: number }) => (
  <motion.div
    animate={{ y: [0, -30, 0], x: [0, 20, 0], opacity: [0, 1, 0] }}
    transition={{ duration, delay, repeat: Infinity }}
    className="absolute h-2 w-2 rounded-full bg-cyan-400 blur-sm"
  />
);

export function Trisquadathon2Section() {
  return (
    <section id="trisquadathon-2" className="relative mx-auto max-w-7xl overflow-hidden px-4 pb-24 pt-8 md:px-8 md:pt-10">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[520px] bg-[radial-gradient(circle_at_50%_0%,_rgba(34,211,238,0.26),_transparent_50%),radial-gradient(circle_at_0%_100%,_rgba(37,99,235,0.2),_transparent_40%)]" />
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, index) => (
          <FloatingParticle key={index} delay={index * 0.2} duration={3 + (index % 4) * 0.5} />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center"
      >
        <div className="inline-flex items-center gap-3 rounded-full border border-cyan-400/50 bg-cyan-400/10 px-4 py-2 mb-8">
          <Rocket size={18} className="text-cyan-300" />
          <span className="text-sm font-black text-cyan-200 uppercase tracking-[0.1em]">Coming Soon</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-black mb-6">
          <span className="block text-white">Trisquadathon 2.0</span>
          <span className="text-gradient block">The Next Evolution</span>
        </h1>

        <div className="grid max-w-3xl gap-4 sm:grid-cols-3 mt-12 mb-12 mx-auto">
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

        <motion.a
          href="https://trisquadathon.infomeister.co.in/"
          target="_blank"
          rel="noreferrer"
          aria-label="See Trisquadathon 2.0 updates"
          whileHover={{ scale: 1.05, boxShadow: '0 0 50px rgba(34,211,238,0.6)' }}
          whileTap={{ scale: 0.95 }}
          role="button"
          className="mb-12 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-10 py-4 text-lg font-black text-white transition duration-300 hover:shadow-[0_0_50px_rgba(34,211,238,0.5)] neon-border"
        >
          Stay Tuned For Updates
        </motion.a>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="glass rounded-3xl border border-cyan-300/40 p-8 neon-border"
        >
          <div className="mb-4 flex items-center justify-center gap-2">
            <Clock size={20} className="text-cyan-300" />
            <span className="text-sm font-black uppercase tracking-[0.1em] text-cyan-200">Event Countdown</span>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {['Days', 'Hours', 'Minutes', 'Seconds'].map((label, index) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="mb-2 text-3xl font-black text-gradient md:text-4xl">XX</div>
                <div className="text-xs font-semibold uppercase tracking-[0.08em] text-slate-400">{label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 space-y-4"
        >
          <p className="text-lg text-slate-300">Prize Pool • Event Themes • Sponsorships • Registration Details</p>
          <p className="text-sm text-slate-400">More details coming soon. Be the first to know about Trisquadathon 2.0!</p>
        </motion.div>
      </motion.div>
    </section>
  );
}
