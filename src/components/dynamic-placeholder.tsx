'use client';

import { motion } from 'framer-motion';
import { Image as ImageIcon } from 'lucide-react';

export function DynamicPlaceholder({ title = 'Photo coming soon' }) {
  return (
    <div className="group relative flex h-full min-h-0 w-full overflow-hidden rounded-2xl border border-cyan-300/30 bg-[linear-gradient(145deg,rgba(8,25,52,0.96),rgba(10,15,35,0.94))] text-slate-200 shadow-[0_0_28px_rgba(34,211,238,0.1)] transition duration-500 hover:border-cyan-200/60 hover:shadow-[0_0_38px_rgba(34,211,238,0.22)]">
      <div className="absolute inset-0 bg-grid opacity-35" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_34%,rgba(34,211,238,0.22),transparent_32%),radial-gradient(circle_at_10%_90%,rgba(37,99,235,0.22),transparent_38%)]" />
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
        className="absolute -right-16 -top-16 h-44 w-44 rounded-full border border-cyan-200/20 border-dashed"
      />
      <motion.div
        animate={{ y: [0, 12, 0], opacity: [0.35, 0.7, 0.35] }}
        transition={{ duration: 3.4, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-10 left-[-18%] h-px w-[136%] rotate-[-18deg] bg-gradient-to-r from-transparent via-cyan-200/70 to-transparent"
      />
      <div className="relative z-10 flex h-full w-full flex-col items-center justify-center gap-5 px-6 text-center">
        <motion.div
          animate={{ scale: [1, 1.08, 1], boxShadow: ['0 0 0 rgba(34,211,238,0)', '0 0 28px rgba(34,211,238,0.38)', '0 0 0 rgba(34,211,238,0)'] }}
          transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut' }}
          className="relative flex h-20 w-20 items-center justify-center rounded-[1.4rem] border border-cyan-200/40 bg-cyan-300/10 text-cyan-100"
        >
          <div className="absolute inset-2 rounded-[1rem] border border-cyan-200/15" />
          <ImageIcon size={34} strokeWidth={1.5} />
        </motion.div>
        <div>
          <p className="text-[10px] font-black uppercase tracking-[0.24em] text-cyan-200/80">{title}</p>
          <p className="mt-2 text-xl font-black tracking-tight text-white">Coming soon</p>
          <div className="mt-3 inline-flex items-center gap-2 rounded-full border border-cyan-200/20 bg-cyan-200/10 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.18em] text-cyan-100/75">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-300 shadow-[0_0_10px_rgba(103,232,249,0.9)]" />
            Preparing reveal
          </div>
        </div>
      </div>
    </div>
  );
}
