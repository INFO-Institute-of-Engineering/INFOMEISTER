'use client';

import { motion } from 'framer-motion';
import { Award, CalendarDays } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

type StaffMember = { name: string; role: string };
type StaffYearData = Record<string, StaffMember[]>;

const staffProfileImages2026: Record<string, string> = {
  'Dr. K. Baskaran': '/Dean.png',
  'Dr. G. Selvavinayagam': '/Hod.png',
  'Mrs. Saranya A': '/saranya A.png',
  'Mrs. Gokila P': '/gokila P.png',
  'Mr. Nagarasan M': '/nagarasan M.png',
};

const StaffCard = ({ name, role, index, image }: StaffMember & { index: number; image?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.5, delay: index * 0.08 }}
    className="group glass rounded-2xl border border-white/10 overflow-hidden text-center hover:border-cyan-300/40 transition duration-300 hover:shadow-[0_0_35px_rgba(34,211,238,0.16)]"
  >
    <div className="relative flex h-36 w-full items-center justify-center overflow-hidden border-b border-white/10 bg-gradient-to-br from-cyan-400/10 to-blue-500/10">
      <div className="relative h-28 w-28 overflow-hidden rounded-full border-2 border-cyan-200/60 bg-gradient-to-br from-cyan-100 via-white to-blue-200 shadow-[0_0_24px_rgba(34,211,238,0.22)]">
        {image ? (
          <Image src={image} alt={`${name} profile`} fill sizes="112px" quality={70} className="object-contain object-center mix-blend-multiply" />
        ) : (
          <div className="flex h-full items-center justify-center text-4xl font-black text-blue-300/50">{name.charAt(0)}</div>
        )}
      </div>
    </div>
    <div className="p-6">
      <h4 className="font-black text-white text-lg">{name}</h4>
      <p className="mt-2 text-xs font-semibold uppercase tracking-[0.12em] text-blue-200/80">{role}</p>
    </div>
  </motion.div>
);

export function StaffCoordinatorsSection() {
  const [selectedYear, setSelectedYear] = useState(2026);
  const staffDataByYear: Record<number, StaffYearData> = {
    2026: {
      'Dean Academics': [{ name: 'Dr. K. Baskaran', role: 'Dean Academics' }],
      'Head of Department': [{ name: 'Dr. G. Selvavinayagam', role: 'HoD' }],
      'Staff Coordinators': [
        { name: 'Mrs. Saranya A', role: 'Staff Coordinator' },
        { name: 'Mrs. Gokila P', role: 'Staff Coordinator' },
        { name: 'Mr. Nagarasan M', role: 'Staff Coordinator' },
      ],
    },
    2025: {
      'Head of Department': [{ name: 'Dr. G. Selvavinayagam', role: 'HoD' }],
      'Staff Coordinators': [
        { name: 'Mrs. Saranya A', role: 'Staff Coordinator' },
        { name: 'Mrs. Saranya R', role: 'Staff Coordinator' },
        { name: 'Mr. Nagarasan M', role: 'Staff Coordinator' },
      ],
    },
  };
  const staffData = staffDataByYear[selectedYear];
  const years = [2026, 2025];

  return (
    <section id="staff" className="relative mx-auto max-w-7xl px-4 pb-24 pt-8 md:px-8 md:pt-10">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[520px] bg-[radial-gradient(circle_at_20%_15%,_rgba(37,99,235,0.2),_transparent_42%),radial-gradient(circle_at_80%_25%,_rgba(34,211,238,0.15),_transparent_38%)]" />

      <motion.div
        initial={{ opacity: 0, y: 26 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.72 }}
        className="relative z-10 mb-14"
      >
        <div className="inline-flex items-center gap-2 rounded-full border border-blue-300/35 bg-blue-500/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-blue-100">
          <Award size={12} />
          Faculty Advisors
        </div>

        <h2 className="mt-5 text-3xl font-black tracking-[-0.04em] text-white sm:text-5xl">
          Staff Coordinators
          <span className="block text-gradient">Guiding Our Mission</span>
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
          Meet the dedicated faculty members and administrators who mentor, guide, and support INFOMEISTER's vision for technical excellence and community impact.
        </p>
      </motion.div>

      <div className="relative z-10 mb-12 flex flex-wrap justify-center gap-2">
        {years.map((year, idx) => (
          <motion.button
            key={year}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.3, delay: idx * 0.05 }}
            onClick={() => setSelectedYear(year)}
            className={`inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-black uppercase tracking-[0.12em] transition-all duration-300 ${
              selectedYear === year
                ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-[0_0_30px_rgba(34,211,238,0.4)] neon-border'
                : 'glass border border-white/10 text-slate-300 hover:border-cyan-300/40 hover:text-cyan-100'
            }`}
          >
            <CalendarDays size={16} />
            {year}
          </motion.button>
        ))}
      </div>

      {/* Staff Sections */}
      <div className="relative z-10 space-y-12">
        {Object.entries(staffData).map(([category, members], categoryIdx) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: categoryIdx * 0.1 }}
          >
            <h3 className="text-2xl font-black text-white mb-8 pb-4 border-b border-white/10">
              {category}
            </h3>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {members.map((member, idx) => (
                <StaffCard
                  key={member.name}
                  {...member}
                  index={idx}
                  image={selectedYear === 2026 ? staffProfileImages2026[member.name] : undefined}
                />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
