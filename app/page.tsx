'use client';

import React, { useState } from 'react';
import { InnerGroup } from '@/lib/data';
import { CustomCursor } from '@/components/atoms/CustomCursor';
import { Navbar } from '@/components/organisms/Navbar';
import { HeroSection } from '@/components/organisms/HeroSection';
import { InnergroupsSection } from '@/components/organisms/InnergroupsSection';
import { StatsSection } from '@/components/organisms/StatsSection';
import { EventsSection } from '@/components/organisms/EventsSection';
import { Footer } from '@/components/organisms/Footer';
import { MatureWarningModal } from '@/components/molecules/MatureWarningModal';
import { RulesModal } from '@/components/molecules/RulesModal';

const HERO_IMAGE = '/images/hero-bg.jpg';
const GROUPS_BG = '/images/bg-image-2.png';
const STATS_BG = '/images/bg-image-1.png';
const EVENTS_BG = '/images/bg-image-3.png';

export default function Home() {
  const [selectedGroup, setSelectedGroup] = useState<InnerGroup | null>(null);
  const [isRulesOpen, setIsRulesOpen] = useState(false);
  const [isMatureOpen, setIsMatureOpen] = useState(false);

  const handleSelectGroup = (group: InnerGroup) => {
    setSelectedGroup(group);
    if (group.mature) {
      setIsMatureOpen(true);
    } else {
      window.open(group.link, '_blank', 'noopener,noreferrer');
    }
  };

  const handleConfirmMature = () => {
    if (selectedGroup) {
      window.open(selectedGroup.link, '_blank', 'noopener,noreferrer');
    }
    setIsMatureOpen(false);
  };

  return (
    <div className="relative min-h-screen bg-black text-white antialiased selection:bg-emerald-500 selection:text-black">
      {/* Custom Desktop Mouse Follower Cursor */}
      <CustomCursor />

      {/* Navigation Header */}
      <Navbar onOpenRules={() => setIsRulesOpen(true)} />

      {/* Main Page Sections */}
      <main>
        <HeroSection heroImage={HERO_IMAGE} />
        <StatsSection statsBg={STATS_BG} />
        <InnergroupsSection
          groupsBg={GROUPS_BG}
          onSelectGroup={handleSelectGroup}
        />
        <EventsSection eventsBg={EVENTS_BG} />
      </main>

      {/* Footer */}
      <Footer onOpenRules={() => setIsRulesOpen(true)} />

      {/* Dialog Modals */}
      <MatureWarningModal
        isOpen={isMatureOpen}
        onClose={() => setIsMatureOpen(false)}
        onConfirm={handleConfirmMature}
      />

      <RulesModal isOpen={isRulesOpen} onClose={() => setIsRulesOpen(false)} />
    </div>
  );
}
