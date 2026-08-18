'use client';

import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Vision & Mission', href: '#vision' },
  { label: 'Domains', href: '#domains' },
  { label: 'Events', href: '#events' },
  { label: 'Executive Boards', href: '#boards' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#05070F]/75 backdrop-blur-2xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-2 px-3 py-3 sm:gap-3 sm:px-4 md:px-8">
        <Link
          href="#home"
          className="flex min-w-0 max-w-[78vw] items-center gap-2 rounded-full border border-blue-400/20 bg-gradient-to-r from-blue-500/12 via-sky-400/10 to-violet-500/12 px-2 py-2 pr-2 shadow-[0_0_30px_rgba(59,130,246,0.14)] sm:max-w-none sm:gap-3 sm:pr-3"
        >
          <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-[20%] border border-blue-300/40 bg-[#071b30] shadow-[0_0_20px_rgba(96,165,250,0.5)]">
            <img
              src="/Info%20logo%20dark%20bblue.png"
              alt="INFOMEISTER association logo"
              className="h-full w-full object-cover"
            />
          </div>
          <span className="hidden truncate bg-gradient-to-r from-white via-sky-100 to-violet-200 bg-clip-text text-[9px] font-bold uppercase tracking-[0.16em] text-transparent sm:block sm:text-[10px] md:text-xs">
            United by passion, Driven by Excellence
          </span>
        </Link>

        <nav className="hidden flex-1 items-center justify-center md:flex">
          <div className="flex items-center justify-center gap-1 rounded-full border border-white/10 bg-slate-950/60 px-2 py-2 shadow-[0_0_25px_rgba(59,130,246,0.12)]">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full px-3 py-2 text-[9px] font-semibold uppercase tracking-[0.18em] text-slate-200 transition-all duration-200 hover:bg-gradient-to-r hover:from-blue-500/20 hover:to-violet-500/20 hover:text-blue-100"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>

        <button
          aria-label="Toggle menu"
          className="inline-flex rounded-full border border-white/10 bg-white/5 p-2 text-slate-100 shadow-[0_0_15px_rgba(96,165,250,0.12)] md:hidden"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-[#05070F]/95 md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-2xl border border-white/10 bg-gradient-to-r from-slate-900/80 to-slate-800/80 px-3 py-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-200 shadow-[0_0_18px_rgba(59,130,246,0.08)] transition hover:border-blue-400/40 hover:text-blue-100"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
