'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { CalendarDays, Mic, Wrench, X, ArrowUpRight, Presentation, Users, Video, type LucideIcon } from 'lucide-react';
import { useEffect, useState } from 'react';

type Event = {
  title: string;
  tag: string;
  date: string;
  icon: LucideIcon;
  detail: string;
};

const events: Event[] = [
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
    tag: 'Industry Speaker Session',
    date: '28 AUG',
    icon: Presentation,
    detail:
      'Direct interaction with technology practitioners covering industry stacks, modern workflows, and career clarity.',
  },
  {
    title: 'Seminar',
    tag: 'Core Domain Learning',
    date: '04 SEP',
    icon: Users,
    detail:
      'Structured technical breakdown of emerging concepts, engineering practices, and applied project knowledge.',
  },
  {
    title: 'Webinar',
    tag: 'Virtual Tech Exchange',
    date: '11 SEP',
    icon: Video,
    detail:
      'Interactive remote session delivering targeted engineering skills, tooling walkthroughs, and problem-solving guidance.',
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

export function GlobalEventPopup() {
  const [activeEventIndex, setActiveEventIndex] = useState(0);
  const [showEventPopup, setShowEventPopup] = useState(true);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveEventIndex((currentIndex) => (currentIndex + 1) % events.length);
      setShowEventPopup(true);
    }, 6000);

    return () => window.clearInterval(interval);
  }, []);

  const activeEvent = events[activeEventIndex];
  const ActiveEventIcon = activeEvent?.icon;

  if (!showEventPopup || !activeEvent) return null;

  return (
    <AnimatePresence>
      <motion.aside
        key={activeEvent.title}
        initial={{ opacity: 0, x: 30, y: 15, scale: 0.96 }}
        animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
        exit={{ opacity: 0, x: 30, scale: 0.95 }}
        transition={{ duration: 0.4 }}
        drag
        dragMomentum={false}
        whileDrag={{ scale: 1.02, cursor: 'grabbing' }}
        className="pointer-events-auto fixed bottom-5 right-3 z-[100] w-[min(23rem,calc(100vw-1.5rem))] cursor-grab touch-none overflow-hidden rounded-3xl border border-cyan-200/45 bg-[#071326]/[98%] shadow-[0_16px_55px_rgba(2,6,23,0.85),0_0_40px_rgba(34,211,238,0.35)] backdrop-blur-xl sm:bottom-6 sm:right-6"
        role="status"
        aria-live="polite"
      >
        <div className="h-1 bg-gradient-to-r from-cyan-300 via-blue-500 to-violet-500" />
        <div className="p-4 sm:p-5">
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-2xl border border-cyan-200/35 bg-gradient-to-br from-cyan-300/20 to-blue-500/20 text-cyan-100 shadow-[0_0_24px_rgba(34,211,238,0.3)]">
                {ActiveEventIcon && <ActiveEventIcon size={20} />}
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.18em] text-cyan-200">Now announcing</p>
                <p className="mt-0.5 text-xs font-medium text-slate-400">INFOMEISTER events</p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setShowEventPopup(false)}
              aria-label="Close event notification"
              className="rounded-full p-1.5 text-slate-400 transition hover:bg-white/10 hover:text-white"
            >
              <X size={16} />
            </button>
          </div>

          <div className="mt-4 flex items-end justify-between gap-3 sm:mt-5">
            <div className="min-w-0">
              <p className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.14em] text-blue-200/80">{activeEvent.tag}</p>
              <h3 className="mt-1 truncate text-xl sm:text-2xl font-black tracking-[-0.03em] text-white">{activeEvent.title}</h3>
            </div>
            <div className="shrink-0 rounded-xl border border-cyan-200/30 bg-cyan-300/10 px-2.5 py-1.5 sm:px-3 sm:py-2 text-right">
              <p className="text-[9px] font-bold uppercase tracking-[0.14em] text-cyan-200/70">Date</p>
              <p className="mt-0.5 text-xs font-black text-cyan-50">{activeEvent.date}</p>
            </div>
          </div>

          <p className="mt-2.5 sm:mt-3 line-clamp-2 text-xs sm:text-sm leading-relaxed text-slate-300">{activeEvent.detail}</p>

          {activeEvent.title === 'Trisquadathon 2.0' && (
            <a
              href="https://trisquadathon.infomeister.co.in/"
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-flex items-center gap-1.5 rounded-xl border border-cyan-300/35 bg-cyan-400/15 px-3 py-1.5 text-xs font-bold text-cyan-100 transition hover:bg-cyan-400/25"
            >
              Register on Website <ArrowUpRight size={14} />
            </a>
          )}

          <div className="mt-3.5 sm:mt-4 h-1 overflow-hidden rounded-full bg-white/10">
            <motion.div
              key={`${activeEvent.title}-progress`}
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: 6, ease: 'linear' }}
              className="h-full rounded-full bg-gradient-to-r from-cyan-300 to-blue-500"
            />
          </div>
        </div>
      </motion.aside>
    </AnimatePresence>
  );
}
