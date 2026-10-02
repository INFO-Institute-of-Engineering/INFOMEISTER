'use client';

import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { useRef } from 'react';

const banners = [
  { src: '/talkthon-banner.jpg.jpeg', alt: 'Talkathon event banner' },
  { src: '/sihawarness.jpeg', alt: 'Smart India Hackathon awareness workshop poster' },
  { src: '/sihIntAwarness.jpeg', alt: 'ITNT Tamil Nadu Technology Hub awareness programme poster' },
  { src: '/2.png', alt: 'TechTalk 2.0 coming soon poster' },
];

export function TrisquadathonBannerSection() {
  const bannerRailRef = useRef<HTMLDivElement>(null);

  const scrollBanners = (direction: 'left' | 'right') => {
    if (!bannerRailRef.current) return;
    const cardWidth = bannerRailRef.current.querySelector('div')?.offsetWidth ?? 280;
    bannerRailRef.current.scrollBy({
      left: direction === 'left' ? -(cardWidth + 16) : cardWidth + 16,
      behavior: 'smooth',
    });
  };

  return (
    <section className="relative mx-auto max-w-7xl px-4 pb-8 md:px-8 md:pb-10">
      <div className="relative z-10 mt-4">
        {/* Fade edges — desktop only */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 hidden w-16 bg-gradient-to-r from-bg to-transparent lg:block" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 hidden w-16 bg-gradient-to-l from-bg to-transparent lg:block" />

        {/* Prev / Next arrows — desktop only */}
        <button
          type="button"
          onClick={() => scrollBanners('left')}
          aria-label="Show previous banners"
          className="absolute left-2 top-1/2 z-20 hidden -translate-y-1/2 rounded-full border border-cyan-200/40 bg-slate-950/85 p-3 text-cyan-100 shadow-[0_0_24px_rgba(34,211,238,0.25)] backdrop-blur transition hover:scale-105 hover:border-cyan-100/70 hover:bg-cyan-400/20 lg:inline-flex"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          type="button"
          onClick={() => scrollBanners('right')}
          aria-label="Show next banners"
          className="absolute right-2 top-1/2 z-20 hidden -translate-y-1/2 rounded-full border border-cyan-200/40 bg-slate-950/85 p-3 text-cyan-100 shadow-[0_0_24px_rgba(34,211,238,0.25)] backdrop-blur transition hover:scale-105 hover:border-cyan-100/70 hover:bg-cyan-400/20 lg:inline-flex"
        >
          <ChevronRight size={20} />
        </button>

        {/*
          Mobile / tablet: horizontal snap-scroll carousel (touch-friendly, no page overflow)
          Desktop (lg+): CSS grid layout
        */}
        <div
          ref={bannerRailRef}
          className="
            flex gap-4 overflow-x-auto overscroll-x-contain pb-3
            snap-x snap-mandatory scroll-smooth
            [scrollbar-width:none] [&::-webkit-scrollbar]:hidden
            lg:grid lg:grid-cols-5 lg:overflow-visible
          "
        >
          {banners.map((banner, index) => (
            <motion.div
              key={banner.src}
              initial={{ opacity: 0, y: 18, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              animate={{ y: [0, index % 2 === 0 ? -5 : 4, 0] }}
              transition={{
                opacity: { duration: 0.5, delay: index * 0.08 },
                scale: { duration: 0.5, delay: index * 0.08 },
                y: { duration: 5 + index * 0.35, repeat: Infinity, ease: 'easeInOut', delay: index * 0.18 },
              }}
              whileHover={{ y: -8, scale: 1.025 }}
              /* Mobile: show ~1.1 cards so user knows it scrolls. Tablet: wider. Desktop: grid handles it. */
              className="
                aspect-[3/4] snap-start shrink-0
                w-[72vw] max-w-[16rem]
                sm:w-[40vw] sm:max-w-[18rem]
                lg:w-auto lg:max-w-none
                overflow-hidden rounded-2xl border border-cyan-300/40 bg-slate-950/65 p-1
                shadow-[0_0_28px_rgba(34,211,238,0.16)] transition-shadow
                hover:border-cyan-100/75 hover:shadow-[0_0_38px_rgba(34,211,238,0.3)]
                relative
              "
            >
              <Image src={banner.src} alt={banner.alt} fill sizes="(max-width: 640px) 72vw, (max-width: 1024px) 40vw, 20vw" className="rounded-xl object-contain" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

