'use client';

import { motion } from 'framer-motion';
import { Crown } from 'lucide-react';
import Image from 'next/image';
import { team2026 } from '@/data/team-2026';

const BoardMemberCard = ({ name, role, index, image }: { name: string; role: string; index: number; image?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.52, delay: index * 0.06 }}
    className="group glass rounded-2xl border border-white/10 overflow-hidden transition duration-300 hover:-translate-y-2 hover:border-cyan-300/40 hover:shadow-[0_0_35px_rgba(34,211,238,0.16)]"
  >
    <div className="relative h-56 w-full bg-gradient-to-br from-cyan-400/20 to-blue-500/20 flex items-center justify-center overflow-hidden border-b border-white/10">
      {image ? (
        <Image 
          src={image} 
          alt={`${name} profile`} 
          fill 
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-contain object-center"
        />
      ) : (
        <div className="text-7xl font-black text-cyan-200/40">{name.charAt(0)}</div>
      )}
    </div>
    <div className="p-6 text-center">
      <h3 className="text-lg font-black tracking-[-0.02em] text-white">{name}</h3>
      <p className="mt-2 text-sm font-semibold uppercase tracking-[0.12em] text-cyan-200/80">{role}</p>
    </div>
  </motion.div>
);

export function ExecutiveBoardsSection() {
  const leadershipTeam = team2026.filter(member => member.category === 'Leadership');
  
  return (
    <section id="boards" className="relative mx-auto max-w-7xl px-4 pb-24 pt-8 md:px-8 md:pt-10">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[520px] bg-[radial-gradient(circle_at_20%_15%,_rgba(59,130,246,0.2),_transparent_42%),radial-gradient(circle_at_80%_25%,_rgba(34,211,238,0.15),_transparent_38%)]" />

      <motion.div
        initial={{ opacity: 0, y: 26 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.72 }}
        className="relative z-10 mb-14"
      >
        <div className="inline-flex items-center gap-2 rounded-full border border-blue-300/35 bg-blue-500/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-blue-100">
          <Crown size={12} />
          Leadership Team
        </div>

        <h2 className="mt-5 text-3xl font-black tracking-[-0.04em] text-white sm:text-5xl">
          Meet the Vision
          <span className="block text-gradient">Builders & Leaders</span>
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
          A hand-picked team of engineers, strategists, and mentors driving INFOMEISTER's mission to build the next generation of tech leaders.
        </p>
      </motion.div>

      <div className="relative z-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {leadershipTeam.map((member, index) => (
          <BoardMemberCard key={member.name} name={member.name} role={member.role} index={index} image={member.image} />
        ))}
      </div>
    </section>
  );
}
