'use client';

import { motion } from 'framer-motion';
import { Zap, Trophy } from 'lucide-react';

const timelineEvents = [
  {
    year: 2025,
    title: 'INFOMEISTER Association Founded',
    description: 'The beginning of a revolution in technical education and community building.',
    icon: Zap,
    isFirst: true,
  },
  {
    year: 2025,
    title: 'Trisquadathon 1.0 Successfully Conducted',
    description: 'A landmark hackathon event that brought together innovators and builders.',
    icon: Trophy,
  },
  {
    year: 2026,
    title: 'Tech Talks, Workshops & Community Activities Expanded',
    description: 'Expanded reach with industry experts, coding bootcamps, and hands-on sessions.',
    icon: Zap,
  },
  {
    year: 2026,
    title: 'Trisquadathon 2.0 Coming Soon',
    description: 'Bigger. Better. More Competitive. More Innovative.',
    icon: Trophy,
    isUpcoming: true,
  },
];

const TimelineNode = ({ event, index, isLast }) => {
  const isUpcoming = event.isUpcoming;
  const Icon = event.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative"
    >
      {/* Timeline Line */}
      {!isLast && (
        <div className="absolute left-8 top-24 h-20 w-px bg-gradient-to-b from-cyan-400/50 to-transparent md:h-32" />
      )}

      {/* Main Content */}
      <div className="flex gap-6 md:gap-8">
        {/* Node Circle */}
        <div className="relative flex flex-col items-center pt-1">
          <motion.div
            animate={isUpcoming ? { boxShadow: ['0 0 20px rgba(34,211,238,0.8)', '0 0 40px rgba(34,211,238,1)', '0 0 20px rgba(34,211,238,0.8)'] } : {}}
            transition={isUpcoming ? { duration: 2, repeat: Infinity } : {}}
            className={`h-16 w-16 rounded-full border-2 flex items-center justify-center backdrop-blur-sm ${
              isUpcoming
                ? 'border-cyan-400 bg-cyan-400/20 text-cyan-200 shadow-[0_0_30px_rgba(34,211,238,0.6)]'
                : 'border-blue-400/50 bg-blue-500/10 text-blue-300'
            }`}
          >
            <Icon size={28} />
          </motion.div>
        </div>

        {/* Content Card */}
        <motion.div
          whileHover={isUpcoming ? { scale: 1.02 } : {}}
          className={`glass rounded-2xl border pb-6 pt-4 px-6 flex-1 transition-all duration-300 ${
            isUpcoming
              ? 'border-cyan-300/40 shadow-[0_0_30px_rgba(34,211,238,0.15)] hover:shadow-[0_0_40px_rgba(34,211,238,0.25)]'
              : 'border-white/10 hover:border-cyan-300/30'
          }`}
        >
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <div className="text-xs font-black uppercase tracking-[0.15em] text-cyan-200/80 mb-2">
                {event.year}
              </div>
              <h3 className={`text-xl font-black tracking-[-0.02em] mb-2 ${
                isUpcoming ? 'text-cyan-100 text-gradient' : 'text-white'
              }`}>
                {event.title}
              </h3>
              <p className="text-sm leading-relaxed text-slate-300">{event.description}</p>
            </div>
            {isUpcoming && (
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="px-3 py-1 rounded-lg bg-gradient-to-r from-cyan-500/30 to-blue-500/30 border border-cyan-400/50 text-xs font-black text-cyan-200 whitespace-nowrap mt-1"
              >
                COMING SOON
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export function LegacyTimelineSection() {
  return (
    <section id="timeline" className="relative mx-auto max-w-7xl px-4 pb-24 pt-8 md:px-8 md:pt-10">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[520px] bg-[radial-gradient(circle_at_25%_20%,_rgba(34,211,238,0.2),_transparent_44%),radial-gradient(circle_at_85%_10%,_rgba(139,92,246,0.15),_transparent_36%)]" />

      <motion.div
        initial={{ opacity: 0, y: 26 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.72 }}
        className="relative z-10 mb-14"
      >
        <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/35 bg-cyan-500/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-100">
          <Zap size={12} />
          Our Journey
        </div>

        <h2 className="mt-5 text-3xl font-black tracking-[-0.04em] text-white sm:text-5xl">
          Legacy & Impact
          <span className="block text-gradient">Through Time</span>
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
          From our founding in 2025 to the upcoming Trisquadathon 2.0, here's the story of INFOMEISTER's impact on the tech community.
        </p>
      </motion.div>

      {/* Timeline */}
      <div className="relative z-10 space-y-8 md:space-y-12">
        {timelineEvents.map((event, index) => (
          <TimelineNode key={event.title} event={event} index={index} isLast={index === timelineEvents.length - 1} />
        ))}
      </div>

      {/* Trisquadathon 2.0 Highlight */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="relative z-10 mt-16 neon-border glass rounded-3xl p-8 md:p-12 text-center overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-transparent to-blue-500/10 pointer-events-none" />
        
        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute -top-10 -right-10 w-40 h-40 bg-cyan-400/20 rounded-full blur-3xl pointer-events-none"
        />

        <div className="relative z-10">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-cyan-400/50 bg-cyan-400/10 mb-6">
            <motion.div animate={{ rotate: 360 }} transition={{ duration: 4, repeat: Infinity }} className="text-cyan-300">
              <Trophy size={20} />
            </motion.div>
            <span className="text-sm font-black text-cyan-200 uppercase tracking-[0.1em]">Major Highlight</span>
          </div>

          <h3 className="text-4xl md:text-5xl font-black text-gradient mb-4">Trisquadathon 2.0</h3>
          
          <div className="grid gap-4 md:gap-6 md:grid-cols-3 mt-8">
            <motion.div whileHover={{ scale: 1.05 }} className="glass rounded-2xl border border-white/10 p-6 hover:border-cyan-300/40 transition">
              <div className="text-3xl font-black text-cyan-200 mb-2">Bigger</div>
              <p className="text-sm text-slate-300">More participants, greater reach, massive scale</p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} className="glass rounded-2xl border border-white/10 p-6 hover:border-cyan-300/40 transition">
              <div className="text-3xl font-black text-cyan-200 mb-2">Better</div>
              <p className="text-sm text-slate-300">Enhanced experience, premium infrastructure, elite caliber</p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} className="glass rounded-2xl border border-white/10 p-6 hover:border-cyan-300/40 transition">
              <div className="text-3xl font-black text-cyan-200 mb-2">Innovative</div>
              <p className="text-sm text-slate-300">New challenges, cutting-edge tech, breakthrough ideas</p>
            </motion.div>
          </div>

          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(34,211,238,0.5)' }}
            whileTap={{ scale: 0.95 }}
            className="mt-10 px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-black rounded-xl hover:shadow-[0_0_40px_rgba(34,211,238,0.4)] transition duration-300"
          >
            Be Part Of The Revolution
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
}
