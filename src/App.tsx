import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { HeyBioSection } from './components/HeyBioSection';
import { KineticBanner } from './components/KineticBanner';
import { ServicesSection } from './components/ServicesSection';
import { ProjectsSection } from './components/ProjectsSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ThoughtsSection } from './components/ThoughtsSection';
import { ContactSection } from './components/ContactSection';
import { FooterSection } from './components/FooterSection';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#FAF7F3] text-[#111111] selection:bg-[#111111] selection:text-[#FAF7F3] relative overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <HeyBioSection />
        <KineticBanner />
        <ServicesSection />
        <ProjectsSection />
        <TestimonialsSection />
        <ThoughtsSection />
        <ContactSection />
      </main>
      <FooterSection />
    </div>
  );
};

export default App;
