'use client';

import dynamic from 'next/dynamic';
import { MessageCircle, Sparkles } from 'lucide-react';
import { useState } from 'react';

const MifiAssistant = dynamic(
  () => import('@/components/mifi-assistant').then((module) => module.MifiAssistant),
  { ssr: false },
);

export function MifiAssistantLoader() {
  const [isLoaded, setIsLoaded] = useState(false);

  if (isLoaded) {
    return <MifiAssistant initialOpen onClose={() => setIsLoaded(false)} />;
  }

  return (
    <div className="pointer-events-none fixed bottom-5 left-4 z-[110] sm:left-6">
      <button
        type="button"
        onClick={() => setIsLoaded(true)}
        aria-label="Open MIFI assistant"
        className="pointer-events-auto group flex items-center gap-2 rounded-2xl border border-cyan-200/40 bg-[#06101f]/95 px-3.5 py-3 text-cyan-100 shadow-[0_0_30px_rgba(34,211,238,0.28)] backdrop-blur-xl transition hover:-translate-y-0.5 hover:border-cyan-200/70"
      >
        <span className="relative flex h-7 w-7 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-300/25 to-blue-500/25">
          <MessageCircle size={17} />
          <span className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_8px_rgba(110,231,183,0.9)]" />
        </span>
        <span className="text-xs font-black uppercase tracking-[0.16em]">Ask MIFI</span>
        <Sparkles size={13} className="text-cyan-300 transition group-hover:rotate-12" />
      </button>
    </div>
  );
}