import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ProjectFogVision } from './components/ProjectFogVision';
import { ProjectCasting } from './components/ProjectCasting';
import { ProjectShopkart } from './components/ProjectShopkart';
import { ProcessPhilosophy } from './components/ProcessPhilosophy';
import { SystemsExplorer } from './components/SystemsExplorer';
import { ContactFooter } from './components/ContactFooter';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#ECEAE5] text-[#111315] selection:bg-[#FF3B30] selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <AboutSection />
        <ProjectFogVision />
        <ProjectCasting />
        <ProjectShopkart />
        <ProcessPhilosophy />
        <SystemsExplorer />
      </main>
      <ContactFooter />
    </div>
  );
};

export default App;

