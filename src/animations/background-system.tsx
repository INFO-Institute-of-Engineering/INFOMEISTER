'use client';

import { Canvas } from '@react-three/fiber';
import { Float, OrbitControls, Stars } from '@react-three/drei';
import { useEffect, useRef } from 'react';

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

export function BackgroundSystem() {
  const cursorEffectRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const effect = cursorEffectRef.current;
    if (!effect || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let releaseTimer: number | undefined;

    const moveEffect = (clientX: number, clientY: number, active: boolean) => {
      effect.style.setProperty('--pointer-x', `${clientX}px`);
      effect.style.setProperty('--pointer-y', `${clientY}px`);
      effect.classList.toggle('is-active', active);
    };

    const handlePointerMove = (event: PointerEvent) => moveEffect(event.clientX, event.clientY, true);
    const handlePointerDown = (event: PointerEvent) => {
      if (releaseTimer) window.clearTimeout(releaseTimer);
      moveEffect(event.clientX, event.clientY, true);
    };
    const handlePointerUp = () => {
      releaseTimer = window.setTimeout(() => effect.classList.remove('is-active'), 700);
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    window.addEventListener('pointerdown', handlePointerDown, { passive: true });
    window.addEventListener('pointerup', handlePointerUp, { passive: true });

    return () => {
      if (releaseTimer) window.clearTimeout(releaseTimer);
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerdown', handlePointerDown);
      window.removeEventListener('pointerup', handlePointerUp);
    };
  }, []);

  return (
    <>
      <div className="pointer-events-none fixed inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <color attach="background" args={['#05070F']} />
        <ambientLight intensity={0.8} />
        <pointLight position={[3, 2, 4]} intensity={18} color="#60a5fa" />
        <pointLight position={[-3, -2, 2]} intensity={12} color="#38bdf8" />
        <OrbitalGlow />
        <Stars radius={50} depth={30} count={3000} factor={4} saturation={0} fade speed={0.5} />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.55} />
      </Canvas>
      </div>
      <div ref={cursorEffectRef} className="pointer-effect" aria-hidden="true">
        <span className="cursor-core" />
        <span className="cursor-halo" />
        <span className="cursor-scan cursor-scan-top" />
        <span className="cursor-scan cursor-scan-right" />
        <span className="cursor-scan cursor-scan-bottom" />
        <span className="cursor-scan cursor-scan-left" />
      </div>
    </>
  );
}
