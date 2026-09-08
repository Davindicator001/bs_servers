'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Users, Server, Layers, Trophy } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import Counter from '@/components/atoms/Counter';
import SectionBackground from '@/components/atoms/SectionBackground';

interface StatsSectionProps {
  statsBg?: string;
}

export function StatsSection({ statsBg = '/images/bg-image-1.png' }: StatsSectionProps) {
  const { t } = useLanguage();

  const stats = [
    { icon: Users, label: t.stats.members, value: 25000, suffix: "+" },
    { icon: Server, label: t.stats.servers, value: 13 },
    { icon: Layers, label: t.stats.groups, value: 13 },
    { icon: Trophy, label: t.stats.eventsHosted, value: 48 },
  ];

  return (
    <section className="relative overflow-hidden py-24 bg-black">
      {/* Background Overlay Graphic */}
      <SectionBackground src={statsBg} />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-400">
            {t.nav.community}
          </span>
          <h2 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            {t.stats.title}
          </h2>
          <p className="mt-4 text-lg text-white/60">{t.stats.subtitle}</p>
        </motion.div>

        <div className="mt-16 grid grid-cols-2 gap-6 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative overflow-hidden rounded-lg border border-white/10 bg-white/5 p-6 text-center backdrop-blur-sm transition-colors hover:border-emerald-400/30"
            >
              <motion.div
                className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-md bg-emerald-500/15"
                animate={{ y: [0, -6, 0] }}
                transition={{ repeat: Infinity, duration: 3, delay: i * 0.3, ease: "easeInOut" }}
              >
                <stat.icon className="h-6 w-6 text-emerald-300" />
              </motion.div>
              <div className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="mt-2 text-sm text-white/60">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};