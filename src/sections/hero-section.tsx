'use client';

import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import Image from 'next/image';
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
    <section id="home" className="relative w-full">
      <div className="relative mx-auto max-w-7xl px-4 py-6 sm:py-10 md:px-8 md:py-14">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[420px] bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.32),_transparent_45%),radial-gradient(circle_at_80%_20%,_rgba(124,58,237,0.2),_transparent_30%)]" />

        <div className="grid items-center gap-6 sm:gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
          {/* Left column: text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10"
          >
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-gradient-to-r from-blue-500/10 to-violet-500/10 px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.2em] text-blue-100 shadow-[0_0_18px_rgba(96,165,250,0.12)] sm:mb-4 sm:text-[10px] sm:tracking-[0.24em]">
              <Sparkles size={12} className="text-sky-300" />
              Futuristic Tech Community
            </div>

            <h1 className="text-[clamp(1.5rem,4.5vw,4.5rem)] font-black leading-[1.15] tracking-[-0.04em] text-white">
              <span className="block text-gradient">&ldquo;United by passion,</span>
              <span className="block text-gradient">Driven by Excellence&rdquo;</span>
              <span className="mt-1.5 block text-[clamp(0.95rem,2.2vw,2.8rem)] text-slate-200 sm:mt-2">
                <span className="typewriter-caret">{typedText || 'Innovate'}</span>
              </span>
            </h1>

            <p className="mt-3 max-w-xl text-[clamp(13px,1.6vw,17px)] leading-relaxed text-slate-300 sm:mt-4">
              Empowering Future Innovators Through Technology
            </p>

            <div className="mt-4 flex flex-wrap gap-3 sm:mt-5">
              <a
                href="#boards"
                className="inline-flex items-center gap-2 rounded-full border border-blue-300/30 bg-gradient-to-r from-blue-600 to-violet-600 px-5 py-2.5 text-sm font-semibold text-white shadow-[0_0_24px_rgba(59,130,246,0.35)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_30px_rgba(96,165,250,0.45)]"
              >
                Meet Our Team
              </a>
            </div>

            <div className="mt-5 grid grid-cols-3 gap-2 sm:mt-6 sm:gap-3">
              {stats.map((item) => (
                <div
                  key={item.label}
                  className="glass neon-border rounded-xl p-2.5 text-center transition duration-300 hover:-translate-y-1 hover:border-blue-400/40 hover:shadow-[0_0_30px_rgba(96,165,250,0.18)] sm:rounded-2xl sm:p-3"
                >
                  <div className="text-lg font-black text-white sm:text-xl">{item.value}</div>
                  <div className="mt-0.5 text-[9px] uppercase leading-tight tracking-[0.1em] text-slate-400 sm:mt-1 sm:text-[10px]">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Standalone logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="relative z-10 mx-auto flex w-full max-w-[26rem] items-center justify-center"
          >
            <Image
              src="/infomeister-logo.png"
              alt="INFOMEISTER association logo"
              width={640}
              height={640}
              priority
              sizes="(max-width: 1024px) 80vw, 42vw"
              className="h-auto w-full max-w-[26rem] object-contain mix-blend-screen opacity-90 transition hover:opacity-100"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

