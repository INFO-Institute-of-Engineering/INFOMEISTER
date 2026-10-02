'use client';

import { useEffect, useRef, useState } from 'react';

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const lensRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isViewHovered, setIsViewHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only run on desktop/laptop with a fine pointer (mouse/trackpad)
    if (typeof window === 'undefined') return;
    if (window.matchMedia('(pointer: coarse)').matches) return;

    setIsMounted(true);
    document.documentElement.classList.add('has-custom-cursor');

    let mouseX = -100;
    let mouseY = -100;
    let lensX = -100;
    let lensY = -100;
    let rafId: number;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (!isVisible) setIsVisible(true);

      // Instant pinpoint core tracks with 0ms latency on GPU
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
      }
    };

    // Ultra-fluid spring lerp for the liquid glass lens
    const animateLens = () => {
      lensX += (mouseX - lensX) * 0.20;
      lensY += (mouseY - lensY) * 0.20;

      if (lensRef.current) {
        lensRef.current.style.transform = `translate3d(${lensX}px, ${lensY}px, 0) translate(-50%, -50%)`;
      }

      rafId = requestAnimationFrame(animateLens);
    };

    rafId = requestAnimationFrame(animateLens);

    const onMouseDown = () => setIsClicked(true);
    const onMouseUp = () => setIsClicked(false);

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const viewTarget = target.closest(
        'img, [data-cursor="view"], [role="img"], .banner-card, .aspect-\\[3\\/4\\]'
      );
      const isInteractive = Boolean(
        target.closest('a, button, [role="button"], input, textarea, select')
      );

      setIsViewHovered(Boolean(viewTarget && !target.closest('button, a')));
      setIsHovered(isInteractive);
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mousedown', onMouseDown, { passive: true });
    window.addEventListener('mouseup', onMouseUp, { passive: true });
    window.addEventListener('mouseover', onMouseOver, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    return () => {
      cancelAnimationFrame(rafId);
      document.documentElement.classList.remove('has-custom-cursor');
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('mouseover', onMouseOver);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
    };
  }, [isVisible]);

  if (!isMounted || !isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[99999] overflow-hidden" aria-hidden="true">
      {/* ── Liquid Glass Lens (Apple Vision Pro Style) ── */}
      <div
        ref={lensRef}
        className={`pointer-events-none absolute left-0 top-0 flex items-center justify-center rounded-full will-change-transform transition-[width,height,border-color,background-color,box-shadow,transform] duration-300 ease-out ${
          isClicked
            ? 'h-8 w-8 scale-90 border border-cyan-300 bg-cyan-400/25 shadow-[0_0_35px_rgba(34,211,238,0.8),inset_0_0_12px_rgba(255,255,255,0.6)] backdrop-blur-md'
            : isViewHovered
            ? 'h-20 w-20 border border-cyan-200/90 bg-slate-950/70 shadow-[0_0_40px_rgba(34,211,238,0.5),inset_0_1px_2px_rgba(255,255,255,0.4)] backdrop-blur-md'
            : isHovered
            ? 'h-14 w-14 border border-cyan-300/80 bg-gradient-to-br from-cyan-400/20 via-blue-500/10 to-violet-500/20 shadow-[0_0_30px_rgba(34,211,238,0.4),inset_0_1px_1px_rgba(255,255,255,0.5)] backdrop-blur-sm'
            : 'h-9 w-9 border border-white/30 bg-gradient-to-br from-white/10 via-cyan-950/15 to-blue-950/30 shadow-[0_0_20px_rgba(34,211,238,0.22),inset_0_1px_1.5px_rgba(255,255,255,0.35)] backdrop-blur-[2px]'
        }`}
      >
        {/* Specular Top-Light Reflection Arc */}
        <div className="pointer-events-none absolute inset-x-2 top-1 h-[2px] rounded-full bg-gradient-to-r from-transparent via-white/60 to-transparent" />

        {/* View Badge (Appears when hovering posters / images) */}
        {isViewHovered && (
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-cyan-200 animate-in fade-in zoom-in-75 duration-200">
            VIEW ↗
          </span>
        )}
      </div>

      {/* ── Precision Jewel Pinpoint Core (Instant 0ms tracking) ── */}
      <div
        ref={dotRef}
        className={`pointer-events-none absolute left-0 top-0 rounded-full will-change-transform transition-[width,height,opacity,background-color,box-shadow] duration-150 ease-out ${
          isViewHovered
            ? 'opacity-0'
            : isClicked
            ? 'h-2 w-2 bg-white shadow-[0_0_14px_#ffffff]'
            : isHovered
            ? 'h-2 w-2 bg-cyan-200 shadow-[0_0_12px_#22d3ee]'
            : 'h-1.5 w-1.5 bg-cyan-300 shadow-[0_0_9px_#22d3ee]'
        }`}
      />
    </div>
  );
}
