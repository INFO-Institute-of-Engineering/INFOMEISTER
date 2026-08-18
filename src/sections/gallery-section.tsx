'use client';

import { motion } from 'framer-motion';
import { Image as ImageIcon, ZoomIn } from 'lucide-react';

const GalleryPlaceholder = ({ index, size = 'default' }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.52, delay: index * 0.05 }}
    whileHover={{ scale: 1.02 }}
    className={`group glass rounded-2xl border border-white/10 overflow-hidden flex flex-col items-center justify-center transition-all duration-300 hover:border-cyan-300/40 hover:shadow-[0_0_35px_rgba(34,211,238,0.16)] cursor-pointer relative ${
      size === 'large' ? 'aspect-video lg:col-span-2' : 'aspect-square'
    }`}
  >
    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/10 group-hover:to-blue-500/10 transition duration-300" />
    <div className="relative z-10 flex flex-col items-center justify-center gap-3 text-slate-400">
      <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 2, repeat: Infinity }}>
        <ImageIcon size={48} className="opacity-40 group-hover:opacity-60 transition" />
      </motion.div>
      <p className="text-sm font-semibold text-slate-400">Photo coming soon</p>
      <motion.div animate={{ opacity: [0, 1, 0] }} transition={{ duration: 2, repeat: Infinity }} className="text-cyan-300/50">
        <ZoomIn size={20} />
      </motion.div>
    </div>
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

      {/* Masonry Gallery */}
      <div className="relative z-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <GalleryPlaceholder index={0} size="large" />
        <GalleryPlaceholder index={1} />
        <GalleryPlaceholder index={2} />
        <GalleryPlaceholder index={3} size="large" />
        <GalleryPlaceholder index={4} />
        <GalleryPlaceholder index={5} />
        <GalleryPlaceholder index={6} />
        <GalleryPlaceholder index={7} size="large" />
      </div>
    </section>
  );
}
