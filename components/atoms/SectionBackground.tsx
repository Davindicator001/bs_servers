'use client';

import React from 'react';
import Image from 'next/image';

interface SectionBackgroundProps {
  src: string;
  alt?: string;
}

export const SectionBackground: React.FC<SectionBackgroundProps> = ({
  src,
  alt = '',
}) => {
  if (!src) return null;

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      <Image
        src={src}
        alt={alt}
        fill
        className="block h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/85 to-black" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.6)_100%)]" />
    </div>
  );
};

export default SectionBackground;
