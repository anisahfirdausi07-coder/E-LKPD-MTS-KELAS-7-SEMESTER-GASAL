/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { AboutSection } from './components/AboutSection';
import { ElkbdViewer } from './components/ElkbdViewer';
import { Footer } from './components/Footer';
import { GuideSection } from './components/GuideSection';
import { HeroSection } from './components/HeroSection';
import { LevelCardsSection } from './components/LevelCardsSection';
import { Navbar } from './components/Navbar';
import type { LearningLevel } from './data/portalData';

export default function App() {
  const [activeLevel, setActiveLevel] = useState<LearningLevel | null>(null);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  if (activeLevel) {
    return (
      <ElkbdViewer
        activeLevel={activeLevel}
        onBackHome={() => setActiveLevel(null)}
        onSwitchLevel={(level) => setActiveLevel(level)}
      />
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      <Navbar onNavigateSection={scrollToSection} />
      <main className="flex-1">
        <HeroSection
          onStartLearning={() => scrollToSection('pilih-tingkat')}
          onOpenGuide={() => scrollToSection('panduan')}
        />
        <LevelCardsSection onSelectLevel={(level) => setActiveLevel(level)} />
        <GuideSection />
        <AboutSection />
      </main>
      <Footer
        onNavigateSection={scrollToSection}
        onSelectLevel={(level) => setActiveLevel(level)}
      />
    </div>
  );
}
