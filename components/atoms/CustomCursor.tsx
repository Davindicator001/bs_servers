'use client';

import { useEffect, useRef, useState } from 'react';

export const CustomCursor = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [hidden, setHidden] = useState(true);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(hover: none)').matches) return;
    setHidden(false);

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;
    let rafId: number;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
      }

      const target = e.target as HTMLElement | null;
      const isHoverable = !!target?.closest('a, button, [data-cursor="hover"]');
      setHovered(isHoverable);
    };

    const render = () => {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;
      }

      rafId = requestAnimationFrame(render);
    };

    const onMouseLeave = () => setHidden(true);
    const onMouseEnter = () => setHidden(false);

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);
    rafId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      cancelAnimationFrame(rafId);
    };
  }, []);

  if (hidden) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] hidden md:block">
      <div
        ref={dotRef}
        className="fixed top-0 left-0 h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_4px_rgba(52,211,153,0.8)] transition-[width,height] duration-200"
        style={{ willChange: 'transform' }}
      />
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 rounded-full border transition-[width,height,opacity,border-color] duration-200 ${
          hovered
            ? 'h-12 w-12 border-emerald-300/80 opacity-100'
            : 'h-7 w-7 border-emerald-400/50 opacity-80'
        }`}
        style={{ willChange: 'transform' }}
      />
    </div>
  );
};
