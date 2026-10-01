'use client';

import { motion } from 'framer-motion';
import { Mic, Users, type LucideIcon } from 'lucide-react';
import Image from 'next/image';
import { DynamicPlaceholder } from '@/components/dynamic-placeholder';

const PlaceholderImage = ({ title, size = 'default', src, alt, index = 0, animated = false }: { title: string; size?: 'default' | 'large'; src?: string; alt?: string; index?: number; animated?: boolean }) => (
  <motion.div
    initial={{ opacity: 0, y: animated ? 18 : 0, scale: animated ? 0.96 : 1 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true, amount: 0.2 }}
    animate={animated ? { y: [0, index % 2 === 0 ? -3 : 3, 0] } : undefined}
    transition={animated ? { duration: 0.5, delay: index * 0.07 } : { duration: 0.6 }}
    whileHover={animated ? { y: -7, scale: 1.025 } : undefined}
    className={`rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900/50 to-slate-800/30 flex flex-col items-center justify-center gap-4 backdrop-blur-sm hover:border-cyan-300/40 transition ${
      size === 'large' ? 'aspect-video' : 'aspect-square'
    }`}
  >
    {src ? (
      <Image src={src!} alt={alt ?? ''} fill sizes={size === 'large' ? '(max-width: 640px) 100vw, 90vw' : '(max-width: 640px) 100vw, 25vw'} className={`object-cover transition duration-700 ${animated ? 'group-hover:scale-110' : ''}`} />
    ) : (
      <DynamicPlaceholder title={title} />
    )}
  </motion.div>
);

const StatCard = ({ icon: Icon, value, label, index }: { icon: LucideIcon; value: string; label: string; index: number }) => (
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
    { icon: Mic, value: '4', label: 'Tech Talks' },
    { icon: Users, value: '300+', label: 'Attendees' },
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
      <div className="relative z-10 grid gap-4 sm:grid-cols-2 mb-16">
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
          <PlaceholderImage
            title="Featured Tech Talk Banner"
            size="large"
            src="/techbanner.jpg.jpeg"
            alt="INFOMEISTER Tech Talk panel discussion"
          />
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
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="aspect-square">
                <PlaceholderImage
                  title={`Highlight ${i}`}
                  index={i}
                  animated
                  src={i === 1
                    ? '/techtalk-event-hightlight1.jpg.jpeg'
                    : i === 2
                    ? '/techtalk-event-hightlight2.jpg.jpeg'
                    : i === 3
                    ? '/techtalk-event-hightlight3.jpg.jpeg'
                    : i === 4
                    ? '/techtalk-event-hightlight4.jpg.jpeg'
                    : undefined}
                  alt={i <= 3 ? `Tech Talk event highlight ${i}` : undefined}
                />
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
