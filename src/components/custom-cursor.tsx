'use client';

import { useEffect, useRef, useState } from 'react';

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Only run on desktop/laptop with a fine pointer (mouse/trackpad)
    if (typeof window === 'undefined') return;
    if (window.matchMedia('(pointer: coarse)').matches) return;

    setIsMounted(true);

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let rafId: number;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      // Pinpoint core tracks instantly on GPU (0ms latency)
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
      }
    };

    // Smooth spring lerp for the outer ion aura
    const animateRing = () => {
      ringX += (mouseX - ringX) * 0.25;
      ringY += (mouseY - ringY) * 0.25;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;
      }

      rafId = requestAnimationFrame(animateRing);
    };

    rafId = requestAnimationFrame(animateRing);

    const onMouseDown = () => setIsClicked(true);
    const onMouseUp = () => setIsClicked(false);

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (target && target.closest('a, button, [role="button"], input, textarea, select')) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mousedown', onMouseDown, { passive: true });
    window.addEventListener('mouseup', onMouseUp, { passive: true });
    window.addEventListener('mouseover', onMouseOver, { passive: true });

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('mouseover', onMouseOver);
    };
  }, []);

  if (!isMounted) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden" aria-hidden="true">
      {/* Outer Ion Halo / Aura */}
      <div
        ref={ringRef}
        className={`pointer-events-none absolute left-0 top-0 rounded-full transition-[width,height,background-color,border-color,box-shadow] duration-200 ease-out will-change-transform ${
          isClicked
            ? 'h-6 w-6 border-2 border-cyan-300 bg-cyan-400/30 shadow-[0_0_24px_rgba(34,211,238,0.85)] scale-90'
            : isHovered
            ? 'h-9 w-9 border border-cyan-300/80 bg-cyan-400/15 shadow-[0_0_28px_rgba(34,211,238,0.5)] backdrop-blur-[1px]'
            : 'h-6 w-6 border border-cyan-400/50 bg-cyan-400/5 shadow-[0_0_14px_rgba(34,211,238,0.3)]'
        }`}
      />

      {/* Central Neon Ion Core (Pinpoint) */}
      <div
        ref={dotRef}
        className={`pointer-events-none absolute left-0 top-0 rounded-full transition-all duration-150 ease-out will-change-transform ${
          isClicked
            ? 'h-2 w-2 bg-white shadow-[0_0_12px_#ffffff]'
            : isHovered
            ? 'h-2.5 w-2.5 bg-cyan-200 shadow-[0_0_14px_#22d3ee]'
            : 'h-1.5 w-1.5 bg-cyan-300 shadow-[0_0_8px_#22d3ee]'
        }`}
      />
    </div>
  );
}
