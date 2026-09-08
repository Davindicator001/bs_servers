'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { AlertTriangle, ShieldAlert, X } from 'lucide-react';

interface MatureWarningModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export const MatureWarningModal: React.FC<MatureWarningModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
}) => {
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
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-md overflow-hidden rounded-2xl border border-red-500/30 bg-slate-950 p-6 shadow-[0_0_50px_rgba(239,68,68,0.2)] backdrop-blur-xl z-10 text-center"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute right-4 top-4 text-white/50 hover:text-white transition-colors"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Warning Icon */}
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-red-500/10 text-red-500 border border-red-500/30 animate-pulse">
              <ShieldAlert className="h-8 w-8" />
            </div>

            {/* Title */}
            <h3 className="text-2xl font-bold text-white tracking-tight">
              {t.modal18.title}
            </h3>

            {/* Warning text */}
            <p className="mt-3 text-sm text-white/70 leading-relaxed">
              {t.modal18.subtitle}
            </p>

            {/* Action buttons */}
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <button
                onClick={onConfirm}
                className="w-full rounded-xl bg-gradient-to-r from-red-600 to-rose-500 py-3 text-sm font-semibold text-white shadow-lg shadow-red-500/30 hover:from-red-500 hover:to-rose-400 transition-all hover:scale-[1.02]"
              >
                {t.modal18.confirm}
              </button>
              <button
                onClick={onClose}
                className="w-full rounded-xl border border-white/10 bg-white/5 py-3 text-sm font-semibold text-white/70 hover:bg-white/10 hover:text-white transition-all"
              >
                {t.modal18.cancel}
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
