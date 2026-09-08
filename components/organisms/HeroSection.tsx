'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown, MessageCircle } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { MAIN_WHATSAPP_LINK } from '@/lib/data';
import { ParticleBackground } from '@/components/atoms/ParticleBackground';
import SectionBackground from '@/components/atoms/SectionBackground';

interface HeroSectionProps {
  heroImage?: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  heroImage = '/images/hero-bg.jpg',
}) => {
  const { t } = useLanguage();

  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={heroImage}
          alt="BS Servers Hero Background"
          fill
          priority
          className="block h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.7)_100%)]" />
      </div>

      {/* Particles */}
      <div className="pointer-events-none absolute inset-0 z-10">
        <ParticleBackground />
      </div>

      <div className="relative z-20 mx-auto max-w-4xl px-5 text-center sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 inline-flex items-center gap-2 rounded-lg border border-emerald-400/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-medium text-emerald-300 backdrop-blur"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          WhatsApp Minecraft Community
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="bg-gradient-to-b from-white via-white to-white/60 bg-clip-text text-5xl font-bold leading-[1.05] tracking-tight text-transparent sm:text-7xl md:text-8xl"
        >
          {t.hero.title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mx-auto mt-6 max-w-2xl text-lg text-white/70 sm:text-xl"
        >
          {t.hero.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href={MAIN_WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-2.5 overflow-hidden rounded-xl bg-gradient-to-r from-emerald-500 to-green-400 px-8 py-4 text-base font-semibold text-black shadow-[0_0_30px_-4px_rgba(52,211,153,0.7)] transition-all duration-300 hover:shadow-[0_0_45px_0px_rgba(52,211,153,0.9)] hover:scale-[1.03]"
          >
            <MessageCircle className="h-5 w-5" />
            {t.hero.cta}
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            <span className="absolute inset-0 -z-10 animate-pulse bg-gradient-to-r from-emerald-400/0 via-emerald-300/40 to-emerald-400/0" style={{ animationDuration: "3s" }} />
          </a>
          <a
            href="#innergroups"
            className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-8 py-4 text-base font-medium text-white/90 backdrop-blur transition hover:border-emerald-400/40 hover:text-emerald-300"
          >
            {t.hero.secondary}
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="flex flex-col items-center gap-1"
        >
          <span className="text-xs uppercase tracking-widest">{t.hero.scroll}</span>
          <ChevronDown className="h-5 w-5" />
        </motion.div>
      </motion.div>
    </section>
  );
};
export default HeroSection;
