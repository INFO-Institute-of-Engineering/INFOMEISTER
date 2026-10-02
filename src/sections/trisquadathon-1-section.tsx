'use client';

import { motion } from 'framer-motion';
import { Medal, Trophy } from 'lucide-react';
import Image from 'next/image';
import { DynamicPlaceholder } from '@/components/dynamic-placeholder';

const PlaceholderImage = ({ src, alt, index }: { src?: string; alt?: string; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 18, scale: 0.96 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true, amount: 0.2 }}
    animate={{ y: [0, index % 2 === 0 ? -3 : 3, 0] }}
    transition={{ duration: 0.5, delay: index * 0.06 }}
    whileHover={{ y: -7, scale: 1.025 }}
    className="group relative h-full overflow-hidden rounded-2xl border border-cyan-300/25 bg-gradient-to-br from-slate-900/70 to-slate-800/40 shadow-[0_0_24px_rgba(34,211,238,0.1)] transition-shadow duration-300 hover:border-cyan-200/70 hover:shadow-[0_0_36px_rgba(34,211,238,0.28)]"
  >
    {src ? (
      <>
        <Image src={src!} alt={alt ?? ''} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover transition duration-700 group-hover:scale-110" />
        <motion.span
          aria-hidden="true"
          initial={{ x: '-140%' }}
          whileHover={{ x: '260%' }}
          transition={{ duration: 0.85, ease: 'easeInOut' }}
          className="pointer-events-none absolute inset-y-0 left-0 w-2/5 -skew-x-12 bg-gradient-to-r from-transparent via-white/25 to-transparent"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/35 via-transparent to-cyan-200/10 opacity-70" />
      </>
    ) : (
      <DynamicPlaceholder title="Event photo coming soon" />
    )}
  </motion.div>
);

export function Trisquadathon1Section() {
  const winners = [
    {
      rank: '1st Prize',
      prize: '₹10,000',
      team: 'Club IQ',
      institution: 'SNS College of Engineering',
      icon: '🥇',
      accent: 'from-amber-300 via-yellow-400 to-orange-500',
      border: 'border-amber-300/50',
      glow: 'shadow-[0_0_35px_rgba(251,191,36,0.2)]',
    },
    {
      rank: '2nd Prize',
      prize: '₹5,000',
      team: 'ErrorOps',
      institution: 'Info Institute of Engineering',
      icon: '🥈',
      accent: 'from-slate-200 via-slate-300 to-slate-500',
      border: 'border-slate-200/45',
      glow: 'shadow-[0_0_35px_rgba(203,213,225,0.16)]',
    },
    {
      rank: '3rd Prize',
      prize: '₹2,500',
      team: 'Unity Force',
      institution: 'Info Institute of Engineering',
      icon: '🥉',
      accent: 'from-orange-300 via-amber-500 to-orange-700',
      border: 'border-orange-300/45',
      glow: 'shadow-[0_0_35px_rgba(249,115,22,0.16)]',
    },
  ];

  return (
    <section id="trisquadathon-1" className="relative mx-auto max-w-7xl px-4 pb-24 pt-8 md:px-8 md:pt-10">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[520px] bg-[radial-gradient(circle_at_30%_10%,_rgba(139,92,246,0.2),_transparent_40%),radial-gradient(circle_at_75%_15%,_rgba(34,211,238,0.15),_transparent_35%)]" />

      <motion.div
        initial={{ opacity: 0, y: 26 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.72 }}
        className="relative z-10 mb-14"
      >
        <div className="inline-flex items-center gap-2 rounded-full border border-violet-300/35 bg-violet-500/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-violet-100">
          <Trophy size={12} />
          Flagship Event
        </div>

        <h2 className="mt-5 text-3xl font-black tracking-[-0.04em] text-white sm:text-5xl">
          Trisquadathon 1.0
          <span className="block text-gradient">A Landmark Success</span>
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
          Our inaugural flagship hackathon brought together innovators, builders, and dreamers to collaborate on cutting-edge technical challenges in an intensive sprint of creation and innovation.
        </p>
      </motion.div>

      <div className="relative z-10 space-y-8">
        {[{ title: 'Winners Showcase', count: 3 }, { title: 'Event Organization', count: 9 }].map(({ title, count }, idx) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: idx * 0.08 }}
            className="glass rounded-2xl border border-white/10 p-8"
          >
            <h3 className="text-2xl font-black text-white mb-6">{title}</h3>
            {title === 'Winners Showcase' ? (
              <div className="grid gap-5 md:grid-cols-3">
                {winners.map((winner, winnerIndex) => (
                  <motion.article
                    key={winner.team}
                    whileHover={{ y: -6 }}
                    transition={{ duration: 0.25 }}
                    className={`relative overflow-hidden rounded-2xl border bg-slate-950/45 p-6 text-center ${winner.border} ${winner.glow} ${winnerIndex === 0 ? 'md:-translate-y-3' : ''}`}
                  >
                    <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${winner.accent}`} />
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-white/15 bg-white/10 text-4xl shadow-inner">
                      <span aria-hidden="true">{winner.icon}</span>
                    </div>
                    <p className={`mt-5 bg-gradient-to-r ${winner.accent} bg-clip-text text-sm font-black uppercase tracking-[0.18em] text-transparent`}>
                      {winner.rank}
                    </p>
                    <p className="mt-2 text-3xl font-black text-white">{winner.prize}</p>
                    <div className="my-5 h-px bg-white/10" />
                    <h4 className="text-xl font-black text-white">{winner.team}</h4>
                    <p className="mt-2 text-sm leading-relaxed text-slate-300">{winner.institution}</p>
                    <Medal className="mx-auto mt-5 text-white/35" size={20} />
                  </motion.article>
                ))}
              </div>
            ) : (
              <div className="grid gap-4 sm:grid-cols-3">
                {Array.from({ length: count }, (_, i) => (
                  <div key={i} className="aspect-square">
                    <PlaceholderImage
                      src={{
                        0: '/Trisquadathon-1.0-Event Organization1.jpg',
                        1: '/Trisquadathon-1.0-Event Organization2.jpg.jpeg',
                        2: '/Trisquadathon-1.0-Event Organization3.jpg.jpeg',
                        3: '/Trisquadathon-1.0-Event Organization4.jpg.jpeg',
                        4: '/Trisquadathon-1.0-Event Organization5.jpg.jpeg',
                        5: '/Trisquadathon-1.0-Event Organization6.jpg.jpeg',
                        6: '/Trisquadathon-1.0-Event Organization7.jpg.jpeg',
                        7: '/Trisquadathon-1.0-Event Organization8.jpg.jpg',
                        8: '/Trisquadathon-1.0-Event Organization9.jpg.jpeg',
                      }[i]}
                      alt={`Trisquadathon 1.0 event organization ${i + 1}`}
                      index={i}
                    />
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
