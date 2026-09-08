'use client';

import React, { useEffect, useRef } from 'react';

export const ParticleBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      r: number;
      c: string;
      a: number;
    }> = [];
    let raf: number;

    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    const COUNT = isMobile ? 36 : 80;
    const palette = ['#34d399', '#3b82f6', '#a78bfa', '#22d3ee'];

    const resize = () => {
      if (!canvas) return;
      // Get exact CSS bounding dimensions to ensure 1:1 aspect ratio
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = rect.width;
      canvas.height = rect.height;
    };

    const init = () => {
      particles = Array.from({ length: COUNT }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        r: Math.random() * 2.4 + 0.6,
        c: palette[Math.floor(Math.random() * palette.length)],
        a: Math.random() * 0.5 + 0.2,
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.c;
        ctx.globalAlpha = p.a;
        ctx.shadowBlur = 12;
        ctx.shadowColor = p.c;
        ctx.fill();
      }
      ctx.globalAlpha = 1;
      ctx.shadowBlur = 0;
      raf = requestAnimationFrame(draw);
    };

    resize();
    init();
    draw();

    const handleResize = () => {
      resize();
      init();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 block h-full w-full opacity-70 pointer-events-none"
      aria-hidden="true"
    />
  );
};

export default ParticleBackground;
