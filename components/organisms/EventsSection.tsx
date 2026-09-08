'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { Badge } from '@/components/atoms/Badge';
import { Sparkles, CalendarDays, CalendarClock } from 'lucide-react';
import SectionBackground from '@/components/atoms/SectionBackground';

interface EventsSectionProps {
  eventsBg?: string;
}

export const EventsSection: React.FC<EventsSectionProps> = ({
  eventsBg = '/images/bg-image-3.png',
}) => {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden py-24 bg-black">
      {/* Background Graphic */}
      <SectionBackground src={eventsBg} />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-lg border border-cyan-400/30 bg-cyan-500/10 px-4 py-1.5 text-sm font-semibold text-cyan-300">
            <Sparkles className="h-4 w-4" />
            {t.events.comingSoon}
          </div>
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            {t.events.title}
          </h2>
          <p className="mt-4 text-lg text-white/60">{t.events.subtitle}</p>
          <p className="mt-3 text-sm text-white/50">{t.events.stayTuned}</p>
        </motion.div>

        {/* Pulsing Event Card Teaser */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="relative mx-auto mt-12 max-w-md overflow-hidden rounded-xl border border-cyan-400/20 bg-gradient-to-br from-cyan-950/40 via-black/60 to-black/60 p-10 text-center backdrop-blur-md sm:p-14"
        >
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(34,211,238,0.12),transparent_70%)]" />
          <motion.div
            className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-lg border border-cyan-400/30 bg-cyan-500/10"
            animate={{
              scale: [1, 1.08, 1],
              boxShadow: [
                "0 0 0px 0px rgba(34,211,238,0)",
                "0 0 25px 5px rgba(34,211,238,0.3)",
                "0 0 0px 0px rgba(34,211,238,0)"
              ]
            }}
            transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
          >
            <CalendarClock className="h-8 w-8 text-cyan-300" />
          </motion.div>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-400">
            {t.events.comingSoon}
          </p>
        </motion.div>
      </div>
    </section>
  );
};
export default EventsSection;
