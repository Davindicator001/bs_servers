'use client';

import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { InnerGroup, ACCENT_STYLES } from '@/lib/data';
import { useLanguage } from '@/context/LanguageContext';
import {
  Globe,
  Zap,
  Package,
  Swords,
  Ghost,
  Crown,
  Calendar,
  Heart,
  Flame,
  Coins,
  PartyPopper,
  Shield,
  Skull,
  ArrowUpRight,
  AlertTriangle,
} from 'lucide-react';

const ICON_MAP: Record<string, React.ElementType> = {
  Globe,
  Zap,
  Package,
  Swords,
  Ghost,
  Crown,
  Calendar,
  Heart,
  Flame,
  Coins,
  PartyPopper,
  Shield,
  Skull,
};

interface GroupCardProps {
  group: InnerGroup;
  index: number;
  onSelect: (group: InnerGroup) => void;
}

export const GroupCard: React.FC<GroupCardProps> = ({
  group,
  index,
  onSelect,
}) => {
  const { t } = useLanguage();
  const cardRef = useRef<HTMLDivElement | null>(null);
  const Icon = ICON_MAP[group.iconName] || Globe;
  const accent = ACCENT_STYLES[group.accent] || ACCENT_STYLES.emerald;
  const desc = t.descriptions?.[group.name] || '';

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const rotX = ((y - cy) / cy) * -6;
    const rotY = ((x - cx) / cx) * 6;
    el.style.transform = `perspective(900px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateZ(0)`;
  };

  const handleLeave = () => {
    if (cardRef.current) {
      cardRef.current.style.transform =
        'perspective(900px) rotateX(0) rotateY(0)';
    }
  };

  const spanClass =
    group.span === 'lg'
      ? 'sm:col-span-2 sm:row-span-2'
      : group.span === 'wide'
      ? 'sm:col-span-2'
      : '';

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      onClick={() => onSelect(group)}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: (index % 6) * 0.06, ease: 'easeOut' }}
      style={{
        transformStyle: 'preserve-3d',
        transition: 'transform 0.2s ease-out',
      }}
      className={`group relative flex flex-col justify-between overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md transition-all duration-300 ${spanClass} ${
        accent.ring
      } ${accent.glow} ${
        group.mature ? 'border-red-500/30 bg-red-950/20' : ''
      } min-h-[180px] cursor-pointer`}
      data-cursor="hover"
    >
      {/* Top glowing beam */}
      <motion.div
        className={`pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r ${accent.beam}`}
        animate={{ opacity: [0.15, 1, 0.15] }}
        transition={{
          repeat: Infinity,
          duration: 3,
          delay: index * 0.15,
          ease: 'easeInOut',
        }}
      />

      {/* Mature warning badge */}
      {group.mature && (
        <div className="absolute top-4 end-4 flex items-center gap-1.5 rounded-md border border-red-500/50 bg-red-950/60 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-red-400">
          <AlertTriangle className="h-3 w-3" />
          {t.groups.warning}
        </div>
      )}

      <div className="relative z-10 flex items-start justify-between">
        <div
          className={`flex h-14 w-14 items-center justify-center rounded-lg bg-gradient-to-br ${accent.iconBg} ${accent.iconText} ring-1 ring-white/10`}
        >
          <Icon className="h-7 w-7" />
        </div>
        <ArrowUpRight className="h-5 w-5 text-white/30 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white/80" />
      </div>

      <div className="relative z-10 mt-5">
        <h3
          className={`text-lg font-bold leading-tight ${
            group.mature ? 'text-red-200' : 'text-white'
          }`}
        >
          {group.name}
        </h3>
        <p className="mt-1.5 text-sm text-white/55">{desc}</p>
        <span
          className={`mt-3 inline-flex items-center gap-1 text-xs font-semibold ${accent.iconText} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
        >
          {t.groups.join} <ArrowUpRight className="h-3 w-3" />
        </span>
      </div>
    </motion.div>
  );
};
