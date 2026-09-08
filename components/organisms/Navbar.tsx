'use client';

import React, { useState, useEffect } from 'react';

import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { MAIN_WHATSAPP_LINK } from '@/lib/data';
import { LanguageSelector } from '@/components/atoms/LanguageSelector';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/atoms/Button';
import { Globe, Menu, X, Blocks, Shield } from 'lucide-react';

interface NavbarProps {
  onOpenRules: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenRules }) => {
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-black/80 backdrop-blur-xl border-b border-white/10 py-3 shadow-lg'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#hero" className="flex items-center gap-2.5 group">
            <div className="relative">
              <Blocks className="h-7 w-7 text-emerald-400 transition-transform duration-300 group-hover:rotate-12" />
              <div className="absolute inset-0 blur-md bg-emerald-400/40 -z-10" />
            </div>
            <span className="text-lg font-bold tracking-tight text-white">
              BS <span className="text-emerald-400">Servers</span>
            </span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-white/70">
            <a
              href="#hero"
              className="hover:text-emerald-400 transition-colors"
            >
              {t.nav.community}
            </a>
            <a
              href="#innergroups"
              className="hover:text-emerald-400 transition-colors"
            >
              {t.nav.innergroups}
            </a>
            <button
              onClick={onOpenRules}
              className="hover:text-emerald-400 transition-colors cursor-pointer flex items-center gap-1.5"
            >
              <Shield className="h-4 w-4 text-emerald-400/80" />
              <span>{t.nav.rules}</span>
            </button>
          </nav>

          {/* Right Actions */}
          <div className="hidden md:flex items-center gap-4">
            <LanguageSelector />
            <Button
              href={MAIN_WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              size="sm"
              showWhatsAppIcon
            >
              {t.nav.join}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-3">
            <LanguageSelector />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-white/80 hover:text-white transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-2xl border-b border-white/10 px-6 py-6 space-y-4 shadow-2xl animate-in slide-in-from-top-4 duration-200">
          <a
            href="#hero"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-white/80 hover:text-emerald-400"
          >
            {t.nav.community}
          </a>
          <a
            href="#innergroups"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-white/80 hover:text-emerald-400"
          >
            {t.nav.innergroups}
          </a>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenRules();
            }}
            className="block text-left w-full text-base font-medium text-white/80 hover:text-emerald-400"
          >
            {t.nav.rules}
          </button>
          <div className="pt-4 border-t border-white/10">
            <Button
              href={MAIN_WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              size="md"
              className="w-full"
              showWhatsAppIcon
            >
              {t.nav.join}
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
