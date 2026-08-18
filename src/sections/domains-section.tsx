'use client';

import { motion } from 'framer-motion';
import { Brain, Code, Zap, Users, Database, Shield } from 'lucide-react';

const DomainCard = ({ icon: Icon, title, description, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.52, delay: index * 0.06 }}
    className="group glass rounded-2xl border border-white/10 p-6 transition duration-300 hover:-translate-y-2 hover:border-cyan-300/40 hover:shadow-[0_0_35px_rgba(34,211,238,0.16)]"
  >
    <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-300/35 bg-cyan-400/12 text-cyan-200 shadow-[0_0_20px_rgba(34,211,238,0.25)] group-hover:shadow-[0_0_30px_rgba(34,211,238,0.35)] transition-all duration-300">
      <Icon size={24} />
    </div>
    <h3 className="mt-4 text-lg font-black tracking-[-0.02em] text-white">{title}</h3>
    <p className="mt-2 text-sm leading-relaxed text-slate-300">{description}</p>
  </motion.div>
);

const domains = [
  {
    icon: Brain,
    title: 'AI & Machine Learning',
    description: 'Deep learning, NLP, computer vision, and production ML systems for real-world impact.',
  },
  {
    icon: Code,
    title: 'Full-Stack Development',
    description: 'Frontend frameworks, backend architecture, databases, and deployment pipelines.',
  },
  {
    icon: Zap,
    title: 'DevOps & Cloud',
    description: 'Infrastructure automation, containerization, CI/CD, and cloud-native architectures.',
  },
  {
    icon: Users,
    title: 'Product & Design',
    description: 'User research, UX/UI design, product strategy, and cross-functional execution.',
  },
  {
    icon: Database,
    title: 'Data Engineering',
    description: 'Big data pipelines, data warehousing, analytics, and ETL optimization.',
  },
  {
    icon: Shield,
    title: 'Cybersecurity',
    description: 'Security architecture, penetration testing, threat analysis, and secure coding.',
  },
];

export function DomainsSection() {
  return (
    <section id="domains" className="relative mx-auto max-w-7xl px-4 pb-24 pt-8 md:px-8 md:pt-10">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[520px] bg-[radial-gradient(circle_at_30%_10%,_rgba(139,92,246,0.2),_transparent_40%),radial-gradient(circle_at_75%_15%,_rgba(34,211,238,0.15),_transparent_35%)]" />

      <motion.div
        initial={{ opacity: 0, y: 26 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.72 }}
        className="relative z-10 mb-14"
      >
        <div className="inline-flex items-center gap-2 rounded-full border border-violet-300/35 bg-violet-500/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-violet-100">
          <Brain size={12} />
          Expertise Domains
        </div>

        <h2 className="mt-5 text-3xl font-black tracking-[-0.04em] text-white sm:text-5xl">
          Master Core
          <span className="block text-gradient">Technical Pillars</span>
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
          Our ecosystem spans 6 core domains, each with dedicated mentors, projects, and real-world applications. Build depth across multiple stacks and own your specialization.
        </p>
      </motion.div>

      <div className="relative z-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {domains.map((domain, index) => (
          <DomainCard key={domain.title} {...domain} index={index} />
        ))}
      </div>
    </section>
  );
}
