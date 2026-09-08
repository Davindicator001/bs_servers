'use client';

import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { LANGUAGES } from '@/lib/data';
import { Globe, ChevronDown } from 'lucide-react';

export const LanguageSelector: React.FC = () => {
  const { lang, setLang } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentLang = LANGUAGES.find((l) => l.code === lang) || LANGUAGES[0];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/90 backdrop-blur-md transition-all hover:border-emerald-400/40 hover:bg-white/10"
        aria-label="Select Language"
      >
        <Globe className="h-3.5 w-3.5 text-emerald-400" />
        <span className="hidden sm:inline">{currentLang.flag}</span>
        <span>{currentLang.label}</span>
        <ChevronDown
          className={`h-3 w-3 text-white/60 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full mt-2 w-40 overflow-hidden rounded-xl border border-white/10 bg-black/90 py-1.5 shadow-xl backdrop-blur-xl z-50 animate-in fade-in zoom-in-95 duration-150">
          {LANGUAGES.map((l) => (
            <button
              key={l.code}
              onClick={() => {
                setLang(l.code);
                setIsOpen(false);
              }}
              className={`flex w-full items-center gap-2.5 px-3.5 py-2 text-left text-xs transition-colors ${
                lang === l.code
                  ? 'bg-emerald-500/20 font-semibold text-emerald-300'
                  : 'text-white/70 hover:bg-white/10 hover:text-white'
              }`}
            >
              <span>{l.flag}</span>
              <span>{l.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
