'use client';

import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { useRef } from 'react';

const posters = [
  {
    src: '/ITNT poster.png',
    alt: 'ITNT Tamil Nadu Technology Hub Event Poster',
    title: 'ITNT Tech Hub',
  },
  {
    src: '/SIH Poster.png',
    alt: 'Smart India Hackathon Official Poster',
    title: 'Smart India Hackathon',
  },
  {
    src: '/newtri2.0banner.jpg.jpeg',
    alt: 'Trisquadathon 2.0 Event Poster',
    title: 'Trisquadathon 2.0',
  },
  {
    src: '/talkthon-banner.jpg.jpeg',
    alt: 'Talkathon Event Poster',
    title: 'Talkathon',
  },
  {
    src: '/sihawarness.jpeg',
    alt: 'SIH Awareness Workshop Poster',
    title: 'SIH Awareness',
  },
];

export function HackathonPostersSection() {
  const railRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    railRef.current?.scrollBy({
      left: direction === 'left' ? -380 : 380,
      behavior: 'smooth',
    });
  };

  return (
    <section
      id="hackathon-posters"
      className="relative mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20"
    >
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="mb-10 text-center"
      >
        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-gradient-to-r from-blue-500/10 to-violet-500/10 px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.2em] text-blue-100 shadow-[0_0_18px_rgba(96,165,250,0.12)] sm:text-[10px] sm:tracking-[0.24em]">
          <span className="h-1.5 w-1.5 rounded-full bg-sky-300 shadow-[0_0_8px_rgba(125,211,252,0.9)]" />
          Events &amp; Experiences
        </div>
        <h2 className="text-3xl font-black tracking-[-0.04em] text-white sm:text-4xl md:text-5xl">
          <span className="text-gradient">Hackathon Posters</span>
        </h2>
        <p className="mt-3 text-sm text-slate-400 sm:text-base">
          Explore our upcoming events &amp; experiences
        </p>
      </motion.div>

      {/* Carousel wrapper */}
      <div className="relative">
        {/* Edge fade overlays */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 hidden w-20 bg-gradient-to-r from-[#040814] to-transparent lg:block" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 hidden w-20 bg-gradient-to-l from-[#040814] to-transparent lg:block" />

        {/* Left arrow */}
        <button
          type="button"
          onClick={() => scroll('left')}
          aria-label="Show previous posters"
          className="absolute left-2 top-1/2 z-20 hidden -translate-y-1/2 items-center justify-center rounded-full border border-cyan-200/40 bg-slate-950/85 p-3 text-cyan-100 shadow-[0_0_24px_rgba(34,211,238,0.22)] backdrop-blur transition hover:scale-105 hover:border-cyan-100/70 hover:bg-cyan-400/20 lg:inline-flex"
        >
          <ChevronLeft size={22} />
        </button>

        {/* Right arrow */}
        <button
          type="button"
          onClick={() => scroll('right')}
          aria-label="Show next posters"
          className="absolute right-2 top-1/2 z-20 hidden -translate-y-1/2 items-center justify-center rounded-full border border-cyan-200/40 bg-slate-950/85 p-3 text-cyan-100 shadow-[0_0_24px_rgba(34,211,238,0.22)] backdrop-blur transition hover:scale-105 hover:border-cyan-100/70 hover:bg-cyan-400/20 lg:inline-flex"
        >
          <ChevronRight size={22} />
        </button>

        {/* Poster rail */}
        <div
          ref={railRef}
          className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {posters.map((poster, index) => (
            <motion.div
              key={poster.src}
              initial={{ opacity: 0, y: 20, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                opacity: { duration: 0.5, delay: index * 0.08 },
                scale: { duration: 0.5, delay: index * 0.08 },
              }}
              whileHover={{ y: -8, scale: 1.028 }}
              className="group relative aspect-[3/4] min-w-[17rem] flex-shrink-0 snap-start overflow-hidden rounded-2xl border border-cyan-300/30 bg-slate-950/65 shadow-[0_0_32px_rgba(34,211,238,0.13)] transition-shadow hover:border-cyan-100/60 hover:shadow-[0_0_44px_rgba(34,211,238,0.28)] sm:min-w-[20rem] lg:min-w-[22rem]"
            >
              <div className="pointer-events-none absolute inset-0 z-10 rounded-2xl bg-[linear-gradient(135deg,rgba(125,211,252,0.07),transparent_40%,transparent_70%,rgba(124,58,237,0.1))]" />
              <Image
                src={poster.src}
                alt={poster.alt}
                fill
                sizes="(max-width: 640px) 272px, (max-width: 1024px) 320px, 352px"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
              />
              <div className="absolute inset-x-0 bottom-0 z-20 translate-y-full bg-gradient-to-t from-slate-950/95 to-transparent px-4 py-4 transition-transform duration-300 group-hover:translate-y-0">
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-cyan-200">
                  {poster.title}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <p className="mt-4 text-center text-[11px] text-slate-600 lg:hidden">
        ← Swipe to explore →
      </p>
    </section>
  );
}
