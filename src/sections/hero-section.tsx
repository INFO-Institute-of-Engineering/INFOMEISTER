'use client';

import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { useEffect, useState } from 'react';

const words = ['Innovate', 'Build', 'Lead', 'Create', 'Inspire', 'Transform'];

const stats = [
  { label: 'Students Impacted', value: '500+' },
  { label: 'Events Conducted', value: '35+' },
  { label: 'Workshops', value: '40+' },
];

export function HeroSection() {
  const [wordIndex, setWordIndex] = useState(0);
  const [typedText, setTypedText] = useState('');

  useEffect(() => {
    const currentWord = words[wordIndex % words.length];
    let index = 0;
    const interval = setInterval(() => {
      index += 1;
      setTypedText(currentWord.slice(0, index));

      if (index >= currentWord.length) {
        clearInterval(interval);
        setTimeout(() => {
          setWordIndex((prev) => (prev + 1) % words.length);
          setTypedText('');
        }, 1300);
      }
    }, 110);

    return () => clearInterval(interval);
  }, [wordIndex]);

  return (
    <section id="home" className="relative mx-auto max-w-7xl px-4 pb-16 pt-8 sm:pb-20 sm:pt-10 md:px-8 md:pt-16">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[620px] bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.32),_transparent_45%),radial-gradient(circle_at_80%_20%,_rgba(124,58,237,0.2),_transparent_30%)]" />
      <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-gradient-to-r from-blue-500/10 to-violet-500/10 px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.2em] text-blue-100 shadow-[0_0_18px_rgba(96,165,250,0.12)] sm:mb-6 sm:text-[10px] sm:tracking-[0.24em]">
            <Sparkles size={12} className="text-sky-300" />
            Futuristic Tech Community
          </div>

          <h1 className="text-3xl font-black tracking-[-0.05em] text-white sm:text-5xl sm:tracking-[-0.06em] md:text-7xl">
            <span className="block text-gradient">“United by passion,</span>
            <span className="block text-gradient">Driven by Excellence”</span>
            <span className="mt-2 block text-xl text-slate-200 sm:mt-3 sm:text-3xl md:text-5xl">
              <span className="typewriter-caret">{typedText || 'Innovate'}</span>
            </span>
          </h1>

          <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-slate-300 sm:mt-6 sm:text-lg md:text-xl">
            Empowering Future Innovators Through Technology
          </p>

          <div className="mt-7 flex flex-wrap gap-3 sm:mt-8 sm:gap-4">
            <a
              href="#boards"
              className="inline-flex items-center gap-2 rounded-full border border-blue-300/30 bg-gradient-to-r from-blue-600 to-violet-600 px-5 py-2.5 text-sm font-semibold text-white shadow-[0_0_24px_rgba(59,130,246,0.35)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_30px_rgba(96,165,250,0.45)] sm:px-6 sm:py-3 sm:text-base"
            >
              Meet Our Team
            </a>
          </div>

          <div className="mt-8 grid max-w-xl grid-cols-1 gap-4 sm:mt-10 sm:grid-cols-3">
            {stats.map((item) => (
              <div key={item.label} className="glass neon-border rounded-2xl p-4 transition duration-300 hover:-translate-y-1 hover:border-blue-400/40 hover:shadow-[0_0_30px_rgba(96,165,250,0.18)]">
                <div className="text-2xl font-black text-white">{item.value}</div>
                <div className="mt-2 text-[11px] uppercase tracking-[0.12em] text-slate-400">{item.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="relative z-10"
        >
          <div className="glass neon-border relative overflow-hidden rounded-[2rem] p-3 sm:p-4">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(37,99,235,0.2),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(56,189,248,0.2),transparent_30%)]" />
            <div className="relative rounded-[1.6rem] border border-white/10 bg-[#0b1020]/80 p-3 sm:p-4 shadow-[0_0_30px_rgba(37,99,235,0.12)]">
              <div className="mb-4 flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-red-400 shadow-[0_0_12px_rgba(248,113,113,0.7)]" />
                <span className="h-3 w-3 rounded-full bg-yellow-400 shadow-[0_0_12px_rgba(251,191,36,0.7)]" />
                <span className="h-3 w-3 rounded-full bg-green-400 shadow-[0_0_12px_rgba(74,222,128,0.7)]" />
              </div>

              <div className="relative aspect-[5/6] w-full overflow-hidden rounded-[1.4rem] border border-blue-400/20 bg-[radial-gradient(circle_at_center,_rgba(37,99,235,0.26),_rgba(9,12,18,1)_58%)] sm:aspect-[4/4.5] md:aspect-[4/5] shadow-[inset_0_0_30px_rgba(96,165,250,0.08)]">
                <div className="absolute inset-0 animate-drift bg-[radial-gradient(circle_at_30%_30%,white,transparent_25%),radial-gradient(circle_at_70%_20%,rgba(56,189,248,0.8),transparent_20%)] opacity-80" />

                <div className="absolute inset-0 flex items-center justify-center">
                  <img
                    src="/Info%20logo%20dark%20bblue.png"
                    alt="INFOMEISTER logo"
                    className="h-[90%] w-[90%] object-contain drop-shadow-[0_0_34px_rgba(96,165,250,0.7)]"
                  />
                </div>


              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
