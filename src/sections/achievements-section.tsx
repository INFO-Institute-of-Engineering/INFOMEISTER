'use client';

import { motion } from 'framer-motion';
import { Users, Zap, BookOpen, Network, type LucideIcon } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';

const AnimatedCounter = ({ targetValue, duration = 2.5, suffix = '' }: { targetValue: number; duration?: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;

    let start = 0;
    const increment = targetValue / (duration * 60);
    const timer = setInterval(() => {
      start += increment;
      if (start >= targetValue) {
        setCount(targetValue);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [inView, targetValue, duration]);

  return (
    <div ref={ref} className="text-4xl md:text-5xl font-black text-gradient">
      {count}
      {suffix}
    </div>
  );
};

const AchievementCard = ({ icon: Icon, label, value, suffix, index }: { icon: LucideIcon; label: string; value: number; suffix: string; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.5, delay: index * 0.08 }}
    className="group glass rounded-2xl border border-white/10 p-8 text-center hover:border-cyan-300/40 transition duration-300 hover:shadow-[0_0_35px_rgba(34,211,238,0.16)]"
  >
    <motion.div
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 3, repeat: Infinity }}
      className="inline-flex h-14 w-14 items-center justify-center rounded-xl border border-cyan-300/35 bg-cyan-400/12 text-cyan-200 shadow-[0_0_24px_rgba(34,211,238,0.25)] group-hover:shadow-[0_0_40px_rgba(34,211,238,0.4)] mb-4 transition-all duration-300"
    >
      <Icon size={28} />
    </motion.div>

    <AnimatedCounter targetValue={value} suffix={suffix} />

    <p className="mt-4 text-sm font-semibold uppercase tracking-[0.12em] text-slate-300">{label}</p>
  </motion.div>
);

export function AchievementsSection() {
  const achievements = [
    { icon: Users, label: 'Students Reached', value: 500, suffix: '+' },
    { icon: Zap, label: 'Events Conducted', value: 35, suffix: '+' },
    { icon: BookOpen, label: 'Workshops', value: 40, suffix: '+' },
    { icon: Network, label: 'Community Reach', value: 150, suffix: '+' },
  ];

  return (
    <section id="achievements" className="relative mx-auto max-w-7xl px-4 pb-24 pt-8 md:px-8 md:pt-10">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[520px] bg-[radial-gradient(circle_at_20%_20%,_rgba(14,165,233,0.2),_transparent_45%),radial-gradient(circle_at_85%_5%,_rgba(59,130,246,0.2),_transparent_34%)]" />

      <motion.div
        initial={{ opacity: 0, y: 26 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.72 }}
        className="relative z-10 mb-14 text-center"
      >
        <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/35 bg-cyan-500/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-100">
          <Zap size={12} />
          Impact Metrics
        </div>

        <h2 className="mt-5 text-3xl font-black tracking-[-0.04em] text-white sm:text-5xl">
          By The Numbers
          <span className="block text-gradient">Our Impact So Far</span>
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg mx-auto">
          Measurable results. Tangible impact. Real growth in technical excellence and community building.
        </p>
      </motion.div>

      <div className="relative z-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {achievements.map((achievement, index) => (
          <AchievementCard key={achievement.label} {...achievement} index={index} />
        ))}
      </div>
    </section>
  );
}
