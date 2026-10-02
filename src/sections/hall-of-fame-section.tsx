'use client';

import { motion } from 'framer-motion';
import { Trophy } from 'lucide-react';
import Image from 'next/image';
import { DynamicPlaceholder } from '@/components/dynamic-placeholder';

const PlaceholderImage = ({ src, alt, contain = false }: { src?: string; alt?: string; contain?: boolean }) => (
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.6 }}
    className="h-full overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900/50 to-slate-800/30 flex flex-col items-center justify-center gap-4 backdrop-blur-sm hover:border-cyan-300/40 transition"
  >
    {src ? (
      <Image src={src!} alt={alt ?? ''} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" quality={70} className={`${contain ? 'object-contain bg-slate-950/35' : 'object-cover'}`} />
    ) : (
      <DynamicPlaceholder title="Recognition photo coming soon" />
    )}
  </motion.div>
);

export function HallOfFameSection() {
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

      <div className="relative z-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 9 }, (_, index) => (
          <div key={index} className="aspect-square">
            <PlaceholderImage
              src={index === 0
                ? '/hall-of-ecxcellence1.jpg.jpeg'
                : index === 1
                ? '/hall-of-ecxcellence2.jpg.jpeg'
                : index === 2
                ? '/hall-of-ecxcellence3.jpg.jpeg'
                : index === 3
                ? '/hall-of-ecxcellence4.jpg.jpeg'
                : index === 4
                ? '/WhatsApp Image 2026-08-20 at 3.02.55 PM.jpeg'
                : index === 5
                ? '/WhatsApp Image 2026-08-20 at 3.03.20 PM.jpeg'
                : index === 6
                ? '/hall-of-ecxcellence7.jpg.jpeg'
                : index === 7
                ? '/hall-of-ecxcellence8.jpg.jpeg'
                : index === 8
                ? '/hall-of-ecxcellence9.jpg.jpeg'
                : undefined}
              alt={index < 9 ? `Hall of Excellence recognition moment ${index + 1}` : undefined}
              contain={index === 4}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
