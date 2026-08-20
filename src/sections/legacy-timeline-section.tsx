'use client';

import { motion } from 'framer-motion';
import { CalendarDays, ChevronRight, Trophy, Zap, type LucideIcon } from 'lucide-react';
import { useState } from 'react';

const academicSemesters = [
  {
    label: 'ODD Semester',
    year: '2025',
    events: [
      'Ex IoT',
      'Seminar - Java Gateway',
      'Workshop - AI Cloud',
      'InfoMeister Inaugural',
      'Engineers Day',
      'Association Inaugural',
      'Webinar I - UI/UX',
      'Webinar II - UI/UX',
      'Hackathon',
      'MOU - App Innovations',
      'Industrial Visit (IETEES)',
      'Industrial Visit - Scope India',
      'OOP - App Innovation',
      'Webinar III - Mock Hack',
      'Industrial Visit IV',
      'NSS',
    ],
  },
  {
    label: 'EVEN Semester',
    year: '2026',
    events: [
      'Workshop - Connect & Design',
      'SDP',
      'Seminar - Confidence Building',
      'Industrial Visit - V-Guard BIS',
      'Alumni Meet',
      'MOU - PUMO',
      'Bootcamp',
      "NCASTM'26",
      'Seminar - Startup',
      'VAC - II CSE',
      "INFEST'26",
      'NSS',
      'Retract',
      'GDG',
    ],
  },
];

const eventDetails: Record<string, string> = {
  'Ex IoT': 'An exploratory Internet of Things session introducing connected devices, sensors, data flow, and real-world automation use cases.',
  'Seminar - Java Gateway': 'A Java-focused seminar covering programming fundamentals, application structure, and practical pathways into backend development.',
  'Workshop - AI Cloud': 'A hands-on workshop connecting artificial intelligence concepts with cloud platforms, deployment workflows, and scalable services.',
  'InfoMeister Inaugural': 'The inaugural association gathering that introduced INFOMEISTER, its mission, student teams, and vision for technical excellence.',
  'Engineers Day': 'A celebration of engineering innovation featuring student participation, knowledge sharing, and recognition of technical contribution.',
  'Association Inaugural': 'An official association launch event bringing together faculty, student leaders, and members of the INFOMEISTER community.',
  'Webinar I - UI/UX': 'An introductory webinar on user interface and user experience principles, visual hierarchy, usability, and user-centered design.',
  'Webinar II - UI/UX': 'A follow-up UI/UX session exploring design thinking, interface decisions, prototyping, and creating better digital experiences.',
  Hackathon: 'A collaborative build challenge where participants formed teams, developed practical solutions, and presented their ideas under time constraints.',
  'MOU - App Innovations': 'A partnership milestone focused on connecting INFOMEISTER students with app innovation, industry exposure, and collaborative opportunities.',
  'Industrial Visit (IETEES)': 'An industry exposure visit that helped students observe professional workflows, engineering practices, and technology in operation.',
  'Industrial Visit - Scope India': 'A learning visit designed to connect classroom concepts with real-world software development and professional technology environments.',
  'OOP - App Innovation': 'A practical session on object-oriented programming concepts and how they support maintainable, reusable application development.',
  'Webinar III - Mock Hack': 'A preparation webinar covering hackathon strategy, idea presentation, teamwork, time management, and solution storytelling.',
  'Industrial Visit IV': 'A field-learning experience giving students another direct look at workplace processes, technical roles, and engineering applications.',
  NSS: 'A community-focused activity highlighting service, civic responsibility, teamwork, and the role of students in creating social impact.',
  'Workshop - Connect & Design': 'A collaborative workshop focused on connecting ideas with practical design methods, communication, and user-centered problem solving.',
  SDP: 'A structured development programme designed to strengthen technical skills, project thinking, teamwork, and professional readiness.',
  'Seminar - Confidence Building': 'A guided seminar helping students build communication confidence, presentation ability, and a stronger professional mindset.',
  'Industrial Visit - V-Guard BIS': 'An industry visit exposing students to quality standards, product systems, professional operations, and applied engineering practices.',
  'Alumni Meet': 'A community gathering where alumni shared academic journeys, career experience, practical advice, and inspiration with current students.',
  'MOU - PUMO': 'A partnership milestone creating opportunities for collaboration, industry interaction, skill development, and student growth.',
  Bootcamp: 'An intensive hands-on learning track focused on building practical skills through guided exercises, teamwork, and project work.',
  "NCASTM'26": 'A technical conference experience bringing together ideas, presentations, emerging technologies, and conversations around innovation.',
  'Seminar - Startup': 'A startup-focused session covering ideation, validation, entrepreneurship, problem solving, and turning concepts into meaningful ventures.',
  "INFEST'26": 'A vibrant INFOMEISTER community event combining technical participation, team activities, creativity, and student engagement.',
  Retract: 'A reflective activity focused on reviewing experiences, learning from outcomes, and improving future association initiatives.',
  GDG: 'A developer community interaction exploring modern technologies, developer practices, collaboration, and learning from the wider tech ecosystem.',
};

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

const TimelineNode = ({ event, index, isLast }: { event: { year: number; title: string; description: string; icon: LucideIcon; isUpcoming?: boolean }; index: number; isLast: boolean }) => {
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
  const [selectedEvent, setSelectedEvent] = useState('Ex IoT');

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
          From our founding in 2025 to the work we do today, here's the story of INFOMEISTER's impact on the tech community.
        </p>
      </motion.div>

      {/* Timeline */}
      <div className="relative z-10 space-y-8 md:space-y-12">
        {timelineEvents.map((event, index) => (
          <TimelineNode key={event.title} event={event} index={index} isLast={index === timelineEvents.length - 1} />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.55 }}
        className="relative z-10 mt-12 rounded-2xl border border-white/10 bg-slate-950/35 p-4 sm:p-6"
      >
        <div className="mb-5 flex items-center gap-3">
          <div className="rounded-xl border border-cyan-300/30 bg-cyan-400/10 p-2 text-cyan-200">
            <CalendarDays size={18} />
          </div>
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.18em] text-cyan-200">Academic Year 2025-2026</p>
            <h3 className="mt-1 text-xl font-black text-white sm:text-2xl">Events That Shaped Our Journey</h3>
          </div>
        </div>

        <div className="grid gap-4 lg:grid-cols-2">
          {academicSemesters.map((semester) => (
            <div key={semester.label} className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
              <div className="mb-3 flex items-center justify-between gap-3">
                <h4 className="text-sm font-black uppercase tracking-[0.12em] text-cyan-100">{semester.label}</h4>
                <span className="rounded-full border border-cyan-300/25 px-2.5 py-1 text-[10px] font-bold text-cyan-200">{semester.year}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {semester.events.map((event) => (
                  <button
                    key={event}
                    type="button"
                    onClick={() => setSelectedEvent(event)}
                    className={`inline-flex items-center gap-1 rounded-lg border px-2.5 py-1.5 text-left text-xs transition ${
                      selectedEvent === event
                        ? 'border-cyan-300/50 bg-cyan-400/15 text-cyan-100 shadow-[0_0_18px_rgba(34,211,238,0.14)]'
                        : 'border-white/10 bg-slate-900/60 text-slate-300 hover:border-cyan-300/35 hover:text-cyan-100'
                    }`}
                  >
                    {event}
                    <ChevronRight size={13} className="text-cyan-300/70" />
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        <motion.div
          key={selectedEvent}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-4 rounded-xl border border-cyan-300/25 bg-cyan-400/[0.07] p-4"
        >
          <p className="text-[10px] font-black uppercase tracking-[0.16em] text-cyan-200/75">Selected Event</p>
          <h5 className="mt-1 text-lg font-black text-white">{selectedEvent}</h5>
          <p className="mt-2 text-sm leading-relaxed text-slate-300">{eventDetails[selectedEvent]}</p>
        </motion.div>
      </motion.div>

    </section>
  );
}
