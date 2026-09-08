'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { INNER_GROUPS, InnerGroup } from '@/lib/data';
import { GroupCard } from '@/components/molecules/GroupCard';
import { SectionBackground } from '../atoms/SectionBackground';

interface InnergroupsSectionProps {
  groupsBg?: string;
  onSelectGroup: (group: InnerGroup) => void;
}

export const InnergroupsSection: React.FC<InnergroupsSectionProps> = ({
  groupsBg = '/images/bg-image-2.png',
  onSelectGroup,
}) => {
  const { t } = useLanguage();

  return (
    <section id="innergroups"className="relative overflow-hidden py-24 bg-black">
      <SectionBackground src={groupsBg} />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-400">
            {t.nav.innergroups}
          </span>
          <h2 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            {t.groups.title}
          </h2>
          <p className="mt-4 text-lg text-white/60">{t.groups.subtitle}</p>
        </motion.div>

        <div className="mt-14 grid auto-rows-[180px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {INNER_GROUPS.map((group, i) => (
            <GroupCard key={group.name} group={group} index={i} onSelect={onSelectGroup} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default InnergroupsSection;
