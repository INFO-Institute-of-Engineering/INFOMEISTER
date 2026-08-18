'use client';

import { motion } from 'framer-motion';
import { CalendarDays, Mic, Presentation, Users, Video, Wrench } from 'lucide-react';import { useState } from 'react';
const EventCard = ({ title, tag, date, icon: Icon, detail, index }) => (
  <motion.article
    key={title}
    initial={{ opacity: 0, y: 18 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.52, delay: index * 0.05 }}
    className="group glass rounded-3xl border border-white/10 p-5 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/40 hover:shadow-[0_0_35px_rgba(34,211,238,0.16)]"
  >
    <div className="flex items-start justify-between gap-3">
      <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-300/35 bg-cyan-400/12 text-cyan-200 shadow-[0_0_24px_rgba(34,211,238,0.25)]">
        <Icon size={20} />
      </div>
      <div className="rounded-xl border border-cyan-300/35 bg-cyan-400/10 px-3 py-1 text-xs font-black tracking-[0.12em] text-cyan-100">
        {date}
      </div>
    </div>
    <div className="mt-4 text-[11px] font-semibold uppercase tracking-[0.14em] text-cyan-200/90">{tag}</div>
    <h3 className="mt-2 text-2xl font-black tracking-[-0.02em] text-white">{title}</h3>
    <p className="mt-3 text-sm leading-relaxed text-slate-300">{detail}</p>
  </motion.article>
);

const events = [
  {
    title: 'Talkathon',
    tag: 'Flagship Speaking Arena',
    date: '12 SEP',
    icon: Mic,
    detail:
      'A high-energy forum where students pitch ideas, debate innovation, and sharpen communication under mentorship.',
  },
  {
    title: 'Trisqudathon 2.0',
    tag: 'Team Build Sprint',
    date: '20 SEP',
    icon: Wrench,
    detail:
      'An upgraded hack challenge focused on rapid prototyping, practical execution, and solution storytelling.',
  },
  {
    title: 'Tech Talk',
    tag: 'Industry Pulse',
    date: '27 SEP',
    icon: Presentation,
    detail:
      'Expert-led sessions on trending stacks, product architecture, AI workflows, and deployment-ready engineering.',
  },
  {
    title: 'Seminar',
    tag: 'Deep Knowledge Session',
    date: '04 OCT',
    icon: Users,
    detail:
      'Structured deep dives into emerging technologies with practical insights and outcome-oriented learning.',
  },
  {
    title: 'Webinar',
    tag: 'Remote Masterclass',
    date: '11 OCT',
    icon: Video,
    detail:
      'Interactive online sessions connecting students with domain experts and real-world engineering perspectives.',
  },
  {
    title: 'Bootcamp',
    tag: 'Intensive Skill Forge',
    date: '18 OCT',
    icon: CalendarDays,
    detail:
      'A focused hands-on track for coding discipline, project building, team collaboration, and career readiness.',
  },
];

export function UpcomingEventsSection() {
  const [selectedMonth, setSelectedMonth] = useState(null);

  // Extract unique months from events
  const eventMonths = [...new Set(events.map(e => {
    const monthStr = e.date.split(' ')[1];
    return monthStr;
  }))];

  const monthCounts = eventMonths.reduce((acc, month) => {
    const count = events.filter(e => e.date.includes(month)).length;
    acc[month] = count;
    return acc;
  }, {});

  // Filter events based on selected month
  const filteredEvents = selectedMonth
    ? events.filter(e => e.date.includes(selectedMonth))
    : events;

  return (
    <section id="events" className="relative mx-auto max-w-7xl px-4 pb-24 pt-8 md:px-8 md:pt-10">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[520px] bg-[radial-gradient(circle_at_20%_20%,_rgba(14,165,233,0.2),_transparent_45%),radial-gradient(circle_at_85%_5%,_rgba(59,130,246,0.2),_transparent_34%)]" />

      <motion.div
        initial={{ opacity: 0, y: 26 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.72 }}
        className="relative z-10"
      >
        <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/35 bg-cyan-500/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-100">
          <CalendarDays size={12} />
          Upcoming Events
        </div>

        <div className="mt-5 grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <div>
            <h2 className="text-3xl font-black tracking-[-0.04em] text-white sm:text-5xl">
              Don&apos;t Just Attend.
              <span className="block text-gradient">Build Your Presence.</span>
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
              Our event line-up is designed to boost technical strength, confidence, and leadership. Reserve your slots,
              join the momentum, and be part of high-value learning experiences.
            </p>
          </div>

          <div className="glass neon-border rounded-3xl p-5 sm:p-6">
            <div className="flex items-start gap-4">
              <div className="rounded-2xl border border-cyan-300/35 bg-cyan-400/12 p-3 text-cyan-200 shadow-[0_0_24px_rgba(34,211,238,0.25)]">
                <CalendarDays size={24} />
              </div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-200">Event Calendar Mark</div>
                <p className="mt-2 text-sm leading-relaxed text-slate-300 sm:text-[15px]">
                  Mark your calendar now. Seats for premium sessions fill fast, and early participants get the biggest growth advantage.
                </p>
              </div>
            </div>

            <div className="mt-5 grid grid-cols-3 gap-2 text-center">
              {eventMonths.length > 0 ? (
                eventMonths.map((month, idx) => (
                  <button
                    key={month}
                    onClick={() => setSelectedMonth(selectedMonth === month ? null : month)}
                    className={`rounded-xl border py-3 px-2 text-[11px] font-black uppercase tracking-[0.12em] transition-all duration-300 cursor-pointer hover:scale-105 ${
                      selectedMonth === month
                        ? 'border-cyan-400/60 bg-cyan-400/25 text-cyan-100 shadow-[0_0_16px_rgba(34,211,238,0.4)]'
                        : selectedMonth === null
                        ? 'border-cyan-300/30 bg-cyan-400/10 text-slate-300 hover:border-cyan-300/50 hover:bg-cyan-400/15'
                        : 'border-slate-400/40 bg-slate-500/10 text-slate-400'
                    }`}
                  >
                    <div>{month}</div>
                    <div className="text-[9px] font-semibold mt-1 opacity-80">{monthCounts[month]} events</div>
                  </button>
                ))
              ) : (
                <>
                  <div className="rounded-xl border border-cyan-300/30 bg-cyan-400/10 py-2">SEP</div>
                  <div className="rounded-xl border border-blue-300/30 bg-blue-400/10 py-2">OCT</div>
                  <div className="rounded-xl border border-violet-300/30 bg-violet-400/10 py-2">LIVE</div>
                </>
              )}
            </div>
          </div>
        </div>
      </motion.div>

      <div className="relative z-10 mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {filteredEvents.map((event, index) => (
          <EventCard key={event.title} {...event} index={index} />
        ))}
      </div>
    </section>
  );
}
