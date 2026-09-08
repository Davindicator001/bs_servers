'use client';

import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'emerald' | 'cyan';
  pulse?: boolean;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'emerald',
  pulse = true,
}) => {
  const styles = {
    emerald: {
      border: 'border-emerald-500/30',
      bg: 'bg-emerald-500/10',
      text: 'text-emerald-300',
      dot: 'bg-emerald-400',
      shadow: 'shadow-[0_0_15px_-3px_rgba(52,211,153,0.3)]',
    },
    cyan: {
      border: 'border-cyan-400/30',
      bg: 'bg-cyan-500/10',
      text: 'text-cyan-300',
      dot: 'bg-cyan-400',
      shadow: 'shadow-[0_0_15px_-3px_rgba(34,211,238,0.3)]',
    },
  };

  const activeStyle = styles[variant];

  return (
    <div
      className={`inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-semibold uppercase tracking-widest ${activeStyle.border} ${activeStyle.bg} ${activeStyle.text} ${activeStyle.shadow} backdrop-blur-md`}
    >
      {pulse && (
        <span className="relative flex h-2 w-2">
          <span
            className={`absolute inline-flex h-full w-full animate-ping rounded-full ${activeStyle.dot} opacity-75`}
          />
          <span
            className={`relative inline-flex h-2 w-2 rounded-full ${activeStyle.dot}`}
          />
        </span>
      )}
      {children}
    </div>
  );
};
