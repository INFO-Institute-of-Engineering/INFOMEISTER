'use client';

import { motion } from 'framer-motion';
import { CalendarDays, Mic, Presentation, Users, Video, Wrench, X, ArrowUpRight, type LucideIcon } from 'lucide-react';
import { useEffect, useState } from 'react';

type Event = { title: string; tag: string; date: string; icon: LucideIcon; detail: string };

const EventCard = ({ title, tag, date, icon: Icon, detail, index }: Event & { index: number }) => (
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
    <div className="mt-2 flex items-start justify-between gap-3">
      <h3 className="text-2xl font-black tracking-[-0.02em] text-white">{title}</h3>
      {title === 'Trisquadathon 2.0' && (
        <a
          href="https://trisquadathon.infomeister.co.in/"
          target="_blank"
          rel="noreferrer"
          aria-label="Open Trisquadathon 2.0 website"
          className="shrink-0 rounded-xl border border-cyan-300/30 p-2 text-cyan-200 transition hover:bg-cyan-300/15 hover:text-white"
        >
          <ArrowUpRight size={17} />
        </a>
      )}
    </div>
    <p className="mt-3 text-sm leading-relaxed text-slate-300">{detail}</p>
  </motion.article>
);

const events = [
  {
    title: 'Talkathon',
    tag: 'Flagship Speaking Arena',
    date: '21 AUG 2026',
    icon: Mic,
    detail:
      'A high-energy forum where students pitch ideas, debate innovation, and sharpen communication under mentorship.',
  },
  {
    title: 'Trisquadathon 2.0',
    tag: 'Coming Soon',
    date: 'COMING SOON',
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
  const [selectedMonth, setSelectedMonth] = useState<string | null>(null);
  const [activeEventIndex, setActiveEventIndex] = useState(0);
  const [showEventPopup, setShowEventPopup] = useState(true);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveEventIndex((currentIndex) => (currentIndex + 1) % events.length);
      setShowEventPopup(true);
    }, 5000);

    return () => window.clearInterval(interval);
  }, []);

  const activeEvent = events[activeEventIndex];
  const ActiveEventIcon = activeEvent?.icon;

  // Extract unique months from events
  const eventMonths = [...new Set(events
    .map((event) => event.date.match(/\b[A-Z]{3}\b/)?.[0])
    .filter((month): month is string => Boolean(month)))];

  const monthCounts = eventMonths.reduce<Record<string, number>>((acc, month) => {
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
      {showEventPopup && activeEvent && (
        <motion.aside
          key={activeEvent.title}
          initial={{ opacity: 0, x: 24, y: 12 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          exit={{ opacity: 0, x: 24 }}
          drag
          dragMomentum={false}
          whileDrag={{ scale: 1.02, cursor: 'grabbing' }}
          className="pointer-events-auto fixed bottom-5 right-4 z-[100] hidden w-[min(23rem,calc(100vw-2rem))] cursor-grab touch-none overflow-hidden rounded-3xl border border-cyan-200/45 bg-[#071326]/[98%] shadow-[0_16px_55px_rgba(2,6,23,0.8),0_0_40px_rgba(34,211,238,0.35)] backdrop-blur-xl sm:block sm:right-6"
          role="status"
          aria-live="polite"
        >
          <div className="h-1 bg-gradient-to-r from-cyan-300 via-blue-500 to-violet-500" />
          <div className="p-5">
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-200/35 bg-gradient-to-br from-cyan-300/20 to-blue-500/20 text-cyan-100 shadow-[0_0_24px_rgba(34,211,238,0.3)]">
                  {ActiveEventIcon && <ActiveEventIcon size={21} />}
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.18em] text-cyan-200">Now announcing</p>
                  <p className="mt-1 text-xs font-medium text-slate-400">INFOMEISTER events</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setShowEventPopup(false)}
                aria-label="Close event notification"
                className="rounded-full p-1.5 text-slate-400 transition hover:bg-white/10 hover:text-white"
              >
                <X size={17} />
              </button>
            </div>
            <div className="mt-5 flex items-end justify-between gap-3">
              <div className="min-w-0">
                <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-blue-200/80">{activeEvent.tag}</p>
                <h3 className="mt-1 truncate text-2xl font-black tracking-[-0.03em] text-white">{activeEvent.title}</h3>
              </div>
              <div className="shrink-0 rounded-xl border border-cyan-200/30 bg-cyan-300/10 px-3 py-2 text-right">
                <p className="text-[9px] font-bold uppercase tracking-[0.14em] text-cyan-200/70">Date</p>
                <p className="mt-0.5 text-xs font-black text-cyan-50">{activeEvent.date}</p>
              </div>
            </div>
            <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-slate-300">{activeEvent.detail}</p>
            <div className="mt-4 h-1 overflow-hidden rounded-full bg-white/10">
              <motion.div
                key={`${activeEvent.title}-progress`}
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 5, ease: 'linear' }}
                className="h-full rounded-full bg-gradient-to-r from-cyan-300 to-blue-500"
              />
            </div>
          </div>
        </motion.aside>
      )}

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
