'use client';

import { useEffect, useRef } from 'react';

const PARTICLE_COUNT = 8;
const LERP_SPEEDS = [0.38, 0.30, 0.24, 0.19, 0.15, 0.12, 0.09, 0.07];

export function CustomCursor() {
  const containerRef = useRef<HTMLDivElement>(null);
  const particleRefs = useRef<HTMLSpanElement[]>([]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    document.documentElement.classList.add('has-custom-cursor');

    const positions = Array.from({ length: PARTICLE_COUNT }, () => ({
      x: -200,
      y: -200,
    }));
    let targetX = -200;
    let targetY = -200;

    let rafId: number;
    let releaseTimer: ReturnType<typeof setTimeout> | undefined;
    let clickTimer: ReturnType<typeof setTimeout> | undefined;

    const animateParticles = () => {
      // Leader particle tracks mouse directly with fastest lerp
      positions[0].x += (targetX - positions[0].x) * LERP_SPEEDS[0];
      positions[0].y += (targetY - positions[0].y) * LERP_SPEEDS[0];

      // Particles 1-7 chase sequentially with organic trailing spring
      for (let i = 1; i < PARTICLE_COUNT; i++) {
        positions[i].x += (positions[i - 1].x - positions[i].x) * LERP_SPEEDS[i];
        positions[i].y += (positions[i - 1].y - positions[i].y) * LERP_SPEEDS[i];
      }

      // Write GPU hardware-accelerated translate3d transforms
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        const el = particleRefs.current[i];
        if (el) {
          el.style.transform = `translate3d(${positions[i].x}px, ${positions[i].y}px, 0) translate(-50%, -50%)`;
        }
      }

      rafId = requestAnimationFrame(animateParticles);
    };

    rafId = requestAnimationFrame(animateParticles);

    const onPointerMove = (e: MouseEvent | PointerEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      container.classList.add('is-active');
    };

    const onPointerDown = (e: MouseEvent | PointerEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      if (releaseTimer) clearTimeout(releaseTimer);
      container.classList.add('is-active', 'is-clicking');
    };

    const onPointerUp = () => {
      if (clickTimer) clearTimeout(clickTimer);
      if (releaseTimer) clearTimeout(releaseTimer);
      clickTimer = setTimeout(() => container.classList.remove('is-clicking'), 260);
      releaseTimer = setTimeout(() => container.classList.remove('is-active'), 700);
    };

    const onPointerOver = (e: MouseEvent) => {
      const el = e.target;
      container.classList.toggle(
        'is-hovering',
        el instanceof Element && Boolean(el.closest('a, button, [role="button"], input, select, textarea'))
      );
    };

    const onPointerOut = (e: MouseEvent) => {
      const rel = e.relatedTarget;
      container.classList.toggle(
        'is-hovering',
        rel instanceof Element && Boolean(rel.closest('a, button, [role="button"], input, select, textarea'))
      );
    };

    window.addEventListener('pointermove', onPointerMove, { passive: true });
    window.addEventListener('mousemove', onPointerMove, { passive: true });
    window.addEventListener('pointerdown', onPointerDown, { passive: true });
    window.addEventListener('mousedown', onPointerDown, { passive: true });
    window.addEventListener('pointerup', onPointerUp, { passive: true });
    window.addEventListener('mouseup', onPointerUp, { passive: true });
    window.addEventListener('mouseover', onPointerOver, { passive: true });
    window.addEventListener('mouseout', onPointerOut, { passive: true });

    return () => {
      cancelAnimationFrame(rafId);
      document.documentElement.classList.remove('has-custom-cursor');
      if (releaseTimer) clearTimeout(releaseTimer);
      if (clickTimer) clearTimeout(clickTimer);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('mousemove', onPointerMove);
      window.removeEventListener('pointerdown', onPointerDown);
      window.removeEventListener('mousedown', onPointerDown);
      window.removeEventListener('pointerup', onPointerUp);
      window.removeEventListener('mouseup', onPointerUp);
      window.removeEventListener('mouseover', onPointerOver);
      window.removeEventListener('mouseout', onPointerOut);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[99999]"
    >
      {Array.from({ length: PARTICLE_COUNT }).map((_, i) => (
        <span
          key={i}
          className="cursor-particle"
          ref={(el) => {
            if (el) particleRefs.current[i] = el;
          }}
        />
      ))}
    </div>
  );
}
