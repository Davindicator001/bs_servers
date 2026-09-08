'use client';

import React from 'react';
import { MessageSquare, ArrowRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'whatsapp';
  size?: 'sm' | 'md' | 'lg';
  showWhatsAppIcon?: boolean;
  showArrowIcon?: boolean;
  href?: string;
  target?: string;
  rel?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  showWhatsAppIcon = false,
  showArrowIcon = false,
  href,
  className = '',
  ...props
}) => {
  const baseClasses =
    'group inline-flex items-center justify-center gap-2.5 rounded-full font-semibold transition-all duration-300 focus:outline-none';

  const sizeClasses = {
    sm: 'px-4 py-2 text-xs',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
  };

  const variantClasses = {
    primary:
      'bg-gradient-to-r from-emerald-500 to-green-400 text-black shadow-[0_0_30px_-4px_rgba(52,211,153,0.7)] hover:scale-[1.03] hover:shadow-[0_0_45px_0px_rgba(52,211,153,0.9)]',
    whatsapp:
      'bg-emerald-500 text-black shadow-[0_0_25px_-5px_rgba(16,185,129,0.7)] hover:bg-emerald-400 hover:scale-[1.03] hover:shadow-[0_0_35px_0px_rgba(52,211,153,0.9)]',
    secondary:
      'bg-white/10 text-white backdrop-blur-md border border-white/15 hover:bg-white/20 hover:border-white/30 hover:scale-[1.02]',
    outline:
      'border border-emerald-500/40 text-emerald-400 hover:bg-emerald-500/10 hover:border-emerald-400 hover:scale-[1.02]',
  };

  const content = (
    <>
      {showWhatsAppIcon && <MessageSquare className="h-5 w-5 fill-current" />}
      <span>{children}</span>
      {showArrowIcon && (
        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      )}
    </>
  );

  const combinedClasses = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        className={combinedClasses}
        target={props.target}
        rel={props.rel}
      >
        {content}
      </a>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {content}
    </button>
  );
};
