'use client';

import { motion } from 'framer-motion';
import { Zap, Trophy, Clock, Rocket } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const EVENT_END_TIME = Date.parse('2026-10-29T09:00:00+05:30');

type Countdown = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  ended: boolean;
};

const getCountdown = (): Countdown => {
  const remainingMilliseconds = Math.max(0, EVENT_END_TIME - Date.now());
  const totalSeconds = Math.floor(remainingMilliseconds / 1000);

  return {
    days: Math.floor(totalSeconds / 86400),
    hours: Math.floor((totalSeconds % 86400) / 3600),
    minutes: Math.floor((totalSeconds % 3600) / 60),
    seconds: totalSeconds % 60,
    ended: remainingMilliseconds === 0,
  };
};

const FloatingParticle = ({ delay, duration }: { delay: number; duration: number }) => (
  <motion.div
    animate={{ y: [0, -30, 0], x: [0, 20, 0], opacity: [0, 1, 0] }}
    transition={{ duration, delay, repeat: Infinity }}
    className="absolute h-2 w-2 rounded-full bg-cyan-400 blur-sm"
  />
);

export function Trisquadathon2Section() {
  const [countdown, setCountdown] = useState<Countdown | null>(null);

  useEffect(() => {
    const updateCountdown = () => setCountdown(getCountdown());
    updateCountdown();

    const timer = window.setInterval(updateCountdown, 1000);
    return () => window.clearInterval(timer);
  }, []);

  const countdownValues = countdown
    ? [countdown.days, countdown.hours, countdown.minutes, countdown.seconds]
    : null;

  return (
    <section id="trisquadathon-2" className="relative mx-auto max-w-7xl overflow-hidden px-3 pb-12 pt-6 sm:px-4 sm:pb-16 sm:pt-8 md:px-8 md:pb-20 md:pt-10">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[420px] bg-[radial-gradient(circle_at_50%_0%,_rgba(34,211,238,0.26),_transparent_50%),radial-gradient(circle_at_0%_100%,_rgba(37,99,235,0.2),_transparent_40%)] sm:h-[520px]" />
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, index) => (
          <FloatingParticle key={index} delay={index * 0.2} duration={3 + (index % 4) * 0.5} />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center"
      >
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/50 bg-cyan-400/10 px-3 py-1.5 sm:mb-8 sm:gap-3 sm:px-4 sm:py-2">
          <Rocket size={18} className="text-cyan-300" />
          <span className="text-xs font-black uppercase tracking-[0.1em] text-cyan-200 sm:text-sm">On Going</span>
        </div>

        <h1 className="mb-5 text-[clamp(1.8rem,8vw,4.5rem)] font-black leading-[1.1] sm:mb-6 sm:text-[clamp(2rem,6vw,4.5rem)]">
          <span className="block text-white">Trisquadathon 2.0</span>
          <span className="text-gradient block">The Next Evolution</span>
        </h1>



        <div className="mx-auto mb-8 mt-8 grid w-full max-w-3xl grid-cols-1 gap-3 sm:mb-10 sm:mt-10 sm:grid-cols-3 sm:gap-4">
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
              className="neon-border glass rounded-2xl p-4 transition hover:shadow-[0_0_40px_rgba(34,211,238,0.3)] sm:p-6"
            >
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, delay: idx * 0.3, repeat: Infinity }}
                className="mb-2 flex justify-center text-cyan-300 sm:mb-3"
              >
                <item.icon size={32} />
              </motion.div>
              <h3 className="text-lg font-black text-white sm:text-xl">{item.text}</h3>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8 flex justify-center sm:mb-10"
        >
          <motion.a
            href="https://trisquadathon.infomeister.co.in/"
            target="_blank"
            rel="noreferrer"
            aria-label="Register now for Trisquadathon 2.0"
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(34,211,238,0.6)' }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex w-full max-w-xs items-center justify-center rounded-2xl bg-cyan-500 px-6 py-3.5 text-base font-black text-white shadow-[0_0_20px_rgba(34,211,238,0.4)] transition hover:bg-cyan-400 sm:px-8 sm:text-lg"
          >
            Register Now
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          whileHover={{ y: -4, boxShadow: '0 0 48px rgba(34,211,238,0.28)' }}
          className="mx-auto mb-8 w-full max-w-[720px] overflow-hidden rounded-2xl border border-cyan-300/40 bg-cyan-950/20 p-1.5 shadow-[0_0_32px_rgba(34,211,238,0.18)] backdrop-blur-md neon-border sm:mb-10 sm:rounded-3xl sm:p-3"
        >
          <div className="relative w-full overflow-hidden rounded-xl bg-slate-950 sm:rounded-2xl">
            <Image
              src="/tri-poster2.0.jpeg"
              alt="Trisquadathon 2.0 hackathon poster"
              width={720}
              height={1280}
              sizes="(max-width: 720px) calc(100vw - 24px), 720px"
              quality={85}
              loading="lazy"
              className="h-auto w-full object-contain"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="glass mx-auto w-full max-w-4xl rounded-3xl border border-cyan-300/40 p-5 neon-border sm:p-8"
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
                <div className="mb-2 text-3xl font-black text-gradient md:text-4xl">
                  {countdownValues ? String(countdownValues[index]).padStart(2, '0') : 'XX'}
                </div>
                <div className="text-xs font-semibold uppercase tracking-[0.08em] text-slate-400">{label}</div>
              </motion.div>
            ))}
          </div>
          {countdown?.ended && <div className="mt-4 text-sm font-black uppercase tracking-[0.1em] text-cyan-200">Event Ended</div>}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 space-y-3 sm:mt-12 sm:space-y-4"
        >
          <p className="text-base text-slate-300 sm:text-lg">Prize Pool • Event Themes • Sponsorships • Registration Details</p>
        </motion.div>
      </motion.div>
    </section>
  );
}
