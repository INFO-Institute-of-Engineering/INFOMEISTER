'use client';

import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

const BackgroundSystemScene = dynamic(
  () => import('@/animations/background-system').then((module) => module.BackgroundSystem),
  { ssr: false },
);

export function BackgroundSystem() {
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isSmallScreen = window.matchMedia('(max-width: 767px)').matches;
    const isTouchDevice = window.matchMedia('(pointer: coarse)').matches;
    const deviceMemory = (navigator as Navigator & { deviceMemory?: number }).deviceMemory;
    const hasLimitedHardware = navigator.hardwareConcurrency <= 4 || (deviceMemory !== undefined && deviceMemory <= 4);

    if (prefersReducedMotion || isSmallScreen || isTouchDevice || hasLimitedHardware) return;

    const load = () => setShouldLoad(true);

    const idleWindow = window as Window & {
      requestIdleCallback?: (callback: () => void, options?: { timeout: number }) => number;
      cancelIdleCallback?: (id: number) => void;
    };

    if (typeof idleWindow.requestIdleCallback === 'function') {
      const idleId = idleWindow.requestIdleCallback(load, { timeout: 2500 });
      return () => idleWindow.cancelIdleCallback?.(idleId);
    }

    const timeoutId = window.setTimeout(load, 1200);
    return () => window.clearTimeout(timeoutId);
  }, []);

  return shouldLoad ? <BackgroundSystemScene /> : null;
}