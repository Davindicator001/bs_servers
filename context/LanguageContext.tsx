'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { TRANSLATIONS } from '@/lib/data';

interface LanguageContextType {
  lang: string;
  setLang: (lang: string) => void;
  t: typeof TRANSLATIONS['en'];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<string>('en');

  useEffect(() => {
    const currentDict = TRANSLATIONS[lang] || TRANSLATIONS.en;
    const dir = currentDict.dir || 'ltr';
    document.documentElement.dir = dir;
    document.documentElement.lang = lang;
  }, [lang]);

  const t = TRANSLATIONS[lang] || TRANSLATIONS.en;

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
