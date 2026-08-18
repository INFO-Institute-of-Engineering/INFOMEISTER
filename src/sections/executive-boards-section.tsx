'use client';

import { motion } from 'framer-motion';
import { Crown, Users } from 'lucide-react';

const BoardMemberCard = ({ name, title, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.52, delay: index * 0.06 }}
    className="group glass rounded-2xl border border-white/10 p-6 text-center transition duration-300 hover:-translate-y-2 hover:border-cyan-300/40 hover:shadow-[0_0_35px_rgba(34,211,238,0.16)]"
  >
    <div className="mx-auto h-20 w-20 rounded-xl border border-cyan-300/35 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 flex items-center justify-center text-4xl font-black text-cyan-200">
      {name.charAt(0)}
    </div>
    <h3 className="mt-4 text-lg font-black tracking-[-0.02em] text-white">{name}</h3>
    <p className="mt-2 text-sm font-semibold uppercase tracking-[0.12em] text-cyan-200/80">{title}</p>
  </motion.div>
);

const boardMembers = [
  { name: 'Designation TBD', title: 'Lead Architect' },
  { name: 'Designation TBD', title: 'Operations Lead' },
  { name: 'Designation TBD', title: 'Technical Lead' },
  { name: 'Designation TBD', title: 'Strategy Lead' },
  { name: 'Designation TBD', title: 'Innovation Lead' },
  { name: 'Designation TBD', title: 'Community Lead' },
];

export function ExecutiveBoardsSection() {
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
        {boardMembers.map((member, index) => (
          <BoardMemberCard key={member.name} {...member} index={index} />
        ))}
      </div>
    </section>
  );
}
