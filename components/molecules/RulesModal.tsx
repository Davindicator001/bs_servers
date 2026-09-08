'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { ShieldCheck, CheckCircle2, X } from 'lucide-react';

interface RulesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RulesModal: React.FC<RulesModalProps> = ({ isOpen, onClose }) => {
  const { t } = useLanguage();

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-lg max-h-[85vh] overflow-y-auto rounded-2xl border border-emerald-500/30 bg-slate-950 p-6 sm:p-8 shadow-[0_0_50px_rgba(52,211,153,0.15)] backdrop-blur-xl z-10 text-left"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute right-4 top-4 text-white/50 hover:text-white transition-colors p-1"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Header */}
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white tracking-tight">
                  {t.modalRules.title}
                </h3>
                <p className="text-xs text-white/60">
                  {t.modalRules.subtitle}
                </p>
              </div>
            </div>

            {/* Rules list */}
            <div className="mt-6 space-y-4">
              {t.rulesList?.map((rule: any, idx: number) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 rounded-xl border border-white/5 bg-white/5 p-3.5 transition-colors hover:border-emerald-500/20"
                >
                  <CheckCircle2 className="h-5 w-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-white">
                      {rule.title}
                    </h4>
                    <p className="mt-0.5 text-xs text-white/60 leading-relaxed">
                      {rule.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Button */}
            <div className="mt-6 pt-4 border-t border-white/10">
              <button
                onClick={onClose}
                className="w-full rounded-xl bg-emerald-500 py-3 text-sm font-semibold text-black shadow-lg shadow-emerald-500/20 hover:bg-emerald-400 transition-all"
              >
                {t.modalRules.close}
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
