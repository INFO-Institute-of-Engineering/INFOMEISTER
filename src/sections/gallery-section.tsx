'use client';

import { motion } from 'framer-motion';
import { Image as ImageIcon } from 'lucide-react';
import Image from 'next/image';
import { DynamicPlaceholder } from '@/components/dynamic-placeholder';

const GalleryPlaceholder = ({ index, src, alt }: { index: number; src?: string; alt?: string }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.52, delay: index * 0.05 }}
    whileHover={{ scale: 1.02 }}
    className="group glass relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 transition-all duration-300 hover:border-cyan-300/40 hover:shadow-[0_0_35px_rgba(34,211,238,0.16)]"
  >
    {src ? (
      <Image src={src!} alt={alt ?? ''} fill sizes="(max-width: 640px) 100vw, 33vw" className="object-cover transition duration-500 group-hover:scale-105" />
    ) : (
      <DynamicPlaceholder title="Photo coming soon" />
    )}
  </motion.div>
);

export function GallerySection() {
  return (
    <section id="gallery" className="relative mx-auto max-w-7xl px-4 pb-24 pt-8 md:px-8 md:pt-10">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[520px] bg-[radial-gradient(circle_at_25%_20%,_rgba(34,211,238,0.2),_transparent_44%),radial-gradient(circle_at_85%_10%,_rgba(139,92,246,0.15),_transparent_36%)]" />

      <motion.div
        initial={{ opacity: 0, y: 26 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.72 }}
        className="relative z-10 mb-14"
      >
        <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/35 bg-cyan-500/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-100">
          <ImageIcon size={12} />
          Photo Gallery
        </div>

        <h2 className="mt-5 text-3xl font-black tracking-[-0.04em] text-white sm:text-5xl">
          Events & Moments
          <span className="block text-gradient">Captured in Action</span>
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
          High-energy events, collaborative sessions, and memorable moments from INFOMEISTER's journey. Explore our premium masonry gallery of inspiring photos.
        </p>
      </motion.div>

      <div className="relative z-10 space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <GalleryPlaceholder index={0} src="/events-moments-first.jpg" alt="INFOMEISTER team and guests at an event" />
          <GalleryPlaceholder index={3} src="/events-moments-fourth.jpg" alt="INFOMEISTER team at an event" />
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          <GalleryPlaceholder index={1} src="/events-moments-second.jpg" alt="INFOMEISTER event moment" />
          <GalleryPlaceholder index={2} src="/events-moments-third.jpg" alt="INFOMEISTER students collaborating on a project" />
          <GalleryPlaceholder index={4} src="/events-moments-fifth.jpg" alt="INFOMEISTER students attending a classroom session" />
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          <GalleryPlaceholder index={5} src="/events-moments-sixth.jpg" alt="INFOMEISTER students in a computer lab" />
          <GalleryPlaceholder index={6} src="/events-moments-seventh.jpg" alt="INFOMEISTER students attending an event" />
          <GalleryPlaceholder index={7} src="/events-moments-eighth.jpg" alt="INFOMEISTER speaker addressing an audience" />
        </div>
      </div>
    </section>
  );
}
