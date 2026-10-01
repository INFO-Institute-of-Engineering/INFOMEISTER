'use client';

import { Canvas } from '@react-three/fiber';
import { Float, OrbitControls, Stars } from '@react-three/drei';
import { useEffect, useRef, useState } from 'react';

// ── 3-D background orb ─────────────────────────────────────────────────────
function OrbitalGlow() {
  return (
    <Float speed={1.2} rotationIntensity={0.8} floatIntensity={1.4}>
      <mesh>
        <icosahedronGeometry args={[1.4, 2]} />
        <meshStandardMaterial color="#38bdf8" emissive="#2563eb" emissiveIntensity={1.4} wireframe transparent opacity={0.8} />
      </mesh>
    </Float>
  );
}

// ── Particle count & per-particle lerp speeds ──────────────────────────────
const PARTICLE_COUNT = 8;
// Fastest = 0.35 (leader snaps almost instantly), progressively slower
const LERP_SPEEDS = [0.35, 0.28, 0.22, 0.18, 0.14, 0.11, 0.09, 0.07];

export function BackgroundSystem() {
  const [showScene, setShowScene] = useState(false);
  // Container div carries the state classes; particles live inside it
  const containerRef = useRef<HTMLDivElement>(null);
  // Refs for each particle element so the rAF loop can update transforms directly
  const particleRefs = useRef<HTMLSpanElement[]>([]);

  // ── Hardware & motion detection ──────────────────────────────────────────
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isSmallScreen       = window.matchMedia('(max-width: 767px)').matches;
    const isTouchDevice       = window.matchMedia('(pointer: coarse)').matches;
    const deviceMemory        = (navigator as Navigator & { deviceMemory?: number }).deviceMemory;
    const hasLimitedHardware  = navigator.hardwareConcurrency <= 4 || (deviceMemory !== undefined && deviceMemory <= 4);
    setShowScene(!prefersReducedMotion && !isSmallScreen && !isTouchDevice && !hasLimitedHardware);
  }, []);

  // ── Magnetic particle trail logic ────────────────────────────────────────
  useEffect(() => {
    const container = containerRef.current;
    if (
      !container ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
      window.matchMedia('(pointer: coarse)').matches
    ) return;

    // Per-particle positions – start off-screen so nothing flickers on mount
    const positions = Array.from({ length: PARTICLE_COUNT }, () => ({
      x: -200,
      y: -200,
    }));
    let targetX = -200;
    let targetY = -200;

    let rafId: number;
    let releaseTimer: ReturnType<typeof setTimeout> | undefined;
    let clickTimer:   ReturnType<typeof setTimeout> | undefined;

    // Each particle chases the one in front of it (particle 0 chases the mouse)
    const animateParticles = () => {
      // Particle 0 chases mouse directly
      positions[0].x += (targetX - positions[0].x) * LERP_SPEEDS[0];
      positions[0].y += (targetY - positions[0].y) * LERP_SPEEDS[0];

      // Particles 1-7 chase the previous particle with their own lerp
      for (let i = 1; i < PARTICLE_COUNT; i++) {
        positions[i].x += (positions[i - 1].x - positions[i].x) * LERP_SPEEDS[i];
        positions[i].y += (positions[i - 1].y - positions[i].y) * LERP_SPEEDS[i];
      }

      // Write transforms directly – no React state to keep this blazing fast
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        const el = particleRefs.current[i];
        if (el) {
          el.style.transform = `translate(${positions[i].x}px, ${positions[i].y}px) translate(-50%, -50%)`;
        }
      }

      rafId = requestAnimationFrame(animateParticles);
    };

    rafId = requestAnimationFrame(animateParticles);

    // ── Event handlers ───────────────────────────────────────────────────
    const handlePointerMove = (e: PointerEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      container.classList.add('is-active');
    };

    const handlePointerDown = (e: PointerEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      if (releaseTimer) clearTimeout(releaseTimer);
      container.classList.add('is-active', 'is-clicking');
    };

    const handlePointerUp = () => {
      if (clickTimer)   clearTimeout(clickTimer);
      if (releaseTimer) clearTimeout(releaseTimer);
      clickTimer   = setTimeout(() => container.classList.remove('is-clicking'), 260);
      releaseTimer = setTimeout(() => container.classList.remove('is-active'), 700);
    };

    const handlePointerOver = (e: PointerEvent) => {
      const el = e.target;
      container.classList.toggle(
        'is-hovering',
        el instanceof Element && Boolean(el.closest('a, button, [role="button"], input, select, textarea'))
      );
    };

    const handlePointerOut = (e: PointerEvent) => {
      const rel = e.relatedTarget;
      container.classList.toggle(
        'is-hovering',
        rel instanceof Element && Boolean(rel.closest('a, button, [role="button"], input, select, textarea'))
      );
    };

    window.addEventListener('pointermove',  handlePointerMove,  { passive: true });
    window.addEventListener('pointerdown',  handlePointerDown,  { passive: true });
    window.addEventListener('pointerup',    handlePointerUp,    { passive: true });
    window.addEventListener('pointerover',  handlePointerOver,  { passive: true });
    window.addEventListener('pointerout',   handlePointerOut,   { passive: true });

    return () => {
      cancelAnimationFrame(rafId);
      if (releaseTimer) clearTimeout(releaseTimer);
      if (clickTimer)   clearTimeout(clickTimer);
      window.removeEventListener('pointermove',  handlePointerMove);
      window.removeEventListener('pointerdown',  handlePointerDown);
      window.removeEventListener('pointerup',    handlePointerUp);
      window.removeEventListener('pointerover',  handlePointerOver);
      window.removeEventListener('pointerout',   handlePointerOut);
    };
  }, []);

  return (
    <>
      {/* ── 3-D scene ──────────────────────────────────────────────────── */}
      {showScene && (
        <div className="pointer-events-none fixed inset-0 -z-10">
          <Canvas dpr={1} camera={{ position: [0, 0, 5], fov: 45 }}>
            <color attach="background" args={['#05070F']} />
            <ambientLight intensity={0.8} />
            <pointLight position={[3, 2, 4]}   intensity={18} color="#60a5fa" />
            <pointLight position={[-3, -2, 2]} intensity={12} color="#38bdf8" />
            <OrbitalGlow />
            <Stars radius={50} depth={30} count={500} factor={2} saturation={0} fade speed={0.35} />
            <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.55} />
          </Canvas>
        </div>
      )}

      {/* ── Magnetic particle trail cursor ─────────────────────────────── */}
      <div ref={containerRef} aria-hidden="true">
        {Array.from({ length: PARTICLE_COUNT }).map((_, i) => (
          <span
            key={i}
            className="cursor-particle"
            ref={el => { if (el) particleRefs.current[i] = el; }}
          />
        ))}
      </div>
    </>
  );
}
