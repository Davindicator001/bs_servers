'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface StatCardProps {
  label: string;
  value: string;
  icon: LucideIcon;
  delay?: number;
}

export const StatCard: React.FC<StatCardProps> = ({
  label,
  value,
  icon: Icon,
  delay = 0,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-slate-950/60 p-6 text-center backdrop-blur-md transition-all duration-300 hover:border-emerald-400/40 hover:shadow-[0_0_30px_-5px_rgba(52,211,153,0.3)]"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(52,211,153,0.1),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 group-hover:scale-110 transition-transform duration-300">
        <Icon className="h-6 w-6" />
      </div>

      <div className="text-3xl font-extrabold text-white tracking-tight sm:text-4xl">
        {value}
      </div>

      <div className="mt-1 text-xs font-medium uppercase tracking-wider text-white/60">
        {label}
      </div>
    </motion.div>
  );
};
