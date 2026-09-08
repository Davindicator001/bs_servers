'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { MAIN_WHATSAPP_LINK } from '@/lib/data';
import { Button } from '@/components/atoms/Button';
import { Shield } from 'lucide-react';

interface FooterProps {
  onOpenRules: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenRules }) => {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  const socialLinks = [
    { label: 'YouTube', href: 'https://youtube.com' },
    { label: 'Discord', href: 'https://discord.com' },
    { label: 'TikTok', href: 'https://tiktok.com' },
    { label: 'Instagram', href: 'https://instagram.com' },
  ];

  return (
    <footer id="footer" className="relative overflow-hidden border-t border-white/10 bg-black text-white">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_bottom,rgba(16,185,129,0.1),transparent_60%)]" />

      {/* CTA Card */}
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl border border-emerald-400/20 bg-gradient-to-br from-emerald-950/40 via-black to-black p-10 text-center sm:p-16"
        >
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(52,211,153,0.15),transparent_70%)]" />

          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">
            {t.footer.joinCta}
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-white/60">
            {t.footer.tagline}
          </p>

          <div className="mt-8 flex justify-center">
            <Button
              href={MAIN_WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              size="lg"
              showWhatsAppIcon
              showArrowIcon
            >
              {t.hero.cta}
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="mx-auto max-w-7xl px-5 pb-12 sm:px-8">
        <div className="flex flex-col items-center justify-between gap-8 border-t border-white/10 pt-10 md:flex-row">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-2.5">
            <div className="relative h-7 w-7 overflow-hidden rounded-lg bg-emerald-500/10 border border-emerald-500/30 p-0.5">
              <Image
                src="/images/logo.png"
                alt="BS Realms Logo"
                fill
                className="object-contain"
              />
            </div>
            <span className="text-base font-bold text-white">
              BS <span className="text-emerald-400">Realms</span>
            </span>
          </a>

          {/* Links */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-white/60">
            <a href="#hero" className="hover:text-emerald-300 transition-colors">
              {t.nav.community}
            </a>
            <a href="#innergroups" className="hover:text-emerald-300 transition-colors">
              {t.nav.innergroups}
            </a>
            <button
              onClick={onOpenRules}
              className="hover:text-emerald-300 transition-colors cursor-pointer flex items-center gap-1"
            >
              <Shield className="h-3.5 w-3.5 text-emerald-400" />
              <span>{t.footer.rules}</span>
            </button>
          </div>

          {/* Socials */}
          <div className="flex items-center gap-4">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-white/60 transition-colors hover:text-emerald-300"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 flex flex-col items-center justify-between gap-2 text-center text-xs text-white/40 md:flex-row border-t border-white/5 pt-6">
          <p>© {year} BS Realms. {t.footer.rights}</p>
          <p>{t.footer.made}</p>
        </div>
      </div>
    </footer>
  );
};
