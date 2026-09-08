import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { LanguageProvider } from '@/context/LanguageContext';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'BS Servers — The Ultimate Minecraft Community on WhatsApp',
  description:
    'BS Servers is the ultimate Minecraft community on WhatsApp. Explore 13 innergroups — Realms, Skills, PvP, Horror, Lifesteal, Anarchy, RPG and more.',
  icons: {
    icon: '/images/logo.png',
    apple: '/images/logo.png',
  },
  openGraph: {
    title: 'BS Servers — The Ultimate Minecraft Community on WhatsApp',
    description:
      'BS Servers is the ultimate Minecraft community on WhatsApp. Explore 13 innergroups — Realms, Skills, PvP, Horror, Lifesteal, Anarchy, RPG and more.',
    images: ['/images/hero-bg.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased scroll-smooth`}>
      <body className="min-h-full flex flex-col bg-black text-white selection:bg-emerald-500 selection:text-black">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
